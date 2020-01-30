import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Post(props) {

    const [post, setPost] = useState();

    console.log("id på den post som skal vises her", props.match.params.postid);
    


// når component render, re-render
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ props.match.params.postid)
    .then(res => {

        const response = res.data;
        setPost(response);

      });
      
    }, []);

    

    let posten = "";

  
    if ( post  !== undefined) {
        posten = (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            )
    }
    

    return (
        <div>
            {posten}
        </div>
    )

}

export default Post