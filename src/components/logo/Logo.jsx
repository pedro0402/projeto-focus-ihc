import { AiOutlineAim } from "react-icons/ai";

function Logo({ size = "text-2xl" }) {
    return (
        <div className={`flex items-center justify-center text-white font-bold ${size} whitespace-nowrap`}>
            F
            <AiOutlineAim className="text-blue-500 mx-0.5 self-center" />
            CUS
        </div>
    )
}

export default Logo