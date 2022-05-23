import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import './index.css';
import Home from "./pages/home";
import LatestNews from "./pages/latest-news";
import PopularNews from "./pages/popular-news";
import {history} from "./redux/reducers/index";
import { ReduxRouter } from '@lagunovsky/redux-react-router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReduxRouter store={store} history={history}>
                <App>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/latest-news" element={<LatestNews/>}/>
                        <Route path="/popular-news" element={<PopularNews/>}/>
                    </Routes>
                </App>
            </ReduxRouter>
        </Provider>
    </React.StrictMode>
);
