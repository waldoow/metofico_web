import { MenuSectionType } from "../components/navigation/types.tsx";

const menu: Array<MenuSectionType> = [{
    mainTitle: 'coucou',
    subMenu: [
        {
            title: 'Dashboard',
            items: [
                {title: 'Overview', path: '/'}
            ]
        }, {
            title: 'Dashboard 2',
            items: [
                {title: 'Overview 3', path: '/'}
            ]
        }]
}];

export default menu;
