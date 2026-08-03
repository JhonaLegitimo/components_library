import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials({children, className, author, role, img, ...rest}){
    const noImg = !img ? "no-img" : "";
    return (
        <div className={`testimonial ${className || ''}`} {...rest}>
            {img && (
                <div className="testimonial-img">
                    <img src={img} alt={author}/>
                </div>
            )
            }
            <div className={`testimonial-text ${noImg}`}>
                <ImQuotesLeft color="#fff" size={45}/>
                <p>{children}</p>
                <p className="testimonial-author">{author}</p>
                <p className="testimonial-role">{role}</p>
            </div>
        </div>
    )
}