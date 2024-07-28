import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Title } from '@mantine/core';
import { ResourceTable, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
import { InfoSection } from '../../components/InfoSection';
export function ActionItem() {
    const medplum = useMedplum();
    const { itemId } = useParams();
    const resource = medplum.readResource('CarePlan', itemId).read();
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { order: 2, mb: "md", children: resource.title }), _jsx(InfoSection, { title: "Action Item", children: _jsx(ResourceTable, { value: resource, ignoreMissingValues: true }) })] }));
}
