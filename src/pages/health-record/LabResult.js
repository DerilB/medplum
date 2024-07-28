import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mantine/core';
import { DiagnosticReportDisplay, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
import { InfoSection } from '../../components/InfoSection';
export function LabResult() {
    const medplum = useMedplum();
    const { resultId = '' } = useParams();
    const resource = medplum.readResource('DiagnosticReport', resultId).read();
    return (_jsx(Box, { p: "xl", children: _jsx(InfoSection, { children: _jsx(DiagnosticReportDisplay, { value: resource }) }) }));
}
