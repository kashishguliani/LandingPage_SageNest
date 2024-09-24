import img1 from '../assets/l_image2.png'
import img2 from '../assets/Image2.png'
import img3 from '../assets/l_image3.png'
import img4 from '../assets/l_imag4.png'
// import img5 from '../assets/Image5.png'
const Learner = () => {
    return (
      
      <div className=" mx-20 mx-auto px-4">

        {/* Main heading */}
        <div className="mt-16 text-center">
          <h1 className="font-medium text-3xl">
          Achieve your goals with trusted experts
          </h1>
        </div>
        <div className="mt-4 text-center mb-8">
          <p className="font-normal text-xl">
          Access personalized guidance and quality learning experiences.
          </p>
        </div>
  
        {/* Container for the cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="flex-1 p-6 w-full">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
              Verified Expertise
              </h2>
              <p className="font-normal text-sm md:text-lg">
              Learn from the best with our carefully vetted experts.
              </p>
            </div>
            <div className="w-full md:w-[417px] h-[250px] md:h-[295px]">
              <img   className="h-full w-full object-cover"
                src={img1}
                alt="Card image"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="w-full md:w-[417px] h-[250px] md:h-[295px]">
              <img
                className="h-full w-full object-cover"
                src={img2}
                alt="Card image"
              />
            </div>
            <div className="flex-1 p-6 w-full">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
              Personalized Learning
              </h2>
              <p className="font-normal text-sm md:text-lg">
              Get one-on-one sessions tailored to your needs and goals.
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="flex-1 p-6 w-full">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
              Diverse Learning Opportunities
              </h2>
              <p className="font-normal text-sm md:text-lg">
                          

            Professional Skills: Leadership, Project Management, GenAI, Astrology, Stock Market.
            Consultation: Business Strategy, Legal, Financial, Marketing, Sales and more
            Academics: Math, science, literature, languages and more.
            Personal Development:  Yoga, Meditation, Public Speaking & Communication.
            Hobbies: Embroidery, Music Lessons.

              </p>
            </div>
            <div className="w-full md:w-[417px] h-[250px] md:h-[295px]">
              <img   className="h-full w-full object-cover"
                src={img3}
                alt="Card image"
              />
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="w-full md:w-[417px] h-[250px] md:h-[295px]">
              <img
                className="h-full w-full object-cover"
                src={img4}
                alt='image'
              />
            </div>
            <div className="flex-1 p-6">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
              Explore and Schedule Sessions
              </h2>
              <p className="font-normal text-sm md:text-lg">
              Connect with experts worldwide at flexible times that suit your schedule
              </p>
            </div>
          </div>
  
          
          
        </div>
  
        {/* Button */}
        <div className="text-center mt-8">
          <button className="bg-btnColor text-white text-xl py-4 px-6 rounded">
            Talk To An Expert Today!!
          </button>
        </div>
      </div>
    );
  };
  
  export default Learner;
  