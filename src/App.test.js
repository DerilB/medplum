import { jsx as _jsx } from "react/jsx-runtime";
import { MantineProvider } from '@mantine/core';
import { MockClient } from '@medplum/mock';
import { MedplumProvider } from '@medplum/react';
import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
test('App renders', async () => {
    await act(async () => {
        render(_jsx(MemoryRouter, { children: _jsx(MedplumProvider, { medplum: new MockClient(), children: _jsx(MantineProvider, { theme: {}, children: _jsx(App, {}) }) }) }));
    });
});
