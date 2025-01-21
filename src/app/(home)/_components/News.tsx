import Image from 'next/image';
import Link from 'next/link';
import '../../styles/News.css';


const News = () => {
	return (
    <section className='news'>
      <div className='news__start'>
        <h2 className="news__title">News</h2>
        <p className="news__description">Ecologically Clean Sleep Products</p>
        <ul className="news__list">
          {[1,2,3].map((_, i) => (
            <li className="news__list-item" key={i}>
              <Link href="/news/11">
                <Image className="news__list-img" src="/newsImg1.png" alt="product__image" width="250" height="200"/>
              </Link>
              <div className="news__list-card">
                <time className="news__list-card__date">10/05/2024</time>
                <p className="news__list-card__text">by admin</p>
              </div>
              <h3 className="news__list-title">How to choose the perfect gadgets</h3>
              <p className="news__list-text">When the beautiful valley fills with steam and the meridian sun hits the hill...</p>
            </li>
          ))}
      </ul>
      </div>
    </section>
  );

}

export default News;
