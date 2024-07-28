import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, InputLabel, LoadingOverlay, NativeSelect, Stack, TextInput, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { AddressInput, Form, ResourceAvatar, useMedplum } from '@medplum/react';
import { formatFamilyName, formatGivenName, formatHumanName, normalizeErrorString } from '@medplum/core';
import { IconCircleCheck, IconCircleOff } from '@tabler/icons-react';
import { useState } from 'react';
import { InfoSection } from '../../components/InfoSection';
export function Profile() {
    const medplum = useMedplum();
    const [profile, setProfile] = useState(medplum.getProfile());
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState(profile.address?.[0] || {});
    async function handleProfileEdit(formData) {
        setLoading(true);
        const newProfile = {
            ...profile,
            name: [
                {
                    use: 'official',
                    given: [formData.givenName],
                    family: formData.familyName,
                },
            ],
            birthDate: formData.birthDate,
            gender: formData.gender,
            address: [address],
        };
        const updatedProfile = await medplum
            .updateResource(newProfile)
            .then((profile) => {
            showNotification({
                icon: _jsx(IconCircleCheck, {}),
                title: 'Success',
                message: 'Profile edited',
            });
            window.scrollTo(0, 0);
            return profile;
        })
            .catch((err) => {
            showNotification({
                color: 'red',
                icon: _jsx(IconCircleOff, {}),
                title: 'Error',
                message: normalizeErrorString(err),
            });
        });
        if (updatedProfile) {
            setProfile(updatedProfile);
        }
        setLoading(false);
    }
    return (_jsxs(Box, { p: "xl", pos: "relative", children: [_jsx(LoadingOverlay, { visible: loading }), _jsx(Form, { onSubmit: handleProfileEdit, children: _jsxs(Stack, { align: "center", children: [_jsx(ResourceAvatar, { size: 200, radius: 100, value: profile }), _jsx(Title, { order: 2, children: formatHumanName(profile.name?.[0]) }), _jsx(InfoSection, { title: "Personal Information", children: _jsx(Box, { p: "xl", children: _jsxs(Stack, { children: [_jsx(TextInput, { label: "First Name", name: "givenName", defaultValue: formatGivenName(profile.name?.[0]) }), _jsx(TextInput, { label: "Last Name", name: "familyName", defaultValue: formatFamilyName(profile.name?.[0]) }), _jsx(NativeSelect, { label: "Gender", name: "gender", defaultValue: profile.gender, data: ['', 'female', 'male', 'other', 'unknown'] }), _jsx(TextInput, { label: "Birth Date", name: "birthDate", type: "date", defaultValue: profile.birthDate }), _jsx(Button, { type: "submit", mr: "auto", children: "Save" })] }) }) }), _jsx(InfoSection, { title: "Contact Information", children: _jsx(Box, { p: "xl", children: _jsxs(Stack, { children: [_jsx(TextInput, { label: "Email", name: "email", defaultValue: profile.telecom?.find((t) => t.system === 'email')?.value, disabled: true }), _jsxs(Stack, { gap: 0, children: [_jsx(InputLabel, { htmlFor: "address", children: "Address" }), _jsx(AddressInput, { name: "address", path: "Patient.address", defaultValue: address, onChange: (address) => setAddress(address) })] }), _jsx(Button, { type: "submit", mr: "auto", children: "Save" })] }) }) })] }) })] }));
}
