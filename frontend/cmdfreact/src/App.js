import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import FileUpload from "./components/FileUpload.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import colorpal2 from './colorpal2.png';
import {Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image from './savedImage.png';


function App() {
  
  const [selectedFile, setSelectedFile] = useState();
  const onFileChange = event => setSelectedFile(event.target.files[0]);
  const onFileUpload = () => {
    // const a = await fetch("http://127.0.0.1:5000/");
    // const [image, setImageSrc] = useState('');

    <Image src={image}/>
    // setImageSrc(image);
    // const handleClick = () => {
    //   setImageSrc(image);
    // }
    
    // <img src={image} alt="image" height="50"/>


    // const formData = new FormData();
    // formData.append(
    //       "myFile",
    //       selectedFile,
    //       this.state.selectedFile.name
    //     );
  }
  

  return (
    <div>
    
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <div class="bg">
      <div class="navbar" data-scroll-lock>
        <div class="title">
          <a href="#titlepage"><img src={colorpal2} alt="colorpal2" height="50"/></a>
        </div>
        
        <a href="#personalcolor"><i class="active"></i> Our Mission</a>
        <a href="#uploadhere"><i class="active"></i> Upload Here</a>
        
      </div>

      <div className="App">
    
        <header className="App-header" id="titlepage">
          
          <p>
            Welcome to <br></br>colorpal!
          </p>
          <div className="tagline">
          <p>
            Make your life more colorful with ColorPal.
          </p>
          <a href="#personalcolor"><button className='getstartedbutton'>Get Started</button></a>
        </div>
          
        </header>

        


        <header className="AboutPCbg">
            <div className="about" id="personalcolor">
            {/* class="rainbow rainbow_text_animated" */}
              <p>Our Mission</p>
              <div class="pcbody">
                <p>
                The growing rise of non-descriptive naming trends in the makeup industry leaves people with color blindness behind, limiting their ability to self-express themselves. Additionally the increase in unhelpful labels on makeup products decrease the trust that color blind people have with makeup companies.
                </p>
                <i>“I would love for the beauty industry to put color descriptions on their packaging, on their websites, just somewhere so that it’s accessible to anyone who may need it, and anyone who may want it”.
                </i>
                <p>- Natasha Caudill</p>
                <p>Colorpal attempts to resolve these problems offering an easy, accessible way to identify all the colours on your makeup palette using clear descriptive language. By prioritizing accessibility to makeup products, Colorpal hopes that colorblind people can fully express themselves through makeup.
                </p>
                {/* <i>Personal Color is the idea of determining your personal color profile by using color analysis, and skin-tone matching. The concept of finding your personal color has become trendy recently as it can help people elevate their style and self-expression through fashion and makeup in a way that is flattering to them, instead of whatever colors are in trend. The subtleties of color shades can often be hard to identify with an untrained eye so many beauty services offer color matching as a professional service. However, colorpal hopes to make your journey to finding your true color accessible and simplified by analyzing these colors for you!</i> */}
              </div>
            </div> 
        </header>

        <header className="upload">
        <div class="Upload-Here" id="uploadhere">
            
            <div class="uploadbody">
              <p>Upload your Palette here:</p>
              <FileUpload></FileUpload>
              {/* <input type="file" onChange={onFileChange} /> */}
              
              <a href="#pic"><button className="button" onClick={onFileUpload}>
                Upload!
              </button></a>

      

            </div>
            {/* <img src={image} alt="image" height="500"/> */}
          </div>
        </header>
        
        <header className="pic">
        <div class="Pic" id="pic">
            
            <img src={image} alt="image" height="500"/>
          </div>
        </header>
      </div>
    </div>
    

  
    </div>
  );
}

export default App;
