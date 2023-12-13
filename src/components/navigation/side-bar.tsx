import {Link} from 'react-router-dom';
import React from 'react';
import { cn } from "@/lib/utils"
import {Button} from '@/components/ui/button';
import usePath from '@/hooks/usePath';
import {useCookies} from 'react-cookie';
import UserAccountActionsToggle from '@/components/navigation/user-account-actions-toggle';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {IconType} from 'react-icons';
import {getUserRole} from '@/services/user.service.ts';
import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi';
import {Separator} from '@/components/ui/separator.tsx';
import {Badge} from '@/components/ui/badge.tsx';
import {useSidebarState} from '@/hooks/useSidebarState.ts';
import { motion } from 'framer-motion'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
        icon: IconType
    }[]
}

const SideBar = (({ className, items, ...props }: SidebarNavProps) => {
    const { isOpen, setIsOpen } = useSidebarState()
    const path = usePath();
    const [cookie] = useCookies(['_auth'])

    const variants= {
        close: {width: '10%'},
        open: {width: '20%'}
    };

    return (
        <motion.aside
            variants={variants}
            animate={isOpen ? 'open': 'close'}
            initial={isOpen ? 'open': 'close'}
            className={`flex flex-col justify-between border-e h-full p-6 `}
        >
            <div className='w-full space-x-2 mb-14 relative'>
                <Button size="icon" className={`absolute ${isOpen ? 'right-2': 'left-1/2 transform -translate-x-1/2'}`} onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ?
                            <HiChevronDoubleLeft />:
                            <HiChevronDoubleRight />
                    }
                </Button>
            </div>

            <h1 className={`font-bold text-primary text-2xl capitalize tracking-tighter  ${isOpen ? '': 'text-center'}`}>
                {isOpen ? 'metofico': 'm'}
            </h1>

            <Separator className="bg-primary my-2"/>

            <nav
                className={cn(
                    "flex space-x-2 flex-col gap-1 lg:space-x-0 lg:space-y-1 grow lg:p-3 w-full",
                    className
                )}

                {...props}
            >
                {items.map((item) => {
                    const current = path === item.href;
                    const variant = current ? 'secondary': 'ghost'

                    return (
                        <Button asChild key={item.href} variant={variant} className={cn(
                            `${isOpen ? 'justify-start': 'justify-center'} flex items-center`
                        )}>
                             <Link
                                 to={item.href}
                             >
                                 <TooltipProvider delayDuration={100} >
                                     <Tooltip  >
                                         <TooltipTrigger className="relative">
                                             <Button size='icon' variant={'ghost'}>
                                                 <item.icon size={'18'}/>
                                             </Button>
                                         </TooltipTrigger>
                                         <TooltipContent className="absolute left-6 -top-1">
                                             <p> { item.title }</p>
                                         </TooltipContent>
                                     </Tooltip>
                                 </TooltipProvider>
                                     <motion.span
                                         variants={{
                                             open: {display: 'block'},
                                             close: { display: 'none'}
                                         }}
                                         animate={isOpen ? 'open': 'close' }
                                     >
                                         { item.title }
                                     </motion.span>
                             </Link>
                        </Button>
                    );
                })}
            </nav>

            <Separator className="bg-primary my-4"/>

            <div className={`${isOpen ? '': 'm-auto'}`}>
                <div className="flex flex-row justify-between items-center">
                    <div className={`${isOpen ? '': 'hidden'} space-y-2  text-sm`}>
                        <p>{ cookie._auth.email }</p>
                        <Badge>{ getUserRole(cookie._auth.roles) }</Badge>
                    </div>

                    <UserAccountActionsToggle />
                </div>
            </div>
        </motion.aside>
    )
});

export default SideBar;
