interface LightPanelProps {
  light: number;
}

const LightPanel : React.FC<LightPanelProps> = ({light}) => {
  let message = "Too much light!"
  return (
    <div className="flex flex-col items-center justify-between h-full gap-8 m-auto">
      <div className = "flex items-end gap-2">
        <p className="text-6xl drop-shadow text-bold">{light}</p><p>lux</p>
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default LightPanel;