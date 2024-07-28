import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Paper, Stack, Title } from '@mantine/core';
import { formatDate } from '@medplum/core';
import { CodeableConceptDisplay, QuantityDisplay, RangeDisplay, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
export function Response() {
    const medplum = useMedplum();
    const { responseId } = useParams();
    const questionnaireResponse = medplum.searchOne('QuestionnaireResponse', `_id=${responseId}`).read();
    const items = questionnaireResponse?.item || [];
    return (_jsx(Box, { p: "xl", children: _jsx(Paper, { children: _jsx(Stack, { children: items.map((item) => (_jsx(ItemDisplay, { item: item, order: 4 }, item.id))) }) }) }));
}
function ItemDisplay({ item, order }) {
    const { text: title, answer, item: nestedAnswers } = item;
    return (_jsxs(Stack, { children: [_jsx(Title, { order: order, children: title }), _jsx(Stack, { children: answer && answer.length > 0 ? (_jsx(AnswerDisplay, { answer: answer[0] }, answer[0].id)) : (nestedAnswers?.map((nestedAnswer) => (_jsx(ItemDisplay, { item: nestedAnswer, order: Math.min(order + 1, 6) }, nestedAnswer.id)))) }, item.linkId)] }));
}
function AnswerDisplay({ answer }) {
    if (!answer) {
        throw new Error('No answer');
    }
    const [[key, value]] = Object.entries(answer);
    switch (key) {
        case 'valueInteger':
            return _jsx("p", { children: value });
        case 'valueQuantity':
            return _jsx(QuantityDisplay, { value: value });
        case 'valueString':
            return _jsx("p", { children: value });
        case 'valueCoding':
            return _jsx(CodeableConceptDisplay, { value: { coding: [value] } });
        case 'valueRange':
            return _jsx(RangeDisplay, { value: value });
        case 'valueDateTime':
            return _jsx("p", { children: formatDate(value) });
        case 'valueBoolean':
            return _jsx("p", { children: value ? 'True' : 'False' });
        default:
            return _jsx("p", { children: value.toString() });
    }
}
