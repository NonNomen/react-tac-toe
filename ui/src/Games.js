import { Outlet } from 'react-router-dom';

export default function Games() {
  return (
    <div>
      <h1>Games</h1>
      <Outlet />
    </div>
  );
}
