import React, {Fragment} from 'react'

import Post from '../components/post'

const Archive = ( props ) => {

  return (
    <div className="evie-posts row">

    {/* looping the posts */}
    {props.data.map( (post, index) => {
      
      // Clearfix Fix
      if( ( ( index + 1 ) % 3 ) === 0 ) {
        return(
          <Fragment key={index}>
            <Post key={post.node.id} id={post.node.id} data={post.node} />
            <div className="clearfix"></div>
          </Fragment>
        )
      }
      
      return <Post key={post.node.id} id={post.node.id} data={post.node} />
    })}
    
  </div>
  )
}

export default Archive