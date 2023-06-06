import {RoutesAppType, RoutesType} from "../types/types";
import News from "../components/News/News";
import {UserPage} from "../components/Users/UsersContainer";
import {NotFound} from "../components/common/NotFound/NotFound";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import ChatPage from "../pages/Chat/ChatPage";
import ProfileContainer from "../components/Profile/ProfileContainer";


export const routes:RoutesType = [
    {to:'/profile', title:'Profile'},
    {to:'/dialogs', title:'Сообщения'},
    {to:'/users', title:'Пользователи'},
    {to:'/news', title:'Новости'},
    {to:'//33', title:'Настройки'},
];

export const routesApp:RoutesAppType = [
    {path: '/', element: News},
    {path: '/profile/:userId', element: ProfileContainer},
    {path: '/profile', element: ProfileContainer},
    {path: '/dialogs/*', element: DialogsContainer},
    {path: '/developers', element: UserPage},
    {path: '/news', element: News},
    {path: '/chat', element: ChatPage},
    {path: '*', element: NotFound},
]