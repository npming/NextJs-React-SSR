import React from 'react'
import axios from 'axios'
// import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'

const Post = (props) => {
    // const router = useRouter();
    // // for dynamic routes
    // const {slug} = router.query;
    function createMarkup() {
      return {__html: props.blogData.content};
    }

  return (
    <div className={styles.blogWrapper}>
      <h2>Title: <i style={{textDecoration: 'underline'}}>{props.blogData.title}</i></h2>
      <h3>Author: {props.blogData.author}</h3>
      <p>{<div dangerouslySetInnerHTML={createMarkup()} />}</p>
    </div>
  )
}

// for server side rendering **************************************
export async function getServerSideProps(context) {
    let author = context.query.slug;
    // calling getblog api to fetch content
    const blogApi = await axios.get(`http://localhost:3000/api/getblog?author=${author}`)
    let blogData = blogApi.data
  return {
    props: {blogData}, // will be passed to the page component as props
  }
}

export default Post