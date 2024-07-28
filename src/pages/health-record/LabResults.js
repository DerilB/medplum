import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { formatDate, getReferenceString } from '@medplum/core';
import { useMedplum } from '@medplum/react';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
export function LabResults() {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const reports = medplum.searchResources('DiagnosticReport', 'subject=' + getReferenceString(patient)).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Lab Results" }), _jsx(InfoSection, { title: "Lab Results", children: _jsx(Stack, { gap: 0, children: reports.map((report) => (_jsxs(InfoButton, { onClick: () => navigate(`./${report.id}`), children: [_jsxs("div", { children: [_jsx(Text, { fw: 500, mb: 4, children: formatDate(report.meta?.lastUpdated) }), _jsx(Text, { children: report.code?.text })] }), _jsx(IconChevronRight, { color: theme.colors.gray[5] })] }, report.id))) }) })] }));
}
