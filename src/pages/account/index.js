import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Group } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../../components/SideMenu';
const sideMenu = {
    title: 'Account',
    menu: [
        { name: 'Profile', href: '/account/profile' },
        { name: 'Provider', href: '/account/provider' },
        { name: 'Membership & Billing', href: '/account/membership-and-billing' },
    ],
};
export function AccountPage() {
    return (_jsx(Container, { children: _jsxs(Group, { align: "top", children: [_jsx(SideMenu, { ...sideMenu }), _jsx("div", { style: { width: 800, flex: 800 }, children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Outlet, {}) }) })] }) }));
}
