import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jayesh Kumar • Interface Designer</title>
        <meta
          name="description"
          content="I'm a young ambitious designer creating delightful and accessible interface experience that people will love."
        />
        <meta property="og:title" content="Jayesh Kumar • Interface Designer" />
        <meta
          property="og:description"
          content="A raising gen-z UI designer from India."
        />
      </Helmet>
      <div className="home-container01">
        <span className="home-text">
          <span>
            I’m
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text02">Jayesh Kumar</span>
          <span>, </span>
          <span>I’m a 17 y/o boy from India.</span>
        </span>
        <span className="home-text05">
          <span>I&apos;m a young ambitious designer creating delightful</span>
          <br></br>
          <span>
            and accessible interface experience that people will love.
          </span>
        </span>
        <span className="home-text09">
          <span>I’m Jayesh Kumar,</span>
          <span>I’m a 17 y/o boy from India.</span>
        </span>
        <span className="home-text12">
          <span>I&apos;m a young ambitious designer</span>
          <span>creating delightful and accessible</span>
          <span>interface experience that people</span>
          <span>will love.</span>
        </span>
        <div className="home-container02">
          <span className="home-text17">Reach me at</span>
          <img
            alt="image"
            src="/playground_assets/hyphen.svg"
            className="home-image"
          />
          <a
            href="https://www.instagram.com/krjayesh2110/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <div className="home-container03">
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="home-image01"
              />
            </div>
          </a>
          <a
            href="https://twitter.com/krjdesignz"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link01"
          >
            <div className="home-container04">
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="home-image02"
              />
            </div>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link02"
          >
            <div className="home-container05">
              <img
                alt="image"
                src="/playground_assets/dribbble.svg"
                className="home-image03"
              />
            </div>
          </a>
          <a
            href="https://wa.me/919428408742"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link03"
          >
            <div className="home-container06">
              <img
                alt="image"
                src="/playground_assets/whatsapp.svg"
                className="home-image04"
              />
            </div>
          </a>
          <a
            href="mailto:krjayesh2004@gmail.com?subject="
            className="home-link04"
          >
            <div className="home-container07">
              <img
                alt="image"
                src="/playground_assets/mail.svg"
                className="home-image05"
              />
            </div>
          </a>
        </div>
        <div className="home-container08">
          <a
            href="https://www.instagram.com/krjayesh2110/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-container09">
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="home-image06"
              />
            </div>
          </a>
          <a
            href="https://twitter.com/krjdesignz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-container10">
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="home-image07"
              />
            </div>
          </a>
          <a
            href="https://dribbble.com/krjayesh"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-container11">
              <img
                alt="image"
                src="/playground_assets/dribbble.svg"
                className="home-image08"
              />
            </div>
          </a>
          <a
            href="https://wa.me/919428408742"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-container12">
              <img
                alt="image"
                src="/playground_assets/whatsapp.svg"
                className="home-image09"
              />
            </div>
          </a>
          <a href="mailto:krjayesh2004@gmail.com?subject=">
            <div className="home-container13">
              <img
                alt="image"
                src="/playground_assets/mail.svg"
                className="home-image10"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="home-container14">
        <img
          alt="image"
          src="/playground_assets/grinning%20face%20with%20sweat-1500h.webp"
          className="home-image11"
        />
        <span className="home-text18">
          I’ll upload a resume soon
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
      <img
        alt="image"
        src="/playground_assets/color%20fade%20effect%201.svg"
        className="home-image12"
      />
      <img
        alt="image"
        src="/playground_assets/color%20fade%20effect%202.svg"
        className="home-image13"
      />
      <img
        alt="image"
        src="/playground_assets/color%20fade%20effect%20m1.svg"
        className="home-image14"
      />
      <img
        alt="image"
        src="/playground_assets/color%20fade%20effect%20m2.svg"
        className="home-image15"
      />
    </div>
  )
}

export default Home
