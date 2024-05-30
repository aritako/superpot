interface LightPanelProps {
  light: number;
}

const LightPanel : React.FC<LightPanelProps> = ({light}) => {
  let message = "Too much light!"
  return (
    <div className="flex flex-col items-center justify-between h-full gap-8">
      <div className = "flex items-end gap-3">
        <p className="text-6xl drop-shadow">{light}</p><p>lux</p>
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default LightPanel;