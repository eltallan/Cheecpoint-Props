import Profile from "./Profiles/Profiles";
import image  from './Profiles/image.png' 
import './App.css' 

function App () {


    return (
        
        <div className="mtn">
            <Profile fullName={"Mame Talla Ndiaye"}
            bio={"GoMy Coder"}
            profession={"Etudiant"}
            img={image}
           >
            
            </Profile>

            
            
        </div>

    )
}
export default App;