var React = require('react');
var MonthMenu  = require( './MonthMenu');
var ReactDOM = require('react-dom');

var MonthMenuButton = React.createClass({

    getInitialState: function()
    {
        return {
            isOpen: false
        };
    },

    handleClick: function(e)
    {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    },

    // componentDidMount: function ()
    // {
    //     document.body.addEventListener('click', this.handleBodyClick);
    // },


    // handleBodyClick: function()
    // {
    //     this.setState({isOpen: false});
    // },

    render: function()
    {
        return (
            <div>
                <button onClick={this.handleClick}>MM</button>
                <MonthMenu isOpen={this.state.isOpen} />
            </div>
        );
    }

});

module.exports = MonthMenuButton;