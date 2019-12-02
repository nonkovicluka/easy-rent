import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import Authorization from './components/auth/Authorization';
import { verifyToken } from './components/auth/verifyToken';

import "./assets/css/blk-design-system-react.css";
import "./assets/css/nucleo-icons.css";

import reducers from './reducers';
import App from './components/App';
import LandingPage from './components/home/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AccommodationRegister from './components/manager/AccommodationRegister';
import Page404 from './components/ui/Page404';
import AccommodationsShow from './components/user/AccommodationsShow';
import MyAccommodation from './components/manager/MyAccommodation';
import EditAccommodation from './components/manager/EditAccommodation';
import RoomRegister from './components/manager/RoomRegister';
import RoomsShow from './components/user/RoomsShow';
import MyRooms from './components/manager/MyRooms';
import RoomEdit from './components/manager/RoomEdit';
import UsersAndAccommodation  from './components/admin/UsersAndAccommodation';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const token = verifyToken();

const store = createStore(reducers, {
    auth: {
        token: token
    }
}, composeEnhancers(applyMiddleware(reduxThunk)));

const Unsigned = Authorization(['Unsigned']);
const User = Authorization(['User', 'Manager', 'Admin']);
const Manager = Authorization(['Manager', 'Admin']);
const Admin = Authorization(['Admin']);

const renderRouts = () => {

    if (token && (window.location.pathname === '/register' || window.location.pathname
        === '/login')) {
        return <Redirect to="/" />
    }
    else {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App >

                <Switch>

                    <Route path="/" exact component={LandingPage} />
                    <Route path="/register" component={Unsigned(Register)} />
                    <Route path="/login" component={Unsigned(Login)} />
                    <Route path="/manage" component={Admin(UsersAndAccommodation)} />
                    <Route path="/accommodation/register" component={Manager(AccommodationRegister)} />
                    <Route path="/accommodation" exact component={AccommodationsShow} />
                    <Route path="/my-accommodation" component={Manager(MyAccommodation)} />
                    <Route path="/accommodation/:id/edit" component={Manager(EditAccommodation)} />
                    <Route path="/accommodation/:id/room/register" component={Manager(RoomRegister)} />
                    <Route path="/accommodation/:id/room/:roomId/edit" component={Manager(RoomEdit)} />
                    <Route path="/accommodation/:id/rooms" exact component={RoomsShow} />
                    <Route path="/accommodation/:id/my-rooms" component={MyRooms} />
                    <Route path="/404" component={Page404} />
                    <Redirect to="/404" />
                    {renderRouts()}
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);