import React, {Component} from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import '../stylesheets/carousel.css'

class Carousel extends Component {
    render(){
        return(
    <MDBContainer>
      <MDBCarousel activeItem={1} length={7} showControls={false} showIndicators={false} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(28).jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <div className="gettingStartedTextDiv">
              <h2 className="gettingStartedText">1.  Register an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(24).jpg" alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Register an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>           </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Register an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>           </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg" alt="Fourth Slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Register an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>   
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(90).jpg" alt="Fifth slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Create an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>
              </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(104).jpg" alt="Sixth slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Create an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" alt="Seventh slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <div className="gettingStartedTextDiv">
              <img id="WePickLogo" src="https://user-images.githubusercontent.com/22448079/56497612-37a7ff80-64f6-11e9-88a1-574d372b2921.png" alt="WePick Logo"/>
              <h2 className="gettingStartedText">1.  Create an account</h2>
              <h2 className="gettingStartedText">2.  Fill out your music preferences</h2>
              <h2 className="gettingStartedText">3.  Generate your curated playlist!</h2>          
              </div>          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
}

export default Carousel;