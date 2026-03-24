import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { ContentStudioPage } from "./pages/ContentStudioPage";
import { CalendarPage } from "./pages/CalendarPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { LibraryPage } from "./pages/LibraryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "content-studio", Component: ContentStudioPage },
      { path: "calendar", Component: CalendarPage },
      { path: "analytics", Component: AnalyticsPage },
      { path: "library", Component: LibraryPage },
    ],
  },
]);