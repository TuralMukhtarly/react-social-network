import React from 'react'

type PostItemType = {
    post: string
    likesCount: number
}

function Posts(props: PostItemType) {
    return (
        <div>
            <div className='item'>
                {props.post}
            </div>
            <div> {props.likesCount}</div>
        </div>
    )
}

export default Posts
