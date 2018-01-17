import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Dropdown from './Dropdown';
import NavMenuButton from './NavMenuButton';
import MonthMenuButton from './MonthMenuButton';
import YearMenuButton from './YearMenuButton';
import RadioButtons from './RadioButton';
import {col, row} from 'react-bootstrap';
import Progress from 'react-progressbar';
import Progress1 from './Progress';
import Dashboard from './Dashboard';

class SignupForm extends Component{

    options = [
        {
            description: 'Employee',
        },
        {
            description: 'Option B',
        },
        {
            description: 'Option C',
        },
        {
            description: 'Other',
        }
    ];
    options1 = [
        {
            description: 'DD',
        },
        {
            description: '1',
        },
        {
            description: '2',
        },
        {
            description: '3',
        },
        {
            description: '4',
        },
        {
            description: '5',
        },
        {
            description: '6',
        },
        {
            description: '7',
        },
        {
            description: '8',
        },
        {
            description: '9',
        },
        {
            description: '10',
        },
        {
            description: '11',
        },
        {
            description: '12',
        },
        {
            description: '13',
        },
        {
            description: '14',
        },
        {
            description: '15',
        },
        {
            description: '16',
        },
        {
            description: '17',
        },
        {
            description: '18',
        },
        {
            description: '19',
        },
        {
            description: '20',
        },
        {
            description: '21',
        },
        {
            description: '22',
        },
        {
            description: '23',
        },
        {
            description: '24',
        },
        {
            description: '25',
        },
        {
            description: '26',
        },
        {
            description: '27',
        },
        {
            description: '28',
        },
        {
            description: '29',
        },
        {
            description: '30',
        },
        {
            description: '31',
        }
    ];
    options2 = [
        {
            description: 'MM',
        },
        {
            description: 'January',
        },
        {
            description: 'February',
        },
        {
            description: 'March',
        },
        {
            description: 'April',
        },
        {
            description: 'May',
        },
        {
            description: 'June',
        },
        {
            description: 'July',
        },
        {
            description: 'August',
        },
        {
            description: 'September',
        },
        {
            description: 'October',
        },
        {
            description: 'November',
        },
        {
            description: 'December',
        },
    ];
    options3 = [
        {
            description: 'YY',
        },
        {
            description: '1990',
        },
        {
            description: '1991',
        },
        {
            description: '1992',
        },
        {
            description: '1993',
        },
        {
            description: '1994',
        },
        {
            description: '1995',
        },
        {
            description: '1996',
        },
        {
            description: '1997',
        },
        {
            description: '1998',
        },
        {
            description: '1999',
        },
        {
            description: '2000',
        },
        {
            description: '2001',
        },
        {
            description: '2002',
        },
        {
            description: '2003',
        },
        {
            description: '2004',
        },
        {
            description: '2005',
        },
        {
            description: '2006',
        },
        {
            description: '2007',
        }
    ];

    // static contextTypes = {
    //     //router=this.context,router
    //     router: PropTypes.object
    // };

    handleSubmit(){
        // this.props.setStatus(3);
        this.props.history.push('/page');
        //blog post has been created, navigate the user to the index
                //we navigate by calling this.context.router.push with the new path to navigate
                //this.context.router.push('/page');
                //'/' indicates to naviagate back to index page
    }
    onSubmit1(){
        // this.props.setStatus(1);
        this.props.history.push('/');
    }
    render(){
        return(

            <div>
                <h6 className="text-primary text-center">Signup</h6>
                <Progress1 completed={60}  style={{width: '500px'}}/>

                <form className="form-control"  onSubmit={this.handleSubmit.bind(this)} style={{width: '500px'}}>

                    <div>

                        <div>
                            <label >DATE OF BIRTH</label>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'left'}}>

                            <div className="dp">
                                <Dropdown
                                    id='myDropdown1'
                                    options={this.options1}
                                    labelField='description'
                                    setSelected={this.props.setSelected}
                                    selected1={this.props.selected1}

                                />
                            </div>

                        <div className="dp">
                            <Dropdown id='myDropdown2'
                                      options={this.options2}
                                      labelField='description'
                                      setSelected={this.props.setSelected}
                                      selected1={this.props.selected1}

                            />
                        </div>

                        <div className="dp">
                            <Dropdown id='myDropdown3'
                                      options={this.options3}
                                      labelField='description'
                                      setSelected={this.props.setSelected}
                                      selected1={this.props.selected1}

                            />
                        </div>
                        </div>

                    </div>

                    <div>    <label >GENDER</label></div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                <RadioButtons
                                    setSelect1={this.props.setSelect1}
                                    select1={this.props.select1}
                                />
                    </div>

                    <div>
                    <label>WHERE DID YOU HEAR ABOUT US?</label>
                        <div className={`form-group ${'has-danger'}`}>
                            <div className="text-help">
                              <h6>this field is optional</h6>
                            </div>
                        </div>
                            <Dropdown id='myDropdown4'
                                  options={this.options}
                                  labelField='description'
                                      setSelected={this.props.setSelected}
                                      selected1={this.props.selected1}

                            />
                    </div>

                    <br/>

                    <div className="line"> </div>

                        <button style={{backgroundColor: 'transparent', border:'transparent',color:'#35b0ff'}} className="left" type="Submit" onClick={this.onSubmit1.bind(this)}>Back</button>

                        <button style={{backgroundColor: 'transparent', border:'transparent',color:'#35b0ff'}} className="right" type="Submit">Next -></button>

                    <br/>
                </form>

            </div>
        )
    }
}

export default SignupForm;
