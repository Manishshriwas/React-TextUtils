
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';

function App() {

  return (
    <>
      <Navbar title='TextChanger' aboutText="About Us"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below"/>
      </div>

   </>
  );
}

export default App;
