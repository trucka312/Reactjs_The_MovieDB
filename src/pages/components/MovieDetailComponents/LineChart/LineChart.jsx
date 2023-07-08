import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  scales: {
    x: {
      display: false,
      text: 'X Axis Label', // ẩn label cho trục x
    },
    y: {
      display: false,
      text: 'Y Axis Label', // ẩn label cho trục y
    },
  },
  plugins: {
    legend: {
      labels: {
        boxWidth: 0,
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  },
}

const labels = [
  'March 14, 2023',
  'March 15, 2023',
  'March 16, 2023',
  'March 17, 2023',
  'March 18, 2023',
  'March 19, 2023',
  'March 20, 2023',
]

export const data = {
  labels,
  datasets: [
    {
      label: '',
      name: 'Rank',
      data: [184, 216, 236, 218, 208, 203],
      borderColor: '#032541',
      backgroundColor: '#01b4e4',
    },
  ],
}

export const LineChart = () => {
  return <Line options={options} data={data} />
}
