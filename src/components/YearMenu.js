var React = require('react');
var Dropdown = require('./Dropdown');

var YearMenu = React.createClass({
    options : [
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

module.exports = YearMenu;
