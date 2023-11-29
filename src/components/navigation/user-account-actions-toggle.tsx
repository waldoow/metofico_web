import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {HiOutlineCog6Tooth} from 'react-icons/hi2';

const UserAccountActionsToggle = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm">
                    <HiOutlineCog6Tooth className="h-[0.9rem] w-[0.9rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Settings</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" alignOffset={-100}>
                <DropdownMenuItem onClick={() => console.log('settings')}>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log('logout')}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountActionsToggle;
