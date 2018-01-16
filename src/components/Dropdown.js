import React, {Component,PropTypes } from 'react';

var Dropdown = React.createClass({

    propTypes: {
        id:PropTypes.string.isRequired,
        options:PropTypes.array.isRequired,
        value: PropTypes.oneOfType(
            [
                PropTypes.number,
                PropTypes.string
            ]
        ),
        valueField: PropTypes.string,
        labelField:PropTypes.string,
        onChange: PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: null,
            valueField: 'value',
            labelField: 'label',
            onChange: null,
            index1:'',
        };
    },

    getInitialState: function() {
        var selected = this.getSelectedFromProps(this.props);
        return {
            selected: selected
        }
    },

    componentWillReceiveProps: function(nextProps) {
        var selected = this.getSelectedFromProps(nextProps);
        this.setState({
            selected: selected
        });
    },
    getSelectedFromProps(props) {
        var selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    },

    render: function() {
        var self = this;
        var options = self.props.options.map(function(option) {
            return (
                <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
                    {option[self.props.labelField]}
                </option>
        )
        });

        return (
            <div>
            <div>
            <select id={this.props.id}
                    className='form-control'
                    value={this.state.selected}
                    onChange={this.handleChange}>
                {options}
            </select>
            </div>
            </div>
        )
    },

    handleChange: function(e) {
        if (this.props.onChange) {
            var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
            };
            this.props.onChange(change);
        }
        let selectedvalue=this.props.selected1;
        if(!selectedvalue[this.props.id])
        {
            selectedvalue={...selectedvalue,[this.props.id]:e.target.value};
        }
        else
        {
            selectedvalue[this.props.id]=e.target.value;
        }
        console.log(selectedvalue)
        this.props.setSelected(selectedvalue);

    // this.setState({selected1: e.target.value},()=>{
    //
    //     console.log('selected value is',this.state.selected1);
    // });

    }
});

module.exports = Dropdown;


