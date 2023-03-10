import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Routes/Routes';

function App() {

  return (
    <div data-theme="cupcake" className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
        
    </div>
  );
}

export default App;
