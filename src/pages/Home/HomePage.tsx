
import { Button, DetailCard1, FolderCard1, Text } from "../../components"
import getBaseUrl from "../../utils/base-url"
import CircularSLider from "@fseehawer/react-circular-slider"
import { AiOutlinePlus } from "react-icons/ai"
import { useAddContactModalStore, useAddNewStorageModalStore } from "../../components/Modals/stores"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"
import { useStoragesStore } from "../../stores"



function HomePage() {
  const setIsAddContactModalOpen = useAddContactModalStore(selector => selector.setIsAddContactModalOpen)
  const setIsAddNewStorageModalOpen = useAddNewStorageModalStore(selector => selector.setIsOpen)
  const storages = useStoragesStore(selector => selector.storages)

  return (
    <div className="w-full h-max p-4 bg-brand-3 rounded-3xl grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-y-8">

      <div>

        <div className="w-full bg-brand p-5 flex items-center gap-x-4 shadow-md shadow-black/10 rounded-3xl">
          <CircularSLider
            label="Space Used"
            progressSize={12}
            trackSize={8}
            width={180}
            trackColor="rgba(255,255,255,0.2)"
            progressColorFrom="rgba(255,255,255,0.9)"
            progressColorTo="rgba(255,255,255,0.9)"
            labelColor="rgba(255,255,255,0.8)"
            appendToValue="%"
            hideKnob
            knobDraggable={false}
            min={0}
            max={100}
            dataIndex={(66.8 / 150) * 100}
          />

          <div className="flex flex-col items-center justify-center w-full">
            <Text size="head3" className="text-brand-3">Available Storage</Text>
            <Text size="subtitle1" className="text-brand-3 mt-2">
              66.8 GB from 150 GB
            </Text>
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 gap-y-10 place-items-center mt-20 pb-8">
          {
            storages?.map(storage => (
              <Link
                to={ApplicationRoutes.pages.__folders(storage.name)}
              >
                <FolderCard1
                  key={storage.id}
                  className="w-56"
                  size={storage.size.toString()}
                  name={storage.name}
                  lastUpdateTime={storage.lastUpdated}
                  iconColor="white"
                  icon={storage.icon}
                  imgClassName="w-8 h-8"
                />
              </Link>
            ))
          }
          {/* <Link
            to={ApplicationRoutes.pages.__folders("Google-Drive")}
          >
            <FolderCard1
              className="w-56"
              size="5.8 GB"
              name="Goole Drive"
              lastUpdateTime="2023/10/11 - 15:53"
              iconColor="white"
              icon={getBaseUrl() + "/icons/google-drive-48.png"}
              imgClassName="w-8 h-8"
            />
          </Link>

          <Link
            to={ApplicationRoutes.pages.__folders("OneDrive")}
          >
            <FolderCard1
              className="w-56"
              size="9 GB"
              name="OneDrive"
              lastUpdateTime="2023/10/11 - 15:53"
              iconColor="white"
              icon={getBaseUrl() + "/icons/onedrive-48.png"}
              imgClassName="w-8 h-8"
            />
          </Link>

          <Link
            to={ApplicationRoutes.pages.__folders("Dropbox")}
          >
            <FolderCard1
              className="w-56"
              size="9 GB"
              name="Dropbox"
              lastUpdateTime="2023/10/11 - 15:53"
              iconColor="white"
              icon={getBaseUrl() + "/icons/dropbox-48.png"}
              imgClassName="w-8 h-8"
            />
          </Link>

          <Link
            to={ApplicationRoutes.pages.__folders("Persoanl-Cloud-Storage")}
          >
            <FolderCard1
              className="w-56"
              size="49 GB"
              name="Personal Server"
              lastUpdateTime="2023/10/11 - 15:53"
              iconColor="white"
              icon={getBaseUrl() + "/icons/server-64.png"}
              imgClassName="w-8 h-8"
            />
          </Link> */}

          <Button onClick={() => setIsAddNewStorageModalOpen(true)} className="w-16 h-16 rounded-xl">
            <AiOutlinePlus className="w-5 h-5 fill-brand-3" />
          </Button>

        </div>

      </div>

      <div className="sm:p-3 pt-0">

        <div className="p-3 py-5 bg-white rounded-2xl shadow-md shadow-black/5">

          <div className="flex px-2 items-center justify-between">

            <Text size="head4" className="text-brand-4/90">Contact</Text>

            <Button onClick={() => setIsAddContactModalOpen(true)} className="w-max rounded-full p-2 grid place-items-center">
              <AiOutlinePlus className="w-5 h-5 fill-white" />
            </Button>

          </div>

          <div className="mt-4 space-y-2">
            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Alice Emma"
                subtitle="emmaart1234@gmail.com"
                img={getBaseUrl() + "/img/12.jpg"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Anne Jennifer"
                subtitle="jennifer@gmail.com"
                img={getBaseUrl() + "/img/9.png"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Anne Jennifer"
                subtitle="jennifer@gmail.com"
                img={getBaseUrl() + "/img/10.jpg"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Bush Matthew"
                subtitle="matthew0909@gmail.com"
                img={getBaseUrl() + "/img/11.jpg"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Henry Rebecca"
                subtitle="henryrebeccca1234@gmail.com"
                img={getBaseUrl() + "/img/8.jpg"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Geogre Michael"
                subtitle="art1234@gmail.com"
                img={getBaseUrl() + "/img/13.jpg"}
              />
            </Link>

            <Link
              to={ApplicationRoutes.pages.__userProfile("12fj714a")}
            >
              <DetailCard1
                className="border-none hover:bg-brand/10 transition-colors duration-300 cursor-pointer"
                title="Robert Laura"
                subtitle="lauralauralaura@gmail.com"
                img={getBaseUrl() + "/img/14.jpg"}
              />
            </Link>
          </div>

        </div>

        <div className="mt-6 p-3 py-5 bg-white shadow-md shadow-black/5 rounded-2xl">
          <Text size="head4" className="text-brand-4/90 px-2">Invite a Friend</Text>

          <div className="my-5 w-11/12 flex items-center justify-between mx-auto border border-dotted border-brand p-3 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.075)]">
            <Text size="subtitle2" className="text-brand-1">wurc27rc37thin1y9r7ct1</Text>
            <Button className="w-max text-xs py-2">
              Copy
            </Button>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.15)]">
              <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Instagram.png"} className="w-5 h-5" />
            </Button>

            <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.15)]">
              <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Twitter.png"} className="w-5 h-5" />
            </Button>

            <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.15)]">
              <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Facebook.png"} className="w-5 h-5" />
            </Button>

            <Button colorSchema="ghost" className="w-max p-2.5 !shadow-[0_0_10px_rgb(0,0,0,0.15)]">
              <img alt="" loading="lazy" src={getBaseUrl() + "/icons/Messenger.png"} className="w-6 h-6" />
            </Button>
          </div>

        </div>

      </div>


    </div>
  )
}

export default HomePage