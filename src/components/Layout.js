import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Outlet />
    </>
  );
}
