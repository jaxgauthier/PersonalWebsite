import TimelineItem from "./TimelineItem";
import uiowa from '../assets/Iowa_Hawkeyes_logo.svg.png'
import trickyleaf from '../assets/trickyleaf.png'
import tcia from '../assets/tcia.jpg'
import tech from '../assets/tac.png'
import './Home.css'
import si from '../assets/IMU.jpg'
import ea from '../assets/Eningeering.png'

const timelineData = [
  {
    date: "August 2022 - May 2023",
    title: "Technology Department Internship",
    description: "Worked in the Technology Center at Lockport Township High School, providing IT support by troubleshooting and repairing Chromebooks, \
    resolving technical issues, and assisting teachers with technology-related needs. Also gained experience in videography and business administration \
    through support roles in school events and departmental tasks.",
    image: tech,
    modalContent: {
      fullDescription: "Worked in the Technology Center at Lockport Township High School.",
    }
  },
  {
    date: "August, 2023",
    title: "Started at University of Iowa",
    description: "Began my journey in Computer Science and Engineering at the University of Iowa with a focus and machine learnning and Bio-Imaging. \
    Currently a junior working as a research assistant and an engineering ambassador with experience as a summplemental instructor",
    image: uiowa
  },
  {
    date: "January 2024 - Present",
    title: "Research at UIowa",
    description: "Conducting research focused on the development and performance evaluation of algorithms for quantitative PET/CT image analysis. \
    Leveraging data from The Cancer Imaging Archive (TCIA) and implementing custom neural network architectures to determine feature importance for \
    predicting overall survival in patients with head and neck cancer. Utilizing 3D Slicer to visualize and interpret volumetric imaging data, including \
    DICOM-RT structure sets, in relation to clinical segmentations and radiomic features",
    image: tcia,
  },
  {
    date: "August - December 2024",
    title: "Supplemental Instructor",
    description: "Led suplemental instruction sessions for an introduction to engineering problem solving course \
    created and executed lesson plans for the course, and provided feedback to students on their work. Met with \
    professors to discuss course content and student progress.",
    image: si
  },
  {
    date: "August 2024 - Present",
    title: "Engineering Ambassador",
    description: "Represented the University of Iowa at engineering fairs and events, engaging with prospective students and their families. \
    Led tours of the engineering facility, answered questions about the engineering program, and participated in information sessions for prospective students.",
    image: ea
  },
  {
    date: "May - July 2025",
    title: "Internship with TrickyLeaf",
    description: "Worked on front-end and back-end development for web and mobile applications for local businesses in the Milan, Lombardy region of Italy. \
    Contributed to IoT projects using mqqt.js and various brokers such as emqx. Worked in italy for the internship",
    image: trickyleaf
  },
  {
    date: "2024",
    title: "Looking Forward",
    description: "Continuing to expand my skills in software development and seeking new opportunities to grow.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

const Home = () => {
  return (
    <div className="home-tab">
    <section className="py-16 px-6">
      <div className="max-w-[90rem] mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome!
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Hi, I'm Jaxson Gauthier. Welcome to my personal website. Below is a timeline of the most important 
          events in my professional growth. You can click on each event to learn more!
        </p>
        
        <div className="relative max-w-[80rem] mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
