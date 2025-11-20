import { Link } from 'react-router-dom'

function LinkButton({to, children, className, target}) {
    return (
        <Link className={className} to={to} target={target}>
            {children}
        </Link>
    )
}

export default LinkButton