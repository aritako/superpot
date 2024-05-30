import DonutChart from "./PercentageChart";

interface MoisturePanelProps {
  moist: number;
}

const MoisturePanel : React.FC<MoisturePanelProps> = ({moist}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Moisture Sensor</h2>
      <DonutChart rawData={moist} />
    </div>
  );
}

export default MoisturePanel;