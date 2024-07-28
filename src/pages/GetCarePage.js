import { jsx as _jsx } from "react/jsx-runtime";
import { Document, Scheduler, useMedplum } from '@medplum/react';
export function GetCare() {
    const medplum = useMedplum();
    const schedule = medplum.searchOne('Schedule').read();
    return (_jsx(Document, { width: 800, children: _jsx(Scheduler, { schedule: schedule, questionnaire: {
                resourceType: 'Questionnaire',
                status: 'active',
                name: 'Test',
                item: [
                    {
                        id: 'id-1',
                        linkId: 'q1',
                        type: 'string',
                        text: 'Question 1',
                    },
                    {
                        id: 'id-2',
                        linkId: 'q2',
                        type: 'string',
                        text: 'Question 2',
                    },
                    {
                        id: 'id-3',
                        linkId: 'q3',
                        type: 'string',
                        text: 'Question 3',
                    },
                ],
            } }) }));
}
