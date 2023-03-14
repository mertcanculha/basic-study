import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Detail from "../pages/detail/index.vue";
import CreateMember from "../pages/createMember/index.vue"
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "createMember",
        name: "createMember",
        component: CreateMember
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        params: { id: 0 },
        component: Detail,
      },
    ]
  }
];

export default routes;