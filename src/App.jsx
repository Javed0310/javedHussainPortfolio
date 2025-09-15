
import './App.css'
import './index.css'
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import Contact from './components/contactUs/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';


function App() {

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
