import Image from "next/image";

interface LidPanelProps {
  lidStat: boolean;
  light: number;
  manualLid: boolean;
}

const LidPanel : React.FC<LidPanelProps> = ({lidStat, light, manualLid}) => {
  const finalLidStat = manualLid ? lidStat : light < 5000;
  const status = finalLidStat ? "Open" : "Closed";
  return (
    <div className="flex flex-col items-center">
      {finalLidStat ? 
      <Image priority = {true} src="/img/lidOpen.png" alt="Open" width={200} height={200} />
      : 
      <Image priority = {true} src="/img/lidClose.png" alt="Close" width={200} height={200} />
      }
      <span className = "krona_one text-2xl">{status}</span>
    </div>
  );
}

export default LidPanel;