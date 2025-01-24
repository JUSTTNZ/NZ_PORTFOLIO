import Loader from "react-loaders"
import "./Contact.scss"
import AnimatedLetters from "../../components/AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again")
                }
            )
      }

    return(
        <>
            <div className = "container contact-page w-full ">
                <div className = "text-zone">
                    <table>
                        <tr className="grid grid-cols-1 lg:grid-cols-2 w-full lg:space-x-8 pr-12">
                            <td className="w-full pr-4 md:pr-0 lg:pr-0">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15} />
                                </h1>
                                <p className="text-left break-words whitespace-normal flex-wrap lg:flex-nowrap">
                                    <br/>
                                    Thank you for your interest in getting in touch! 
                                    <br/>
                                    <br/>I value open communication and welcome any  <br /> inquiries, feedback, or collaboration opportunities. <br /> Please don't hesitate to get in touch with me by <br /> clicking any of the link below.
                                    <br/>
                                    <br/>
                                    <div className="flex md:ml-[-50px]">
                                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/confidence-chukwudi-0236322a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                        <FontAwesomeIcon icon={faLinkedin}  class = "iconl" color = "#4d4d4e" />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQczPFzjhRTkttDXqmDdDgTdXbSqpvzbtHHKXpXknGVsbqmRcNcfRmKdsJVMbgdBmBJV">
                                        <FontAwesomeIcon icon={faEnvelope} class = "icong" color = "#4d4d4e" />
                                    </a>
                                    </div>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact