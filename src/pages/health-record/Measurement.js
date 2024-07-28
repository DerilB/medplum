import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Box, Button, Group, Modal, NumberInput, Stack, Table, Title } from '@mantine/core';
import { createReference, formatDate, formatDateTime, formatObservationValue, getReferenceString } from '@medplum/core';
import { Document, Form, useMedplum } from '@medplum/react';
import { IconAlertCircle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart } from '../../components/LineChart';
import { measurementsMeta } from './Measurement.data';
export function Measurement() {
    const { measurementId } = useParams();
    const { code, title, description, chartDatasets } = measurementsMeta[measurementId];
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const [modalOpen, setModalOpen] = useState(false);
    const [chartData, setChartData] = useState();
    const observations = medplum
        .searchResources('Observation', `code=${code}&patient=${getReferenceString(patient)}`)
        .read();
    useEffect(() => {
        if (observations) {
            const labels = [];
            const datasets = chartDatasets.map((item) => ({ ...item, data: [] }));
            for (const obs of observations) {
                labels.push(formatDate(obs.effectiveDateTime));
                if (chartDatasets.length === 1) {
                    datasets[0].data.push(obs.valueQuantity?.value);
                }
                else {
                    for (let i = 0; i < chartDatasets.length; i++) {
                        datasets[i].data.push(obs.component[i].valueQuantity?.value);
                    }
                }
            }
            setChartData({ labels, datasets });
        }
    }, [chartDatasets, observations]);
    function addObservation(formData) {
        console.log(formData);
        const obs = {
            resourceType: 'Observation',
            status: 'preliminary',
            subject: createReference(patient),
            effectiveDateTime: new Date().toISOString(),
            code: {
                coding: [
                    {
                        code,
                        display: title,
                        system: 'http://loinc.org',
                    },
                ],
                text: title,
            },
        };
        if (chartDatasets.length === 1) {
            obs.valueQuantity = {
                value: parseFloat(formData[chartDatasets[0].label]),
                system: 'http://unitsofmeasure.org',
                unit: chartDatasets[0].unit,
                code: chartDatasets[0].unit,
            };
        }
        else {
            obs.component = chartDatasets.map((item) => ({
                code: {
                    coding: [
                        {
                            code: '8462-4',
                            display: 'Diastolic Blood Pressure',
                            system: 'http://loinc.org',
                        },
                    ],
                    text: item.label,
                },
                valueQuantity: {
                    value: parseFloat(formData[item.label]),
                    system: 'http://unitsofmeasure.org',
                    unit: item.unit,
                    code: item.unit,
                },
            }));
        }
        medplum
            .createResource(obs)
            .then(() => setModalOpen(false))
            .catch(console.error);
    }
    return (_jsxs(Document, { children: [_jsxs(Group, { justify: "space-between", mb: "xl", children: [_jsx(Title, { order: 1, children: title }), _jsx(Button, { onClick: () => setModalOpen(true), children: "Add Measurement" })] }), chartData && _jsx(LineChart, { chartData: chartData }), _jsx(Box, { my: "xl", children: _jsx(Alert, { icon: _jsx(IconAlertCircle, { size: 16 }), title: "What is this measurement?", color: "gray", radius: "md", children: description }) }), observations?.length && (_jsxs(Table, { children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "Date" }), _jsx(Table.Th, { children: "Your Value" })] }) }), _jsx(Table.Tbody, { children: observations.map((obs) => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: formatDateTime(obs.effectiveDateTime) }), _jsx(Table.Td, { children: formatObservationValue(obs) })] }, obs.id))) })] })), _jsx(Modal, { size: "lg", opened: modalOpen, onClose: () => setModalOpen(false), title: title, children: _jsx(Form, { onSubmit: addObservation, children: _jsxs(Stack, { gap: "md", children: [_jsx(Group, { grow: true, wrap: "nowrap", children: chartDatasets.map((component) => (_jsx(NumberInput, { label: component.label, name: component.label }, component.label))) }), _jsx(Group, { justify: "flex-end", children: _jsx(Button, { type: "submit", children: "Add" }) })] }) }) })] }));
}
