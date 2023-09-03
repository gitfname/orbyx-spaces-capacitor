
import { Button, FileCard1, FileCard2, InputField, Search, TextField } from "../../components"
import { AiOutlineHome } from "react-icons/ai"
import getBaseUrl from "../../utils/base-url"



function HomePage() {
  return (
    <div className="w-full h-max py-10 space-y-4 px-10">
      <Button className="max-w-xs" colorSchema="brand" icon={<AiOutlineHome className="fill-inherit w-5 h-5" />}>
        hello world
      </Button>

      <InputField labelText="name">
        <TextField placeholder="Enter your name" className="outline-none" />
      </InputField>

      <Search searchFieldAttrs={{ placeholder: "hello world", defaultValue: "search for anything" }} />

      <FileCard1
        className="w-full max-w-xs"
        colorSchema="dark"
        data={{
          date: "2023/08/11",
          id: "",
          img: getBaseUrl() + "/img/14.jpg",
          name: "hello-world-file",
          size: "301 MB"
        }}
      />

      <FileCard2
        className="w-full max-w-[11rem]"
        colorSchema="dark"
        data={{
          date: "2023/08/11",
          id: "",
          img: getBaseUrl() + "/img/14.jpg",
          name: "App.apk",
          size: "301 MB"
        }}
      />
    </div>
  )
}

export default HomePage