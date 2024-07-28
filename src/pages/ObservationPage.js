import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Title } from '@mantine/core';
import { Document, ResourceTable, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
export function ObservationPage() {
    const medplum = useMedplum();
    const { observationId = '' } = useParams();
    const resource = medplum.readResource('Observation', observationId).read();
    return (_jsxs(Document, { children: [_jsx(Title, { children: "Observation" }), _jsx(ResourceTable, { value: resource, ignoreMissingValues: true })] }));
}
