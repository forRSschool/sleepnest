import { Hero, News, Services } from "./_components";
import HomeClient from "./HomeClient";

export default async function Home() {
  // Fetch data at the server level (static data for now)
  const data = [
    { bgColor: "#464351", img: "/quality__img.png", season: "Winter" },
    { bgColor: "#7F54B3", img: "/quality__img2.png", season: "Autumn" },
    { bgColor: "#236F48", img: "/quality__img3.png", season: "Summer" },
  ];

  return (
    <>
      <Hero />
      <Services />
      <HomeClient data={data} />
      <News />
    </>
  );
}