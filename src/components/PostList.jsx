import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";




function PostList() 
{
const [navbar, setNavbar] = useState(false);
   
const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else {
      setNavbar(false);
    }
  };
  
  window.addEventListener('scroll', changeBackground);
  
    
    const[postsdata, setpostsdata] = useState([])

    useEffect(() => {       
        axios.get('/api/post/getposts', ).then(res => 
            {
            console.log(res.data)
            setpostsdata(res.data)
        }).catch(err => 
            {
            console.log(err)
        })        
    }, [])

    const postlist = postsdata.map(post => {
        return(
            
            <div key={post.postid} >
                <PostItem post={post}  />
            </div>            
        )
    })

    return (
        
            <section className="background-image2 " >
                <h1 className="add pt-3 pb-3 text-white border-bottom ">Chicago Track-List</h1>
                 {postlist}     
            </section>
         
           
      
      );
}
 
export default PostList;