import { createBrowserRouter, Navigate } from "react-router-dom";
import { PageLayout } from "../layout/page-layout";
import { WelcomePage } from "../page/welcome-page";
import { ConversationListPage } from "../page/conversations-list-page";
import { GoConfigurator } from "../page/go-configurator";

const routes = [
  {
    path: "/",
    element: (
      <PageLayout>
        <WelcomePage />
      </PageLayout>
    ),
  },
  {
    path: "/conversation/:id",
    element: (
      <PageLayout>
        <ConversationListPage />
      </PageLayout>
    ),
  },
  {
    path: "/configurator",
    element: (
      <PageLayout>
        <GoConfigurator />
      </PageLayout>
    ),
  },
  { path: "*", element: <Navigate to="/conversation/-1" /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
