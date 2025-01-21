import Image from "next/image";

import '../../styles/Hero.css';

const Hero: React.FC = () => {

	return (
    <section className='hero'>
      <div className='hero__start'>
          <Image 
            src="/hero.png" 
            alt="Logo" 
            className="hero__img"
            width={1800} 
            height={800} 
            priority
          />
        <div className="hero__card">
          <h1 id="hero-heading" className="hero__text1">Environmental</h1>
          <p className="hero__text2">Clean Sleep</p>
          <p className="hero__text3">Products</p>
        </div>
      </div>
    </section>
  );

}

export default Hero;