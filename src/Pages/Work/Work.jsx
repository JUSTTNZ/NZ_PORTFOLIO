import { useState, useEffect } from "react"
import AnimatedLetters from "../../components/AnimatedLetters";
import './Work.scss'
const Work = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      const timerId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    
      return () => {
        clearTimeout(timerId);
      };
  }, []);
  const [events, setEvents] = useState([
    {
      date: 'September 2023 — December 2023',
      title: 'GENESYS TECH HUB',
      role: 'Junior Frontend Developer Intern - Remote.',
      description: [
        '. Developed and contributed to multiple web development projects, completing coding challenges to improve proficiency in HTML, CSS, and JavaScript.',
        '. Built responsive, user-friendly websites, ensuring cross-browser compatibility and mobile responsiveness.',
        '. Collaborated with senior developers to implement UI features, enhance web performance, and integrate APIs, which improved user experience and functionality.',
        '. Graduated with a certificate of completion, demonstrating technical expertise in frontend development and ability to work in a team-oriented environment.'
      ],
      expanded: false
    },
    {
      date: 'Dec 2023 — Jul 2024',
      title: 'GENESYS TECH HUB',
      role: 'Senior Frontend Developer Intern - Remote',
      description: [
        '. Built scalable applications with React, Tailwind CSS, and Firebase, ensuring real-time functionality.',
        '. Created reusable components, cutting development time by 25%.',
        '. Utilized Babel, ESLint, and Prettier for consistent, high-quality code.',
        '. Designed responsive, mobile-first UIs for enhanced user experiences.',
        '. Designed responsive, mobile-first UIs for enhanced user experiences.',
        '. Mentored junior developers, fostering collaboration and learning.',
        '. Certified in Frontend Development, demonstrating expertise and growth.'
      ],
      expanded: false
    }
  ])

  const handleItemClick = (index) => {
    setEvents(events.map((event, i) => 
      index === i ? {...event, expanded: !event.expanded} : event
    ))
  }
  return (
    <div className=" container work-page">
      <div className="text-zone ">
      <h1 className=" md:text-4xl !font-semibold !text-center !my-8  !text-3xl">
        <AnimatedLetters letterClass={letterClass} strArray={"Work Experience".split("")} idx={10} />
      </h1>

        <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
      {/* <div className="  timeline-container">
      {events.map((event,index) => (
        <div 
        key={index}
        className="w-[500px] mt-4 mb-4 text-center bg-[#333333] px-16 py-4 rounded-lg">
        <div className="flex justify-center items-center">
          <div className=" mb-2 bg-white rounded-full h-4 w-4 ">
            <div 
             className={` cursor-pointer w-3 h-3 rounded-full mt-0.5 ml-0.5 ${event.expanded === true ? 'bg-red-500' : 'bg-green-500'}`}
             onClick={()=> handleItemClick(index)}></div>
          </div>
        </div>
       
          <div>
            <h2 className="text-lg text-yellow-300">{event.title}</h2>
            <p 
            className={`text-2xl text-blue-300 ${event.expanded === true  ? "hidden" : "show"} cursor-pointer`}
            onClick={() => handleItemClick(index)}>Click for more details</p>
            <ul className={`${event.expanded === true  ? "show" : "hidden"}`}>
            {event.description.map((desc, i) => (
              <li key={i}
              className="text-white text-left space-y-4 font-light text-sm"
              >{desc}</li>
            ))}
            </ul>
          </div>
          <p 
          className={`text-sm text-gray-400 ${event.expanded === true  ? "hidden" : "show"} cursor-pointer`}>{event.date}</p>
        </div>
      ))}
    </div> */}
      </div>
    </div>
    
  )
}

export default Work
