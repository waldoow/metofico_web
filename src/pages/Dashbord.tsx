import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DashboardLayout from "../layouts/DashboardLayout.tsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

 const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const Dashboard: React.FC = () => {
    const data = {
        labels,
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3,4,12],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    };

    return (
        <DashboardLayout>
            <Line options={options} data={data}  />
        </DashboardLayout>
    )
}

export default Dashboard;
