import clsx from 'clsx'

export default function Badges({children, form='', color=''}){
    const principal = clsx(`badge ${form}`, {[color]: true})

    return (
        <span className={principal}>
         {children}
        </span>
    )
}