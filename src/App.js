import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomeVideo from './components/HomeVideo/HomeVideo';
import ScrollDown from './components/ScrollDown/ScrollDown';
import ReviewCardCarousel from './components/ReviewCards/ReviewCard';
import ServicesIcons from './components/ServicesIcons/ServicesIcons';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <HomeVideo />
      <ScrollDown />
      <ServicesIcons />
      <ReviewCardCarousel />
      <Footer />
    </div>
  );
}

export default App;
