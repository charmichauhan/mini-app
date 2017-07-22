import React, {Component, PropTypes} from 'react';
import {reduxForm   } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component{

    static contextTypes = {
        //router=this.context,router
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
        .then(() => {
            //blog post has been created, navigate the user to the index
            //we navigate by calling this.context.router.push with the new path to navigate
            this.context.router.push('/');
            //'/' indicates to naviagate back to index page
            });
    }
    render() {
        const  {fields:{title,categories,content} ,handleSubmit}=this.props;
       // console.log(title);
         //const title = this.props.fields.title;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error :  ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error :  ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error :  ''}
                    </div>
                </div>

                <button type="Submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>

        );
    }
}

function validate(values) {
    const errors = {};
    if(!values.title){
        errors.title = 'enter a username';
    }
    if(!values.categories){
        errors.categories = 'enter categories';
    }
    if(!values.content){
        errors.content = 'enter some content';
    }

    return errors;

}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],validate}
    ,null ,{createPost})(PostsNew);

// state === {
//     form:{
//         PostsNewForm:{
//             title: '....',
//             categories:'....',
//             content: '....'
//         }
//     }
// }