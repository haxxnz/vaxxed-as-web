import { Composition } from "remotion";
import { Scene } from "./Scene";
import { Locale } from "../data/types";
import "../styles/tailwind.css";

const RemotionVideo = () => (
  <Composition
    component={Scene}
    defaultProps={{ locale: Locale.en, fireworks: true }}
    durationInFrames={300}
    fps={30}
    height={720}
    id="Scene"
    width={1280}
  />
);

export { RemotionVideo };
