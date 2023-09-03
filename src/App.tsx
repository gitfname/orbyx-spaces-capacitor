
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";


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
            path="/"
            element={<HomePage />}
          />

          <Route
            path="about"
            element={<div>About page</div>}
          />

        </Routes>

      </ApplicationLayout>
    </MainLayout>

  )
}

export default App