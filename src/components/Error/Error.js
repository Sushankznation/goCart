
import "./Error.scss";
import {error} from "../../utils/images"; 

// Define a functional component named Error
const Error = () => {
  return (
    <div className='container'>
        {/* Create a div with the class "error" and center its contents */}
        <div class = "flex flex-center error">
            {/* Display the error image */}
            <img src = {error} alt = "error" />
        </div>
    </div>
  )
}

export default Error; // Export the Error 
