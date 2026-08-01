import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({children}){
    return (
        <div className="card">
            <span><IoCloudUploadOutline color="#fff" size={25}/></span>
            {children}
        </div>
    )
}