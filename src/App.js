import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell } from '@mantine/core';
import { ErrorBoundary, useMedplum } from '@medplum/react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Router } from './Router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { RegisterPage } from './pages/RegisterPage';
import { SignInPage } from './pages/SignInPage';
import { LandingPage } from './pages/landing';
export function App() {
    const medplum = useMedplum();
    if (medplum.isLoading()) {
        return null;
    }
    if (!medplum.getProfile()) {
        return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "signin", element: _jsx(SignInPage, {}) }), _jsx(Route, { path: "register", element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { replace: true, to: "/" }) })] }));
    }
    return (_jsxs(AppShell, { header: { height: 80 }, children: [_jsx(Header, {}), _jsx(AppShell.Main, { children: _jsx(ErrorBoundary, { children: _jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Router, {}) }) }) }), _jsx(Footer, {})] }));
}
