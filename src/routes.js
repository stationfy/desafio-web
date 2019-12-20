import Search from "./components/home";
import RepoPulls from "./components/RepoPulls";

const routes = [
    {
        path: "/",
        exact: true,
        component: Search
    },
    {
        path: "/:creator/:repoName",
        component: RepoPulls
    }
]

export default routes;