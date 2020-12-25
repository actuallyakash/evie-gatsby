import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout layoutClass="single__page">

            <Head title="404" />

            <h1>Page not found</h1>
            <p><Link to="/">Home</Link></p>
        </Layout>
    )
}

export default NotFound