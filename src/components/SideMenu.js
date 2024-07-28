import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Title } from '@mantine/core';
import cx from 'clsx';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideMenu.module.css';
export function SideMenu(props) {
    return (_jsxs("div", { className: classes.container, children: [_jsx(Title, { order: 4, className: classes.title, children: props.title }), props.menu.map((item) => (_jsxs(Fragment, { children: [_jsx(NavLink, { to: item.href, end: true, className: ({ isActive }) => cx(classes.link, isActive && classes.linkActive), children: _jsx("span", { children: item.name }) }), item.subMenu?.map((subItem) => (_jsx("div", { style: { paddingLeft: 20 }, children: _jsx(NavLink, { to: subItem.href, className: classes.link, children: _jsx("span", { children: subItem.name }) }) }, subItem.href)))] }, item.href)))] }));
}
