import { createWebHistory, createRouter } from "vue-router";
import DashboardPage from "./pages/DashboardPage";
import LeaguesPage from "./pages/LeaguesPage";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
