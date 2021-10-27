import { useState, useEffect } from 'react';



function useTheme(key, value) {
    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return value
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(theme))
    }, [key, theme])

    return [theme, setTheme];
}

export default useTheme;