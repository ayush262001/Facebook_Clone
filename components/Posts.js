import { useEffect, useState } from 'react';
import { db } from '../firebase';
import PostShow from './PostShow';

function Posts() {
    const [postsArr, setPostsArr] = useState([]);

    

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPostsArr(snapshot.docs.map( doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
  }, [] )


    return (
        <div>

            {
                postsArr.map(({id , data: {name, message, email, postImage, image, timestamp} }) => (
                   <PostShow
                   key={id}
                   name={name}
                   email={email}
                   message={message}
                   postImage={postImage}
                   image={image}
                   timestamp={timestamp} />
                ))
            }
        </div>
    )
}

export default Posts
