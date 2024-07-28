import { jsx as _jsx } from "react/jsx-runtime";
import { normalizeErrorString } from '@medplum/core';
import { Document, QuestionnaireForm, useMedplum, useResource } from '@medplum/react';
import { useCallback } from 'react';
import { showNotification } from '@mantine/notifications';
import { Loading } from '../components/Loading';
import { useParams, useNavigate } from 'react-router-dom';
import { IconCircleCheck, IconCircleOff } from '@tabler/icons-react';
export function QuestionnairePage() {
    const navigate = useNavigate();
    const medplum = useMedplum();
    const { questionnaireId } = useParams();
    const questionnaire = useResource({ reference: `Questionnaire/${questionnaireId}` });
    const handleOnSubmit = useCallback((response) => {
        if (!questionnaire) {
            return;
        }
        medplum
            .createResource(response)
            .then(() => {
            showNotification({
                icon: _jsx(IconCircleCheck, {}),
                title: 'Success',
                message: 'Answers recorded',
            });
            navigate('/health-record/questionnaire-responses/');
            window.scrollTo(0, 0);
        })
            .catch((err) => {
            showNotification({
                color: 'red',
                icon: _jsx(IconCircleOff, {}),
                title: 'Error',
                message: normalizeErrorString(err),
            });
        });
    }, [medplum, navigate, questionnaire]);
    if (!questionnaire) {
        return _jsx(Loading, {});
    }
    return (_jsx(Document, { width: 800, children: _jsx(QuestionnaireForm, { questionnaire: questionnaire, onSubmit: handleOnSubmit }) }));
}
