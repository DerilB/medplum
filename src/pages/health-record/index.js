import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Group } from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { SideMenu } from '../../components/SideMenu';
import { measurementsMeta } from './Measurement.data';
const sideMenu = {
    title: 'Health Record',
    menu: [
        { name: 'Lab Results', href: '/health-record/lab-results' },
        { name: 'Medications', href: '/health-record/medications' },
        { name: 'Questionnaire Responses', href: '/health-record/questionnaire-responses' },
        { name: 'Vaccines', href: '/health-record/vaccines' },
        {
            name: 'Vitals',
            href: '/health-record/vitals',
            subMenu: Object.values(measurementsMeta).map(({ title, id }) => ({
                name: title,
                href: `/health-record/vitals/${id}`,
            })),
        },
    ],
};
export function HealthRecord() {
    return (_jsx(Container, { children: _jsxs(Group, { align: "top", children: [_jsx(SideMenu, { ...sideMenu }), _jsx("div", { style: { width: 800, flex: 800 }, children: _jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Outlet, {}) }) })] }) }));
}
