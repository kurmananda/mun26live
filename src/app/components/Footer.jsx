'use client'
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    .Btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition-duration: .3s;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
      background-color: #F2B705;
    }
  
    /* plus sign */
    .sign {
      width: 100%;
      transition-duration: .3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .sign svg {
      width: 20px;
    }
  
    .sign svg path {
      fill: #023059;
    }
    /* text */
    .text {
      position: absolute;
      right: 0%;
      width: 0%;
      opacity: 0;
      color: #023059;
      font-size: 1.2em;
      font-weight: 600;
      transition-duration: .3s;
    }
    /* hover effect on button width */
    .Btn:hover {
      width: 150px;
      border-radius: 40px;
      transition-duration: .3s;
    }
    #insta:hover{
        width : 170px;
    }
    #email:hover{
        width : 135px;
    }
    #github:hover{
        width : 155px;
    }
    #fb:hover{
        width : 155px;
    }
  
    .Btn:hover .sign {
      width: 30%;
      transition-duration: .3s;
      padding-left: 20px;
    }
    /* hover effect button's text */
    .Btn:hover .text {
      opacity: 1;
      width: 75%;
      transition-duration: .3s;
      
    }
    /* button click effect*/
    .Btn:active {
      transform: translate(2px ,2px);
    }
    .bbtn {
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    }

    .bbtn:focus,
    .bbtn:hover {
        color: #fff;
    }

    .bbtn:focus:after,
    .bbtn:hover:after {
        width: 100%;
        left: 0%;
    }

    .bbtn:after {
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #fff;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }
    
    `;

const Footer = () => {
  return (
    <div>
    <footer
      className="hidden lg:flex flex-col items-center bg-[#023059] text-center text-surface">
      <div className="container ">
        <div className=" flex justify-center space-x-4 p-6">         
          <a
            href="https://www.facebook.com/share/19oZxJtjGH/?mibextid=wwXIfr"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='fb'>
                <div className="sign"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000"><path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z"/></svg>
                </div>
              <div className="text">Facebook</div>
                </button>
            </StyledWrapper>
          </a>
            
          <a
            href="https://www.instagram.com/iist_mun/profilecard/?igsh=MTRjeHoyMWN6dDF0aA=="
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id="insta">
                <div className="sign"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                </div>
              <div className="text">Instagram</div>
                </button>
            </StyledWrapper>
          </a>
          
          <a
            href="mailto:iist.mun.club@gmail.com"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='email'>
                <div className="sign">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-8 5c-3.87 0-7 2.9-7 6.48a6.3 6.3 0 0 0 2.6 5.05V19l2.4-1.3c.63.17 1.3.26 2 .26 3.87 0 7-2.9 7-6.48C19 7.9 15.87 5 12 5zm4.52 4.67l-3.82 4.06-1.79-1.9-3.48 1.9 3.83-4.06 1.83 1.9 3.43-1.9z"/></svg>
                </div>
              <div className="text">Email</div>
                </button>
            </StyledWrapper>
          </a>
    
        
          <a
            href="https://wa.link/48twxm"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='github'>
                <div className="sign">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37"/></svg>
                </div>
              <div className="text">Whatsapp</div>
                </button>
            </StyledWrapper>
          </a>
        </div>
        <div>
            

            <StyledWrapper className={` flex space-x-16 justify-center lg:text-[20px]`}>
                <button className='bbtn'>
                    PRIVACY POLICY
                </button>
                <a className='bbtn' href='/#abt'>
                    ABOUT
                </a>
                <a className='bbtn' href="https://wa.link/48twxm">
                    CONTACT US
                </a>
                <button className='bbtn'>
                    FAQs
                </button>
            </StyledWrapper>
            
        </div>
    </div>
      <div className="b-10 p-4 text-center text-[#d9bd89] ">
        Copyright © 2025 MUN IIST 
      </div>
    </footer>


  <footer
      className="flex lg:hidden flex-col items-center bg-[#023059] text-center text-surface ">
      <div className="container ">
      <div className=" flex justify-center space-x-4 p-6">         
          <a
            href="https://www.facebook.com/share/19oZxJtjGH/?mibextid=wwXIfr"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='fb'>
                <div className="sign">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000"><path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z"/></svg>
                </div>
              <div className="text">Facebook</div>
                </button>
            </StyledWrapper>
          </a>
            
          <a
            href="https://www.instagram.com/iist_mun/profilecard/?igsh=MTRjeHoyMWN6dDF0aA=="
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id="insta">
                <div className="sign"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                </div>
              <div className="text">Instagram</div>
                </button>
            </StyledWrapper>
          </a>
          
          <a
            href="mailto:iist.mun.club@gmail.com"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='email'>
                <div className="sign">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-8 5c-3.87 0-7 2.9-7 6.48a6.3 6.3 0 0 0 2.6 5.05V19l2.4-1.3c.63.17 1.3.26 2 .26 3.87 0 7-2.9 7-6.48C19 7.9 15.87 5 12 5zm4.52 4.67l-3.82 4.06-1.79-1.9-3.48 1.9 3.83-4.06 1.83 1.9 3.43-1.9z"/></svg>
                </div>
              <div className="text">Email</div>
                </button>
            </StyledWrapper>
          </a>
    
        
          <a
            href="https://wa.link/48twxm"
            type="button"
            data-twe-ripple-init>
            <StyledWrapper>
                <button className="Btn" id='github'>
                <div className="sign">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37"/></svg>
                </div>
              <div className="text">Whatsapp</div>
                </button>
            </StyledWrapper>
          </a>
        </div>
        <div>
            

            <StyledWrapper className={` flex justify-center space-x-6 text-[10px]`}>
                <button className='bbtn text-[.8rem]'>
                    PRIVACY POLICY
                </button>
                <button className='bbtn text-[.8rem]'>
                    ABOUT
                </button>
                <button className='bbtn text-[.8rem]'>
                    CONTACT US
                </button>
                <button className='bbtn text-[.8rem]'>
                    FAQs
                </button>
            </StyledWrapper>
            
        </div>
    </div>
      <div className="b-10 p-4 text-center text-[#d9bd89] ">
        Copyright © 2025 MUN IIST 
      </div>
    </footer>
    </div>
  );
};

export default Footer;

