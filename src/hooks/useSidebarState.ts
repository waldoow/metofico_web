import {useContext} from 'react';
import {SidebarContext} from '@/context/sidebar-provider.tsx';

export const useSidebarState = () => {
    const context = useContext(SidebarContext)

    if (context === undefined) {
        throw new Error("useSidebarState must be used within a sidebar-provider")
    }


    return context
}
