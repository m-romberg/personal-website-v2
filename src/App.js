import './App.css';
import RoutesList from './RoutesList';
import { useNavigate } from 'react-router-dom';


function App() {
  console.log("inside app ")
  const navigate = useNavigate();

  function enter (){
    console.debug("inside enter")
    navigate("/madelynromberg")
  }
  return (
    <div className="App">
      <RoutesList enter={enter}/>
    </div>
  );
}

export default App;
