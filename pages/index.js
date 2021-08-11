import { Button, Container, Grid } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://mbook-backend.herokuapp.com/posts')
  const data = await res.json()

  return {
    props: { posts: data }
  }
}
const Home = ({ posts }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Shared Islam Blog</title>
        <meta name="description" content="Islamic Blog from Various Writer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <Container>
          <h1>Islamic Blog</h1>
          <Button href="/post" color="primary" variant="contained">dkfjd</Button>
          <Grid container spacing={3}>
            {
              posts.slice(5).map(post => <Link href={`/post/${post._id}`} key={post._id}><a><Card key={post._id} post={post} /></a></Link>)
            }
          </Grid>
        </Container>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home