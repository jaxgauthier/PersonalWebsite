import TimelineItem from "./TimelineItem";
import uiowa from '../assets/Iowa_Hawkeyes_logo.svg.png'
import trickyleaf from '../assets/trickyleaf.png'
import tcia from '../assets/tcia.jpg'
import tech from '../assets/tac.png'
import './Home.css'
import si from '../assets/IMU.jpg'
import ea from '../assets/Eningeering.png'
import frequentListener from '../assets/adminSideFrequentListener.mov'
import FooterBar from './FooterBar';

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
    date: " July 2024",
    title: "Frequent Listener",
    description: "Developed a web application where users guess songs based on composite frequencies. The app starts with humming-like sounds and gradually reveals melodies, creating an engaging audio guessing experience.",
    image: frequentListener
  },
];

const Home = () => {
  return (
    <div className="home-tab">
    <section className="py-16 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-row items-start justify-center gap-8 mb-16">
          <h1 className="text-4xl font-bold text-gray-800 text-left whitespace-nowrap">
            Welcome!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-left">
            Over the past few years, I have gained experience in software development, machine learning, image processing, and engineering. With hobbies in music, running, and playing games, I am always looking to explore projects in these topics. I love to learn new things and am always looking for new challenges.
          </p>
        </div>
        
        <div className="relative max-w-[80rem] mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
    <FooterBar />
    </div>
  );
};

export default Home;
