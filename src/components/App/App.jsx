import {Routes, Route} from 'react-router-dom'
import Main from '../Main/Main.js'
import Games from '../Games/Games.js'
import Places from '../Places/Places.js';
import Header from '../Header/Header.js'
import CarouselComponent from '../Carousel/Carousel.js';
import FadeTest from '../FadeTest/FadeTest.js';
import Quotes from '../Quotes/Quotes.js';


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
        <Route path="/destinations" element={<Places />} />
        <Route path="/carousel" element={<CarouselComponent />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/games" element={<Games />} />
        <Route path="/fade" element={<FadeTest/>} />
      </Routes>
    </>
  );
}
