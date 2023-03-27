import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    console.log(props);

    // document.getElementById('removeBtn').addEventListener('click', props.remove(props.post))

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>
                        {props.number}.  
                        {props.post.title}
                    </strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btn">
                    <MyButton id="removeBtn" onClick={() => props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
}

export default PostItem;