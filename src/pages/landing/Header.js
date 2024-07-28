import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Anchor, Box, Burger, Button, Center, Collapse, Container, Divider, Drawer, Group, HoverCard, AppShell, ScrollArea, SimpleGrid, Text, ThemeIcon, UnstyledButton, useMantineTheme, rem, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBook, IconChartPie3, IconChevronDown, IconCode, IconCoin, IconFingerprint, IconNotification, } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import classes from './Header.module.css';
const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];
export function Header() {
    const navigate = useNavigate();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const links = mockdata.map((item) => (_jsx(UnstyledButton, { className: classes.subLink, children: _jsxs(Group, { wrap: "nowrap", align: "flex-start", children: [_jsx(ThemeIcon, { size: 34, variant: "default", radius: "md", children: _jsx(item.icon, { style: { width: rem(22), height: rem(22) }, color: theme.primaryColor }) }), _jsxs("div", { children: [_jsx(Text, { size: "sm", fw: 500, children: item.title }), _jsx(Text, { size: "xs", c: "dimmed", children: item.description })] })] }) }, item.title)));
    return (_jsxs(_Fragment, { children: [_jsx(AppShell.Header, { px: "md", children: _jsx(Container, { h: "100%", children: _jsxs(Group, { justify: "space-between", h: "100%", children: [_jsx(UnstyledButton, { className: classes.logoButton, onClick: () => navigate('/'), children: _jsx(Logo, { width: 240 }) }), _jsxs(Group, { style: { height: '100%' }, gap: 0, className: classes.hiddenMobile, children: [_jsxs(HoverCard, { width: 600, position: "bottom", radius: "md", shadow: "md", withinPortal: true, children: [_jsx(HoverCard.Target, { children: _jsx("a", { href: "#", className: classes.link, children: _jsxs(Center, { inline: true, children: [_jsx(Box, { component: "span", mr: 5, children: "Services" }), _jsx(IconChevronDown, { size: 16 })] }) }) }), _jsxs(HoverCard.Dropdown, { style: { overflow: 'hidden' }, children: [_jsxs(Group, { justify: "space-between", px: "md", children: [_jsx(Text, { fw: 500, children: "Services" }), _jsx(Anchor, { href: "#", size: "xs", children: "View all" })] }), _jsx(Divider, { my: "sm", mx: "-md" }), _jsx(SimpleGrid, { cols: 2, spacing: 0, children: links }), _jsx("div", { className: classes.dropdownFooter, children: _jsxs(Group, { justify: "space-between", children: [_jsxs("div", { children: [_jsx(Text, { fw: 500, size: "sm", children: "Get started" }), _jsx(Text, { size: "xs", color: "dimmed", children: "Their food sources have decreased, and their numbers" })] }), _jsx(Button, { variant: "default", children: "Get started" })] }) })] })] }), _jsx("a", { href: "#", className: classes.link, children: "Counseling" }), _jsx("a", { href: "#", className: classes.link, children: "Physicians" }), _jsx("a", { href: "#", className: classes.link, children: "More" })] }), _jsxs(Group, { className: classes.hiddenMobile, children: [_jsx(Button, { variant: "default", onClick: () => navigate('/signin'), children: "Log in" }), _jsx(Button, { onClick: () => navigate('/register'), children: "Sign up" })] }), _jsx(Burger, { opened: drawerOpened, onClick: toggleDrawer, className: classes.hiddenDesktop })] }) }) }), _jsx(Drawer, { opened: drawerOpened, onClose: closeDrawer, size: "100%", padding: "md", title: "Navigation", className: classes.hiddenDesktop, zIndex: 1000000, children: _jsxs(ScrollArea, { style: { height: 'calc(100vh - 60px)' }, mx: "-md", children: [_jsx(Divider, { my: "sm" }), _jsx("a", { href: "#", className: classes.link, children: "Home" }), _jsx(UnstyledButton, { className: classes.link, onClick: toggleLinks, children: _jsxs(Center, { inline: true, children: [_jsx(Box, { component: "span", mr: 5, children: "Features" }), _jsx(IconChevronDown, { size: 16 })] }) }), _jsx(Collapse, { in: linksOpened, children: links }), _jsx("a", { href: "#", className: classes.link, children: "Learn" }), _jsx("a", { href: "#", className: classes.link, children: "Academy" }), _jsx(Divider, { my: "sm" }), _jsxs(Group, { justify: "center", grow: true, pb: "xl", px: "md", children: [_jsx(Button, { variant: "default", onClick: () => navigate('/signin'), children: "Log in" }), _jsx(Button, { onClick: () => navigate('/register'), children: "Sign up" })] })] }) })] }));
}
