// Rsf - Creates a stateless React component
// as a named function without PropTypes

import React from 'react'
import s from './News.module.css'
import { FiInstagram } from 'react-icons/fi';
import { BsTelegram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const News = () => {

   return (
       <div className={s.newsBlock}>
          <div>
             Тестовый аккаунт для GreenGO!: <br /> <br />
             Email: free@samuraijs.com
             <div className={s.someTab}></div>
             <button onClick={() => navigator.clipboard.writeText('free@samuraijs.com')}>
                Copy
             </button>
             <br />
             Password: free
          </div>
          <div>
             <br />
                Мои социальные сети
             <div className={s.someTab}></div>
             <p>
                 <a href='https://github.com/IsuTashtanbekov' target='_blank' rel='noopener noreferrer'>
                     <BsGithub/> Мой гитхаб
                 </a>
             </p>
              <p>
                  <a href='https://www.instagram.com/basim_ts/' target='_blank' rel='noopener noreferrer'>
                      <FiInstagram/> Инстаграм
                  </a>
              </p>
              <p>
                  <a href='https://t.me/isuu_tm' target='_blank' rel='noopener noreferrer'>
                      <BsTelegram/> Телеграм
                  </a>
              </p>
          </div>
          <div>
             <br />
                Ислам Таштанбеков - юный frontend разработчик
             <div className={s.someTab}></div>
             <a
                 href='https://github.com/IsuTashtanbekov'
                 target='_blank'
                 rel='noopener noreferrer'
             >
                Полный код - в Github
             </a>
          </div>
       </div>

   )
}

export default News




