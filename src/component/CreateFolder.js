import { useRef, useState } from "react";
import Popup from "./popup/Popup";


export default function CreateFolder() {
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const onSubmit = (e) => {
        e.preventDefault()

        //     fetch("http://localhost:3500/file/p", {
        //     method: "post",
        //     body: formData,
        // }).catch((error) => ("Something went wrong!", error));
        console.log(e.target[0].value);
        togglePopup()
    }


    return <div className="create">
            
            <button onClick={togglePopup}>create folder</button>

            {isOpen && <Popup
                content={<>
                    <form className='form' onSubmit={onSubmit}>
                        <label className='form'>Enter a name :</label><br />
                        <input className='form' type="name" required /><br />
                        <button className='form' >create</button>
                    </form>
                </>}
                handleClose={togglePopup}
            />}

    </div>
}