import { createWebHistory, createRouter } from "vue-router";
import DashboardPage from "./pages/DashboardPage";
import LeaguesPage from "./pages/LeaguesPage";
import LeaguePage from './pages/LeaguePage'

const routes = [
  {
    path: "/",
    name: "Dasboard",
    component: DashboardPage,
  },
  {
    path: "/leagues",
    name: "Leagues",
    component: LeaguesPage,
  },
  {
    path: "/leagues/:id",
    name: "League",
    component: LeaguePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
