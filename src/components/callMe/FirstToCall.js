import React,{Component} from 'react';


import SignUp from '../SignUp';
import SignupForm from '../SignupForm';
import Page from '../Page3';
import Dashboard from '../Dashboard';
class FirstToCall extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            status:1,
            email:'',
            index1:'',
            selected1:{},
            select1:''
        }
    }
    chkComponent()
    {
        switch (this.state.status)
        {
            case 1:
                return (
                    <SignUp setStatus={(status)=>this.setState({status})}
                            setIndex={(index1)=>this.setState({index1})}
                            setEmail={(email)=>this.setState({email}) }
                    />
                );
            case 2:
                return(
                    <SignupForm setStatus={(status)=>this.setState({status})}
                                selected1={this.state.selected1}
                                setSelected={(selected1)=>this.setState({selected1})}
                                setSelect1={(select1)=>this.setState({select1})}
                    />
                );
            case 3:
                return(
                    <Page setStatus={(status)=>this.setState({status})}/>
                );
            case 4:
                return(
                    <Dashboard setStatus={(status)=>this.setState({status})}
                               index1={this.state.index1}
                               email={this.state.email}
                               selected1={this.state.selected1}
                               select1={this.state.select1}
                    />
                )
        }
    }
    render()
    {
        console.log('Let See email : ',this.state.email);
        console.log('Let See values: ',this.state.selected1);
        console.log('Let See GenderValue: ',this.state.select1);

        return(
            <div>
                {this.chkComponent()}
            </div>
        )
    }
}

export default FirstToCall;