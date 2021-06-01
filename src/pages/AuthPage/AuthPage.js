import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './AuthPage.scss'

const AuthPage = () => (
    <div className="auth-forms">
        <SignIn />
        <SignUp />
    </div>
)

export default AuthPage