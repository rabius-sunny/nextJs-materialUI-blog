
export const getStaticProps = async () => {
    const res = await fetch('https://mbook-backend.herokuapp.com/posts')
    const data = await res.json()

    return {
        props: { posts: data }
    }
}

const Post = ({ posts }) => {
    return (
        <div>
            {
                posts.slice(5).map(post => <h4>{post.title}</h4>)
            }
        </div>
    )
}

export default Post
