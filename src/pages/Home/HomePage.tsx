
import { Button, InputField, Search, TextField } from "../../components"
import { AiOutlineHome } from "react-icons/ai"



function HomePage() {
  return (
    <div className="w-full h-max py-10 space-y-4 px-10">
      <Button className="max-w-xs" colorSchema="brand" icon={<AiOutlineHome className="fill-inherit w-5 h-5" />}>
        hello world
      </Button>

      <InputField labelText="name">
        <TextField placeholder="Enter your name" className="outline-none" />
      </InputField>

      <Search searchFieldAttrs={{placeholder: "hello world", defaultValue: "search for anything"}}  />
    </div>
  )
}

export default HomePage