import { Hero, News, Product, Quality, Services } from "./_components";



export default function Home() {
  return (
      <>
        <Hero/>
        <Services/>
        <Quality bgColor="#464351" img="/quality__img.png"/>
        <Product season="Winter"/>
        <Quality bgColor="#7F54B3" img="/quality__img2.png"/>
        <Product season="Autumn"/>
        <Quality bgColor="#236F48" img="/quality__img3.png"/>
        <Product season="Summer" />
        <News />
      </>
  );
}
