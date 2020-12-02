import './styles.css';
import { useState } from 'react'
import { Icon, IconBottom, FlagBR, FlagEUA } from './styles'
import { faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons'

function Main() {
  // <title>foreverdevs</title>
  // <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'>
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  const [language, setLanguage] = useState('pt')

  return (
    <>
      <div className="main">
        <div className="bodyTitleMobileView">
          <span className="bodyTitleMobile">foreverdevs.</span>
        </div>
        <div className="sideMenu">
          <div className="sideMenuHeader">
            <Icon icon={faYoutube} size={'2x'} color={"white"} />
            <Icon icon={faFacebookSquare} size={'2x'} color={"white"} />
            <Icon icon={faSearch} size={'2x'} color={"white"} />
          </div>
          <div className="sideMenuFooter">
            {language === 'pt' ?
              <FlagBR />
              :
              <FlagEUA />
            }
            <IconBottom icon={faCog} size={'2x'} color={"white"} />
          </div>
        </div>
        <span className="bodyTitle">foreverdevs.</span>
        <div className="contentTopDetail">
          <div className="contentTopDetailTexts">
            <span className="contentTopDetailJS">JS</span>
            <span className="contentTopDetailMain">main.js</span>
          </div>
          <div className="contentTopDetailEllipse"></div>
        </div>
        <div className="contentTotal">
          <div className="contentArea">
            <div className="contentAreaTitle">
              <span className="contentAreaTitleJS">JS</span>
              <span className="contentAreaTitleMain">main.js ></span>
              <span className="contentAreaTitleForeverdevs">foreverdevs()</span>
            </div>
            <div className="contentAreaNumbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            <div className="content">
              {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
              <div className="imagem"></div> */}
              <div className="logoText">
                <div>
                  <span className="logoSymbol">&lt;</span>
                  <b className="logoInfinity">∞</b>
                  <span className="logoSymbol">/&gt;</span>
                </div>
                <div className="logoTextView">
                  <br />
                  <span className="logoTextWelcome">Welcome to FOREVERDEVS</span><br /><br /><span>the site is under construction, please wait...</span>
                </div>
              </div>
            </div>
            <div className="foreverdevsFooter">
              <span>© Copyright 2020-2020 foreverdevs - All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
