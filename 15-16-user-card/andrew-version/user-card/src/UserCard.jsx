export function UserCard({ name, age, phone, address }) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className='body'>
        <div className='label'>Age:</div>
        <div>{age}</div>
        <div className='label'>Phone:</div>
        <div>{phone}</div>
        <div className='label'>Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
}
