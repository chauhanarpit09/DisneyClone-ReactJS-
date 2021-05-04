import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { IconButton } from '@material-ui/core'
function Footer () {
  return (
        <FOOTER>
            <Content>
                <Links>
                    <h5>About Disney+ Hotstar</h5>
                    <h5>Terms of Use</h5>
                    <h5>Privacy Policy</h5>
                    <h5>FAQ</h5>
                    <h5>Feedback</h5>
                    <h5>Careers</h5>
                </Links>
                <Info>
                    <p>
                        &copy; 2021 STAR All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                    </p>
                </Info>

            </Content>
            <Social>
                <SocialLinks>
                    <span>Connect with us</span>
                    <div>
                        <IconButton>
                            <Facebook style = {{ fontSize: '40px' }} />
                        </IconButton>
                        <IconButton>
                            <Twitter style = {{ fontSize: '40px' }} />
                        </IconButton>
                    </div>
                </SocialLinks>
                <DwonloadLink>
                    <span>Disney+ Hotstar App</span>
                    <Images>
                        <img src="./assets/images/apple.png" />
                        <img src="./assets/images/google.png" />
                    </Images>
                </DwonloadLink>
            </Social>
        </FOOTER>
  )
}

const FOOTER = styled.footer`
    margin-top: 10vh;
    bottom: 0;
    width: 90%;
    display: flex;
    padding: 40px 0px;
    justify-content: space-between;
    z-index: 3;
    @media (max-width : 800px) {
        flex-direction: column;
    }

`
const Content = styled.div`
    flex : 0.5;
    padding: 0px 25px;

`
const Social = styled.div`
    flex: 0.4;
    display: flex;
    justify-content: space-between;
    margin : 0px 20px;
`
const Links = styled.div`
    display : flex;
    flex-wrap: wrap;
    margin: 3px 0px;
    margin-right : 2rem;
    cursor: pointer;
    h5 {
        margin: 10px 10px;
    }

    
`

const Info = styled.div`
    font-size: 14px;
`
const Facebook = styled(FacebookIcon)`

    cursor: pointer;
    &:hover{
        color : #0275d8
    }
    
`
const Twitter = styled(TwitterIcon)`

    cursor: pointer;
    &:hover{
        color : #0275d8
    }
    
`

const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
`

const DwonloadLink = styled.div`
    right: -5vw;
    display: flex;
    flex-direction: column;
`

const Images = styled.div`
    display: flex;
    img {
        max-width: 100px; 
        max-height: 150px;
        object-fit: contain;
        margin: 4px;
    }
    @media (max-width:800px){
        flex-direction: column;
    }
    
`
export default Footer
