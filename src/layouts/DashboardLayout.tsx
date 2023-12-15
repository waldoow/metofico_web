import SideNav from '../components/navigation/side-bar';
import React from 'react';
import {ScrollArea} from '@radix-ui/react-scroll-area';
import {ModeToggle} from '@/components/theme/mode-togle';
import {HiCodeBracket, HiOutlineEnvelope, HiOutlineRectangleGroup} from 'react-icons/hi2';
import usePageTitle from '@/hooks/usePageTitle';
import {HiOutlineUser} from 'react-icons/hi';
import Breadcrumb from '@/components/navigation/breadcrumb';
import {Separator} from '@/components/ui/separator';

const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: HiOutlineRectangleGroup
    },
    {
        title: "Users",
        href: "/users",
        icon: HiOutlineUser
    },
    {
        title: "Scripts",
        href: "/scripts",
        icon: HiCodeBracket
    },
    {
        title: "Invitations",
        href: "/invitations",
        icon: HiOutlineEnvelope
    }
];

const DashboardLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const pageTitle = usePageTitle(sidebarNavItems);

    return (
        <main className="flex gap-6 h-screen">
            <SideNav items={sidebarNavItems} />

            <div className=" text-gray-900 font-semibold flex-1 flex flex-col">
                <div className="hidden flex-col md:flex">
                    <div className="flex h-12 items-center px-4">
                        <div className=" flex w-full justify-between items-center space-x-4">
                            <Breadcrumb />
                            <ModeToggle />
                        </div>
                    </div>
                </div>

                <Separator />

                <h1 className='text-black dark:text-white text-2xl font-bold tracking-tight my-12'>
                    { pageTitle }
                </h1>

                <ScrollArea className="text-black dark:text-white">
                    { children }
                </ScrollArea>
            </div>
        </main>
    );
};

export default DashboardLayout;
