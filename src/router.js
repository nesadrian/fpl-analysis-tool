import { createWebHistory, createRouter } from "vue-router";
import DashboardPage from "./pages/DashboardPage";

const routes = [
  {
    path: "/",
    name: "Dasboard",
    component: DashboardPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
