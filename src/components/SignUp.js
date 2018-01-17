import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Field ,reduxForm } from 'redux-form';
import {Link, browserHistory} from 'react-router';
import {createData} from '../actions/index';
import Progress from 'react-progressbar';
import Progress1 from './Progress';
import { bindActionCreators } from 'redux';

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            index1:'',
            confirmpassword:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // static contextTypes = {
    //     //router=this.context,router
    //     router: PropTypes.object
    // };

    handleSubmit(){

        // this.props.setEmail(values.email);
        // this.props.setIndex(this.state.index1);
        // this.props.setStatus(2);
        this.props.createData();
        browserHistory.push('/signupform');
        //this.context.router.push('/dashboard');
    }

    renderInput(field){
        return(// Define stateless component to render input and errors
            <div className={`form-group ${field.touched && field.invalid ? 'has-danger' : ''}`}>
                <input {...field.input} name={field.name} type={field.type}  className="form-control" />
                <div className="text-help">
                    {field.meta.touched && field.meta.error}
                </div>
            </div>
        )
    }

    render() {

    const {details} = this.props;
    return (
        <div>

            <h6 className="text-primary text-center"> Signup</h6>
            <Progress1 completed={30} style={{width: '500px'}}/>
            <div style={{align: 'center'}}>
                <form onSubmit={this.handleSubmit} className="form-control" style={{width: '500px'}}>

                    <div className={`form-group ${'has-danger'}`}>
                        <div className="text-help">
                            <h6>EMAIL IS REQUIRED</h6>
                        </div>
                    </div>

                    <Field name="email" type="email" component={this.renderInput}/>

                    <label>PASSWORD</label>
                    <Field name="password" type="password" component={this.renderInput}/>

                    <label>CONFIRM PASSWORD</label>
                    <Field name="confirmpassword" type="password" component={this.renderInput}/>
                    <br/>

                    <div className="line ">
                        <button style={{backgroundColor: 'transparent', border: 'transparent', color: '#35b0ff'}} className="right" type="Submit">Next -></button>
                    </div>

                    <br/>
                </form>

            </div>

            {/*<Dashboard index1={true} value={this.state.email}/>*/}
        </div>
    )
}
}

function validate(values) {
    console.log('value----',values);
    const errors = {};
    if (!values.email) {
        errors.email = 'EMAIL IS REQUIRED';
    }
    if (!values.password) {
        errors.password = 'password is required';
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'confirm password is required';
    }
    if (values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Passwords do not match';
    } else {
        errors.confirmpassword = '';
    }
    return errors;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createData}, dispatch);
}
SignUp = reduxForm({
        form: 'formName',
       validate})(SignUp);
export default connect(null, mapDispatchToProps)(SignUp);

// function mapStateToProps(state) {
//     const formState = getFormValues('signupform1')(state);
//     console.log('formState...', formState);
//     return formState;
// }//must ret obj
// SignUp = connect(state ,
//     {
//         // can select values individually
//         function (email, password) {
//             selector(state, 'email', 'password')
//             return {details: `${email || ''} ${password || ''}`}
//         }
//     })
// (SignUp);

// SignUp = connect(
//     state => {
//
//         const { email, password } = selector(state, 'email', 'password')
//         return {
//             details: `${email || ''} ${password || ''}`
//         }
//     }
// )(SignUp)
//SignUp = connect(mapStateToProps)(SignUp);

// function mapStateToProps(state, ownProps) {
//     return {
//         email: selector(state, 'email')
//     };
// }

// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         onSubmit(values) {
//             window.alert("Submitted: \n" + JSON.stringify(values, null, 2));
//             this.context.router.push('/signupform');
//
//         }
//     }
// }

// {/*<div>*/}
//     {/*<Field  name="email" type="email" component={email =>*/}
//         {/*<div className={`form-group ${ 'has-danger'}`}>*/}
//             {/*<input type="email" {...email} />*/}
//             {/*<div className="text-help">*/}
//                 {/*{email.error}*/}
//             {/*</div>*/}
//         {/*</div>*/}
//     {/*}/>*/}
// {/*</div>*/}
//
