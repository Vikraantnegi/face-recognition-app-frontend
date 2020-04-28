import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signupEmail : '',
            signupPass : '',
            name : ''
        }
    }

    onNameChange = (event) => {
        this.setState({name : event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({signupEmail : event.target.value})
    }

    onPassChange = (event) => {
        this.setState({signupPass : event.target.value})
    }

    onSubmitSignup = () =>{
        fetch('https://braniac-theallmighty.herokuapp.com/register', {
            method: 'post',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signupEmail,
                password: this.state.signupPass,
                name: this.state.name,
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.load(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render(){
        return(
            <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
                                onChange = {this.onNameChange} />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
                                onChange = {this.onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
                                onChange = {this.onPassChange} />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/>Remember me</label>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up!"/>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;