import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("./views/HomeView.vue");
const HousesView = () => import("./views/houses/HousesView.vue");
const HousesDetailView = () => import("./views/houses/HousesDetailView.vue");
const StaffView = () => import("./views/StaffView.vue");
const StudentsView = () => import("./views/StudentsView.vue");
const SpellsView = () => import("./views/SpellsView.vue");

const routes = [
  { path: "/", component: HomeView, name: "HomePage" },
  { path: "/houses", component: HousesView, name: "HousesPage" },
  {
    path: "/houses/:house",
    component: HousesDetailView,
    name: "HousesDetailPage",
  },
  { path: "/staff", component: StaffView, name: "StaffPage" },
  { path: "/students", component: StudentsView, name: "StudentsPage" },
  { path: "/spells", component: SpellsView, name: "SpellsPage" },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
