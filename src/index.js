import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {} from 'react-redux'
import routes from './router'


ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>
                    <Route path="/" render={
                        (routerProps) => {
                            // todo 要做权限认证了
                            return (<App {...routerProps}/>)
                        }
                    }/>
                </Switch>
            </Router>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
