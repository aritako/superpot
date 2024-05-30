import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductDesc() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="/img/actual_superpot.png"
          style={{ width: "25%", height: "auto" }}
        />
      </div>
      <div className="flex justify-center gap-5">
        <SoilSensor />
        <LightSensor />
        <ServoMotor />
        <WaterPump />
        <ESP8266 />
      </div>
    </main>
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
        <DialogTitle>Soil Moisture Sensor</DialogTitle>
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
        <DialogTitle> Light Intensity Illumination Sensor</DialogTitle>
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
        <DialogTitle>Servo Motor</DialogTitle>
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
        <DialogTitle>12V R385 Water Pump</DialogTitle>
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
        <DialogTitle>WeMosD1 - ESP8266 Microcontroller</DialogTitle>
        <DialogDescription>
          The brain of the SuperPot that contains the ESP8266 Microcontroller
          which provides processing power, memory, I/O capabilities, and
          Integrated Wi-Fi.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
