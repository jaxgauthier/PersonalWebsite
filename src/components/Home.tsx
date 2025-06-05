import TimelineItem from "./TimelineItem";
import uiowa from '../assets/Iowa_Hawkeyes_logo.svg.png'

const timelineData = [
  {
    date: "August, 2023",
    title: "Started at University of Iowa",
    description: "Began my journey in Computer Science and Engineering at the University of Iowa with a focus and machine learnning and bio-imaging",
    image: uiowa
  },
  {
    date: "2024",
    title: "Web Development Journey",
    description: "Built my first personal portfolio website using React, TypeScript, and modern web technologies.",
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
    <section className="py-16 px-6">
      <div className="max-w-[90rem] mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome!
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Hi, I'm Jaxson Gauthier. Welcome to my personal website.
        </p>
        
        <div className="relative max-w-[80rem] mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
