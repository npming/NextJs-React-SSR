import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import axios from 'axios'

const Blog = (props) => {

  const [apiData, setApiData] = React.useState(props.blogsData)

  // React.useEffect(()=>{
  //   setApiData(props.blogsData)
  //   console.log("loaded");
  // }, [])

  return (
    <div className={styles.blogWrapper}>
      {/* home page grid */}
      <div className={styles.grid}>
        { apiData && apiData.length ? apiData.map((item, i) => <div key={i} className={styles.card}>
            <Link href={`/blogpost/${item.author}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>) 
        : null }
      </div>
    </div>
  )
}

// for server side rendering ********************************************
export async function getServerSideProps(context) {
    let blogsData
    const blogs = await axios.get('http://localhost:3000/api/blogs')
    if(blogs.status === 200) {
      blogsData = blogs.data
    } else {
      blogsData = 'try again later'
    }
  
  return {
    props: {blogsData}, // will be passed to the page component as props
  }
}

export default Blog