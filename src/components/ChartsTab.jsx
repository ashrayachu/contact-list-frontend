import React from 'react'

import { Bar, Pie, Line   } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const barchartData = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: '',
      data: [20, 40, 70],
      backgroundColor: ['#0d1b2a', '#1b263b', '#415a77'],
    },
  ],
};

const barchartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false, // Hides the legend and buttons
    },
  },
};


//pie chart 
const pieData = {
  labels: ["jan", "Feb", "Mar"],
  datasets: [
    {
      data: [15, 30, 50],
      backgroundColor: ["#0d1b2a", "#1b263b", "#415a77"],
    },
  ],
};
//line chart
const lineData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Monthly Revenue",
      data: [50, 70, 90],
      borderColor: "#0d1b2a",
      fill: false,
    },
  ],
};


function ChartsTab() {
  return (
    <div className=' w-5/6 flex flex-col justify-center align-center md:w-full   min-h-[360px]    gap-10'>
      <div className='grid md:grid-cols-2 gap-10 '>
        <div className='chartItem flex w-full justify-center'>
          <Pie data={pieData}  />
        </div>
        <div className='chartItem flex w-full justify-center'>
          <Line data={lineData} className=''  />
        </div>
      </div>
      <div className='chartItem flex w-full justify-center'>
        <Bar data={barchartData} options={barchartOptions} />
        </div>
    </div>
  )
}

export default ChartsTab
