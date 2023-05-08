import { Outlet } from 'react-router-dom';

import Header from '../components/layout/header';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}