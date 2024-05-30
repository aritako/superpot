import PercentageChart from "./PercentageChart";

interface MoisturePanelProps {
  moist: number;
}

const MoisturePanel : React.FC<MoisturePanelProps> = ({moist}) => {
  return (
    <div className="flex flex-col items-center">
      <PercentageChart rawData={moist} />
    </div>
  );
}

export default MoisturePanel;