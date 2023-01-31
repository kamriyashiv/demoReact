import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { Route, Routes } from 'react-router-dom';
import Error from './components/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='Page2' element={<Page2/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
