import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>
                        {props.post.title}
                        {props.post.id}
                    </strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btn">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default PostItem;