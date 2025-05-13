
/**
 * CoreoMongo - Open source self-hosted web-based MongoDB GUI for exploring
 * and managing your databases.
 * 
 * Copyright (c) CoreoPlatform.
 * 
 * 
 * For full copyright and license information, please see the LICENSE.md
 * 
 * @copyright       Copyright (c) CoreoPlatform.
 * @license         
 * @since           1.0.0
 */

"use client";

import React, { createContext, PropsWithChildren, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    changeTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        setTheme(savedTheme);
    }, []);

    const changeTheme = () => {
        setTheme((theme) => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
