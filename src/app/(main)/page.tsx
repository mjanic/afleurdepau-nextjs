import Parfumes from "./components/Parfumes";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Reviews from "./components/Reviews";
import Footerimage from "./components/FooterImage";

export default function Page() {
    return (
      <div>
        <Hero/>
        <Features/>
        <Video/>
        <Parfumes/>
        <Reviews/>
        <Footerimage/>
      </div>
      )     
  }