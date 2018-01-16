var React = require('react');
var Dropdown = require('./Dropdown');
var NavMenu = React.createClass({

    options : [
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
    ],
    getDefaultProps: function()
    {
        return {
            isOpen: false
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

module.exports = NavMenu;

// var indents = [];
// for (var i = 0; i < this.props.level; i++) {
//     indents.push(<span className='indent' key={i}></span>);
// }
// return (
//     <div>
//         {this.props.level.map((item, index) => (
//             <span className='indent' key={index} />
//         ))}
//
//     </div>
// );