import './App.css';
import Nav from "./components/nav";
import MapChart from "./components/map_chart";
import States from './components/states';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  return <>
    <Nav />
    <div className="container-fluid w-100">
      <div className="row" >
        <div className="col">
          <div className="row">
            <p className="text-primary text-center availability-header p-0 m-0">Country AirCraft Availability</p>
            <span className="text-secondary text-center">(click to see aircraft availability)</span>
            <span className="text-secondary text-center">(scroll to zoom in and out)</span>
          </div>
          <div className="row">
            <MapChart />
          </div>
        </div>
        <div className="col">
          <States />
        </div>
      </div>
    </div>
  </>
}

export default App;
