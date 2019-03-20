import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class StickyFooter extends Component{
  render(){
    return(
    <MDBContainer>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/#/Home">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="/#/Profile">Profile</a>
                </li>
                <li className="list-unstyled">
                  <a href="/#/Generate">Generate</a>
                </li>
                <li className="list-unstyled">
                  <a href="/#/About">About</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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
