import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Title } from '@mantine/core';
import { ResourceTable, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
import { InfoSection } from '../../components/InfoSection';
export function Vaccine() {
    const medplum = useMedplum();
    const { vaccineId = '' } = useParams();
    const vaccine = medplum.readResource('Immunization', vaccineId).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { order: 2, mb: "md", children: vaccine.vaccineCode?.text }), _jsx(InfoSection, { title: "Vaccine", children: _jsx(ResourceTable, { value: vaccine, ignoreMissingValues: true }) })] }));
}
