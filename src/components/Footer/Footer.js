import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="row m-5">
                <div className="col-md-3">
                    <h6 className="p-2"><a href="#">BLOG</a></h6>
                    <h6 className="p-2"><a href="#">ABOUT</a></h6>
                    <h6 className="p-2"><a href="#">CONTACT</a></h6>
                    <div className="mt-3">
                    <i className="topIcon fab fa-facebook-square fs-2 ms-2"></i>
                    <i className="topIcon fab fa-instagram fs-2 ms-3"></i>
                    <i className="topIcon fab fa-twitter-square fs-2 ms-3"></i>
                    </div>
                </div>
                <div className="col-md-9">
                    <h6>Don't miss the fun.</h6>
                    <p>Enter your email here</p>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    

                    </div>
                </div>
                
            </div>
            <div className="text-center">
                <p>© {(new Date()).getFullYear()} by Poise. Proudly Created with Wix.com</p>
            </div>
        </div>
        
    );
};

export default Footer;