import logo from './logo.svg';
import './App.css';
import TextUtilsFeatures from './Components/TextUtilsFeatures';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {

  const appStyle = {
    display : 'flex',
    flexDirection : 'column',
    minHeight : '100vh',
  }
  return (
    <>
    <div style={appStyle}>
    <Header/>
    <TextUtilsFeatures/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
