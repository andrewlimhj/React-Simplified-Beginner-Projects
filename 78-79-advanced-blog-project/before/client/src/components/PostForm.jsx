import { Form, useNavigation } from 'react-router-dom';
import { useState } from 'react';

export function PostForm({
  errorMessage,
  innitialTitle,
  initialBody,
  initialAuthor,
}) {
  const [title, setTitle] = useState(innitialTitle);
  const [body, setBody] = useState(initialBody);
  const [author, setAuthor] = useState(initialAuthor);
  const { state } = useNavigation();
  const isSubmitting = state === 'submitting' || state === 'loading';

  function handleChange(event) {
    if (event.target.id === 'title') setTitle(event.target.value);
    if (event.target.id === 'body') setBody(event.target.value);
    if (event.target.id === 'userId') setAuthor(event.target.value);
  }

  return (
    <>
      <Form method='post' className='form'>
        <div className='form-row'>
          <div
            className={errorMessage?.title ? 'form-group error' : 'form-group'}
          >
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={handleChange}
            />
            <div className='error-message'>
              {errorMessage ? errorMessage.title : null}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select
              name='userId'
              id='userId'
              value={author}
              onChange={handleChange}
            >
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
        </div>
        <div className='form-row'>
          <div
            className={errorMessage?.body ? 'form-group error' : 'form-group'}
          >
            <div className='form-group'>
              <label htmlFor='body'>Body</label>
              <textarea
                name='body'
                id='body'
                value={body}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='error-message'>
              {errorMessage ? errorMessage.body : null}
            </div>
          </div>
        </div>

        <div className='form-row form-btn-row'>
          <a className='btn btn-outline' href='/posts'>
            Cancel
          </a>
          <button disabled={isSubmitting} className='btn'>
            {isSubmitting ? 'Loading' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}
