import { useContext, useEffect, useRef } from "react"
import { PostsContext } from './../../contexts/PostsProvider/context';
import { loadPosts } from './../../contexts/PostsProvider/actions';

export const Posts = () => {
    const isMounted = useRef(true)
    const postsContext = useContext(PostsContext)
    const { postsDispatch, postsState } = postsContext

    useEffect(() => {
        loadPosts(postsDispatch).then(dispatch => {
            if (isMounted.current) { 
                dispatch() 
            }
        })
        
        return () => isMounted.current = false
    }, [postsDispatch])

    return (
        <div>
            <h1>olá amiguinho</h1>
            {
                postsState.loading ? <p><strong>Carregando posts ...</strong></p> : null
            }
            {
                postsState.posts.map(
                    p => <p key={p.id}>{p.title}</p>
                )
            }
        </div>
    )
}