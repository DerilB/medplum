import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { formatDate, getReferenceString } from '@medplum/core';
import { StatusBadge, useMedplum } from '@medplum/react';
import { IconCalendar } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
export function ActionItems() {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const carePlans = medplum.searchResources('CarePlan', 'subject=' + getReferenceString(patient)).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Action Items" }), _jsx(InfoSection, { title: "Action Items", children: _jsx(Stack, { gap: 0, children: carePlans.map((resource) => (_jsxs(InfoButton, { onClick: () => navigate(`./${resource.id}`), children: [_jsxs("div", { children: [_jsx(Text, { c: theme.primaryColor, fw: 500, children: resource.title }), _jsxs(Text, { mt: "sm", c: "gray.5", style: { display: 'flex', alignItems: 'center', gap: 4 }, children: [_jsx(IconCalendar, { size: 16 }), _jsxs("time", { children: [formatDate(resource.period?.start), " "] }), resource.period?.end && _jsxs("time", { children: ["\u00A0-\u00A0", formatDate(resource.period.end)] })] })] }), _jsx(StatusBadge, { status: resource.status })] }, resource.id))) }) })] }));
}
