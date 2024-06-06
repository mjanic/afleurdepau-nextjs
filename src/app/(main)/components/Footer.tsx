"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const alertTikTok = () => {
        alert("Tik Tok en construction");
    } 
    return(
        <div className='bg-pautranspink p-4'>
        <div className='footer m-0 p-2.5 text-sm flex items-left flex-col sm:grid sm:grid-cols-3'>   
            <div className='flex justify-center items-center'>
                <Link href="/">
                    <Image className='max-w-24' width={400} height={400} src='/image-logo1.jpg' alt="logo" />
                </Link> 
            </div>       
            <div className='footer-links flex p-2 text-paubrown font-bold'>
                <ul>
                    <li className='block p-1'><Link href="/">Accueil</Link></li>
                    <li className='block p-1'><Link href="/shop">Boutique</Link></li>
                    <li className='block p-1'><Link href="/aboutus">À propos</Link></li>
                    <li className='block p-1'><Link href="/faq">FAQ</Link></li>
                    <li className='block p-1'>Mentions legales</li>
                </ul>
            </div>
            <div className='footer-contact flex p-2'>
                <ul>
                    <li className='block text-white p-1'>Contactez nous:</li>
                    <li className='block whitespace-nowrap text-white p-1'>
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope} />
                        afleurdepau.perso@gmail.com
                    </li>
                    <li className='social-icons text-white'>
                        <FontAwesomeIcon 
                            className='footer-icon transition ease-in-out delay-150 cursor-pointer m-1 hover:scale-125' 
                            icon={faInstagram} size='xl'/>
                        <FontAwesomeIcon 
                            className='footer-icon transition ease-in-out delay-150 cursor-pointer m-1 hover:scale-125' 
                            icon={faFacebook} size='xl'/>
                        <FontAwesomeIcon 
                            onClick={alertTikTok} 
                            className='footer-icon transition ease-in-out delay-150 cursor-pointer m-1 hover:scale-125' 
                            icon={faTiktok} size='xl'/>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}