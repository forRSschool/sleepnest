import Link from "next/link";
import '../styles/Contacts.css';

const Contacts: React.FC = () => {
  return (
    <div className="connection">
      <div className="connection__start">
        <div>
          <h1 className="connection__title">Connection</h1>
          <form className="connection__form">
            <input className="input" type="text" placeholder="Your email" required/>
            <input className="input" type="text" placeholder="Your phone number" required/>
            <textarea className="input" placeholder="Please write if you have a message" name="" id="" required></textarea>
            <button className="connect__button" type="submit">Submit</button>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8595359357932!2d64.40220371155725!3d39.74280597143722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50065c4655162d%3A0x78d6b819222f25d2!2zQWxwb21pc2ggS28nY2hhc2kgODAsIEJ1eG9ybywgQnV4b3JvIFZpbG95YXRpLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1737480433758!5m2!1sru!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div className="connection__end">
        <ul className="connection__list">
          <li className="connection__list-item">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
            </svg>
            <Link href={'mailto:sleepnest@gmail.com'}>
              Email: sleepnest@gmail.com
            </Link>
          </li>
          <li className="connection__list-item">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z">
              </path>
            </svg>
            <Link href={'tel:+998940337212'}>
              Tel: +998 94 033 72 12
            </Link>
            <Link href={'tel:+998917777368'}>
               +998 91 777 73 68
            </Link>
          </li>
          <li className="connection__list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 10.5c-1.933 0-3.5-1.567-3.5-3.5S10.067 5.5 12 5.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/>
              </svg>
            <Link href={'/'}>
              Bukhara, st. Alpomish 80
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts;
