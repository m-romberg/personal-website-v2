
import './App.css';
import RoutesList from './routes-nav/RoutesList';


function App() {
  console.log("inside app ");

  // if (isLoading === true){
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTim#190B28eout(timer);
  // }

  return (
    <div className="App">
        <RoutesList />
    </div>
  );
}

export default App;
