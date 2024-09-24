
import {Link} from 'react-router-dom'
const Header=()=>{

    return <div className="h-20 w-full bg-customBlue flex items-center justify-between"> {/* Flex container with justify-between */}
    <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4"> {/* Ensure space on both sides with px-4 */}
        <div>
        <h1 className="font-bold text-white text-4xl" >SageNest</h1>
        </div>
       {/* Navigation Links */}
       <div className="flex flex-col md:flex-row">
                       {/* Add Links Component here  */}
                       <p className="mx-4 text-lg text-white font-medium">For Experts</p>
                       <p className="mx-4 text-lg text-white font-medium">For Learners</p>
                       <p className="mx-4 text-lg text-white font-medium">Home</p>
                       <p className="mx-4 text-lg text-white font-medium">SignIn</p>
                       <button className="px-4 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">Signup</button>
       
            
          </div>
    </div>
  </div>
      
      
}
export default Header;
