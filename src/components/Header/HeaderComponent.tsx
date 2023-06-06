//
import React from 'react'
import {Link} from 'react-router-dom'
import s from './Header.module.css'
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'
import {AppstoreOutlined} from '@ant-design/icons'
import {getItem, MenuItem} from '../../App'
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors'
import {logout} from '../../redux/auth-reducer';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';


const {Header} = Layout

// const itemsHeader: MenuItem[] = [
//    getItem(
//       <Link to='/developers'>
//          Developers
//       </Link>,
//       'DevelopersHeader',
//       // это типо ключ по которому потом в selectedKeys
//       // указываем и будет по умолчанию подсвечиваться
//       <AppstoreOutlined /> // это просто какая будет картинка из коллекции antd
//    )
// ]

export const HeaderComponent: React.FC = () => {

   const isAuth = useSelector(selectIsAuth)
   const login = useSelector(selectCurrentUserLogin)
   const dispatch = useDispatch()

   const logoutCallback = () => {
      dispatch(logout())
   }

   return (
      <Header className='header'>
            <Row>
               <Col span={3}>
                     <Avatar
                         draggable
                         src={'https://i.pinimg.com/564x/c7/c1/84/c7c184d8aea345313f165b0f50431ae5.jpg'}
                     />
                     <Link to={'#'}/>
               </Col>
               <Col span={17}>
                  {isAuth
                     ? <div>
                        <Avatar alt={login || ''} src='https://i.pinimg.com/564x/52/e3/63/52e363a0cb28b911b1b556156d31a968.jpg' />
                        <span className={s.loginBlockIsAuth}>
                           {login} - <Button
                           onClick={logoutCallback}>
                           Выйти</Button>
                        </span>
                     </div>
                     : <div>
                        <Button className={s.loginBlockNotAuth}>
                           <Link to={'/login'}>Войти</Link>
                        </Button>
                     </div>
                  }
               </Col>
               <Col>
                  <Space direction="vertical">
                     <Switch
                         checkedChildren="Ночная тема"
                         unCheckedChildren="Светлая тема"
                         defaultChecked
                     />
                  </Space>
               </Col>
            </Row>
      </Header>
   )
}


// header - это хтмл тег для сео

