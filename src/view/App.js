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
          {/* Bạn cần import Nav, Home và Switch, Route từ react-router-dom */}
          {/* <Nav/> */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* Sửa lỗi: Switch và Route phải import từ react-router-dom */}
          {/* Switch bị viết sai chính tả là Swtich */}
          {/* Route chưa được import */}
          {/* Thêm import: import { Switch, Route } from 'react-router-dom'; */}
          <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
          </Switch>
          <MyComponent/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
