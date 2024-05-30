import Image from "next/image";

interface LidPanelProps {
  lidStat: boolean;
  light: number;
}

const LidPanel : React.FC<LidPanelProps> = ({lidStat, light}) => {
  const status = light < 2000 || lidStat ? "Open" : "Closed";
  return (
    <div className="flex flex-col items-center">
      {light < 2000 || lidStat ? 
      <Image src="/img/lidOpen.png" alt="Open" width={200} height={200} />
      : 
      <Image src="/img/lidClose.png" alt="Close" width={200} height={200} />
      }
      <span className = "krona_one text-2xl">{status}</span>
    </div>
  );
}

export default LidPanel;