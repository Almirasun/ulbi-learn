import React from 'react';
import PostItem from "./PostItem";


const PostList = ({ almira, sagynbek }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
                {sagynbek}
            </h1>
            {almira.map(post =>
                <PostItem post={post} key={post.id} />
            )}
        </div>
    );
}

export default PostList;