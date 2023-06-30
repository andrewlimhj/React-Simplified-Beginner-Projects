import { useLoaderData, Link, Form, useNavigation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getPosts, getPostQuery } from '../api/posts';
import { PostCard } from '../components/PostCard';

function PostList() {
  const { query, posts } = useLoaderData();
  const { state } = useNavigation();
  const queryRef = useRef();

  useEffect(() => {
    console.log(query);
    queryRef.current.value = query;
  }, [query]);

  return (
    <>
      <h1 className='page-title'>
        Posts
        <div className='title-btns'>
          <Link className='btn btn-outline' to='/posts/new'>
            New
          </Link>
        </div>
      </h1>
      <Form method='get' action='/posts' className='form mb-4'>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='query'>Query</label>
            <input type='search' name='query' id='query' ref={queryRef} />
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select type='search' name='userId' id='userId'>
              <option value=''>Any</option>
              <option value='1'>Leanne Graham</option>
              <option value='2'>Ervin Howell</option>
              <option value='3'>Clementine Bauch</option>
              <option value='4'>Patricia Lebsack</option>
              <option value='5'>Chelsey Dietrich</option>
              <option value='6'>Mrs. Dennis Schulist</option>
              <option value='7'>Kurtis Weissnat</option>
              <option value='8'>Nicholas Runolfsdottir V</option>
              <option value='9'>Glenna Reichert</option>
              <option value='10'>Clementina DuBuque</option>
            </select>
          </div>
          <button className='btn'>Filter</button>
        </div>
      </Form>
      {state === 'loading' ? (
        'Loading...'
      ) : (
        <div className='card-grid'>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get('query') || '';
  const userId = searchParams.get('userId') || '';

  if (query || userId) {
    return {
      query: query,
      posts: await getPostQuery({ query, userId, signal }),
    };
  } else {
    return {
      query: query,
      posts: await getPosts({ signal }),
    };
  }
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
