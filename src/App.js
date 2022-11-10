import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div style={{width: `90%`,margin: `0 auto`}}>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
