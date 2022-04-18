import {Routes, Route} from 'react-router-dom'
import Main from '../Main/Main.js'
import Films from '../Films/Films'
import Places from '../Places/Places.js';
import Header from '../Header/Header.js'
import Weather from '../Weather/Weather.js';

export default function App() {
  const appTitle = "Test App"
  return (
      <>
      <Header appTitle={appTitle}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films" element={<Films />} />
        <Route path="/places" element={<Places />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}
