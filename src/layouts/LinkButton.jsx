import { Link } from 'react-router-dom'

function LinkButton({to, text}) {
    return (
        <Link className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700" to={to}>
            {text}
        </Link>
    )
}

export default LinkButton