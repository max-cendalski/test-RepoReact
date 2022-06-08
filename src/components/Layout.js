import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  const appTitle = "Test App"
  return (
    <main className="App">
        <Header appTitle={appTitle}/>
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout;
