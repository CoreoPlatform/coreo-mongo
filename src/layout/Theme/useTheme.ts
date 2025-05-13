
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

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const useTheme = () => {
    return useContext(ThemeContext);
}