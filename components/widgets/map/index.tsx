import Card from "@components/card";
import TimeWidget from "@widgets/time";

export default function MapWidget() {
  return (
    <Card className="select-none overflow-clip p-0 [&_canvas]:outline-0">
      <TimeWidget />
      <div
        id="static_map"
        className="absolute top-0 left-0 z-10 h-full w-full bg-static-map bg-contain bg-center"
      ></div>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=tasikmalaya sukaraja&t=&z=9&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </Card>
  );
}
