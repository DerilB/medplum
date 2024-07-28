import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Group } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { SideMenu } from '../../components/SideMenu';
const sideMenu = {
    title: 'Care Plan',
    menu: [{ name: 'Action Items', href: '/care-plan/action-items' }],
};
export function CarePlanPage() {
    return (_jsx(Container, { children: _jsxs(Group, { align: "top", children: [_jsx(SideMenu, { ...sideMenu }), _jsx("div", { style: { width: 800, flex: 800 }, children: _jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Outlet, {}) }) })] }) }));
}
