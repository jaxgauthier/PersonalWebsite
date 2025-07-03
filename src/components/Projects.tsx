import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import frequentListener from '../assets/userSideFrequent.mp4';
import FooterBar from './FooterBar';
import './Projects.css';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      // Play video when it comes into view
      if (videoRef.current && project.media && (project.media.endsWith('.mov') || project.media.endsWith('.mp4'))) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      }
    } else {
      // Pause video when it goes out of view
      if (videoRef.current && project.media && (project.media.endsWith('.mov') || project.media.endsWith('.mp4'))) {
        videoRef.current.pause();
      }
    }
  }, [inView, project.media]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Media Section */}
        <div className="p-4">
          <div className="bg-gray-100 rounded-lg p-3">
            {project.media.endsWith('.mov') || project.media.endsWith('.mp4') ? (
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
        <div className="p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">{project.longDescription}</p>
          
          {/* Technologies */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span 
                  key={techIndex}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-auto">
            <a 
              href={project.githubLink}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center inline-flex"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
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
      title: "Frequent Listener",
      description: "A web application that challenges users to guess songs based on composite frequencies. The app starts with humming-like sounds and gradually reveals melodies, creating an engaging audio guessing experience.",
      longDescription: "Using the Fast Fourier Transform, songs get created into increasingly sized composite frequencies as the user tries to guess the song. Stores user stats including average score, accuracy, and times played in a SQLite database. Also stores song information such as every song used as well as average score per song. Has an admin side that controls the current song as well as the next songs in a weekly queue. Uses apis from both Youtube and Spotify to get song information and audio.",
      technologies: ["SQLlite", "API Integration", "React", "Audio Processing"],
      media: frequentListener,
      githubLink: "https://github.com/jaxgauthier/FrequentListener"
    }
  ];

  return (
    <div className="projects-tab">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects & Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects and research work in software development, machine learning, and engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
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
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600">
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
