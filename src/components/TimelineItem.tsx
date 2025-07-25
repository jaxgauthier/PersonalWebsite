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
    <div ref={ref} className="relative pb-64 mb-24">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-green-200 transform -translate-x-1/2 last:h-[50%]" />
      
      {/* Timeline dot */}
      <div className={`absolute left-1/2 top-0 w-3 h-3 rounded-full bg-green-500 shadow-md 
                    transform -translate-x-1/2 transition-transform duration-300
                    ${inView ? 'scale-150' : 'scale-100'}`} />
      
      {/* Description Content - Always on the even/odd side */}
      <motion.div 
        animate={controls}
        initial={{ opacity: 0, x: isEven ? -150 : 150 }}
        className={`${isEven ? 'mr-[calc(50%+2rem)]' : 'ml-[calc(50%+2rem)]'} 
                   ${isEven ? 'ml-8' : 'mr-8'}
                   max-w-[calc(42%)] w-full`}
      >
        <div className={`bg-white rounded-lg shadow-md p-8 transition-shadow duration-300
                      ${inView ? 'shadow-xl' : 'shadow-md'}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">{date}</span>
          </div>
          <h3 className="text-2xl font-bold !text-black mb-3 break-words">{title}</h3>
          <p className="!text-black text-lg leading-relaxed break-words">{description}</p>
        </div>
      </motion.div>

      {/* Media - Always on the opposite side from description */}
      {image && (
        <motion.div
          animate={imageControls}
          initial={{ opacity: 0, x: isEven ? 150 : -150 }}
          className={`absolute ${isEven ? 'top-24' : 'top-12'} 
                     ${isEven ? 'left-[calc(50%+2rem)]' : 'right-[calc(50%+2rem)]'}
                     ${isEven ? 'right-8' : 'left-8'}
                     max-w-[calc(42%)] w-full`}
        >
          <div className={`bg-white rounded-lg shadow-md p-3 transition-shadow duration-300
                       ${inView ? 'shadow-xl' : 'shadow-md'} overflow-hidden`}>
            {image.endsWith('.mov') || image.endsWith('.mp4') ? (
              <video 
                ref={videoRef}
                src={image} 
                className="rounded-md w-full h-auto max-h-[400px] object-contain"
                controls
                muted
                loop
              />
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="rounded-md w-full h-auto max-h-[400px] object-contain"
              />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineItem;
