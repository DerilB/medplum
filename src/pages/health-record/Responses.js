import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { formatDateTime, getReferenceString } from '@medplum/core';
import { useMedplum, useMedplumProfile } from '@medplum/react';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
export function Responses() {
    const medplum = useMedplum();
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const profile = useMedplumProfile();
    const responses = medplum
        .searchResources('QuestionnaireResponse', `source=${getReferenceString(profile)}&_sort=-authored`)
        .read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Questionnaire Responses" }), _jsx(InfoSection, { title: "Questionnaire Responses", children: _jsx(Stack, { gap: 0, children: responses.map((resp) => (_jsxs(InfoButton, { onClick: () => navigate(`./${resp.id}`), children: [_jsx("div", { children: _jsx(Text, { c: theme.primaryColor, fw: 500, mb: 4, children: formatDateTime(resp.authored) }) }), _jsx(IconChevronRight, { color: theme.colors.gray[5] })] }, resp.id))) }) })] }));
}
