import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/antd.css'
import store from './redux/redux-store'
import App from './App'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement)

root.render(
   //<React.StrictMode>

   // // BrowserRouter HashRouter
   <HashRouter>

      <Provider store={store}>

         <App />

      </Provider>

   </HashRouter>

// BrowserRouter HashRouter

//</React.StrictMode>,
)



//region Description
// и обвертку rerenderEntireTree() -  тоже убираем

// так было когда без библиотеки реак-редакс было и каждый раз все
// дерево получается перерисовывалось при изменении стейта
// store.subscribe( () => {
//    rerenderEntireTree()
// } );

// раньше когда самодельный стор вызывали тут было так
//store.subscribe(rerenderEntireTree);

// раньше когда самодельный стор вызывали тут было так
// и это прокидывали в апп:
//state={state}
//dispatch={store.dispatch.bind( store )}

// rerenderEntireTree( store.getState() );
// и стейт уже ен передаем - каждая конечная тупая компонента
// внутри возьмем стейт - наверно осинхронно и отрисуется

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// setInterval(
//    () => {
//       store.dispatch( {type: 'FAKE'} )
//    },
//    1000 );

// let aaa = {
//    ddd: 5,
//    fff: 6
// }

//endregion


