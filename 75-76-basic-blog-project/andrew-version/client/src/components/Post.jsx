import { Link } from 'react-router-dom';

export function Post({ title, body, link }) {
  const path = link.toString();

  return (
    <div className='card'>
      <div className='card-header'>{title}</div>
      <div className='card-body'>
        <div className='card-preview-text'>{body}</div>
      </div>
      <div className='card-footer'>
        <Link to={path} className='btn'>
          View
        </Link>
      </div>
    </div>
  );
}
