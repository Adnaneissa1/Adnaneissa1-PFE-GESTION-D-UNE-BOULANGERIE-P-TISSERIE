import React from "react";
import './loca.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Loca = () => {
    return (
        <div className="App" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="info-card p-5" >
                <h1 className="p-5">Pastries Tanger</h1>
                <table className="table table-hover p-5 m-5">
                    <tbody>
                        <tr>
                            {/* <td><FontAwesomeIcon icon={faMapMarkerAlt} /></td> */}
                            <td>Avenue Haroun Rachid N59 Souani, 90000 Tangier</td>
                        </tr>
                        <tr>
                            {/* <td><FontAwesomeIcon icon={faPhoneAlt} /></td> */}
                            <td>+212567 89 0098</td>
                        </tr>
                        <tr>
                            {/* <td><FontAwesomeIcon icon={faEnvelope} /></td> */}
                            <td>pastries.tangier@gmail.com</td>
                        </tr>
                        <tr>
                            {/* <td><FontAwesomeIcon icon={faClock} /></td> */}
                            <td>7:00 am à 22:00 pm</td>
                        </tr>
                    </tbody>
                </table>
                <div className="social">
                    {/* <div><FontAwesomeIcon icon={faFacebook} size="2x"/></div>
                    <div><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
                    <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div> */}
                </div>
            </div>
            <div style={{ width: "50%" }}>
                <iframe
                    title="Location Map"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenue%20Haroun%20Rachid%20N59%20Souani,%2090000%20Tangier%20+(patesserie)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    )
}

export default Loca;
