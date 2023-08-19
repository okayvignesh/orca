import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);
  return <Component {...pageProps} />
}
