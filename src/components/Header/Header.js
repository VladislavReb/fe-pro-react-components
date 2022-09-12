import React from 'react';
import { NavItem } from './NavItem';

export const Header = () => {
    const item = [
        {
            href: '/',
            text: 'Home',
            id: 1,
        },
        {
            href: '/#about',
            text: 'About us',
            id: 2,
        },
        {
            href: '/#contact',
            text: 'Contact us',
            id: 3,
        },
        {
            href: '/#help',
            text: 'Help page',
            id: 4,
        },
    ];

    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    My logo
                </a>
                <nav>
                    <ul className="nav-list">
                        {item.map(({ href, text, id }) => {
                            return <NavItem href={href} text={text} key={id} />;
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};