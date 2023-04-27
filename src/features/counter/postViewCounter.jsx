import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../postSlice/postSlice';

const PostViewCounter = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => (
          <section key={post.id}>
            <article>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </article>
          </section>
        ))}
    </div>
  );
}

export default PostViewCounter;
