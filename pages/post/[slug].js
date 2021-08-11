
export const getStaticPaths = async () => {
    const res = await fetch('https://mbook-backend.herokuapp.com/posts')
    const data = await res.json()

    const paths = data.map(post => {
        return {
            params: { slug: post._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.slug
    const res = await fetch('https://mbook-backend.herokuapp.com/post/' + id)
    const data = await res.json()

    return {
        props: { getpost: data[0] }
    }
}

const Post = ({ getpost }) => {
    return (
        <div>
            <h2>
                Details page
            </h2>
            <div>
                <h4>{getpost.title}</h4>
                <p>{getpost.post}</p>
            </div>
        </div>
    )
}

export default Post
