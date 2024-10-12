import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomeVideo from './components/HomeVideo/HomeVideo';
import ScrollDown from './components/ScrollDown/ScrollDown';
import ReviewCardCarousel from './components/ReviewCards/ReviewCard';
import ServicesIcons from './components/ServicesIcons/ServicesIcons';
import Footer from './components/Footer/Footer';
import IslandScene from './components/IslandScene/IslandScene';
import AboutUs from './components/AboutUs/AboutUs';
import VisaCarousel from './components/VisaCarousel/VisaCarousel';

function App() {
  return (
    <div>
      <IslandScene />
      <NavBar />
      <HomeVideo />
      <ScrollDown />
      <VisaCarousel />
      <ServicesIcons />
      <ReviewCardCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
