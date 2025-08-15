import './App.css';
import NavBar from './components/NavBar/NavBar';
// import HomeVideo from './components/HomeVideo/HomeVideo';
// import HeroSection from './components/HeroSection/HeroSection';
import ScrollDown from './components/ScrollDown/ScrollDown';
import ReviewCardCarousel from './components/ReviewCards/ReviewCard';
import ServicesIcons from './components/ServicesIcons/ServicesIcons';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import VisaCarousel from './components/VisaCarousel/VisaCarousel';
import IslandScene from './components/IslandScene/IslandScene';

function App() {
  return (
    <div>
      <IslandScene />
      <NavBar />
      <div id="homepage-hero-section" style={{height: '100vh', background: 'linear-gradient(135deg, #fdf6ee 0%, #f7f7f7 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 80}}>
        <h1 style={{fontFamily: 'Inter, Work Sans, Arial, sans-serif', fontWeight: 900, fontSize: '2.8rem', color: '#222', marginBottom: 16, textAlign: 'center', lineHeight: 1.1}}>
          Make Your <span style={{color:'#ff7c3e', fontStyle:'italic'}}>Summer Vacation</span><br/>Unforgettable!
        </h1>
        <p style={{color:'#6b6b6b', fontSize:'1.1rem', marginBottom:28, maxWidth:480, textAlign:'center'}}>Get your dream trip planned with expert-guided destinations, booking, transport & more — all in one.</p>
        <button style={{background:'#222', color:'#fff', border:'none', borderRadius:24, padding:'0.9em 2.2em', fontSize:'1.1rem', fontWeight:700, cursor:'pointer', boxShadow:'0 2px 8px rgba(0,0,0,0.07)', transition:'background 0.2s'}}>Start Planning</button>
        <div style={{display:'flex', justifyContent:'center', gap:22, marginTop:32, flexWrap:'wrap'}}>
          {[1,2,3,4,5,6].map(i => (
            <img key={i} src={`/foxy_images/foxy${i}.jpg`} alt="Destination" style={{width:150, height:180, objectFit:'cover', borderRadius:22, boxShadow:'0 2px 12px rgba(0,0,0,0.07)', transition:'transform 0.18s'}} />
          ))}
        </div>
      </div>
      {/* Remove review section and carousel grid */}
      <ScrollDown />
      <ServicesIcons />
      <ReviewCardCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
