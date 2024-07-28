import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell, Box, Button, Container, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import cx from 'clsx';
import { Footer } from '../../components/Footer';
import DoctorImage from '../../img/landingPage/doctor.jpg';
import EngineeringImage from '../../img/landingPage/engineering.jpg';
import LabImage from '../../img/landingPage/laboratory.jpg';
import WorkingEnvironmentImage from '../../img/landingPage/working-environment.jpg';
import { Header } from './Header';
import classes from './index.module.css';
const features = [
    {
        title: 'Comprehsive Care Plans',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        title: 'No hidden fees',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        title: '24/7 Messaging',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        title: 'Clinically rigorous',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
];
export function LandingPage() {
    const theme = useMantineTheme();
    return (_jsxs(AppShell, { className: classes.outer, header: { height: 100 }, children: [_jsx(Header, {}), _jsxs(AppShell.Main, { className: classes.outer, children: [_jsx("img", { className: classes.heroImage1, src: WorkingEnvironmentImage, alt: "Working Environment" }), _jsx(Container, { children: _jsxs("div", { className: classes.inner, children: [_jsxs("div", { className: classes.content, children: [_jsxs(Title, { className: classes.title, children: ["An extraordinary", _jsx("br", {}), _jsx("span", { className: classes.highlight, children: "doctor's office" })] }), _jsx(Text, { size: "lg", c: "dimmed", mt: "md", children: "This is not actually a medical practice, this is a sample open source application for developers to clone, customize and run." }), _jsxs(Group, { mt: 30, children: [_jsx(Button, { radius: "xl", size: "md", className: classes.control, children: "Get started" }), _jsx(Button, { variant: "default", radius: "xl", size: "md", className: classes.control, children: "Source code" })] })] }), _jsx("img", { className: classes.heroImage2, src: DoctorImage, alt: "Doctor" })] }) }), _jsx(Container, { children: _jsxs("div", { className: classes.inner, children: [_jsxs("div", { style: { width: 500 }, children: [_jsx(Title, { order: 3, fw: 500, c: theme.primaryColor, mb: "lg", children: "Healthcare" }), _jsx(Title, { order: 1, fw: 500, mb: "md", children: "A better way to get care" }), _jsx(Text, { size: "xl", c: "gray", children: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam." })] }), _jsx("img", { className: classes.heroImage3, src: LabImage, alt: "Laboratory" })] }) }), _jsx(Container, { children: _jsxs("div", { className: cx(classes.inner, classes.featureSection), children: [_jsx(Stack, { align: "flex-end", children: features.map((feature, index) => (_jsxs(Box, { className: classes.featureBox, children: [_jsx(Text, { className: classes.featureTitle, children: feature.title }), _jsx(Text, { className: classes.featureDescription, children: feature.description })] }, `feature-${index}`))) }), _jsx("img", { className: classes.heroImage4, src: EngineeringImage, alt: "Laboratory" })] }) })] }), _jsx(Footer, {})] }));
}
