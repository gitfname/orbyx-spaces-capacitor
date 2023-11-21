
import { AiOutlineLeft } from "react-icons/ai"
import { Button } from ".."
import { useNavigate } from "react-router-dom"

function GoBackBtn() {

    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(-1)} className="rounded-lg w-max py-2 flex-shrink-0">
            <AiOutlineLeft className="w-5 h-5 fill-brand-3" />
        </Button>
    )
}

export default GoBackBtn