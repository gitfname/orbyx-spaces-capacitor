
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { useTranslation } from "react-i18next";
import { useEffect, lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import { ApplicationRoutes } from "./routes";

// pages
// import { HomePage } from "./pages/Home";
// import { Documents, Images, Profile, RecentFiles, InviteFriend, Trash, History, Storage, Folder, Activities, UserProfile } from "./pages";
// import VideoAudio from "./pages/VideoAudio";

const HomePage = lazy(() => import("./pages/Home"))
const Documents = lazy(() => import("./pages/Documents"))
const Images = lazy(() => import("./pages/Images"))
const Profile = lazy(() => import("./pages/Profile"))
const RecentFiles = lazy(() => import("./pages/RecentFiles"))
const InviteFriend = lazy(() => import("./pages/InviteFriend"))
const Trash = lazy(() => import("./pages/Trash"))
const History = lazy(() => import("./pages/History"))
const VideoAudio = lazy(() => import("./pages/VideoAudio"))
const Storage = lazy(() => import("./pages/Storage"))
const Folder = lazy(() => import("./pages/Folder"))
const Activities = lazy(() => import("./pages/Activities"))
const UserProfile = lazy(() => import("./pages/UserProfile"))


function App() {

  const [_, i18n] = useTranslation()

  useEffect(
    () => {
      if (i18n.dir(i18n.language) === "rtl") {
        document.body.setAttribute("dir", "rtl")
      }
      else {
        document.body.setAttribute("dir", "ltr")
      }
    },
    [i18n.language]
  )

  return (
    <MainLayout>
      <ApplicationLayout>
        <Routes>

          <Route
            path={ApplicationRoutes.pages.dashboard}
            element={<Suspense><HomePage /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.documents}
            element={<Suspense><Documents /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.images}
            element={<Suspense><Images /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.videoAndAudio}
            element={<Suspense><VideoAudio /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.profile}
            element={<Suspense><Profile /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.recentFiles}
            element={<Suspense><RecentFiles /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.inviteFriend}
            element={<Suspense><InviteFriend /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.trashBin}
            element={<Suspense><Trash /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.history}
            element={<Suspense><History /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.folders}
            element={<Suspense><Storage /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.folder}
            element={<Suspense><Folder /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.activities}
            element={<Suspense><Activities /></Suspense>}
          />

          <Route
            path={ApplicationRoutes.pages.users}
            element={<Suspense><UserProfile /></Suspense>}
          />

        </Routes>

      </ApplicationLayout>
    </MainLayout>

  )
}

export default App