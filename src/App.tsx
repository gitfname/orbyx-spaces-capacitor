
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { ApplicationRoutes } from "./routes";
import { Documents, Images, Profile, RecentFiles, InviteFriend } from "./pages";
import VideoAudio from "./pages/VideoAudio";


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
            element={<HomePage />}
          />

          <Route
            path={ApplicationRoutes.pages.documents}
            element={<Documents />}
          />

          <Route
            path={ApplicationRoutes.pages.images}
            element={<Images />}
          />

          <Route
            path={ApplicationRoutes.pages.videoAndAudio}
            element={<VideoAudio />}
          />

          <Route
            path={ApplicationRoutes.pages.profile}
            element={<Profile />}
          />

          <Route
            path={ApplicationRoutes.pages.recentFiles}
            element={<RecentFiles />}
          />

          <Route
            path={ApplicationRoutes.pages.inviteFriend}
            element={<InviteFriend />}
          />

        </Routes>

      </ApplicationLayout>
    </MainLayout>

  )
}

export default App