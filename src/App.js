import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import {Main} from './Components/Main';
import {useState} from 'react';


function App() {
  //Jag ska äga informationen om vilken som är aktiv page
  const [activePage, setActivePage] = useState('Home')


   const changeActivePage = (newPage) =>{
      setActivePage(newPage)
   }

  return (
    <div>
        {/* <button onClick={ ()=>changeActivePage('Products')  }>BYT SIDA TILL PRODUCTS</button>
        <button onClick={ ()=>changeActivePage('Home')  }>BYT SIDA TILL HOME</button> */}
        <Header animal="Cat" activePage={activePage}  onPageMenuClick={changeActivePage}  />
        <Main activePage={activePage} />
        <Footer />
    </div>
  );
}

export default App;
