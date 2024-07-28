import { jsx as _jsx } from "react/jsx-runtime";
import { Center, Loader } from '@mantine/core';
export function Loading() {
    return (_jsx(Center, { style: { width: '100%', height: '300px' }, children: _jsx(Loader, {}) }));
}
