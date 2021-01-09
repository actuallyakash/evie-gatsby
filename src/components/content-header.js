import React, {Fragment} from 'react'
import { Link } from 'gatsby'

const ContentHeader = ( props ) => {
  
  return (
    <Fragment>
    {props.data.thumbnail ?
      <div className="container center article__header">

        <small className="article__breadcrumbs">
            <small className="article__breadcrumbs">
              <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt; {props.data.title}
            </small>
        </small>

        <h1 className="article__header__title">{props.data.title}</h1>
        
        {props.data.author &&
        <div className="user__info">
            {props.data.authorPic &&
            <div className="user__img__container">
              <img src={props.data.authorPic} alt={props.data.author} />
            </div>}
            <span className="user__name">
              by <span className="author stress"><Link to={`/search?s=${props.data.author}`}>{props.data.author}</Link></span>
            </span>
        </div>}
        
        <div className="page__header__image">
          <div className="post-thumbnail">
            <img width="1400" height="880" src={props.data.thumbnail.publicURL} className="featured-image" alt={props.data.thumbnail.name} />
          </div>
        </div>

      </div>

    :
    
    <div className="page__header">
        <div className="hero__overlay hero__overlay--gradient"></div>
        <div className="hero__mask"></div>
        <div className="page__header__inner">
            <div className="container">
                <div className="page__header__content">
                    <div className="page__header__content__inner" id='navConverter'>
                      <h1 className="page__header__title">{props.data.title}</h1>
                      <p className="page__header__text">
                        <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt; {props.data.title}
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    }
    </Fragment>
  )
}

export default ContentHeader