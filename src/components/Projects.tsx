import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import fouriele from '../assets/userSideFrequent.mp4';
import tcia from '../assets/tcia.jpg';
import classifcation from '../assets/DLMI_ProjectPDF-1.png'
import FooterBar from './FooterBar';
import tetris from '../assets/Tetris.mov';
import smartpong from '../assets/SmartPong3.png';
import './Projects.css';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (project.mediaType !== 'video') return;

    if (inView) {
      videoRef.current?.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    } else {
      videoRef.current?.pause();
    }
  }, [inView, project.mediaType]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-slate-800/90 rounded-xl shadow-lg overflow-hidden border border-slate-700/50"
    >
      <div className="p-4">
        {/* Media Section */}
        <div className="mb-4">
          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
            {project.mediaType === 'video' ? (
              <video 
                ref={videoRef}
                src={project.media} 
                className="w-full h-auto rounded-lg"
                controls
                muted
                loop
              />
            ) : (
              <img 
                src={project.media} 
                alt={project.title} 
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-200 mb-2">{project.title}</h2>
          <p className="text-gray-300 text-xs mb-3 leading-relaxed">{project.longDescription}</p>
          
          {/* Technologies */}
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span 
                  key={techIndex}
                  className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded-full text-xs font-medium border border-blue-700/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Fouriele
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white px-4 py-2 text-sm rounded-lg hover:bg-slate-600 transition-colors duration-200 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Projects_Research() {
  const projects = [
    {
      id: 1,
      title: "Fouriele",
      description: "A web application that challenges users to guess songs based on composite frequencies. The app starts with humming-like sounds and gradually reveals melodies, creating an engaging audio guessing experience.",
      longDescription: "Using the Fast Fourier Transform, songs get created into increasingly sized composite frequencies as the user tries to guess the song. Stores user stats including average score, accuracy, and times played in a SQLite database. Also stores song information such as every song used as well as average score per song. Has an admin side that controls the current song as well as the next songs in a weekly queue. Uses apis from both Youtube and Spotify to get song information and audio.",
      technologies: ["SQLlite", "API Integration", "React", "Audio Processing"],
      media: fouriele,
      mediaType: 'video',
      websiteLink: "https://fouriele.com",
      githubLink: "https://github.com/jaxgauthier/FrequentListener"
    },
    {
      id: 2,
      title: "Two Player Tetris",
      description: "A fully functional two player Tetris using two Atmega328p microcontrollers that are communucating via UART​",
      longDescription: "The project successfully implemented a distributed, hardware-based Tetris environment. The AVR receiver accurately interpreted serial UART payloads to queue pieces and rendered a fully playable game on our16x2 HD44780 LCD. Real time inputs control piece movement with zero noticeable latency, and the custom CGRAM character generation successfully displays a 4x16 grid.​",
      technologies: ["AVR", "UART", "LCD", "Tetris", "Embedded Systems", "C"],
      media: tetris,
      mediaType: 'video',
      githubLink: null
    },
    {
      id: 3,
      title: "SmartPong",
      description: "An Automated Stat Tracking System for Pong Games using a Raspberry Pi and a camera​",
      longDescription: "This project uses a Raspberry Pi to track the stats of a pong game using a camera. It uses the OpenCV library to track the ball and the paddles. It then uses the stats to track the score of the game.​",
      technologies: ["Raspberry Pi", "Camera", "Pong", "Embedded Systems", "Python"],
      media: smartpong,
      mediaType: 'image',
      githubLink: null
    },
    {
      id: 4,
      title: "PET/CT Image Analysis Research",
      description: "Research focused on quantitative PET/CT image analysis for head and neck cancer survival prediction.",
      longDescription: "Conducting research focused on the development and performance evaluation of algorithms for quantitative PET/CT image analysis. Leveraging data from The Cancer Imaging Archive (TCIA) and implementing custom neural network architectures to determine feature importance for predicting overall survival in patients with head and neck cancer. Utilizing 3D Slicer to visualize and interpret volumetric imaging data, including DICOM-RT structure sets, in relation to clinical segmentations and radiomic features.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "3D Slicer", "Medical Imaging"],
      media: tcia,
      mediaType: 'image',
      githubLink: null
    },
    {
      id: 5,
      title: "Custom Classification CNN Project",
      longDescription: "A full end-to-end 3D medical imaging classification pipeline was developed using PyTorch, SimpleITK, and MONAI. The project includes standardized preprocessing of NIfTI volumes—orientation correction, resampling, z-score normalization, and uniform volume sizing—supported by a custom caching system for fast loading. A lightweight 3-layer 3D CNN (~135k parameters) was built and trained using class balancing, data augmentation, early stopping, and a weighted sampling strategy. Evaluation incorporated accuracy, precision, recall, F1-scores, confusion matrices, and ROC curves. Final test performance ranged between 62% and 75%, depending on image size and training configuration. The project demonstrates a complete workflow for medical image classification, from data preparation through model development and evaluation.",
      technologies: ["Image Processing", "CNN Model"],
      media: classifcation,
      mediaType: 'image',
    }
  ];

  return (
    <div className="projects-tab">
      <div className="max-w-[90rem] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Projects & Research</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and research work in software development, machine learning, and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/60 rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300">
              I'm constantly working on new projects and research. Check back soon for updates!
            </p>
          </div>
        </motion.div>
      </div>
      <FooterBar />
    </div>
  );
}

export default Projects_Research
