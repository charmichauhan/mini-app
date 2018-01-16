var React = require('react');
var NavMenu  = require( './NavMenu');
var ReactDOM = require('react-dom');

var NavMenuButton = React.createClass({

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
    //
    // handleBodyClick: function()
    // {
    //     this.setState({isOpen: false});
    // },

    render: function()
    {
        return (
            <div>
                <button onClick={this.handleClick}>DD</button>
                <NavMenu isOpen={this.state.isOpen} />
            </div>
        );
    }

});

module.exports = NavMenuButton;