import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'


export default function Scrolltop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <IoIosArrowUp className='scrolltotop' type="button"
            onClick={scrollToTop}
            size={15}
            style={{ display: visible ? 'inline' : 'none' }}
            id="btn-back-to-top" />
    )
}


