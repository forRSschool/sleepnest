'use client'

import Image from 'next/image';
import Link from 'next/link';
import IQuality from '../../interfaces/qualities';
import '../../styles/Quality.css';


const Quality = ({bgColor, img}: IQuality) => {
	return (
    <section className='quality'>
      <div className='quality__start' style={{ background: `${bgColor}` }}>
        <div className='quality__left'>
          <p className='quality__left-title'>100%</p>
          <div className='quality__left-text'>Material quality</div>
        </div>
        <Image 
          src={img} 
          alt='quality-img' 
          width={800} 
          height={500} 
          className='quality__img'
        />
        <div className='quality__right'>
          <p className='quality__right-title'>&quot;Ecologically Clean Sleep Products&quot;</p>
          <div className='quality__right-text'>has been a company producing cotton fabrics for use all over the world for many years</div>
          <Link className='quality__right-btn-link' href='/collection'>
            <button className='quality__right-btn'>Collection</button>
          </Link>
        </div>
      </div>
    </section>
  );

}

export default Quality;