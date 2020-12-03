import { faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './styles.css';
import {
  ContentAreaTitlesForeverdevs,
  ContentAreaNumbersText,
  ContentAreaTitlesMain,
  ContentAreaTitlesJS,
  ContentAreaNumbers,
  TopTitleMobileText,
  ContentTabEllipse,
  ContentAreaTitles,
  ContentTabTexts,
  SideMenuHeader,
  SideMenuFooter,
  TopTitleMobile,
  ContentTabMain,
  ContentTabJS,
  ContentTotal,
  ContentArea,
  ContentTab,
  IconBottom,
  TopTitle,
  SideMenu,
  MainView,
  FlagEUA,
  FlagBR,
  Icon,
} from './styles'

function Main() {
  // <title>foreverdevs</title>
  // <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'>
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  const [language, setLanguage] = useState('pt')

  return (
    <MainView>
      <TopTitleMobile>
        <TopTitleMobileText>foreverdevs.</TopTitleMobileText>
      </TopTitleMobile>

      <SideMenu>
        <SideMenuHeader>
          <Icon icon={faYoutube} size={'2x'} color={"white"} />
          <Icon icon={faFacebookSquare} size={'2x'} color={"white"} />
          <Icon icon={faSearch} size={'2x'} color={"white"} />
        </SideMenuHeader>
        <SideMenuFooter>
          {language === 'pt' ?
            <FlagBR />
            :
            <FlagEUA />
          }
          <IconBottom icon={faCog} size={'2x'} color={"white"} />
        </SideMenuFooter>
      </SideMenu>

      <TopTitle>foreverdevs.</TopTitle>
      <ContentTab>
        <ContentTabTexts>
          <ContentTabJS>JS</ContentTabJS>
          <ContentTabMain>main.js</ContentTabMain>
        </ContentTabTexts>
        <ContentTabEllipse />
      </ContentTab>
      <ContentTotal>
        <ContentArea>
          <ContentAreaTitles>
            <ContentAreaTitlesJS>JS</ContentAreaTitlesJS>
            <ContentAreaTitlesMain>main.js ></ContentAreaTitlesMain>
            <ContentAreaTitlesForeverdevs>foreverdevs()</ContentAreaTitlesForeverdevs>
          </ContentAreaTitles>
          <ContentAreaNumbers>
            <ContentAreaNumbersText>1</ContentAreaNumbersText>
            <ContentAreaNumbersText>2</ContentAreaNumbersText>
            <ContentAreaNumbersText>3</ContentAreaNumbersText>
            <ContentAreaNumbersText>4</ContentAreaNumbersText>
          </ContentAreaNumbers>
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
        </ContentArea>
      </ContentTotal>
    </MainView>
  );
}

export default Main;
