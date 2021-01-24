import './App.css';
import GetAdvice from './components/GetAdvice'
import {useEffect} from 'react'
import { Advice, NewAdvice } from "./components";
import {AdviceProvider} from './components/AdviceContext'

function App() {
  return (
    <AdviceProvider>
    	<div className="App">
    	  <header className="App-header">
    	    <h1>Hello</h1>
    	    <Advice/>
    	    <NewAdvice/>
    	  </header>
    	</div>
    </AdviceProvider>
  );
}

export default App;
