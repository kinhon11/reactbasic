import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListUser from './Users/ListUser';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
           <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Swtich>
            < Route path="/" exact>
            <Home />
            </Route>
            
          </Swtich>

         
          
          <MyComponent/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
