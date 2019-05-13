import React, { Component } from 'react'
import LoginContainer from '../containers/login'

class Login extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    demo(){
        console.log(1)
    }

    render(){
        return (
            <div className='login_page'>
                <LoginContainer 
                
                />
            </div>
        )
    }
}
export default Login