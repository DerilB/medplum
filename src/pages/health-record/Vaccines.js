import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Anchor, Box, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { formatDate, getReferenceString } from '@medplum/core';
import { StatusBadge, useMedplum } from '@medplum/react';
import { IconCalendar, IconMapPin } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { InfoButton } from '../../components/InfoButton';
import { InfoSection } from '../../components/InfoSection';
import PillsImage from '../../img/pills.svg';
export function Vaccines() {
    const medplum = useMedplum();
    const patient = medplum.getProfile();
    const vaccines = medplum.searchResources('Immunization', 'patient=' + getReferenceString(patient)).read();
    const today = new Date().toISOString();
    const activeVaccines = vaccines.filter((v) => v.occurrenceDateTime && v.occurrenceDateTime > today);
    const pastVaccines = vaccines.filter((v) => !v.occurrenceDateTime || v.occurrenceDateTime <= today);
    return (_jsxs(Box, { p: "xl", children: [_jsx(Title, { mb: "lg", children: "Vaccines" }), _jsx(InfoSection, { title: "Active upcoming vaccines", children: activeVaccines.length === 0 ? (_jsx(Box, { p: "xl", style: { textAlign: 'center' }, children: _jsxs(Stack, { align: "center", w: 500, m: "auto", children: [_jsx("img", { src: PillsImage, width: 160, height: 160 }), _jsx(Title, { order: 2, fw: 900, children: "No upcoming vaccines available" }), _jsxs(Text, { c: "gray", children: ["If you think you're missing upcoming vaccines that should be here, please", ' ', _jsx(Anchor, { href: "#", children: "contact our medical team" }), "."] })] }) })) : (_jsx(VaccineList, { vaccines: activeVaccines })) }), pastVaccines.length > 0 && (_jsx(InfoSection, { title: "Past vaccines", children: _jsx(VaccineList, { vaccines: pastVaccines }) }))] }));
}
function VaccineList({ vaccines }) {
    return (_jsx(Stack, { gap: 0, children: vaccines.map((vaccine) => (_jsx(Vaccine, { vaccine: vaccine }, vaccine.id))) }));
}
function Vaccine({ vaccine }) {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    return (_jsxs(InfoButton, { onClick: () => navigate(`./${vaccine.id}`), children: [_jsxs("div", { children: [_jsx(Text, { c: theme.primaryColor, fw: 500, mb: 8, children: vaccine.vaccineCode?.text }), _jsxs(Text, { c: "gray.6", children: [_jsx(IconMapPin, { size: 16, style: { marginRight: 4 } }), vaccine.location?.display] })] }), _jsxs("div", { children: [_jsx(StatusBadge, { status: vaccine.status }), vaccine.occurrenceDateTime && (_jsxs(Text, { c: "gray.6", children: [_jsx(IconCalendar, { size: 16, style: { marginRight: 4 } }), _jsx("time", { dateTime: vaccine.occurrenceDateTime, children: formatDate(vaccine.occurrenceDateTime) })] }))] })] }));
}
