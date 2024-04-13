import "../Common/Button.css"

export default function Button({ variant, children, href }) {
    
    return (
        <a className={variant === "primary" ? "btn-primary button" : variant === "secondary" ? "btn-secondary button" : "btn-tertiary button"} href={href}>
            {children}
        </a>
    )
}