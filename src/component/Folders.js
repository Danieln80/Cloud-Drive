import { useRef } from "react";


export default function Folders(props) {
    const formData = new FormData();
    const data = useRef()


    const onSubmit = (e) => {
        e.preventDefault()

        //     fetch("http://localhost:3500/file/p", {
        //     method: "post",
        //     body: formData,
        // }).catch((error) => ("Something went wrong!", error));
        console.log();
    }


    return <div className="folders">
        <h4>{props.name}</h4>
    </div>
}