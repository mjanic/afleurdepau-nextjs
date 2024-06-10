'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function NavBar() {

    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };  

    return (
        <div className='navbar h-14 bg-paubeige z-10 grid gap-0 grid-cols-3 items-center justify-center border-paubrown border-b shadow-lg fixed top-0 w-full whitespace-nowrap'>
            <div className='nav-menu hidden pl-8 md:flex justify-left'>
                    <Link className={`text-paubrown m-1 ${pathname === '/' && 'font-bold'}`}
                    href="/"><h3>Accueil</h3></Link>
                    <Link className={`text-paubrown m-1 ${pathname === '/shop' && 'font-bold'}`}
                    href="/shop"><h3>Boutique</h3></Link>
                    <Link className={`text-paubrown m-1 ${pathname === '/aboutus' && 'font-bold'}`}
                    href="/aboutus"><h3>À propos</h3></Link>
            </div>
            <div className='mini-menu relative md:hidden justify-left items-center pl-8 flex '>
                <div className='dropdown relative flex justify-center items-center'>
                    <FontAwesomeIcon className='text-paubrown m-1 cursor-pointer' icon={faBars} onClick={toggleMenu} />
                    <div className={`dropdown-menu flex p-1 flex-col absolute left-0 top-full bg-paubeige border border-paubrown md:hidden ${!isMenuOpen && 'hidden'}`}>
                        <Link onClick={toggleMenu} className={`text-paubrown m-1 ${pathname === '/' && 'font-bold'}`}
                        href="/"><h3>Accueil</h3></Link>
                        <Link onClick={toggleMenu} className={`text-paubrown m-1 ${pathname === '/shop' && 'font-bold'}`}
                        href="/shop"><h3>Boutique</h3></Link>
                        <Link onClick={toggleMenu} className={`text-paubrown m-1 ${pathname === '/aboutus' && 'font-bold'}`}
                        href="/aboutus"><h3>À propos</h3></Link>
                    </div>
                </div>                
                    <FontAwesomeIcon className='text-paubrown m-1' icon={faMagnifyingGlass}/>
                                      
            </div>
            <Link href='/'className='nav-logo flex justify-center items-center'>   
                <Image
                    src="/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo"
                    priority
                />          
                <h1 className={`text-lg md:text-xl`}>A fleur de Pau</h1>
            </Link>
            <div className='nav-searchbar relative flex justify-end items-center pr-8'>
                <FontAwesomeIcon className='text-paubrown m-1 hidden md:block' icon={faMagnifyingGlass} /> 
                <FontAwesomeIcon className='text-paubrown m-1' icon={faUser} />
                <FontAwesomeIcon className='text-paubrown m-1' icon={faCartShopping} />
            </div>
        </div>
    )
}