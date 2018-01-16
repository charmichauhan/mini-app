var React = require('react');
var Dropdown = require('./Dropdown');

var MonthMenu = React.createClass({
    options : [
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
    ],
    getDefaultProps: function()
    {
        return {
            isOpen: true
        };
    },

    render: function()
    {
        if (this.props.isOpen === true)
        {
            return (
                <Dropdown id='myDropdown'
                          options={this.options}
                          labelField='description'
                />
            );
        }
        return null;
    }
});

module.exports = MonthMenu;
