import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell, Burger, Container, Group, Menu, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ResourceAvatar, useMedplumProfile } from '@medplum/react';
import { IconChevronDown, IconLogout, IconSettings, IconUserCircle } from '@tabler/icons-react';
import cx from 'clsx';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { Logo } from './Logo';
const navigation = [
    { name: 'Health Record', href: '/health-record' },
    { name: 'Messages', href: '/messages' },
    { name: 'Care Plan', href: '/care-plan' },
    { name: 'Get Care', href: '/get-care' },
];
export function Header() {
    const navigate = useNavigate();
    const profile = useMedplumProfile();
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (_jsx(AppShell.Header, { children: _jsx(Container, { children: _jsxs("div", { className: classes.inner, children: [_jsx(UnstyledButton, { className: classes.logoButton, onClick: () => navigate('/'), children: _jsx(Logo, { width: 240 }) }), _jsx(Group, { gap: 5, className: classes.links, children: navigation.map((link) => (_jsx(Link, { to: link.href, className: classes.link, children: link.name }, link.name))) }), _jsxs(Menu, { width: 260, shadow: "xl", position: "bottom-end", transitionProps: { transition: 'pop-top-right' }, onClose: () => setUserMenuOpened(false), onOpen: () => setUserMenuOpened(true), children: [_jsx(Menu.Target, { children: _jsx(UnstyledButton, { className: cx(classes.user, { [classes.userActive]: userMenuOpened }), children: _jsxs(Group, { gap: 7, children: [_jsx(ResourceAvatar, { radius: "xl", value: profile }), _jsx(IconChevronDown, { size: 12, stroke: 1.5 })] }) }) }), _jsxs(Menu.Dropdown, { children: [_jsx(Menu.Item, { leftSection: _jsx(IconUserCircle, { size: 16, color: theme.colors.red[6], stroke: 1.5 }), onClick: () => navigate('/account/profile'), children: "Your profile" }), _jsx(Menu.Item, { leftSection: _jsx(IconSettings, { size: 16, color: theme.colors.blue[6], stroke: 1.5 }), onClick: () => navigate('/account/profile'), children: "Settings" }), _jsx(Menu.Item, { leftSection: _jsx(IconLogout, { size: 16, color: theme.colors.gray[6], stroke: 1.5 }), onClick: () => navigate('/signout'), children: "Sign out" })] })] }), _jsx(Burger, { opened: opened, onClick: toggle, className: classes.burger, size: "sm" })] }) }) }));
}
