import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

class StickyFooter extends Component{
  render(){
    return(
    <MDBContainer>
      <MDBFooter color="purple-gradient" className="font-large pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
          <MDBCol md ="1">

          </MDBCol>

            <MDBCol md="3">
            <ul>
            <h5 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h5>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px" }} />
            
            <p>
              <i className="fa fa-home mr-3" /> Trim City, TC 10012, IE
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> danielisjoniskis@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
            </ul>
            </MDBCol>
            <MDBCol md="2">
              <ul>
              
              <h5 className="text-uppercase font-weight-bold">
               <strong>Links</strong>
              </h5>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              
                <li className="list-unstyled">
                  <a href="/#/Home">Home</a>
                </li>
                <br></br>
                <li className="list-unstyled">
                  <a href="/#/Profile">Artist</a>
                </li>
                <br></br>
                <li className="list-unstyled">
                  <a href="/#/Create">Generate</a>
                </li>
                <br></br>
              </ul>
            </MDBCol>
            <MDBCol md ="4">
            <ul>
            <h5 className="text-uppercase font-weight-bold">
              <br></br><br></br><br></br><br></br>
               <strong>WePick - "We do the picking for you."</strong>
            
              </h5>
            </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </MDBContainer>
   );
  }
}

export default StickyFooter;
