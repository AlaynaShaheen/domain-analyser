
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/Aboutus';
import StepsLayout from './components/StepsLayout';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';

function App() {
  return (
    <div>
    <Navbar />
    <Hero/>
    <About/>
    <StepsLayout />
    <FAQs />
    <Footer />
    <CopyRight />
    </div>
  );
}

export default App;
