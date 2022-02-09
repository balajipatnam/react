import React from 'react';
import { Checkbox, PrimaryButton } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';

import './login.css';

interface LoginProps { }
interface LoginState {
    user: {
        email: string;
        password: string;
    };
    isLoading: boolean;
    errors: {
        email: string;
        password: string;
    };
}
const Regex = RegExp(
    /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { ...this.getInitialState() };
    }
    getInitialState = () => {
        return {
            user: {
                email: '',
                password: '',
            },
            isLoading: false,
            errors: {
                email: '',
                password: '',
            },
        };
    };
    validateLogin() {
        let user = this.state.user;
        let errors = this.state.errors;
        let isValid = true;
        const pattern =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!user.email) {
            errors['email'] = 'Please enter email';
            isValid = false;
        } else if (!pattern.test(user.email)) {
            errors['email'] = 'Please enter valid email';
            isValid = false;
        }
        if (!user.password) {
            errors['password'] = 'Please enter password';
            isValid = false;
        }
        this.setState({ errors });
        return isValid;
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.validateLogin()) {
            this.setState({ ...this.state, isLoading: true });
            setTimeout(() => {
                this.clear();
            }, 2000);
        }
    };
    clear = () => {
        this.setState({ ...this.state, ...this.getInitialState() });
    };
    handleChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let { errors }: LoginState = this.state;
        let user: any = this.state;

        switch (name) {
            case 'email':
                errors.email = Regex.test(value) ? '' : 'Please enter valid email';
                break;
            case 'password':
                errors.password =
                    value.length < 8 ? 'Password must be eight characters long!' : '';
                break;
            default:
                break;
        }
        user[name] = value;
        this.setState({ ...this.state, errors, user });
    };
    render() {
        const { errors, isLoading, user } = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate className="login-form">
                <h3 className="login-form-title">Sign In</h3>
                <TextField
                    placeholder="Enter username"
                    name="email"
                    value={user.email}
                    onChange={this.handleChange}
                    errorMessage={errors.email.length > 0 ? errors.email : ''}
                />

                <TextField
                    placeholder="Enter password"
                    name="password"
                    value={user.password}
                    onChange={this.handleChange}
                    errorMessage={errors.password.length > 0 ? errors.password : ''}
                />
                <PrimaryButton
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                >
                    {isLoading && <Spinner size={SpinnerSize.medium} />}
                    <span className="btn-txt">Sign In</span>
                </PrimaryButton>

                <div className="checkbox">
                    <Checkbox className="checbox-icon" label="Remember Me" />
                    <a href="/forgot-password">Forgot password?</a>
                </div>
            </form>
        );
    }
}
export default Login;
