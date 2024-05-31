// components/DonutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  rawData: number;
}

const healthyColor = '#67e8f9';
const unhealthyColor = '#fca5a5';

const DonutChart : React.FC<DonutChartProps> = (props) => {
  let { rawData } = props;
  // Compute Color based on RawData
  let chartColor = "#2563eb"
  let chartColorHover = "#0891b2"
  if (rawData >= 25 && rawData < 50){
    chartColor = "#67e8f9"
    chartColorHover = "#0891b2"
  }
  else if (rawData < 25 && rawData >= 10 ){
    chartColor = "#f87171"
    chartColorHover = "#ef4444"
  } else if (rawData < 10){
    chartColor = "#dc2626"
    chartColorHover = "#991b1b"
  }
  const data = {
    datasets: [
      {
        data: [rawData, 100-rawData], // 63% completed, 37% remaining
        backgroundColor: [chartColor, '#0f172a'],
        hoverBackgroundColor: [chartColorHover, '#0f172a'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      title: {
        display: true,
        text: "Moisture Level Percentage",
        font: {
          family: "var(--font-krona-one)",
        }
      },
      legend: {
        display: false,
        // position: "bottom",
        labels: {
          color: "white",
        },
      },
    },
  }

  return (
    <div style={{ position: 'relative', width: 200, height: 200 }}>
        <Doughnut data={data} options={options} />
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%)',
                fontSize: '20px',
                fontWeight: 'bold',
            }}
        >
            {rawData}%
        </div>
    </div>
  );
};

export default DonutChart;
