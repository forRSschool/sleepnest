import { services } from "@/db/db";
import Image from "next/image";

import { IService } from "../../interfaces";
import '../../styles/Services.css';

const Services: React.FC = () => {

	return (
    <section className='services'>
      <div className='services__start'>
        <ul className='services__list'>
          {
            services.map((item: IService, i) => (
              <li className='services__list-item' key={i}>
                <Image src={item.img} alt={item.title} height={50} width={50}/>
                <div className="services__list-card">
                  <h3 className="services__list-title">{item.title}</h3>
                  <p className="services__list-description">{item.description}</p>
                </div>
              </li>  
            ))
          }
        </ul>  
      </div>
    </section>
  );

}

export default Services;