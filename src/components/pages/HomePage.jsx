import React,{ useContext} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../images/abc.avif'
import img2 from '../images/bk2.webp'
import img3 from '../images/bk3.jpg'
import AuthContext from '../context/auth-context';

//import styles from '../css/Homepage.css'

// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '100% 100%',
  height: '400px',
  innerWidth:'200px',
} 
const slideImages = [
  {
    url: img1,
    caption: 'Slide 1'
  },
  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
  },
];

function HomePage() {
  const ctx = useContext(AuthContext);

  return (
    <>
    {
      !ctx.isLoggedIn&&<div><h4>Please login to Continue</h4></div>
    }
    {
    <div className="slide-container">
      <section style={{width: '60%', margin:'auto'}}> 
      
      <Slide>
        {
          slideImages.map((each, index) => (
            <div key={index} style={{ ...divStyle, 'backgroundImage': `url(${each.url})` }}>
              {/*<img key={index} style={{ width: "100%", objectFit: 'cover' }} src={each.url} />*/}
            </div>
          )
          )
          }
          
      </Slide>
      </section>
    </div>}
    
    </>
  )
}

export default HomePage;