import Link from "next/link";
import logoImg from '../assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/componets/main-header-background";
import NavLink from "@/componets/nav-link";

export default function MainHeader(){

    return <>
     <MainHeaderBackground/>
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="logo"/>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink href={'/meals'}>Brows meals</NavLink></li>
                <li><NavLink href={'/community'}>Foods </NavLink></li>
            </ul>
        </nav>
    </header>
    </>
}