import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { GoMail } from "@react-icons/all-files/go/GoMail"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const IndexPage = () => {
  const [showMsg, setShowMsg] = useState(false)
  const showCopied = () => {
    setShowMsg(!showMsg) 
  }
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Kyle Zhang. </h1>
    
    <div id = "About">
    <h2 style={{textDecoration: 'underline', textDecorationColor: 'red'}}> About Me</h2>
    <p style = {{
      fontSize: 12,
      lineHeight: 1.25,
      fontFamily: 'Verdana'
    }}>I am a developer and currently a Junior studying Computer Science at Rutgers University, New Brunwick. 
      I am also a first generation college student with a deep passion for software engineering. 
      I grew up absurdly shy, which made me truly value being social and making meaningful connections as I matured.
      I dream about contributing to something great and positively impactful. 
      You know, the kind of thing you can brag to your kids about.
      Some of my interests include basketball, working out, music, and video games.
      </p>
    </div>
    <Accordion allowMultipleExpanded allowZeroExpanded>
      <AccordionItem >
        <AccordionItemHeading>
          <AccordionItemButton style={{fontSize: 14, textAlign: 'center',}}>
          Want to learn more?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p style={{fontFamily: 'Verdana', fontSize: 12, lineHeight: 1.25}}>
            I discovered the world of programming and computer science through some close friends in high school who had been organizing a hackathon called CodeDay NJ and it has been my chosen career path ever since. I eventually became a volunteer at this event and began attending hackathons and learning more and more. 
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>

    <ul style={{listStyle: 'none', float: 'right'}}>
      <div id = "Links" style ={{maxWidth: '300px', marginBottom: '1.45rem'}}>
        <a href="https://github.com/kylzhng" target = "_blank" rel = "noopener noreferrer" style = {{textDecoration: 'none',}}>
        <FaGithubSquare class="socialIcons" size="3em"/>
        </a>
        <a href="https://www.linkedin.com/in/kyle-zhang-535ba3154/" target = "_blank" rel = "noopener noreferrer" style = {{textDecoration: 'none',}}>
        <FaLinkedin size="3em" class="socialIcons"/>
        </a>
        
        <CopyToClipboard text={"kz199@rutgers.edu"}
            onCopy={showCopied}>
            <GoMail size="3em" class="socialIcons"/> 
        </CopyToClipboard>
        <p style={{
              display: showMsg ? 'block' : 'none',
              textAlign: "right",
              fontSize: "14px",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "red",
              marginTop: "5px"
            }}>
              Email Copied.
            </p>
        
      </div>
    </ul>

    <div id = "Projects" >
      <h2 style={{textDecoration: 'underline', textDecorationColor: 'red', marginBottom: '60px'}}>Projects</h2>
      <div id = "Project 1">
        <a href="https://devpost.com/software/runningmate" target = "_blank" rel = "noopener noreferrer" style = {{textDecoration: 'none',}}>

          <div class="outer__button button__left-right">

              <h4 style = {{
              margin: `0 auto`,
              maxWidth: 960,
              lineHeight: 2,
              textDecoration: 'underline',
              textDecorationThickness: 3,
              textDecorationColor: 'red',
              
              }}>
              RunningMate</h4>  

              <p style = {{
              margin: `0 auto`,
              maxWidth: 960,
              fontSize: 12,
              lineHeight: 1.25,
              fontFamily: 'Verdana',
              
              }}>
                An app that simulates the experience of running with a friend, or "mate" without actually being with them in person. The inspiration for this app came from the global pandemic that made staying active more of a struggle. Using Facebook’s React Native Framework, we created a cross-platform (Android and IOS) app which connects to the Python backend. We used the Google Maps API and Google Cloud API to retrieve information about the user’s current location as well as creating a path for both users to run on. We also used Socket.IO to communicate real-time information about both users’ location and pace information.
              </p>

          </div>&nbsp;
              
        </a>
        
      </div>
      <div id = "Project 2" style={{marginBottom: '1.5em'}}>
        <Link to="/SandwichStore/" style = {{textDecoration: 'none'}}>
          <div class="outer__button button__left-right">
            
              <h4 style = {{
              margin: `0 auto`,
              maxWidth: 960,
              lineHeight: 2,
              textDecoration: 'underline',
              textDecorationThickness: 3,
              textDecorationColor: 'red',
              
              }}>
              Sandwich Store</h4>  

              <p style = {{
              margin: `0 auto`,
              maxWidth: 960,
              fontSize: 12,
              lineHeight: 1.25,
              fontFamily: 'Verdana',
              
              }}>
                Utilizes abstract classes, Javafx, and more to create a Sandwich menu checkout system where the user can select 3 different types of sandwiches as well as multiple different add-ons which add to the cost.  After all orders are added, there is a show order summary button which lists out the order. On that screen order lines can be both removed or duplicated upon the user's request. Import/export files with orders  are also possible.
              </p>
              
          </div>
        </Link>
      </div>
      <div id = "Project 3" style={{marginBottom: '1.5em'}}>
        <Link to="/museum/" style = {{textDecoration: 'none'}}>
          <div class="outer__button button__left-right">
            
              <h4 style = {{
              margin: `0 auto`,
              maxWidth: 960,
              lineHeight: 2,
              textDecoration: 'underline',
              textDecorationThickness: 3,
              textDecorationColor: 'red',
              
              }}>
              Museum Pricer</h4>  

              <p style = {{
              margin: `0 auto`,
              maxWidth: 960,
              fontSize: 12,
              lineHeight: 1.25,
              fontFamily: 'Verdana',
              
              }}>
                An android app that allows you to select from 4 different museums in New York. Upon selection you are taken to a different page where the app displays a prediction of the cost of tickets for however many tickets the user inputs for up to 5 people per ticket type. On that same page, a picture of the museum also appears which can be clicked and the user will be directed to the museum's official website where tickets can be purchased.
              </p>
              
          </div>
        </Link>
      </div>

    
    </div>

    
    
  </Layout>
  )
}

export default IndexPage
