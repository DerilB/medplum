import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BackgroundImage, Box, SimpleGrid } from '@mantine/core';
import { SignInForm } from '@medplum/react';
import { useNavigate } from 'react-router-dom';
import { MEDPLUM_GOOGLE_CLIENT_ID, MEDPLUM_PROJECT_ID } from '../config';
export function SignInPage() {
    const navigate = useNavigate();
    return (_jsxs(SimpleGrid, { cols: 2, children: [_jsx(Box, { pt: 100, pb: 200, children: _jsx(SignInForm, { projectId: MEDPLUM_PROJECT_ID, googleClientId: MEDPLUM_GOOGLE_CLIENT_ID, onSuccess: () => navigate('/'), children: _jsx("h2", { children: "Sign in to Foo Medical" }) }) }), _jsx(BackgroundImage, { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" })] }));
}
