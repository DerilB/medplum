import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Table, Title } from '@mantine/core';
import { formatCoding, getReferenceString } from '@medplum/core';
import { useMedplum } from '@medplum/react';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
function CoverageTable({ coverages }) {
    return (_jsxs(Table, { children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "Payor Name" }), _jsx(Table.Th, { children: "Subscriber ID" }), _jsx(Table.Th, { children: "Relationship to Subscriber" })] }) }), _jsx(Table.Tbody, { children: coverages.map((c) => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: c.payor?.[0].display }), _jsx(Table.Td, { children: c.subscriberId || '-' }), _jsx(Table.Td, { children: formatCoding(c.relationship?.coding?.[0]) || '-' })] }, c.id))) })] }));
}
export function MembershipAndBilling() {
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const coverages = medplum
        .searchResources('Coverage', {
        beneficiary: getReferenceString(patient),
    })
        .read();
    const payments = medplum.searchResources('PaymentNotice').read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "xl", children: "Membership & Billing" }), _jsx(InfoSection, { title: "Coverage", children: coverages.length === 0 ? (_jsx(Box, { p: "xl", children: "No coverage" })) : (_jsx(Stack, { gap: 0, children: _jsx(CoverageTable, { coverages: coverages }) })) }), _jsx(InfoSection, { title: "Payments", children: payments.length === 0 ? (_jsx(Box, { p: "xl", children: "No payments" })) : (_jsx(Stack, { gap: 0, children: payments.map((p) => (_jsx(InfoButton, { children: p.id }, p.id))) })) })] }));
}
