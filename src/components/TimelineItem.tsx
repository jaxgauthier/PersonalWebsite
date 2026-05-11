import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image?: string;
  index: number;
}

const TimelineItem = ({ date, title, description, image, index }: TimelineItemProps) => {
  const controls = useAnimation();
  const imageControls = useAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: .1,
    triggerOnce: false,
  });
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      });
      imageControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
      });
      
      // Play video when it comes into view
      if (videoRef.current && image && (image.endsWith('.mov') || image.endsWith('.mp4'))) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      }
    } else {
      controls.start({
        opacity: 0,
        x: isEven ? -150 : 150,
        transition: { duration: 0.5, ease: "easeIn" }
      });
      imageControls.start({
        opacity: 0,
        x: isEven ? 150 : -150,
        transition: { duration: 0.5, ease: "easeIn" }
      });
      
      // Pause video when it goes out of view
      if (videoRef.current && image && (image.endsWith('.mov') || image.endsWith('.mp4'))) {
        videoRef.current.pause();
      }
    }
  }, [inView, controls, imageControls, isEven, image]);

  return (
    <div ref={ref} className="relative pb-32 mb-6">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-blue-600/50 transform -translate-x-1/2 last:h-[50%]" />
      
      {/* Timeline dot */}
      <div className={`absolute left-1/2 top-0 w-3 h-3 rounded-full bg-blue-400 shadow-md 
                    transform -translate-x-1/2 transition-transform duration-300
                    ${inView ? 'scale-150' : 'scale-100'}`} />
      
      {/* Description Content - Always on the even/odd side */}
      <motion.div 
        animate={controls}
        initial={{ opacity: 0, x: isEven ? -150 : 150 }}
        className={`${isEven ? 'mr-[calc(50%+1.5rem)]' : 'ml-[calc(50%+1.5rem)]'} 
                   ${isEven ? 'ml-6' : 'mr-6'}
                   max-w-[calc(42%)] w-full`}
      >
        <div className={`bg-slate-800/90 rounded-lg shadow-md p-5 transition-shadow duration-300 border border-slate-700/50
                      ${inView ? 'shadow-xl' : 'shadow-md'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded-full border border-blue-700/30">{date}</span>
          </div>
          <h3 className="text-lg font-bold !text-gray-200 mb-1.5 break-words">{title}</h3>
          <p className="!text-gray-300 text-sm leading-snug break-words">{description}</p>
        </div>
      </motion.div>

      {/* Media - Always on the opposite side from description */}
      {image && (
        <motion.div
          animate={imageControls}
          initial={{ opacity: 0, x: isEven ? 150 : -150 }}
          className={`absolute ${isEven ? 'top-12' : 'top-6'} 
                     ${isEven ? 'left-[calc(50%+1.5rem)]' : 'right-[calc(50%+1.5rem)]'}
                     ${isEven ? 'right-6' : 'left-6'}
                     max-w-[calc(42%)] w-full`}
        >
          <div className={`bg-slate-800/90 rounded-lg shadow-md p-2 transition-shadow duration-300 border border-slate-700/50
                       ${inView ? 'shadow-xl' : 'shadow-md'} overflow-hidden`}>
            {image.endsWith('.mov') || image.endsWith('.mp4') ? (
              <video 
                ref={videoRef}
                src={image} 
                className="rounded-md w-full h-auto max-h-[240px] object-contain"
                controls
                muted
                loop
              />
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="rounded-md w-full h-auto max-h-[240px] object-contain"
              />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineItem;
