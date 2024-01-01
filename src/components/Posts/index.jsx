import { useContext, useEffect } from "react"
import { PostsContext } from './../../contexts/PostsProvider/context';
import { loadPosts } from './../../contexts/PostsProvider/actions';

export const Posts = () => {
    const postsContext = useContext(PostsContext)
    const { postsDispatch, postsState } = postsContext

    useEffect(() => {
        loadPosts(postsDispatch)
    }, [postsDispatch])

    return (
        <div>
            <h1>olá amiguinho</h1>
            {
                postsState.posts.map(
                    p => <p key={p.id}>{p.title}</p>
                )
            }
        </div>
    )
}