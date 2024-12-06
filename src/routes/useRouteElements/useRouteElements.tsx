import { useRoutes } from "react-router-dom";
import { path } from "src/constants/path";
import MainLayout from "src/layouts/MainLayout";
import Contact from "src/pages/Contact";
import EaringPage from "src/pages/EaringPage";
import HomePage from "src/pages/HomePage";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.HOMEPAGE,
      element: (
        <>
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </>
      ),
    },
    {
      path: path.EARRING,
      element: (
        <>
          <MainLayout>
            <EaringPage></EaringPage>
          </MainLayout>
        </>
      ),
    },
    {
      path: path.BRACELET,
      element: (
        <>
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </>
      ),
    },
    {
      path: path.NECKLACE,
      element: (
        <>
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </>
      ),
    },
    {
      path: path.CONTACT,
      element: (
        <>
          <MainLayout>
            <Contact></Contact>
          </MainLayout>
        </>
      ),
    },
  ]);
  return routeElements;
}
