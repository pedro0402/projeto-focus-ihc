import { AiOutlineAim } from "react-icons/ai";


function Logo ({ size = "text-2xl" }) {
    return(
        <div className={`flex items-center text-white font-bold ${size} whitespace-nowrap`}>
            F
            <AiOutlineAim className="mx-0 text-blue-500 padding"/>
            CUS
        </div>
    )
}

export default Logo