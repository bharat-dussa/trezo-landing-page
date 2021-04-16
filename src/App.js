import logo from './logo.svg';
import Header from '../src/components/Homepage/Header'
import Card from '../src/components/Homepage/Card'
import Footer from '../src/components/Homepage/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header 
        buttontext={'GET EARLY ACCESS'}
      />
      <Card 
        id="down"
        title={'New relationships are fragile. Help us define boundaries.'}
        content={'We’re working hard to build a investment product around our co-owners wants and desires. Answer a few short questions and get early access to our innovative, trust-worthy, and legally solid tools to invest in real estate.'}
        buttontext={'GET EARLY ACCESS'}
      />
      <Footer />
    </div>
  );
}

export default App;
