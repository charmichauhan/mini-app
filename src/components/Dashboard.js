import React ,{ Component , PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state= {selected2: {}}
    }
    renderData(){
            // return(
            // <div>
            // {messageNodes}
            // </div>)
        this.props.getData();
    }


render()
    {
        // const selected1 = this.props.selected1;
        // this.setState({selected2:this.props.selected1});
        // var messageNodes = _.values(this.state.selected2).map((message, index)=> {
        //     return (
        //         <div>
        //             {message}
        //         </div>
        //     )
        // });
        // if (!this.props.index1) {
        //     return (
        //         <div>
        //             <Link to="/page"> Back to Index </Link>
        //             <br/>
        //             Your Details:
        //             <br/>
        //             Email: "{this.props.email}",
        //             <br/>
        //             Gender: "{this.props.select1}",
        //             <br/>
        //         Here are the data you selected:
        //             <br/>
        //             Data: {messageNodes}
        //         </div>
        //     )
        // }
        // else {return(
        //     <div>
        //     </div>)
        // }
        return(
            <div>
                Welcome!!
                {this.renderData()}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getData}, dispatch)
}
export default connect(null, {getData})(Dashboard);