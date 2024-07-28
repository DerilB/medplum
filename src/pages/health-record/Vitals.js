import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, Title } from '@mantine/core';
import { formatDate, formatObservationValue, getReferenceString } from '@medplum/core';
import { Document, useMedplum } from '@medplum/react';
export function Vitals() {
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const observations = medplum.searchResources('Observation', 'patient=' + getReferenceString(patient)).read();
    return (_jsxs(Document, { children: [_jsx(Title, { children: "Vitals" }), _jsxs(Table, { children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "Measurement" }), _jsx(Table.Th, { children: "Your Value" }), _jsx(Table.Th, { children: "Last Updated" })] }) }), _jsx(Table.Tbody, { children: observations.map((obs) => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: obs.code?.coding?.[0]?.display }), _jsx(Table.Td, { children: formatObservationValue(obs) }), _jsx(Table.Td, { children: formatDate(obs.meta?.lastUpdated) })] }, obs.id))) })] })] }));
}
