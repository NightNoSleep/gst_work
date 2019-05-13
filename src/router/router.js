import React from 'react'
import { Router,Route, IndexRoute, browserHistory, Redirect } from "react-router"

// import Login from '../components/login'
import Login from '../pages/login'
function isLogin(nextState,replaceState){
	// const she = sessionStorage.getItem('she')
    // if(!she){
    //     replaceState("/login")
    // }
}
export default () => (
	<Router history={browserHistory}>
		<Route path='/' component = { Login } />
	</Router>
)