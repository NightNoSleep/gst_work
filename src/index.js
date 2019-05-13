// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
// 配置文件

// 加入redux的一些东西
import { Provider } from "react-redux";
import { createStore } from "redux";
// 导入样式
import './index.css'
// import 'antd/dist/antd.css';
// 导入路由

import Route from "./router/router"
import store from "./store"
//导入ant design中的日期语言为“中文”
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
            <div className='gst'>
            	<Route />
            </div>
        </Provider>
    </LocaleProvider>
   ,document.getElementById('root')
)
