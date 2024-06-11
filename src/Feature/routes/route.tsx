import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PageLayout } from "../layout/page-layout";
import StartConversation from "../page/start-conversation";
import { ConversationListPage } from "../page/conversations-list-page";

const routes = [
  {
    path: "/",
    element: (
      <PageLayout>
        <StartConversation></StartConversation>
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
  { path: "*", element: <Navigate to="/" /> },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
