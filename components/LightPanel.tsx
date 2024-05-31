interface LightPanelProps {
  light: number;
  message: string;
}

const LightPanel : React.FC<LightPanelProps> = ({light, message}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className = "flex items-end gap-1">
        <p className="text-6xl drop-shadow text-bold">{light}</p><p>lux</p>
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default LightPanel;