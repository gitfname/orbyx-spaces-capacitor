
import { Button, DetailCard1, DetailCard2, FileCard1, FileCard2, FolderCard1, InputField, Search, TextField } from "../../components"
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

      <DetailCard1
        img={getBaseUrl() + "/img/14.jpg"}
        title="hello world and bye"
        subtitle="2023/07/11 - aliopman@gmail.com"
        className="w-full max-w-xs"
        colorSchema="dark"
      />

      <DetailCard1
        img={getBaseUrl() + "/img/14.jpg"}
        title="hello world and bye"
        subtitle="33 min"
        className="w-full max-w-xs"
        colorSchema="dark"
      />

      <DetailCard2
        img={getBaseUrl() + "/img/14.jpg"}
        title="hello world and bye op-man"
        subtitle="5 Mins Remaining"
        className="w-max"
        value={33}
      />

      <FolderCard1
        className="mt-12 w-52"
        size="12 GB"
        name="Documentsand"
        lastUpdateTime="2023/10/11 - 15:53"
      />
    </div>
  )
}

export default HomePage