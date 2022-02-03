import React, { useState} from "react";
import uniqid from 'uniqid'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {storage} from "./firebase"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


function AddPost() 
    {
        const [progress, setProgress] = useState(0);
        const formHandler = (e) => {
          e.preventDefault();
          const file = e.target[0].files[0];
          uploadFiles(file);
        };

        const uploadFiles = (file) => {
            //
            if (!file) return;
            const sotrageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(sotrageRef, file);
        
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const prog = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
              },
              (error) => console.log(error),
              () => {                
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log("File available at", downloadURL);
                  setLink(downloadURL);                        
                });                
              }
            );
          };

        const [title, setTitle] = useState('')
        const [link, setLink] = useState('')
        const [imageurl, setImageurl] = useState('')
        const [description, setDescription] = useState('')
        const navigate = useNavigate();      

        function addpost(){
            var post = {
                title: title,
                link: link,
                imageurl: imageurl,
                description: description,
                postid: uniqid()
            }
            const abortCont = new AbortController();
            axios.post('api/post/addnewpost', post, {signal: abortCont.signal }).then(res => {
                alert(res.data)
                navigate("/postlist");
            }).then(err => {
                console.log()
            })    
            return () => abortCont.abort();      
        }        

    return (  
      <body className="background-image3 ">
        <div className="container contain mt-5 col-md-4   ">
       
          <div className="row ">                          
                    <h1 className="add mb-3">Agregar Track</h1>
                    <form onSubmit={formHandler}>
                        <input  type="file" className=" form-control " />                        
                        <button className="btn btn-primary rounded-pill mt-2 mb-2" type="submit">Subir Track</button>    
                        <p className="uploadbar title">Uploading done {progress}%</p>                        
                    </form>    
                
                  <div className="col-lg-12 mt-2 border-top px-4">
                    <div className="row g-3 ">
                          <input type="text" placeholder="Nombre del productor" className="g-4 mt-4 form-control"
                          value={title} onChange={(e) => {setTitle(e.target.value)}}
                          />
                          <input type="text" placeholder='vinculo' className="form-control" hidden
                          value={link} onChange={(e) => {setLink(e.target.value)}}
                          />
                          <input type="text" placeholder="URL de la imagen" className="form-control"  
                          value={imageurl} onChange={(e) => {setImageurl(e.target.value)}}                    
                          />                                
                          <textarea rows="3" placeholder="Descripcion" className="form-control"
                          value={description} onChange={(e) => {setDescription(e.target.value)}}                    
                          />                      
                        </div>

                      <div className="mt-2 ">
                          <button onClick={addpost} className="btn rounded-pill mb-4 mt-2 " id="addbtn" >Add to Tracklist</button>
                        </div>
                    </div>

          </div>
        </div>
     </body>
     
    );
}
 
export default AddPost