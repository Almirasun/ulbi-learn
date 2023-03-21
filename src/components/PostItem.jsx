import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>JavaScript 1</strong>
                    <div>Description</div>
                </div>
                <div className="post__btn">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default PostItem;