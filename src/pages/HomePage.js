import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Anchor, Avatar, Badge, Box, Button, Card, Container, Flex, Grid, Group, Image, Overlay, Stack, Text, Title, useMantineTheme, } from '@mantine/core';
import { formatHumanName } from '@medplum/core';
import { useMedplumProfile } from '@medplum/react';
import { IconChecklist, IconGift, IconSquareCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import DoctorImage from '../img/homePage/doctor.svg';
import HealthRecordImage from '../img/homePage/health-record.svg';
import HealthVisitImage from '../img/homePage/health-visit.jpg';
import PharmacyImage from '../img/homePage/pharmacy.svg';
import PillImage from '../img/homePage/pill.svg';
import classes from './HomePage.module.css';
const carouselItems = [
    {
        img: _jsx(IconChecklist, {}),
        title: 'Welcome to Foo Medical',
        description: 'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
        url: '/get-care',
        label: 'Learn how we help',
    },
    {
        img: _jsx(IconChecklist, {}),
        title: 'Verify Email',
        description: 'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
        url: '/account',
        label: 'Send verification email',
    },
    {
        img: _jsx(IconChecklist, {}),
        title: 'Select a Doctor',
        description: 'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
        url: '/account/provider/choose-a-primary-care-povider',
        label: 'Choose a Primary Care Provider',
    },
    {
        img: _jsx(IconChecklist, {}),
        title: 'Emergency Contact',
        description: 'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
        url: '/account',
        label: 'Add emergency contact',
    },
];
const linkPages = [
    {
        img: HealthRecordImage,
        title: 'Health Record',
        description: '',
        href: '/health-record',
    },
    {
        img: PillImage,
        title: 'Request Prescription Renewal',
        description: '',
        href: '/health-record/medications',
    },
    {
        img: PharmacyImage,
        title: 'Preferred Pharmacy',
        description: 'Walgreens D2866 1363 Divisadero St  DIVISADERO',
        href: '#',
    },
];
const recommendations = [
    {
        title: 'Get travel health recommendations',
        description: 'Find out what vaccines and meds you need for your trip.',
    },
    {
        title: 'Get FSA/HSA reimbursement',
        description: 'Request a prescription for over-the-counter items.',
    },
    {
        title: 'Request health record',
        description: 'Get records sent to or from Foo Medical.',
    },
];
export function HomePage() {
    const navigate = useNavigate();
    const theme = useMantineTheme();
    const profile = useMedplumProfile();
    const profileName = profile.name ? formatHumanName(profile.name[0]) : '';
    return (_jsxs(Box, { bg: "gray.0", children: [_jsx(Box, { className: classes.announcements, children: _jsxs("span", { children: ["Announcements go here. ", _jsx(Anchor, { href: "#", children: "Include links if needed." })] }) }), _jsxs("div", { className: classes.hero, children: [_jsx(Overlay, { gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 40%)", opacity: 1, zIndex: 0 }), _jsxs(Container, { className: classes.heroContainer, children: [_jsxs(Title, { className: classes.heroTitle, children: ["Hi ", _jsx("span", { className: "text-teal-600", children: profileName }), ",", _jsx("br", {}), " we\u2019re here to help"] }), _jsx(Button, { size: "xl", radius: "xl", className: classes.heroButton, children: "Get Care" })] })] }), _jsx(Box, { className: classes.callToAction, children: _jsxs(Group, { justify: "center", children: [_jsx(IconGift, {}), _jsx("p", { children: "Put calls to action here" }), _jsx(Button, { variant: "white", onClick: () => navigate('/messages'), children: "Send Message" })] }) }), _jsx(Box, { p: "lg", children: _jsx(Container, { children: _jsx(Grid, { children: carouselItems.map((item, index) => (_jsx(Grid.Col, { span: 3, pb: 40, children: _jsxs(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: [_jsx(IconSquareCheck, {}), _jsx(Text, { size: "lg", fw: 500, mt: "md", children: item.title }), _jsx(Text, { size: "sm", color: "dimmed", my: "sm", children: item.description }), _jsx(Anchor, { children: item.label })] }) }, `card-${index}`))) }) }) }), _jsx(Box, { p: "lg", children: _jsx(Container, { children: _jsxs(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: [_jsx(IconSquareCheck, {}), _jsx(Text, { size: "lg", fw: 500, mt: "md", children: "Better rest, better health" }), _jsx(Text, { size: "sm", color: "dimmed", my: "sm", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." }), _jsx(Group, { children: _jsx(Button, { children: "Invite Friends" }) })] }) }) }), _jsx(Box, { p: "lg", children: _jsx(Container, { children: _jsx(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: _jsxs(Flex, { children: [_jsx(Image, { src: HealthVisitImage, m: "-40px 30px -40px -40px", w: "40%" }), _jsxs("div", { children: [_jsx(Badge, { color: theme.primaryColor, size: "xl", children: "Now available" }), _jsx(Text, { size: "lg", fw: 500, mt: "md", children: "Title" }), _jsx(Text, { size: "sm", color: "dimmed", my: "sm", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." })] })] }) }) }) }), _jsx(Box, { p: "lg", children: _jsx(Container, { children: _jsx(Grid, { columns: 3, pb: "xl", children: linkPages.map((item, index) => (_jsx(Grid.Col, { span: 1, children: _jsxs(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: [_jsx(Image, { src: item.img, w: 80 }), _jsx(Text, { size: "lg", fw: 500, mt: "md", children: item.title })] }) }, `card-${index}`))) }) }) }), _jsx(Box, { p: "lg", children: _jsx(Container, { children: _jsxs(Grid, { columns: 2, pb: "xl", children: [_jsx(Grid.Col, { span: 1, children: _jsx(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: _jsxs(Group, { wrap: "nowrap", children: [_jsx(Avatar, { src: DoctorImage, size: "xl" }), _jsxs("div", { children: [_jsx(Text, { fw: 500, children: "Primary Care Provider" }), _jsx(Text, { size: "sm", color: "dimmed", my: "sm", children: "Having a consistent, trusted provider can lead to better health." }), _jsx(Button, { onClick: () => navigate('/account/provider'), children: "Choose Provider" })] })] }) }) }), _jsx(Grid.Col, { span: 1, children: _jsx(Card, { shadow: "md", radius: "md", className: classes.card, p: "xl", children: _jsx(Stack, { children: recommendations.map((item, index) => (_jsxs("div", { children: [_jsx(Text, { fw: 500, children: item.title }), _jsx(Text, { size: "sm", color: "dimmed", my: "sm", children: item.description })] }, `recommendation-${index}`))) }) }) })] }) }) })] }));
}
