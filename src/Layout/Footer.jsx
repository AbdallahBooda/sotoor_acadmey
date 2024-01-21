import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css'



const Footer = () => {
    return ( 
        <>
        <footer className="footer-area section-gap shadow bg-white">
		<div className="container text-center p-t-50 ">

			<img src="https://sotooracademy.com/images/logo.png" className="logo-footer m-w-300 m-h-200 m-b-40" />

			<h5 className="m-b-20"> <i className="fa fa-envelope"> </i>&#x202B;&#x202A;info@sotooracademy.com&#x202C;&#x202C; </h5>

			<div className=" text-center  footer-social">
				
				<Link to="https://www.youtube.com/channel/UCp4us4HeRmb9jQhAY6uxK4g" target="_blank" className="mainColor em2 p-10"><i className="fab fa-youtube"></i></Link>
				<Link to="https://twitter.com/sotooracademy" target="_blank" className="mainColor em2 p-10"><i className="fab fa-twitter"></i></Link>
				<Link to="https://www.instagram.com/sotooracademy/?igshid=9olscrdmg5c5" target="_blank" className="mainColor em2 p-10"><i className="fab fa-instagram"></i></Link>

			

			</div>

		</div>
			<div className="backMainColor white p-20 text-center"><p className="p-0 m-0">

			جميع&#x202C; الحقوق&#x202C; &#x202B;محفوظة اكاديمية &#x202B;سطور&#x202C; &#x202B;التعليمية&#x202C; ©&#x202C; &#x202B;2023&#x202C;&#x202C; &#x202B;
			</p>

			</div>
	</footer>
        </>
     );
}
 
export default Footer;