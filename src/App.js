import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import ColorContainer from './components/ColorContainer';
import SearchBar from './components/SearchBar';

function App() {

  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Header />

      <ColorContainer 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />

      <SearchBar 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
   
      />

    </div>
  );
}

export default App;
