import { useRef, useState } from "react";
import Popup from "./popup/Popup";


export default function CreateFile() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const formData = new FormData();
    const data = useRef()
    let file = {};
    let dataFile = ""

    const onSubmit = (e) => {
        e.preventDefault()
        file.name = data.current.files[0].name;
        file.size = data.current.files[0].size;
        file.type = data.current.files[0].type;
        // file.type = file.type.split("/")[file.type.split.length-1]
        dataFile = file.name
        //     formData.append("myFail", data.current)
        //     fetch("http://localhost:3500/file/p", {
        //     method: "post",
        //     body: formData,
        // }).catch((error) => ("Something went wrong!", error));
        console.log();
    }


    return <div className="create">
        <form onSubmit={onSubmit} >
            <button onClick={togglePopup}>{"create file"}</button>

            {isOpen && <Popup
                content={<>
                    <form className='form'>
                        <input type="file" ref={data} required /><br />

                        <h3>{dataFile ? file.name : "no file selected"}</h3>

                        <button>upload</button>
                    </form>
                </>}
                handleClose={togglePopup}
            />}
        </form>
    </div>
}