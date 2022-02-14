import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Todo from './components/Todo'
import Covid19 from './components/Covid19'
import Coundown from './components/Coundown'
import Blog from './components/Blog'
import Store from './components/Store'
import NotFound from './components/NotFound'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Routes>
        <Route path="/" element={<Covid19/>}/>
        <Route path="/timer" element={<Coundown/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
