import React, { Component } from "react";
import Bar1 from "./img--bar--01.jpg";
import Bar2 from "./img--bar--02.jpg";
import Bar3 from "./img--bar--03.jpg";
import Bar4 from "./img--bar--04.jpg";
import * as Scroll from "react-scroll";
var Link = Scroll.Link;

class Home extends Component {
	render() {
		return(
    			<section
    		        className=" page-section bg-dark colorFade"
    		        id="home"
    		        style={{
                  height: "100%",
                  minHeight: "calc(100vh - 75px)",
                  width: "100%",
                }}
          		>

              <section className="page-home-leftside"
              style={{
                  width: "50%",
                  minHeight: "calc(100vh - 75px)",
                  diplay: "left",
                }}>
              <h1>Lorem ipsum <br/> dolor set.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
              Nunc egestas non magna eget elementum. Vestibulum laoreet sem turpis,  <br/>
              in semper risus congue auctor. Quisque condimentum massa quam, in  <br/>
              varius nulla suscipit sit amet. Vestibulum ante ipsum primis in faucibus  <br/>
              orci luctus et ultrices posuere cubilia Curae; Donec at nunc bibendum,  <br/>
              sollicitudin purus a, tempus purus. Ut vehicula odio ac diam euismod tristique.  <br/>
              Duis imperdiet mi lorem, id sodales velit tincidunt vel. Sed feugiat,  <br/>
              nulla vel imperdiet aliquam, metus ante eleifend ipsum, ac molestie lectus  <br/> l
              ibero ac dui. Sed euismod diam dolor, ut sagittis dolor malesuada vel.  <br/>
              Aenean suscipit tortor ac cursus dignissim.</p>

              <p>Learn more about us ⌲</p>

                  <span className="scrollArrowHome">
                      <Link
                        to="people"
                        activeClass="activeScroll"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <span className="fa fa-angledown" />
                      </Link>
                  </span>

              </section>

              <section className="page-home-rightside"
              style={{
                  width: "50%",
                  minHeight: "calc(100vh - 75px)",
                  display: "absolute",
                  right: "0",
                  top: "0",
                 
                }}>
                <img src={Bar1} className="bar1" alt="logo" />
                <img src={Bar2} className="bar2" alt="logo" />
                <img src={Bar3} className="bar3" alt="logo" />
                <img src={Bar4} className="bar4" alt="logo" />

              </section>


          			
  
      		</section>
			)
	}
}

export default Home;