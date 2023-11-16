import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import { cn } from "@/lib/utils"
import {Button, buttonVariants} from '@/components/ui/button';
import usePath from '@/hooks/usePath';
import {useCookies} from 'react-cookie';
import UserAccountActionsToggle from '@/components/navigation/UserAccountActionsToggle';
import {HiMiniBars2, HiOutlineXMark} from 'react-icons/hi2';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {IconType} from 'react-icons';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
        icon: IconType
    }[]
}

const SideBar = (({ className, items, ...props }: SidebarNavProps) => {
    const [open, setOpen] = useState(true);
    const path = usePath();
    const [cookie] = useCookies(['_auth'])

    return (
        <aside
            className={` flex flex-col justify-between border-e h-full p-6 ${open ? 'w-72' : 'w-30'} duration-300`}
        >
            <div className='w-full space-x-2 mb-14 relative'>
                <Button size="sm" className="absolute end-0.5" onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <HiOutlineXMark />:
                            <HiMiniBars2 />
                    }
                </Button>
            </div>
            <nav
                className={cn(
                    "flex space-x-2 flex-col  gap-3 lg:space-x-0 lg:space-y-1 grow lg:p-3",
                    className
                )}

                {...props}
            >
                {items.map((item) => {
                    const current = path === item.href;

                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                buttonVariants({variant: "ghost"}),
                                current
                                    ? "bg-muted hover:bg-muted"
                                    : "hover:bg-transparent hover:underline",
                                `${open ? 'justify-start gap-5': 'justify-center'} flex items-center `
                            )}
                        >

                            { open ?
                                <></> :
                                <TooltipProvider delayDuration={0} >
                                    <Tooltip  >
                                        <TooltipTrigger className="relative">
                                            <item.icon />
                                        </TooltipTrigger>
                                        <TooltipContent className="absolute" alignOffset={150}>
                                            <p>{ item.title }</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            }

                            <span className={`${open ? '': 'hidden'} `}>{ item.title }</span>
                        </Link>
                    )
                })}
            </nav>

            <div className={`${open ? '': 'm-auto'}`}>
                <div className="flex flex-row justify-between items-center">
                    <span className={`${open ? '': 'hidden'} text-muted-foreground text-sm`}>{ cookie._auth.email }</span>
                    <UserAccountActionsToggle />
                </div>
            </div>
        </aside>
    )
});

export default SideBar;
