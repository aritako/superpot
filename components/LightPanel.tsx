interface LightPanelProps {
  light: number;
}

const LightPanel : React.FC<LightPanelProps> = ({light}) => {
  let message = "Too much light!"
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