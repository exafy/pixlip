import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PageLayout } from "../layout/page-layout";
import StartConversation from "../page/start-conversation";
import { ConversationListPage } from "../page/conversations-list-page";
import { GoConfigurator } from "../page/go-configurator";
import { WelcomePage } from "../page/welcome-page";

const routes = [
  {
    path: "/",
    element: (
      <PageLayout>
        <WelcomePage></WelcomePage>
      </PageLayout>
    ),
  },
  {
    path: "/conversation/:id",
    element: (
      <PageLayout>
        <ConversationListPage></ConversationListPage>
      </PageLayout>
    ),
  },

  {
    path: "/configurator",
    element: (
      <PageLayout>
        <GoConfigurator></GoConfigurator>
      </PageLayout>
    ),
  },
  { path: "*", element: <Navigate to="/" /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
