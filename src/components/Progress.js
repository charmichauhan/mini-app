// import React from "react";
// import Progress from "react-progress-2";
//
// var Layout = React.createClass({
//     render: function() {
//         return (
//             <div className="layout">
//                 <Progress.Component/>
//                 {/* other components go here*/}
//             </div>
//         );
//     }
// });

import React, {Component,PropTypes } from 'react';
//import PropTypes from 'prop-types';

class Progress1 extends React.Component {

    static propTypes = {
        completed: ((props, propName) => {
            if (typeof props[propName] !== 'number')
                return Progress.throwError('Invalid Props: "completed" should ∈ ℝ ');
            if( props[propName] < 0 || props[propName] > 100) {
                return Progress.throwError('Invalid Props: "completed" should be between 0 and 100' );
            }
        }),
        color: PropTypes.string,
        animation: PropTypes.number,
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };

    static defaultProps = {
        completed: 0,
        color: '#35b0ff',
        animation: 200,
        height: 10,

    };

    static throwError() {
        return new Error(...arguments);
    }

    render () {
        const {color, completed, animation, height, className, children, ...rest} = this.props;
        const style = {
            backgroundColor: color,
            width: completed + '%',
            transition: `width ${animation}ms`,
            height: height
        };

        return (
            <div style={{alignItems: 'center'}} className={className || "progressbar-container"} {...rest}>
                <div className="progressbar-progress" style={style}>{children}</div>
            </div>
        );
    }
}

export default Progress1;