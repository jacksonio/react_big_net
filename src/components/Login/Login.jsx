import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserThunk} from "../../redux/auth-reducer";


const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" component='input' name={'email'} placeholder='email'/>
            </div>
            <div>
                <Field type="text" component='input' name={'password'} placeholder='password'/>
            </div>
            <div>
                <Field type='checkbox' name={'agree'} component='input'/>Remember me
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const submitForm = values => {
        console.log(values)
        // тут ми будемо визивати санку яка відправляє данні на сервер і логінить його
        loginUserThunk(values)
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submitForm}/>
        </>
    )
}

let mapStateToProps = (state) => ({
    user: state.auth
})

let mapDispatchToProps = ({
    loginUserThunk
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

