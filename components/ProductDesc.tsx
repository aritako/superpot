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
      <Dialog>
        <DialogTrigger
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "white",
          }}
        >
          CLICK ME
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
    </main>
  );
}
