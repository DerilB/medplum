import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from '@mantine/core';
import { createReference, formatGivenName, getReferenceString, normalizeErrorString } from '@medplum/core';
import { BaseChat, Document, useMedplum, useMedplumProfile, useResource } from '@medplum/react';
import { Loading } from '../components/Loading';
import { showNotification } from '@mantine/notifications';
import { IconCircleOff } from '@tabler/icons-react';
export function Messages() {
    const medplum = useMedplum();
    const profile = useMedplumProfile();
    const profileRef = useMemo(() => (profile ? createReference(profile) : undefined), [profile]);
    const [communications, setCommunications] = useState([]);
    const { practitionerId } = useParams();
    const practitioner = useResource({
        reference: `Practitioner/${practitionerId}`,
    });
    const sendMessage = useCallback((content) => {
        if (!practitioner) {
            return;
        }
        if (!profileRef) {
            return;
        }
        const practitionerRef = createReference(practitioner);
        medplum
            .createResource({
            resourceType: 'Communication',
            status: 'in-progress',
            sender: profileRef,
            subject: profileRef,
            recipient: [practitionerRef],
            sent: new Date().toISOString(),
            payload: [{ contentString: content }],
        })
            .catch((err) => {
            showNotification({
                color: 'red',
                icon: _jsx(IconCircleOff, {}),
                title: 'Error',
                message: normalizeErrorString(err),
            });
        });
    }, [medplum, profileRef, practitioner]);
    const handleMessageReceived = useCallback((message) => {
        if (message.received) {
            return;
        }
        medplum
            .updateResource({
            ...message,
            status: 'completed',
            received: new Date().toISOString(),
        })
            .catch((err) => {
            showNotification({
                color: 'red',
                icon: _jsx(IconCircleOff, {}),
                title: 'Error',
                message: normalizeErrorString(err),
            });
        });
    }, [medplum]);
    if (!profileRef) {
        return _jsx(Alert, { color: "red", children: "Error: Provider profile not found" });
    }
    if (!practitioner) {
        return _jsx(Loading, {});
    }
    return (_jsx(Document, { width: 800, children: _jsx(BaseChat, { title: `Chat with ${formatGivenName(practitioner.name?.[0])}`, query: `sender=${getReferenceString(profile)},Practitioner/${practitionerId}&recipient=${getReferenceString(profile)},Practitioner/${practitionerId}`, communications: communications, setCommunications: setCommunications, sendMessage: sendMessage, onMessageReceived: handleMessageReceived, h: 600 }) }));
}
