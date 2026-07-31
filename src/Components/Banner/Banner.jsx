import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";

export default function Banner({children, paragraph, type}){
    const states = {
        sucess: [FaCheckCircle, '#34D399'],
        warning: [IoIosWarning, '#FBBF24'], 
        error: [TbXboxXFilled, '#F87171'],
        neutral: [FaInfoCircle, '#60A5FA']
    }
    const [Icon, iconColor] = states[type] ?? states.neutral
    const className = clsx('banner', {[type]: type in states, neutral: !(type in states)})
    return (
        <div className={className}>
            <div className="banner-title">
                {Icon && Icon({size: 20, color: iconColor})}
                <h1>{children}</h1>           
            </div>
            {paragraph && <p>{paragraph}</p>}
        </div>
    )
}