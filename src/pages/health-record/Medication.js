import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Anchor, Box, Button, Modal, Stack, Text, Title } from '@mantine/core';
import { formatDateTime, formatHumanName, formatTiming } from '@medplum/core';
import { ResourceTable, useMedplum } from '@medplum/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoSection } from '../../components/InfoSection';
export function Medication() {
    const medplum = useMedplum();
    const [modalOpen, setModalOpen] = useState(false);
    const { medicationId = '' } = useParams();
    const med = medplum.readResource('MedicationRequest', medicationId).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { order: 2, children: med.medicationCodeableConcept?.text }), _jsx("p", { className: "mb-6 text-lg text-gray-600", children: "To refill this medication, please contact your pharmacy." }), _jsxs("p", { className: "mb-6 text-lg text-gray-600", children: ["No more refills available at your pharmacy?", ' ', _jsx(Anchor, { onClick: () => setModalOpen(true), children: "Renew your prescription" })] }), _jsx(InfoSection, { title: "Medication", children: _jsx(ResourceTable, { value: med, ignoreMissingValues: true }) }), _jsx(RenewalModal, { prev: med, opened: modalOpen, setOpened: setModalOpen })] }));
}
function RenewalModal({ prev, opened, setOpened, }) {
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    return (_jsx(Modal, { size: "lg", opened: opened, onClose: () => setOpened(false), title: _jsx(Title, { order: 3, children: "Request a Renewal" }), children: _jsxs(Stack, { gap: "md", children: [_jsx(KeyValue, { name: "Patient", value: formatHumanName(patient?.name?.[0]) }), _jsx(KeyValue, { name: "Last Prescribed", value: formatDateTime(prev.authoredOn) }), _jsx(KeyValue, { name: "Status", value: prev.status }), _jsx(KeyValue, { name: "Medication", value: prev.medicationCodeableConcept?.text }), _jsx(KeyValue, { name: "Dosage Instructions", value: prev.dosageInstruction?.[0]?.timing && formatTiming(prev.dosageInstruction[0].timing) }), _jsx(Button, { onClick: () => setOpened(false), children: "Submit Renewal Request" })] }) }));
}
function KeyValue({ name, value }) {
    return (_jsxs("div", { children: [_jsx(Text, { size: "xs", color: "gray", tt: "uppercase", children: name }), _jsx(Text, { size: "lg", fw: 500, children: value })] }));
}
