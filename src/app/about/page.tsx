import Image from 'next/image'
import '../styles/About.css'

const About:React.FC = () => {
  return (
    <div className='about'>
      <div className='about__start'>
        <div className="about__left">
          <h1 id="about-heading" className="about__title">Ecologically Clean Sleep Products</h1>
          <article className="about__content">
            <p className="about__text">
              Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years.
            </p>
            <p className="about__text">
              Our company started its activity 17 years ago and has been gaining the trust of our customers.
            </p>
            <p className="about__text">
              The main goal of our company is to create high-quality, durable and environmentally friendly products.
            </p>
            <p className="about__text">
              Manufacturing processes are fully environmentally friendly and environmentally friendly.
            </p>
            <p className="about__text">
              Using modern technologies, we are able to produce various cotton products at a high level.
            </p>
            <p className="about__text">
              Also, we act as the official representative of DongJu weaving equipment in Uzbekistan.
            </p>
            <p className="about__text">
              Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production.
            </p>
            <p className="about__text">
              More than 50 looms are operating in our enterprise based on modern technologies.
            </p>
            <p className="about__text">
              In our production processes, we ensure the production of only high-quality and environmentally safe products.
            </p>
            <p className="about__text">
              According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched.
            </p>
            <p className="about__text">
              Our company is always happy to provide quality products and high level of service to its customers.
            </p>
          </article>
        </div>
        <div className='about__right'>
          <Image className='about-img' src={'/aboutImg.png'} alt='aboutImg' width={1000} height={1000}/>
        </div>
      </div>
    </div>
  )
}

export default About
