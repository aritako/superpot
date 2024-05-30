import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VideoDisplay() {
  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          <span className="krona_one text-sgreen">About SuperPot</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white krona_one text-xs text-justify">
        The Super Pot is an intelligent and self-sufficient Greenhouse Enclosure
        System for vegetable cultivation and seedling care. It incorporates
        sunlight and moisture sensors, automatic waterer, and weather-dependent
        shade mechanism that can be controlled and monitored remotely via the
        Internet, ensuring that plants receive ideal care regardless of their
        location.
        <div className="mt-1">
          <span className="krona_one text-sgreen">Main Features:</span>
          <ol className="list-decimal pl-5">
            <li>
              Moisture sensor-dependent automatic watering system to maintain
              ideal soil moisture levels.
            </li>
            <li>
              Light sensor-dependent shade mechanism to protect plants from
              harsh sunlight.
            </li>
            <li>
              Remote control watering and shade mechanism as well as monitoring
              via the Internet for convenience and accessibility.
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
