import {Routes, Route} from 'react-router-dom'
import Main from '../Main/Main.js'
import Films from '../Films/Films'
import Places from '../Places/Places.js';
import Header from '../Header/Header.js'
import Weather from '../Weather/Weather.js';

export default function App() {
  const appTitle = "Test App"
  const data=[{
    country:'Japan',
    city: 'Tokyo'
  },
{
    country:'United States',
    city: 'Los Angeles'
  },
{
    country:'Poland',
    city: 'Lodz'
  },
  {
    country:'Norway',
    city: 'Trondheim'
  },
{
    country:'Australia',
    city: 'Sydney'
  }]
  return (
      <>
      <Header appTitle={appTitle}/>
      <Routes>
        <Route path="/" element={<Main data={data}/>} />
        <Route path="/films" element={<Films />} />
        <Route path="/places" element={<Places />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}
