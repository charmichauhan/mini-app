import React, {Component,PropTypes} from 'react'
import images from '!!file!../../images/images.jpg'
import Progress from 'react-progressbar';
import Progress1 from './Progress';

class Page extends Component{
    static contextTypes = {
        //router=this.context,router
        router: PropTypes.object
    };

    onSubmit() {
        this.props.setStatus(4);
       // this.context.router.push('/dashboard');
    }
    render(){
        return(
            <div className="form-control"  style={{width: '500px'}}>
                <h6 className="text-primary text-center">Thank you!</h6>
                <Progress1 completed={95}  style={{width: '500px'}} />

                <div >
               <img  className="img-responsive" src={images}/>
                </div>
                <form  onSubmit={this.onSubmit.bind(this)} >
                    <button style={ { width:'150'}}>Go to Dashboard -></button>
                </form>

            </div>
        )
    }
}

export default Page;

// <img src={"<%= asset_url('images/images.jpg') %>"} />

//-->Implementing Frontend-test - miniapp
//-made first signupup page with validation.
//-done routing of all pages.
//- Trying to implement second page.
//-Implementing database connection

//Today's Work:
//-->Implementing miniapp
//-implemented page2 and page3 design.
//-error solving regarding webpack
//-Applied some css.
//-Implementing database connection

//{/*<div class="col-md-6">*/}
 //   {/*<Img class="images" className="img" src={images}/>*/}
//{/*</div>*/}


//back,inner component