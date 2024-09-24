// import image1 from '../assets/image1.png'
import img1 from '../assets/Image1.png'
import img2 from '../assets/Image2.png'
import img3 from '../assets/Image3.png'
import img4 from '../assets/Image4.png'
import img5 from '../assets/Image5.png'

const Expert = () => {
    return (
      <div className=" mx-20 mx-auto px-4">
        {/* Main heading */}
        <div className="mt-16 text-center">
          <h1 className="font-medium text-3xl">
            Elevate Your Impact and Grow Your Influence
          </h1>
        </div>
        <div className="mt-4 text-center mb-8">
          <p className="font-normal text-xl">
            Join a global community of professionals dedicated to excellence.
          </p>
        </div>
  
        {/* Container for the cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="flex-1 p-6 w-full">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
                Build Your Reputation
              </h2>
              <p className="font-normal text-sm md:text-lg">
                Showcase your expertise and gain recognition in your field.
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
                Quick and Easy Onboarding
              </h2>
              <p className="font-normal text-sm md:text-lg">
                Begin sharing your expertise with an easy and streamlined onboarding process.
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="flex-1 p-6 w-full">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
                Build Your Reputation
              </h2>
              <p className="font-normal text-sm md:text-lg">
                Showcase your expertise and gain recognition in your field.
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
                Deliver Sessions; Anytime, Anywhere
              </h2>
              <p className="font-normal text-sm md:text-lg">
                Provide guidance globally at your convenience.
              </p>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className="flex flex-col md:flex-row w-full md:w-[1000px] h-auto rounded-[8px] bg-cardBlue overflow-hidden">
            <div className="flex-1 p-6">
              <h2 className="text-lg md:text-2xl font-medium mb-2">
                Supportive Community
              </h2>
              <p className="font-normal text-sm md:text-lg">
                Connect with other experts and expand your professional network.
              </p>
            </div>
            <div className="w-full md:w-[417px] h-[250px] md:h-[295px]">
              <img
                className="h-full w-full object-cover"
                src={img5}
                alt="Card image"
              />
            </div>
          </div>
        </div>
  
        {/* Button */}
        <div className="text-center mt-8">
          <button className="bg-btnColor text-white text-xl py-4 px-6 rounded">
            REGISTER NOW FOR FREE
          </button>
        </div>
      </div>
    );
  };    
  
  export default Expert;
  