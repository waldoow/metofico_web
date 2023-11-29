import usePath from '@/hooks/usePath';
import {IconType} from 'react-icons';
import React from 'react';

const usePageTitle:React.FC<Array<{title: string, href:string, icon: IconType}>> = (sidebarNavItems): string => {
    const path = usePath();
    const currentPage = sidebarNavItems.find(item => item.href === path);

    if (currentPage === undefined) {
        throw 'Wrong configuration of nav links';
    }

    return currentPage.title;
}

export default usePageTitle;
