import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { URLProvider } from './URLContext';

function App() {
  return (
    <URLProvider>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </URLProvider>
  );
}

export default App;
