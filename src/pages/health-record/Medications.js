import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { getReferenceString } from '@medplum/core';
import { useMedplum } from '@medplum/react';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
export function Medications() {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const medications = medplum.searchResources('MedicationRequest', 'patient=' + getReferenceString(patient)).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Medications" }), _jsx(InfoSection, { title: "Medications", children: _jsx(Stack, { gap: 0, children: medications.map((med) => (_jsxs(InfoButton, { onClick: () => navigate(`./${med.id}`), children: [_jsxs("div", { children: [_jsx(Text, { c: theme.primaryColor, fw: 500, mb: 4, children: med?.medicationCodeableConcept?.text }), _jsx(Text, { c: "gray.6", children: med.requester?.display })] }), _jsx(IconChevronRight, { color: theme.colors.gray[5] })] }, med.id))) }) })] }));
}
