import React from 'react'
import { Link } from 'react-router-dom';
import { Images } from '../data/Images';

import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-area'>
                <div className='footer-content'>
                    <div className='flex column w30'>
                    <h4>Teknolojik<br />Yemekler</h4>
                    <address className='contact'>
                        <div className='flex-center-footer location'>
                            <img src={Images.icons.Location} alt="location icon" />
                            <p>341 Londonderry Road,<br />Istanbul, Türkiye</p>
                        </div>
                        <div className='flex-center-footer mailto'>
                            <img src={Images.icons.Mail} alt="mail icon" />
                            <a href='mailto:aciktim@teknolojikyemekler.com'>aciktim@teknolojikyemekler.com</a>
                        </div>
                        <div className='flex-center-footer phone'>
                            <img src={Images.icons.Phone} alt="phone icon" />
                            <a href='tel:+902161234567'>+90 216 123 45 67</a>
                        </div>
                    </address>
                    </div>
                    <div className='flex column w30 ' >
                        <h4><span>Sıccaacık Menuler</span></h4>
                        <div className='short-links'>
                            <Link>Terminal Pizza</Link>
                            <Link>5 Kişilik Hackathlon Pizza</Link>
                            <Link>useEffect Tavuklu Pizza</Link>
                            <Link>Beyaz Console Frosty</Link>
                            <Link>Testler Geçti Mutlu Burger</Link>
                            <Link>Position Absolute Acı Burger</Link>
                        </div>
                    </div>
                    <div className='flex column w30 '>
                        <h4><span>Instagram</span></h4>
                        <div className='instagram-imgs'>
                            {
                                Images.instagramImgs.map((item, index) => {
                                    return (
                                        <img src={item} alt={"instagramPhoto" + index} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='footer-end-line'>
                <div>©2023 Teknolojik Yemekler.</div>
                <img src={Images.icons['Social-Icons'].Twitter} alt='twitter'></img>
            </div>
        </footer>
    )
}