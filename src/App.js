import './App.css';
import Header from './header';
import Aboutme from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App max-w-screen-md mx-auto p-4 pl-16 pr-16 md:p-4">
       <Header/>
       <Aboutme/>
       {/* <Projects/> */}
       <Footer/>

    </div>
  );
}

export default App;
