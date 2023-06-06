//
import s from './Post.module.css'
import React from 'react'
import { Avatar, Space, List } from 'antd';
import {TbUserCircle} from  'react-icons/tb'

type PropsType = {
   value: string
   likesCount: number
}



// const App: React.FC = () => (
//     <Space direction="vertical" size={16}>
//         <Space wrap size={16}>
//             <Avatar size={64} icon={<UserOutlined />} />
//             <Avatar size="large" icon={<UserOutlined />} />
//             <Avatar icon={<UserOutlined />} />
//             <Avatar size="small" icon={<UserOutlined />} />
//     </Space>
// );
//
// export default App;

// import React from 'react';
//
// const data = [
//     {
//         title: 'Ant Design Title 1',
//     },
//     {
//         title: 'Ant Design Title 2',
//     },
//     {
//         title: 'Ant Design Title 3',
//     },
//     {
//         title: 'Ant Design Title 4',
//     },
// ];



const Post: React.FC<PropsType> = (props) => {

   return (

      <div className={s.item}>
          <Space wrap size={16}>
              <Avatar size="large" icon={<TbUserCircle />} />
          </Space>
         <div>
            Like {props.likesCount}
         </div>
          <List
              itemLayout="horizontal"
              renderItem={(item, index) => (
                  <List.Item>
                      <List.Item.Meta
                          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                          title={<a href="https://ant.design">{props.value}</a>}
                          description={props.value}
                      />
                  </List.Item>
              )}
          />
      </div>

   )
}

export default Post