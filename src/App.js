import './App.css';
import Header from './header';
import Aboutme from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App max-w-screen-md mx-auto">
       <Header/>
       <Aboutme/>
       {/* <Projects/> */}
       <Footer/>

    </div>
  );
}

export default App;
