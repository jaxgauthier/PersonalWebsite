import linkedin from '../assets/linkedInLogo_cropped.webp';
import github from '../assets/GitHub.png';
import resume from '/public/Resume7:3:25.pdf';

const FooterBar = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Contact Me Title */}
        <div className="md:w-1/4 mb-8 md:mb-0 flex items-start">
          <span className="block text-4xl font-bold leading-tight">Contact Me</span>
        </div>

        {/* Socials */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Socials</div>
          <div className="flex flex-col space-y-3">
            <a 
              href="https://github.com/jaxgauthier" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 mb-2"
            >
              <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jaxson-gauthier-61b555252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Email</div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:jaxsongauthier702@gmail.com" className="hover:underline text-white">jaxsongauthier702@gmail.com</a>
          </div>
        </div>

        {/* Resume */}
        <div className="md:w-1/4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Resume</div>
          <a 
            href={resume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBar; 