import Image from "next/image";

import Link from "next/link";
import '../styles/Product.css';

interface ProductProps {
  season: string;
}

const Product: React.FC<ProductProps> = ({season}) => (
  <section className="product">
    <div className="product__start">
      <h2 className="product__title">{season} Collection</h2>
      <p className="product__description">Ecologically Clean Sleep Products</p>
      <ul className="product__list">
        {[1,2,3,4,5,6,7,8,9,10].map((_, i) => (
          <li className="product__list-item" key={i}>
            <Link href="/product/11">
              <Image className="product__list-img" src="/productImg.jpg" alt="product__image" width="250" height="200"/>
            </Link>
            <button className="product__heart">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
            </button>
            <p className="product__list-text">Safari</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);


export default Product;
