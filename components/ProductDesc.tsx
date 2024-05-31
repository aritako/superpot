import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const DialogComponents = [
  {
    trigger: "Soil Sensor",
    img: "/img/soil_moisture_sensor.png",
    desc: "Sensor which measures the current moisture of the soil for remote monitoring.",
    title: "Soil Moisture Sensor",
  },
  {
    trigger: "Light Sensor",
    img: "/img/light_sensor.png",
    desc: "Sensor which detects the intensity of incoming sunlight in front of the greenhouse enclosure. Depending on the level of light intensity, the motorized hinge mechanism will trigger to open or close.",
    title: "Light Intensity Illumination Sensor",
  },
  {
    trigger: "Servo Motor",
    img: "/img/servo_motor.png",
    desc: "Actuator which motorizes the hinge mechanism of the device, enabling the opening and closing of the greenhouse enclosure.",
    title: "Servo Motor",
  },
  {
    trigger: "Water Pump",
    img: "/img/water_pump.png",
    desc: "Actuator which enables water delivery from the reservoir to the watering mechanism of the greenhouse enclosure",
    title: "12V R385 Water Pump",
  },
  {
    trigger: "ESP8266",
    img: "/img/esp8266.png",
    desc: "The brain of the SuperPot that contains the ESP8266 Microcontroller which provides processing power, memory, I/O capabilities, and Integrated Wi-Fi.",
    title: "WeMosD1 - ESP8266 Microcontroller",
  },
];
export default function ProductDesc() {
  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          <span className="krona_one text-sgreen">Components</span>
        </CardTitle>
        <CardDescription className="text-white text-md text-gray-400">
          Click on each component to learn more about the SuperPot!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Image src="/img/actual_superpot.png" alt="SuperPot" width={300} height = {300} />
        </div>
        <div className="flex justify-center gap-5">
          {DialogComponents.map((component) => (
            <ComponentDialog
              key={component.trigger}
              trigger={component.trigger}
              img={component.img}
              desc={component.desc}
              title={component.title}
            />
          ))}
          <Scene />
        </div>
      </CardContent>
    </Card>
  );
}

const ComponentDialog = ({ trigger, img, desc, title } : {trigger: string, img: string, desc: string, title: string}) => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      {trigger}
    </DialogTrigger>
    <DialogContent>
      <Image src={img} alt="product" width = {300} height = {300}/>
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">{title}</DialogTitle>
        <DialogDescription>{desc}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const Scene = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      View Scene
    </DialogTrigger>

    <DialogContent>
      <video className="w-[95%]" autoPlay loop muted>
        <source src="/vid/3dmodelvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">View Scene</DialogTitle>
        <DialogDescription> </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
