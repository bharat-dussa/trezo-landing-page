// import Link from 'next/link'
import React from "react";
import { Footer } from "../../../styled/Footer";

function index() {
  return (
    <Footer>
      <div className="col">
        <div>
          <ul className="footer-main-links">
            <li>Properties</li>
            <li>How it Works</li>
            <li>Pricing</li>
            <li>FAQ's</li>
          </ul>
          <ul className="footer-main-links">
            <li>Privacy Policy</li>
            <li className={"mr-t"}>Terms and Conditions</li>
          </ul>
        </div>
        <div className="col mg-r">
          <ul>
            <li>
              <div>
                <div className={"footer-links"}>
                  <img
                    src="/assests/components/footer/location.svg"
                    alt={"location"}
                  />
                  <a href="#">
                    <a href="#">Where to find us</a>
                  </a>
                </div>
                <p className={"footer-links-mg"}>
                  INVENTO Collaborative Coworking Spaces Plot No. 11 Sector
                  12-A, Dwarka 110078
                </p>
              </div>
            </li>
            <li>
              <div>
                <div className={"footer-links"} id={"desktop-linkedin"}>
                  <img
                    src="assests/components/footer/linkedin.svg"
                    alt={"linkedin"}
                  />
                  <a href="#">Linkedin</a>
                  <img
                    src="assests/components/footer/footer-right-arrow.svg"
                    alt={"right-arrow"}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col">
        <ul></ul>
      </div> */}
      <div className="col">
        <ul className="mg-r">
          <li>
            <div className={"footer-links"} id={"mobile-linkedin"}>
              <img
                src="assests/components/footer/linkedin.svg"
                alt={"linkedin"}
              />
              <a href="#">Linkedin</a>
              <img
                src="assests/components/footer/footer-right-arrow.svg"
                alt={"right-arrow"}
              />
            </div>
          </li>
          <li>
            <div>
              <div className={"footer-links"}>
                <img src="assests/components/footer/phone.svg" alt={"phone"} />
                <a href="#">
                  <a href="#">Call Us</a>
                </a>
                <img
                  src="assests/components/footer/footer-right-arrow.svg"
                  alt={"right-arrow"}
                />
              </div>
              <p className={"footer-links-mg"}>+91 9310478032</p>
            </div>
          </li>
          <li>
            <div>
              <div className={"footer-links"}>
                <img src="assests/components/footer/email.svg" alt={"email"} />
                <a href="#">Email Us</a>
                <img
                  src="assests/components/footer/footer-right-arrow.svg"
                  alt={"right-arrow"}
                />
              </div>
              <p className={"footer-links-mg"}>info@trezo.in</p>
            </div>
          </li>
          <li>
            <div className={"footer-links"}>
              <img
                src="assests/components/footer/whatsapp.svg"
                alt={"whatsapp"}
              />
              <a href="#">Whatsapp Us</a>
              <img src="assests/components/footer/footer-right-arrow.svg" />
            </div>
          </li>
        </ul>
      </div>

      <div className="about-trezo">
        <ul>
          <li>
            <p>
              Trezo.in is a website operated by Theek Property Management
              Private Limited (“Theek”) and by accessing the website and any
              pages thereof, you agree to be bound by its terms of service and
              privacy policy. Theek does not prima facie endorse or promote any
              of the opportunities that appear on this website nor make any
              recommendations regarding same to any Investor. Prospective
              investors are not to construe anything on the website as
              investment, business, legal or tax advice and the content
              contained herein does not constitute an offer by Theek to sell
              securities. Any information made available from our website or
              links to websites, do not represent a solicitation of an offer to
              buy or sell any property. It also does not constitute an offer to
              provide investment advice, service or assistance on particular
              investment or transaction. Direct and indirect purchase of real
              property involves significant risk and investments may lose value
              and are not insured by any Governmental Agency nor are they
              guaranteed by Theek. It is the responsibility of the recipient to
              verify the integrity and authenticity of the information made
              available. Any historical returns, expected returns, or
              probability projections may not reflect actual future performance.
              Investors must be able to afford to bear losses on investment
              made.
            </p>
          </li>
          <li>
            <p> © Theek Property Management Technologies Pvt Ltd, 2020. </p>
          </li>
          <li className={'flex'}>
            <div className={"love-container"}>
              <a href={"https://farziengineer.com/"} target={"_blank"}>
                Made with love ❤️ by FarziEngineer
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Footer>
  );
}

export default index;
