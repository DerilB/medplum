import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CloseButton, Title } from '@mantine/core';
import classes from './InfoSection.module.css';
export function InfoSection({ title, children, onButtonClick, id = '' }) {
    return (_jsxs(Card, { withBorder: true, radius: "md", shadow: "sm", p: "xl", mb: "xl", w: "100%", children: [title && (_jsxs(Card.Section, { className: classes.titleSection, children: [_jsx(Title, { order: 4, className: classes.title, children: title }), onButtonClick && _jsx(CloseButton, { onClick: () => onButtonClick(id) })] })), children] }));
}
