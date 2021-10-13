import react from 'react';
import './App.css';
import Nav from './Nav';
import arrow from './images/left-arrow.png';
import info from './images/info.png'
import airplane from './images/aeroplane.png';
import boat from './images/boat.png';
import truck from './images/truck.png';
import police from './images/officer.png';

const App = ( ) => (
  <div>
    <Nav />
    <div className="heading">
        <div>
          <img className="arrow" src={arrow} ></img>
        </div>
        <div className="headingg">
          <h1 className="headingOne">New Booking</h1>
          <p className="paragraphOne">Fill in the information below to get a quote or create a new booking</p>
        </div>
    </div>
    <div className="body">
      
    

    <section className="serviceOne">
      <h2>Select a service</h2>
      <div className="serviceOnebuttons">
      <button className="buttonOneI">Air Freight <img src={airplane} className="airplane"></img> </button>
      <button className="buttonOne">Sea Freight <img src={boat} className="boat"></img> </button>
      <button className="buttonOne">Inland (Truck & Barge) <img src={truck} className="truck"></img></button>
      <button className="buttonOne">Customs Clearance <img src={police} className="police"></img></button>
      </div>
    </section>

    <section className="serviceTwo">
    <div className="serviceTwobuttons">
      <image src={info}></image><br></br><button className="import">Import</button><button className="export">Export</button>
      <input className="buttonTwo" type="text" placeholder="From City or port"/>
      <input className="buttonTwoI" type="text" placeholder="To City or port" />
      <input className="buttonTwoII" type="text" placeholder="Ready Date" />
      <input className="buttonTwoIII" type="number" placeholder="Incoterms" />
      <input className="buttonTwoIIII" type="text" placeholder="Total Cargo Value" />
    </div>
    </section>

    <div className="serviceThree">
      <div className="Cargo">
        <h3>Cargo details</h3> 
        <p> <label className="switch"><input type="checkbox"/><span className="slider" ></span></label> Dangerous Cargo(ex. Chemicals, Battery)</p>
      </div>

      <div className="field">
        <fieldset className="fieldset">
          <legend>Total Volume</legend>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Total Weight</legend>
        </fieldset>
      </div>
    </div>

    <div className="serviceFour">
    <h3>Additional Services</h3>
    <ul>
      <li>
      <div className="Add">
          <div className="Switchh">
            <label className="switch"><input type="checkbox"/><span className="slider" ></span></label>
          </div>
          <div className="Text">
          <h4>Export Fowarding</h4> 
          <p>We handle customs clearance and documentation.</p>
          </div>
        </div>
      </li>
      <li>
        <div className="Add">
          <div className="Switchh">
            <label className="switch"><input type="checkbox"/><span className="slider" ></span></label>
          </div>
          <div className="Text">
            <h4>Import Customs Clearance</h4> 
            <p>We handle imports and regulatory requirements.</p>
          </div>
        </div>
      </li> 
      <li>
      <div className="Add">
          <div className="Switchh">
            <label className="switch"><input type="checkbox"/><span className="slider" ></span></label>
          </div>
          <div className="Text">
            <h4>Cargo Insurance</h4> 
            <p>Protect your cargo from logistics risks up to its full value.</p>
          </div>
      </div>
      </li>
      <li>
        <div className="Add">
          <div className="Switchh">
            <label className="switch"><input type="checkbox"/><span className="slider" ></span></label>
          </div>
          <div className="Text">
            <h4>Transport/Delivery</h4> 
            <p>We deliver the cargo to your door step from the ports.</p>
          </div>
        </div>
      </li>
    </ul>
    </div>
    </div>
  </div>
);

export default App;