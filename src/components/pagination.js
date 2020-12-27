import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ data }) => {

  const { currentPage, numPages } = data
  const firstPage = currentPage === 1
  const lastPage = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <nav className="navigation pagination" role="navigation" aria-label="Posts">
        <h2 className="screen-reader-text">Posts navigation</h2>
        <div className="nav-links">
            {!firstPage &&
            <Link className="next page-numbers" to={`/${prevPage}`} rel="prev">&lt; Prev</Link>
            }
            {!lastPage &&
            <Link className="next page-numbers" to={`/${nextPage}`} rel="next">Next &gt;</Link>
            }
        </div>
    </nav>
  )
}

export default Pagination