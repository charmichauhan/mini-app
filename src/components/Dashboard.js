import React ,{ Component , PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
// class Dashboard extends Component{
//
//     // constructor(props){
//     //     super(props);
//     //     this.state= {
//     //         name : this.props.name
//     //     }
//     // }
//     // componentWillReceiveProps(nextProps){
//     //     this.setState({
//     //         name: nextProps.name
//     //     })
//     // }
//     // static contextTypes = {
//     //     //router=this.context,router
//     //     router: PropTypes.object
//     // };
//
//     // componentWillMount(){
//     //     this.props.getData(this.props.params.id);
//     // }
//     // propTypes ={
//     //
//     //     email:PropTypes.string.isRequired
//     //
//     // };
//     // handleLangChange () {
//     //     var lang = this.refs.dropdown.value;
//     //     this.props.onSelectLanguage(lang);
//     // }
//     // demoMethod(){
//     //     this.props.handleValue(value);
//     // }
//     render(){
//         // const {post} =  this.props;
//          //console.log(this.props.post);
//         // if(!post){
//         //     return<div>Loading..</div>;
//         // }
//        // console.log(this.props.email);
//         if(!this.props.index){
//             return (
//
//                 <div>
//                     <Link to="/page"> Back to Index </Link>
//                     <br/>
//                     Your Details:
//                 <br/>
//                 </div>
//             );
//         }
//         else{
//             return(<div>
//
//             </div>)
//         }
//     }
// };
//
// export default Dashboard;

// function mapStateToProps(state) {
//     return{post : state.posts.post}
// }
// export default connect(mapStateToProps , {getData}) (Dashboard);
//onChange={ (event) =>this.setState({email:event.target.value})}

//const Dashboard = (props) => {
class Dashboard extends Component{

    constructor(props){
        super(props)

        this.state= {selected2: {}}
    }
    renderData(){

            return(
            <div>
            {messageNodes}
            </div>)
    }


render()
    {
        console.log('Dashboard : ', this.props);
        console.log('Dashboard1 : ',this.props.email);
        console.log('values', this.props.selected1);
        console.log('Gender', this.props.select1);

        const selected1 = this.props.selected1;
        this.setState({selected2:this.props.selected1});

        var messageNodes = _.values(this.state.selected2).map((message, index)=> {
            return (
                <div>
                    {message}
                </div>
            )
        });
        // const email1 = this.props.email;
        // console.log(email1)
        // const email2 = JSON.stringify(email1)
        // console.log(email2)

        if (!this.props.index1) {
            return (
                <div>
                    <Link to="/page"> Back to Index </Link>
                    <br/>
                    Your Details:
                    <br/>
                    Email: "{this.props.email}",
                    <br/>
                    Gender: "{this.props.select1}",
                    <br/>
                Here are the data you selected:
                    <br/>
                    Data: {messageNodes}
                </div>
            )
        }
        else {return(
            <div>
            </div>)
        }
    }
}
export default Dashboard;


