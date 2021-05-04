/* eslint-disable react/no-unescaped-entities */
/* eslint-disable array-callback-return */
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import React from 'react'

function ImgSlider () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
        <div>
            <Carousel {...settings}>
                 <div>
                    <Content>
                        <Info>
                            <div>
                                <h1>The Falcon and The Winter Soldier</h1>
                                <h4>Marvel . Superhero</h4>
                                <h4>Following the events of “Avengers: Endgame,” Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.</h4>
                            </div>
                            <div>
                            </div>
                        </Info>
                        <Imagecontainer>
                            <Image src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h" />
                        </Imagecontainer>
                    </Content>
                </div>

                 <div>
                    <Content>
                        <Info>
                            <div>
                                <h2>OK Computer</h2>
                                <h4>Hotstar Specials . Science Fiction</h4>
                                <h4>When a self-driving car commits murder, a cyber cop and a robot rights activist team up to investigate. Who is to be held accountable? Can we really trust AI?</h4>
                            </div>
                            <div>
                            </div>
                        </Info>
                        <Imagecontainer>
                            <Image src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2486/942486-h" />
                        </Imagecontainer>
                    </Content>
                </div>

                <div>
                    <Content>
                        <Info>
                            <div>
                                <h2>Tanhaji</h2>
                                <h4>Action . 2020</h4>
                                <h4>As Aurangzeb captures the Kondhana Fort, Tanhaji Malusare, Shivaji Maharaj's trusted military leader and braveheart, ventures out to win it back.</h4>
                            </div>
                            <div>
                            </div>
                        </Info>
                        <Imagecontainer>
                            <Image src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2886/892886-h" />
                        </Imagecontainer>
                    </Content>
                </div>

                <div>
                    <Content>
                        <Info>
                            <div>
                                <h2>The Legend of Hanuman</h2>
                                <h4>Mythology . Hotstar Specials</h4>
                                <h4>When the power-hungry Ravan tore through the world to unleash evil, in his way atood a humble vaanar awoken to his divinity to become an immortal legend.</h4>
                            </div>
                            <div>
                            </div>
                        </Info>
                        <Imagecontainer>
                            <Image src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2156/912156-h" />
                        </Imagecontainer>
                    </Content>
                </div>
            </Carousel>
        </div>
  )
}

/*
    ul li button {
        &:before {
            font-size : 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

*/
const Carousel = styled(Slider)`
    margin-top: 20px;
    cursor: pointer;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        
    }
    &:hover button{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }

    ul li button {
        display: none;
    }

    .slick-list {
        overflow: initial;
    }

    
    .slick-prev{
        left: -5vw;  
    }

    .slick-next{
        right: -5vw;  
    }
    

   
`

const Content = styled.div`   
    display: flex;
    background-color:#090b13;
    justify-content : space-between;
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(0,0,0,0.5);
    border-radius:5px;
    margin: 0px 15px;
    padding-left: 30px;
    @media (max-width: 1000px) {
        padding : 0px;
        margin: 0px 8px;
        box-shadow:none;
  }

`
const Info = styled.div`
    flex:0.39;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

    h4 {
        color : #b3b3b3;
        line-height: 1.6;
    }
   @media (max-width: 1000px) {
        flex:0;
        display : none;
  }

`

const Imagecontainer = styled.div`
    flex : 0.55;
    @media (max-width: 1000px) {
        flex : 1;
  }

    
`
const Image = styled.img`
    padding: 0px;
    object-fit:contain;
    height:100%;
    width:100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

     @media (max-width: 1000px) {
        border-radius : 5px;
  }


`
export default ImgSlider
