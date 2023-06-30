import { Link } from 'react-router-dom';

export function User({ name, website, email, link }) {
  const path = link.toString();
  return (
    <div className='card'>
      <div className='card-header'>{name}</div>
      <div className='card-body'>
        <div>{name}</div>
        <div>{website}</div>
        <div>{email}</div>
      </div>
      <div className='card-footer'>
        <Link to={path} className='btn'>
          View
        </Link>
      </div>
    </div>
  );
}
