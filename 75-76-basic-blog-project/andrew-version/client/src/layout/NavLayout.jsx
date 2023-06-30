import { Navbar } from '../components/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';

export function NavLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading' ? true : false;

  return (
    <>
      <Navbar />
      {isLoading && <div className='loading-spinner'></div>}
      <div className={`container ${isLoading ? 'loading' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
