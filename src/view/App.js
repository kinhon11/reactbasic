import logo from "./logo.svg";
import "./App.scss";
import ListUser from "./Users/ListUser1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Bạn cần import Nav, Home và Switch, Route từ react-router-dom */}
        {/* <Nav/> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Sửa lỗi: Switch và Route phải import từ react-router-dom */}
        {/* Switch bị viết sai chính tả là Swtich */}
        {/* Route chưa được import */}
        {/* Thêm import: import { Switch, Route } from 'react-router-dom'; */}

        <ListUser />
      </header>
    </div>
  );
}

export default App;
