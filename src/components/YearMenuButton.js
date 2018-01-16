var React = require('react');
var YearMenu  = require( './YearMenu');
var ReactDOM = require('react-dom');

var YearMenuButton = React.createClass({

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
                <button onClick={this.handleClick}>YY</button>
                <YearMenu isOpen={this.state.isOpen} />
            </div>
        );
    }

});

module.exports = YearMenuButton;