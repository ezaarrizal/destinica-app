import React, { useEffect, useState } from 'react';
import '../Homepage/Homepage.css';
import dest1 from '../Assets/destination.jpg';


const Homepage = () => {

    const [headerClass, setHeaderClass] = useState();
    const [menuIcon, setMenuIcon] = useState('bx bx-menu');
    const [navbar, setNavbar] = useState('navbar');

    const devName = '<Mirza./>'

    useEffect(() => {
        const handleScroll = () => {
            // Your scroll event logic here
            if (window.scrollY > 0) {
                setHeaderClass('stick');
                setMenuIcon('bx bx-menu');
                setNavbar('navbar');
                console.log('stick');
            } else {
                setHeaderClass('');
                console.log('non-stick');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuClick = () => {
        if (menuIcon === 'bx bx-menu' && navbar === 'navbar') {
            setMenuIcon('bx bx-x');
            setNavbar('navbar open');
        } else {
            setMenuIcon('bx bx-menu');
            setNavbar('navbar');
        }

    }

  return (
    <body className="page">
        <div>
            {/*Header Section*/}
            <header className={headerClass}>
                <a href="" className="logo">Destinica</a>
                <div className={menuIcon} onClick={menuClick} id='menu-icon'></div>
                <div id="menu-icon" className='bx bx-menu'></div>
                <ul className={navbar}>
                    <li><a href="#home" className="no_bullet">Home</a></li>    
                    <li><a href="#top-destination">Top Destination</a></li>
                    <li><a href="#upload">Upload</a></li>
                    <li><a href="#article">Article</a></li>
                    <li><a href="#login">Login</a></li>
                </ul> 
            </header>
            {/*Home Section*/}
            <section className="home" id="home">
                <div className="home-text">
                    <h1>Destinica <br />Travel & Tours</h1>
                    <p id="para">Your Gateway to Indonesian Adventures</p>
                </div>
            </section>
            {/*Top Destination Section*/}
            <section className="destination " id="destination">
            <div className="title">
                    <h2>Top Destination</h2>
            </div>
            <div className="dest-content">
                    {/*content*/}
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>Place</h5>
                        <p>Address</p>
                    </div>
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>Place</h5>
                        <p>Address</p>
                    </div>
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>Place</h5>
                        <p>Address</p>
                    </div>
                </div>
            </section>
                {/*Upload Section*/}
            <section className="upload">
                <div className="box">
                    <h2>Share your adventure stories and insipre fellow travelers <br />with your destination reviews</h2>
                    <button type='submit'>Upload</button>  
                </div>
            </section>
                {/*Footer */}
            <section className="contact" id='contact'>
                <div className="footer">
                    <div className="main">
                        {/*List*/}
                        <div className="list">
                            <h4>Support</h4>
                            <ul>
                                <li><a>Help Center</a></li>
                                <li><a>Safety information </a></li>
                                <li><a>Cancellation Options</a></li>
                            </ul>
                        </div>
                        {/*List*/}
                        <div className="list">
                            <h4>Support</h4>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Privacy Policy </a></li>
                                <li><a>Community Blog</a></li>
                                <li><a>Terms of Services</a></li>
                            </ul>
                        </div>
                        {/*List*/}
                        <div className="list">
                            <h4>Contact</h4>
                            <ul>
                                <li><a>FAQ</a></li>
                                <li><a>Get in Touch</a></li>
                                <li><a>Partnerships</a></li>
                            </ul>
                        </div>
                        {/*List*/}
                        <div className="list">
                            <h4>Social</h4>
                            <div className="social">
                                <a href=""><i className="bx bxl-facebook"></i></a>
                                <a href=""><i className="bx bxl-twitter"></i></a>
                                <a href=""><i className="bx bxl-tiktok"></i></a>
                                <a href=""><i className="bx bxl-instagram"></i></a>
                            </div>  
                        </div> 
                    </div>
                </div>
            </section> 
        </div>
    </body>


  );
};

export default Homepage;