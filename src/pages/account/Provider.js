import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Stack, Title } from '@mantine/core';
import { ResourceAvatar, ResourceName, useMedplum } from '@medplum/react';
import { InfoSection } from '../../components/InfoSection';
export function Provider() {
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    if (patient.generalPractitioner && patient.generalPractitioner.length > 0) {
        return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "My Provider" }), _jsx(InfoSection, { title: "My Primary Care Provider", children: _jsx(Box, { p: "xl", children: _jsxs(Stack, { align: "center", children: [_jsx(ResourceAvatar, { size: 200, radius: 100, value: patient.generalPractitioner[0] }), _jsx(Title, { order: 2, children: _jsx(ResourceName, { value: patient.generalPractitioner[0] }) }), _jsx(Button, { size: "lg", children: "Choose a Primary Care Provider" })] }) }) })] }));
    }
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Choose a provider" }), _jsx(InfoSection, { title: "My Primary Care Provider", children: "TODO" })] }));
}
