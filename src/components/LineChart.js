import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
const lineChartOptions = {
    responsive: true,
    scales: {
        y: {
            min: 0,
        },
    },
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
};
const AsyncLine = lazy(async () => {
    const { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } = await import('chart.js');
    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const { Line } = await import('react-chartjs-2');
    return { default: Line };
});
export function LineChart({ chartData }) {
    return (_jsx("div", { className: "my-5", children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(AsyncLine, { options: lineChartOptions, data: chartData }) }) }));
}
