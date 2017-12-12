import React, { Component } from "react";
import Headroom from "react-headroom";
import { stack as Menu } from "react-burger-menu";
import * as Scroll from "react-scroll";
import logo from './logo.svg';
var Link = Scroll.Link;



var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#BF4200'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#BF4200'
  },
  bmMenu: {
    background: '#BF4200',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#BF4200'
  },
  bmItemList: {
    color: '#BF4200',
    padding: '0.8em'
  },
  bmOverlay: {
    background: '#BF4200'
  }
}


class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			backgroundColor: "white"
		};
	}
	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = e => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop < 20) {
      this.setState({
        backgroundColor: "white"
      });
    } else {
      this.setState({ backgroundColor: "white" });
    }
  };

  render(){
  	return(


  		<Headroom>
                <Menu className="menu hidden-md hidden-lg" right isOpen={ false }>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={700} >
                          Purpose
                        </Link>
                      </li>
                      <li>
                        <Link to="people" spy={true} smooth={true} offset={0} duration={700} >
                          People
                        </Link>
                      </li>
                      <li>
                        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={700} >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="platform" spy={true} smooth={true} offset={0} duration={700} >
                          Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="press" spy={true} smooth={true} offset={0} duration={700} >
                          Press
                        </Link>
                      </li>
                    </ul>
                 </Menu>
  			<nav
  				className="main-nav dark"
  				style={{backgroundColor: this.state.backgroundColor}}
  			>
  			<span
  				className="navbar-logo"
  				style={{ display: "flex", alignItems: "center", margin: "0 3rem"}}
  			>
          <img src={logo} className="nav-logo" alt="logo" />
  			</span>

                

                {/* <!-- Main Menu --> */}
                <div className="inner-nav">
                  <ul className="clearlist scroll-nav local-scroll">
                    <li className="active">
                      <Link to="home" spy={true} smooth={true} offset={0} duration={700} >
                        Purpose
                      </Link>
                    </li>
                    <li>
                      <Link to="people" spy={true} smooth={true} offset={0} duration={700} >
                        People
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" spy={true} smooth={true} offset={0} duration={700} >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="platform" spy={true} smooth={true} offset={0} duration={700} >
                        Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="press" spy={true} smooth={true} offset={0} duration={700} >
                        Press
                      </Link>
                    </li>
                  </ul>
                </div>
              
  		</nav>
  	</Headroom>
  		);
  }
}

export default NavBar;
  		 





