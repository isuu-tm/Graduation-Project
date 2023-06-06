//
// import {Link} from 'react-router-dom'
// import React from 'react'
//
// import s from './NotFound.module.css'
//
//
// export const NotFound: React.FC = () => {
//
//    return (
//       <div className={s.notFoundBlock}>
//          <div> Page 404</div>
//          <div>< br /></div>
//          <div>
//             <Link to='/'>
//                Go to main page
//             </Link>
//          </div>
//       </div>
//    )
// }


import React from 'react';
import { Button, Result } from 'antd';
import {Link} from "react-router-dom";

export const NotFound: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Ох, похоже вы перешли на несуществующую страницу, нажмите ниже чтобы перейти назад"
        extra={<Link to={'/profile'}><Button>Нажмите сюда</Button></Link>}
        // extra={< to>Back Home}
    />
);

// export default App;