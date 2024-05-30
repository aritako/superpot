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

export default function ProductDesc() {
  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          <span className="krona_one text-sgreen">Components</span>
        </CardTitle>
        <CardDescription className="text-white krona_one text-xs">
          Click on the individual components to learn more about the SuperPot!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <img
            src="/img/actual_superpot.png"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div className="flex justify-center gap-5">
          <SoilSensor />
          <LightSensor />
          <ServoMotor />
          <WaterPump />
          <ESP8266 />
        </div>
      </CardContent>
    </Card>
  );
}

const SoilSensor = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      Soil Sensor
    </DialogTrigger>

    <DialogContent>
      <img src="/img/soil_moisture_sensor.png" alt="product" />
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">
          Soil Moisture Sensor
        </DialogTitle>
        <DialogDescription>
          Sensor which measures the current moisture of the soil for remote
          monitoring.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const LightSensor = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      Light Sensor
    </DialogTrigger>

    <DialogContent>
      <img src="/img/light_sensor.png" />
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">
          {" "}
          Light Intensity Illumination Sensor
        </DialogTitle>
        <DialogDescription>
          Sensor which detects the intensity of incoming sunlight in front of
          the greenhouse enclosure. Depending on the level of light intensity,
          the motorized hinge mechanism will trigger to open or close.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const ServoMotor = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      Servo Motor
    </DialogTrigger>

    <DialogContent>
      <img src="/img/servo_motor.png" />
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">Servo Motor</DialogTitle>
        <DialogDescription>
          Actuator which motorizes the hinge mechanism of the device, enabling
          the opening and closing of the greenhouse enclosure.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const WaterPump = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      Water Pump
    </DialogTrigger>

    <DialogContent>
      <img src="/img/water_pump.png" />
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">
          12V R385 Water Pump
        </DialogTitle>
        <DialogDescription>
          Actuator which enables water delivery from the reservoir to the
          watering mechanism of the greenhouse enclosure
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const ESP8266 = () => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
    >
      ESP8266
    </DialogTrigger>

    <DialogContent>
      <img src="/img/esp8266.png" />
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">
          WeMosD1 - ESP8266 Microcontroller
        </DialogTitle>
        <DialogDescription>
          The brain of the SuperPot that contains the ESP8266 Microcontroller
          which provides processing power, memory, I/O capabilities, and
          Integrated Wi-Fi.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
