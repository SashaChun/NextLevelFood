'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "../componets/nav-link.module.css";

export default function NavLink({ href, children }) {
    const path = usePathname();

    return (
        <Link href={href} className={path === href ? classes.active : undefined}>
            {children}
        </Link>
    );
}
