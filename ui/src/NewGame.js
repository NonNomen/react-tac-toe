import { Outlet } from 'react-router-dom';

export default function NewGame() {
  return (
    <div>
      <h1>New Game</h1>
      <Outlet />
    </div>
  );
}
