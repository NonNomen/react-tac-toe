import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
