import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BrSvg from '../../assets/svg/br'
import EuaSvg from '../../assets/svg/eua'

export const Icon = styled(FontAwesomeIcon)`
    margin-bottom: 25px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        margin-bottom: 0px;
        margin-right: 20px;
    }
`
export const IconBottom = styled(FontAwesomeIcon)`
    margin-top: 25px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        margin-top: 0;
        margin-left: 20px;
    }
`
export const FlagBR = styled(BrSvg)`
`
export const FlagEUA = styled(EuaSvg)`
`
export const MainView = styled.div`
    margin: 0px;
    background: #282828;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    overflow-y: hidden;
`
export const TopTitleMobile = styled.div`
    display: none;

    @media screen and (max-width: 920px), (max-height: 799px) {
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        z-index: 3;
        align-items: center;
        height: 50px;
    }
`
export const TopTitleMobileText = styled.span`
    display: flex;
    cursor: context-menu;
    user-select: none;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.135em;
    color: #e5e5e5;
    z-index: 4;
`
export const SideMenu = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 80px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #1A1A1A;
    justify-content: space-between;

    @media screen and (max-width: 920px), (max-height: 799px) {
        flex-direction: row;
        width: 100%;
        height: 50px;
        background-color: #282828;
    }
`
export const SideMenuHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        padding: 0px 20px;
        flex-direction: row;
        align-items: center;
    }
`
export const SideMenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        padding: 0px 20px;
        flex-direction: row;
        align-items: center;
    }
`
export const TopTitle = styled.span`
    cursor: context-menu;
    user-select: none;
    position: absolute;
    height: 70px;
    left: 99px;
    top: -5px;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    display: flex;
    align-items: center;
    letter-spacing: 0.135em;
    color: #585858;
    z-index: 2;

    @media screen and (max-width: 920px), (max-height: 799px) {
        display: none;
    }
`
export const ContentTab = styled.div`
    position: absolute;
    width: 175px;
    height: 42px;
    left: 99px;
    top: 66px;
    z-index: 2;
    background: #1A1A1A;
    box-shadow: inset 0px 6px 0px -3px rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 920px), (max-height: 799px) {
        display: none;
    }
`
export const ContentTabEllipse = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 10px;
    background: #C4C4C4;
`
export const ContentTabTexts = styled.div`
    display: flex;
`
export const ContentTabJS = styled.span`
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: -0.085em;
    margin-right: 10px;
    margin-left: 10px;
    color: #847A09;
`
export const ContentTabMain = styled.span`
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #585858;
`
export const ContentTotal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 108px;
    padding-left: 99px;
    padding-right: 20px;
    padding-bottom: 75px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        padding: 0;
        padding-top: 50px;
    }
`
export const ContentArea = styled.div`
    height: 100%;
    display: flex;
    max-width: 1440px;
    background: #1A1A1A;
`
export const ContentAreaTitles = styled.div`
    position: absolute;
    display: flex;
    padding-left: 16px;
    padding-top: 10px;

    @media screen and (max-width: 920px), (max-height: 799px) {
        display: none;
    }
`
export const ContentAreaTitlesJS = styled.span`
    cursor: context-menu;
    user-select: none;
    margin-right: 10px;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.085em;
    color: #847A09;
`
export const ContentAreaTitlesMain = styled.span`
    cursor: context-menu;
    user-select: none;
    margin-right: 10px;    
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #585858;
`
export const ContentAreaTitlesForeverdevs = styled.span`
    cursor: context-menu;
    user-select: none;
    margin-right: 10px;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #CC25B0;
`
export const ContentAreaNumbers = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 24px;
`
export const ContentAreaNumbersText = styled.span`
    cursor: context-menu;
    user-select: none;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #585858;
    margin-bottom: 5px;
`