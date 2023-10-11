import React from 'react'
import {Link} from 'react-router-dom';

import img10 from '../Assets/adv-aseets/icons/icon-1.png'
import img11 from '../Assets/adv-aseets/icons/icon-2.png'
import img12 from '../Assets/adv-aseets/icons/icon-3.png'
import img13 from '../Assets/adv-aseets/insta/li-0.png'
import img14 from '../Assets/adv-aseets/insta/li-1.png'
import img15 from '../Assets/adv-aseets/insta/li-2.png'
import img16 from '../Assets/adv-aseets/insta/li-3.png'
import img17 from '../Assets/adv-aseets/insta/li-4.png'
import img18 from '../Assets/adv-aseets/insta/li-5.png'
import img19 from '../Assets/adv-aseets/icons/twitter.png'

import './Footer.css';

export default function Footer(){
    return(
        <footer className='footer'>
                <div className='footer-area'>
                    <div className='footer-headers'>
                        <h4>Teknolojik<br />Yemekler</h4>
                        <h4><span>Sıccaacık Menuler</span></h4>
                        <h4><span>Instagram</span></h4>
                    </div>
                    <div className='footer-content'>
                        <address className='contact'>
                            <div className='flex-center-footer location'>
                                <img src={img10} alt="location icon" />
                                <p>341 Londonderry Road,<br />Istanbul, Türkiye</p>
                            </div>
                            <div className='flex-center-footer mailto'>
                                <img src={img11} alt="mail icon" />
                                <a href='mailto:aciktim@teknolojikyemekler.com'>aciktim@teknolojikyemekler.com</a>
                            </div>
                            <div className='flex-center-footer phone'>
                                <img src={img12} alt="phone icon" />
                                <a href='tel:+902161234567'>+90 216 123 45 67</a>
                            </div>
                        </address>
                        <div className='short-links'>
                            <Link>Terminal Pizza</Link>
                            <Link>5 Kişilik Hackathlon Pizza</Link>
                            <Link>useEffect Tavuklu Pizza</Link>
                            <Link>Beyaz Console Frosty</Link>
                            <Link>Testler Geçti Mutlu Burger</Link>
                            <Link>Position Absolute Acı Burger</Link>
                        </div>
                        <div className='instagram-imgs'>
                            <div className='row-1'>
                                <img src={img16} alt='instagram-img-4' />
                                <img src={img17} alt='instagram-img-5' />
                                <img src={img18} alt='instagram-img-6' />
                            </div>
                            <div className='row-2'>
                                <img src={img13} alt='instagram-img-1' />
                                <img src={img14} alt='instagram-img-2' />
                                <img src={img15} alt='instagram-img-3' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-end-line'>
                    <div>©2023 Teknolojik Yemekler.</div>
                    <img src={img19} alt='twitter'></img>
                </div>
            </footer>
    )
}