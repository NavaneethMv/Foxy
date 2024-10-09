import './App.css';
import NavBar from './components/NavBar/NavBar';
import ScrollDown from './components/ScrollDown/ScrollDown';
import ReviewCardCarousel from './components/ReviewCards/ReviewCard';
import HomeVideo from './components/HomeVideo/HomeVideo';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeVideo></HomeVideo>
      <ScrollDown></ScrollDown>
      <ReviewCardCarousel />

    </div>
  );
}

export default App;
