import { Input, Button } from "antd"
import React from "react"
import twitterSrc from "../assets/twitter.png"
import facebookSrc from "../assets/facebook.png"
import instagramSrc from "../assets/instagram (-1.png"
import youtubeSrc from "../assets/youtube.png"
import logo from "../assets/Group 647.png"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <div>
            <img src={logo} alt="" />
            <p className="footer_sublogo">THE PERFECT INTEGRATED COMMUNITY</p>
          </div>
          <div className="footer_email">
            <p>Sign up to receive the latest updates and news from our team.</p>
            <p>Email</p>

            <Input placeholder="" bordered={false} className="email" />
            <Button type="default">Subscribe</Button>
          </div>
        </div>
        <div className="footer_right_part">
          <div className="footer_right">
            <div className="footer_links">
              <a>ABOUT US</a>
              <a>PRODUCTS</a>
              <a>VIRTUAL TOUR</a>
            </div>
            <div className="footer_links">
              <a>OFFERS</a>
              <a>NEWS & EVENTS</a>
              <a>ABOUT THE DEVELOPER</a>
            </div>
            <div className="footer_links">
              <a>CONTACT US</a>
              <a>CAREERS</a>
            </div>
          </div>
          <div className="footer_social">
            <div>
              <img src={facebookSrc} alt="" />
              <img src={instagramSrc} alt="" />
              <img src={twitterSrc} alt="" />
              <img src={youtubeSrc} alt="" />
            </div>
            <p>Hotline 19333</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
