import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  const appTitle = "Test App"
  return (
    <>
      <Header appTitle={appTitle}/>
      <Navbar />
      <main className="App">
        <Outlet />
    </main>
    </>
  )
}

export default Layout;
