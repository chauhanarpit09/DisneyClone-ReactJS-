import React, { useEffect } from 'react'
import styled from 'styled-components'
import db, { auth, provider } from '../firebasecon'
import firebase from 'firebase'
import { selectUsername, selectUserphoto, setUserLoginDetails, setSignOutState } from '../feature/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from '@material-ui/core'

function Header () {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUsername)
  const userphoto = useSelector(selectUserphoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [username])

  const login = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user)

          db.collection('user')
            .doc(result.user.email)
            .get()
            .then(doc => {
              if (!doc.exists) {
                db.collection('user')
                  .doc(result.user.email)
                  .set({
                    name: result.user.displayName,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  })
              }
            })
        })
      history.push('/home')
    }
  }

  const logout = () => {
    console.log('acdaf')
    if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          history.push('/')
        }).catch((error) => alert(error.message))
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  return (
        <>
        <Nav>
            <Logo>
                <Link to='/'><img src= "https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""/></Link>
            </Logo>
            {
                !username
                  ? (
                    <Login onClick = {() => { login() }}>Login</Login>
                    )
                  : (
            <>
            <NavMenu>
                <List1 href = "/home">
                   <span>TV
                       <Listcontent className = "list1">
                            <a href="#">hotstar Specials</a>
                            <a href="#">StarPlus</a>
                            <a href="#">Star Jalsha</a>
                            <a href="#">Star Vijay</a>
                            <a href="#">Star Bharat</a>
                            <a href="#">Asianet</a>
                            <a href="#">Star Maa</a>
                            <a href="#">Star World</a>
                            <a href="#">more...</a>
                      </Listcontent>
                   </span>
                </List1>
                <List2 href = "/home">
                   <span>Movies
                        <Listcontent className = "list2">
                            <a href="#">Hindi</a>
                            <a href="#">Bengali</a>
                            <a href="#">Telugu</a>
                            <a href="#">Malayalam</a>
                            <a href="#">Tamil</a>
                            <a href="#">Marathi</a>
                            <a href="#">English</a>
                            <a href="#">Kannada</a>
                        </Listcontent>
                   </span>
                </List2>
                <List3 href = "/home">
                   <span>Sports
                        <Listcontent className = "list3">
                            <a href="#">Cricket</a>
                            <a href="#">Football</a>
                            <a href="#">BadMinton</a>
                            <a href="#">Formula 1</a>
                            <a href="#">eSports</a>
                            <a href="#">Martial Arts</a>
                            <a href="#">Tennis</a>
                            <a href="#">Hockey</a>
                            <a href="#">Golf</a>
                            <a href="#">Wrestling</a>
                            <a href="#">Kabaddi</a>
                            <a href="#">Table Tennis</a>
                            <a href="#">Khelo India</a>
                            <a href="#">Athletics</a>
                            <a href="#">Formula E</a>
                        </Listcontent>
                   </span>
                </List3>
                <a href = "/home">
                   <span>News</span>
                </a>
                <a href = "/home">
                   <span>Premium</span>
                </a>
                <a href = "/home">
                   <span>Disney+</span>
                </a>
            </NavMenu>
            <Search>
                    <Link to='/search'><IconButton><Searchicon type="submit" className = "search" style = {{ fontSize: '18px' }}/><span className = "search">&nbsp;Search</span></IconButton></Link>
            </Search>
            <List4>
                <UserImg>
                   <span><img src={userphoto} alt="user" /></span>
                       <Listcontent className = "list4">
                            <p onClick = {() => logout()}>Sign Out</p>
                      </Listcontent>
                </UserImg>
            </List4>
            </>
                    )}
        </Nav>
        </>
  )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #0c111b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3
`

const Logo = styled.a`
    padding: 0;
    width: 120px;
    margin-bottom: 5px;
    max-height: 100px;
    font-size: 0;
    display: inline-block;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    margin-top:5px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin-right: 10px;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 14px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        color: #cccccc;
        transition : 200ms color ease-in;
    }
    span:hover {
        color:white;

    }

     @media (max-width: 768px){
        display: none;
    }
`

const Listcontent = styled.div`
    position: absolute;
    min-width: 160px;
    z-index: 1;
    background-color: #111524;
    border-radius: 5px;
    letter-spacing: 1.49px;
    z-index: 3;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,10);
    display:none;
    a {
        padding: 10px 15px;
        font-size: 13px;
        margin-right: -2px;
        display : block;
    }

    a:hover {
        background-color: rgb(0,0,0)
    }

`

const List1 = styled.a`
    height:90px;
    &:hover .list1{
            display: block;
            margin-top:24px;
        }
    }
`
const List2 = styled.a`
    height:90px;
    &:hover .list2{
            display: block;
            margin-top:24px;
        }
    }
`
const List3 = styled.a`
    height:90px;
    &:hover .list3{
            display: block;
            margin-top:24px;
        }
    }
`

const Login = styled.a`
    background-color: rgb(0,0,0,0.0);
    padding: 8px 16px;
    text-transform : uppercase;
    letter-spacing : 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition : all 200ms ease 0s;
    cursor:pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color : transparent;
    }

`
const UserImg = styled.div`
    height: 90%;
    cursor: pointer;

   img {
       height : 80%;
       margin: 10px;
       border-radius: 50px;
       -webkit-transition: .2s all;
   }

   img:hover{
      -webkit-filter: brightness(50%);
   }

   .list4 {
       right:50px;
   }

   .list4 p{
        display:flex;
        justify-content: space-around;
   }
   .list4:hover{
       background-color: rgb(0,0,0)
   }

`

const List4 = styled.a`
   @media (max-width: 800px){
       display: none;
   }
   height : 70px;
    &:hover .list4{
            display: block;
        }
    }
`

const Search = styled.div`
    margin-right: 20px; 
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid white;
    height: 40px;
    background-color: #0c111b;
    &:hover {
        background-color: white;
    }

    .search {
        color: white;
        font-size: 15px;
    }

    &:hover .search{
        color: #0c111b;
    }

`

const Searchicon = styled(SearchIcon)`
    color: white;
    margin-bottom: 3px;
`

export default Header
