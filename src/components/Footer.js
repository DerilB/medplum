import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Anchor, Container, Divider, SimpleGrid, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';
export function Footer() {
    return (_jsx("footer", { className: classes.footer, children: _jsx("div", { className: classes.inner, children: _jsx(Container, { p: "xl", children: _jsxs(Stack, { gap: "xl", children: [_jsxs(SimpleGrid, { cols: 4, children: [_jsx(Anchor, { href: "https://www.medplum.com/docs/tutorials/api-basics/create-fhir-data", children: "Getting started" }), _jsx(Anchor, { href: "https://www.medplum.com/docs/tutorials", children: "Playing with Medplum" }), _jsx(Anchor, { href: "https://github.com/medplum/foomedical", children: "Open Source" }), _jsx(Anchor, { href: "https://www.medplum.com/docs", children: "Documentation" })] }), _jsx(Divider, {}), _jsxs(Text, { c: "dimmed", size: "sm", children: ["\u00A9 ", new Date().getFullYear(), " Foo Medical, Inc. All rights reserved."] })] }) }) }) }));
}
