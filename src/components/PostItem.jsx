import {Link} from 'react-router-dom'
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';


const PostItem = ({post}) => {   

   function deletepost(postid){
      
      axios.post('/api/post/deletepost', {postid: postid}).then(res => {
         alert(res.data)
         window.history.go(0);
      }).catch(err => {
         console.log(err)
      })
   };
       return (       
               <div className='container postlist mt-4 mb-4'>
                   <div className=' contain col-md-6 mx-auto '>   
                     <div className="intobox">
                        <div className='row'>
                           <div className="col img ">
                              <img src={post.imageurl} className="image ms-3" alt="" /> 
                           </div>

                           <div className='col-md-8'>
                              <div className="col-sm-12">
                                 <h1 className="title">{post.title}</h1> 
                              </div>
                                    
                              <div className="col-sm-12">
                                 <p className="description">{post.description}</p>     
                              </div>
                           </div>
                                             
                        </div>

                        <div className="row px-4">
                           <ReactAudioPlayer className='mt-1 rowplayer col-md-12'  src={post.link} controls preload='none' /> 
                           <div className='buttons'  >
                              <Link to={`/editpost/${post.postid}`}><li className="btn btn-info m-1 rounded-pill ">Edit</li></Link>
                              <button className="btn btn-danger m-1 rounded-pill" onClick={()=>{deletepost(post.postid)}}>Delete</button>
                           </div>
                        </div>                  

                     </div>           
                  </div>
             </div>
            
              
     );
}
 
export default PostItem;