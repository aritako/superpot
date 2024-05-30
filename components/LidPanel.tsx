interface LidPanelProps {
  lidStat: boolean;
  light: number;
}

const LidPanel : React.FC<LidPanelProps> = ({lidStat}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Lid Status</h2>
      <p className="text-xl">{lidStat ? "Open" : "Closed"}</p>
    </div>
  );
}

export default LidPanel;