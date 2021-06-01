import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import './SignIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    // When submit button is pressed, signs user in and resets form
    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: "",
                password: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
                    <div className="buttons">
                        <Button type="submit" value="Submit Form">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogle>Sign in with Google</Button>
                    </div>
                   </form>
            </div>
        )
    }
}

export default SignIn