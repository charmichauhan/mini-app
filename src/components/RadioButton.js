import React from 'react';
//import ReactDOM from 'react-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class RadioButtons extends React.Component{
constructor(props){
    super(props);
        this.state = {

         }
}
    onChange(value) {
        console.log(value);
        const select1 = value;
        this.props.setSelect1(select1);
    }
    getInitialState() {
        return {
            selectedOption: 'Male'
        };
    }
    render() {
        return (
            <div >

                <RadioGroup onChange={ this.onChange } horizontal>
                    <RadioButton value="Male" >
                        Male
                    </RadioButton>
                    <RadioButton value="Female">
                        Female
                    </RadioButton>
                    <RadioButton value="Specified">
                        Specified
                    </RadioButton>
                </RadioGroup>

            </div>
        );
    }
};

export default RadioButtons;