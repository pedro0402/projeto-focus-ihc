import { Link } from 'react-router-dom'

function LinkButton({to, children, className}) {
    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    )
}

export default LinkButton