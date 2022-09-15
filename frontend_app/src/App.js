
import React from 'react';
//  import ReactDOM from 'react-dom/client';
  import './App.css';
  import Header from './Header';
  import Feed from "./Feed";
  import Sidebar from './sidebar/Sidebar';
  import Widgets from './Widgets';
  import Login from "./Login";
  // import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';

  function App(){
    const user = "sohail";
    // const notify = () => toast("Thankyou.");

    return (
      // <div className='text-center'>
      // <h1>Social-Media</h1>
      //   <button onClick={notify}>click here</button>
      //   <ToastContainer />
      // </div>
      <div className="app">
        {!user ? (
          <Login />
         ) : (
          <>
            <Header />
        
            <div className='app_body'>
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
        
      </div>

    );
  }

  export default App;