
import { BsArrowUp } from "react-icons/bs"
import { Button } from ".."
import { AiOutlineMenu } from "react-icons/ai"
import { MdSpaceDashboard } from "react-icons/md"

function SortLienGrid() {
    return (
        <div className="flex items-center gap-x-2">

            <Button colorSchema="ghost" className="text-xs gap-x-1.5 rounded-lg mr-3">
                Name
                <BsArrowUp className="w-3.5 h-3.5 fill-brand-4" />
            </Button>

            <Button className="rounded-lg p-2 px-3">
                <AiOutlineMenu className="fill-white w-4 h-4" />
            </Button>

            <Button className="rounded-lg p-2 px-3">
                <MdSpaceDashboard className="fill-white w-4 h-4" />
            </Button>

        </div>
    )
}

export default SortLienGrid