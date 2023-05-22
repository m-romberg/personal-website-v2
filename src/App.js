import { useEffect, useState } from 'react';
import './App.css';
import RoutesList from './RoutesList';
import Loading from './Loading';


function App() {
  console.log("inside app ");
  const [isLoading, setIsLoading] = useState(true);

  // if (isLoading === true){
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }

return (
  <div className="App">
    <RoutesList />
  </div>
);
}

export default App;
