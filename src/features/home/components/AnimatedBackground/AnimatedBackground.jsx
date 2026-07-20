import BackgroundGrid from "./Layers/BackgroundGrid";
import AmbientLighting from "./Layers/AmbientLighting";
import AnalyticsOverlay from "./Layers/AnalyticsOverlay";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 h-full w-full -z-10 overflow-hidden pointer-events-none">

<AnalyticsOverlay />
      <AmbientLighting />

      <BackgroundGrid />

      

    </div>
  );
}