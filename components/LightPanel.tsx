interface LightPanelProps {
  light: number;
}

const LightPanel : React.FC<LightPanelProps> = ({light}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Light Sensor</h2>
      <p className="text-xl">{light} lux</p>
    </div>
  );
}

export default LightPanel;