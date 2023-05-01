import { createContext, useState } from "react";

interface Props {
    children: React.ReactNode
}

interface ValueProps {
    isMenuOpened: boolean
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationMenuContext = createContext<ValueProps | null>(null);

export function NavigationMenuProvider({ children }: Props) {

    const [ isMenuOpened, setIsMenuOpened] = useState(false);
   
    return (
        <NavigationMenuContext.Provider value={{isMenuOpened, setIsMenuOpened} }>
            {children}
        </NavigationMenuContext.Provider>
    )
}

export default NavigationMenuContext;