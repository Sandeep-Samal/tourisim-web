import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
