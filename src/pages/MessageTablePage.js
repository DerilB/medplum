import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider, Stack, Table, Title } from '@mantine/core';
import { formatGivenName, formatFamilyName } from '@medplum/core';
import { Document, useSearchResources } from '@medplum/react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import classes from './MessageTablePage.module.css';
export function MessageTable() {
    const [practitioners] = useSearchResources('Practitioner');
    const navigate = useNavigate();
    if (!practitioners) {
        return _jsx(Loading, {});
    }
    return (_jsxs(Document, { width: 800, children: [_jsx(Title, { children: "Chats" }), _jsx(Divider, { my: "xl" }), _jsx(Stack, { gap: "xl", children: _jsxs(Table, { highlightOnHover: true, children: [_jsx(Table.Thead, { children: _jsx(Table.Tr, { children: _jsx(Table.Th, { children: "Name" }) }) }), _jsx(Table.Tbody, { className: classes.tableBody, children: practitioners.map((resource) => (_jsx(Table.Tr, { className: classes.tr, onClick: () => navigate(`/messages/${resource.id}`), children: _jsxs(Table.Td, { children: [formatGivenName(resource.name?.[0]), " ", formatFamilyName(resource.name?.[0])] }) }, resource.id))) })] }) })] }));
}
