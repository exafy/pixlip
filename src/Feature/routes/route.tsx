import { createBrowserRouter, Navigate } from "react-router-dom";
import { PageLayout } from "../layout/page-layout";
import { WelcomePage } from "../page/welcome-page";
import { ConversationListPage } from "../page/conversations-list-page";
import { GoConfigurator } from "../page/go-configurator";
import { ProtectedRoute } from "../auth/auth-guard";
import UnProtectedRoute from "../auth/no-auth-guard";

const routes = [
  {
    path: "/",
    element: (
      <PageLayout>
        <GoConfigurator data={{}} />
      </PageLayout>
    ),
  },

  { path: "*", element: <Navigate to="/" /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
