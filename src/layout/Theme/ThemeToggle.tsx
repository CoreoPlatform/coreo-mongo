import React from "react";
import { useTheme } from "./useTheme";

export const ToggleTheme = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <button onClick={changeTheme}>
            {theme === 'light' ? '🌞 Светлая тема' : '🌙 Тёмная тема'}
        </button>
    ); 
};
