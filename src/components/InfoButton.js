import { jsx as _jsx } from "react/jsx-runtime";
import { Group, UnstyledButton } from '@mantine/core';
import classes from './InfoButton.module.css';
export function InfoButton(props) {
    return (_jsx(UnstyledButton, { className: classes.button, onClick: props.onClick, children: _jsx(Group, { justify: "space-between", children: props.children }) }));
}
