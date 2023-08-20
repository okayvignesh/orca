import '@/styles/globals.scss'
import '@/styles/media.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import Aos from 'aos';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    Aos.init();
  }, []);
  return <Component {...pageProps} />
}
