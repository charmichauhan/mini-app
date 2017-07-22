import React ,{ Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component{

    static contextTypes = {
        //router=this.context,router
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
    .then(() => {
            //blog post has been created, navigate the user to the index
            //we navigate by calling this.context.router.push with the new path to navigate
            this.context.router.push('/');
            //'/' indicates to naviagate back to index page
        });

    }

    render(){
        const {post} =  this.props;
       // console.log(this.props.post);
        if(!post){
            return<div>Loading..</div>;
        }

        return (
            //<div> Show Post {this.props.params.id} </div>
            <div>
                <Link to="/"> Back to Index </Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                 <h6> Categories: {post.categories} </h6>
                <p>{post.content}</p>
            </div>
    );
    }
}

function mapStateToProps(state) {
    return{post : state.posts.post}
}
export default connect(mapStateToProps , {fetchPost, deletePost}) (PostsShow);