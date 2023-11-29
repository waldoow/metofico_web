import React, {useState, createContext} from 'react';

type SidebarProviderState = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

type SidebarProviderProps = {
    children: React.ReactNode
    defaultValue: true
    storageKey?: string
}

const initialState: SidebarProviderState = {
    isOpen: true,
    setIsOpen: () => true
}

export const SidebarContext = createContext<SidebarProviderState>(initialState);

export default function SidebarProvider ({
    children,
    defaultValue = true,
    storageKey = 'sidebar-status',
}: SidebarProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(
        () => {
            return localStorage.getItem(storageKey) as 'open'|'close'  === 'open'
        })
    || defaultValue


    const value = {
        isOpen: isOpen,
        setIsOpen: (isOpen: boolean) => {
            const storageValue = isOpen ? 'open': 'close';

            localStorage.setItem(storageKey, storageValue)
            setIsOpen(isOpen)
        }
    }

    return (
        <SidebarContext.Provider value={value}>
            { children }
        </SidebarContext.Provider>
    )
}
