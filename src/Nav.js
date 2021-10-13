import react from 'react';

class Nav extends react.Component {
    render() {
        return <div className="navBar">
            <p><span>send</span>FREIGHT</p>
            <input className="navSearch" type="text" placeholder="Search"/>
            <button className="buttonR">Request Quote</button>
            <button className="buttonB">Book Shipment</button>
        </div>
    }
}

export default Nav;