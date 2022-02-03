import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import playerContext from '../../context/playerContext'
import TrackItem from '../TrackItem'

function Playlist() {
  const { SetCurrent, currentSong } = useContext(playerContext)


  
    const [posts, setPosts] = useState([]);
  
    const loadData = async () => {
      try {
        let res = await axios.get(`api/post/getposts`);
        setPosts(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }}
  
  
    useEffect(() => {
      loadData();
    }, []);
  
  return (
    <div className="playlist no_drag">
      {/* <div className="header">
        <h4 className="pltext">Songs by artist</h4>
      </div> */}
      
      <ul className="loi">
        {posts.map((post, i) => (
          <li
            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
            <div className="tmbn_song">
              <i className="fas fa-play"></i>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{post.title}</span>
              <span className="songauthors">{post.description}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
                <i className="far fa-heart fa-lg"></i>
              </button>
              <button className="options_song playlist_btn">
                <i className="fas fa-ellipsis-v fa-lg"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist;
