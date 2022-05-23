import {combineReducers} from "redux";
import {news} from "./news";
import {errors} from "./errors";
import {createBrowserHistory} from "history";
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import {loader} from "./loader";

export const history = createBrowserHistory();

export const reducer = combineReducers({
    news,
    errors,
    loader,
    router: createRouterReducer(history),
})