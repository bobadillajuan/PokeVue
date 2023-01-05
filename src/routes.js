const routes = [
    {
        name: "PokemonList",
        path: "/",
        component: () => import("./pages/PokemonList.vue"),
    },
    {
        name: "PokemonDetails",
        path: "/Pokemon/:id",
        component: () => import("./pages/PokemonDetails.vue"),
    },
];

export default routes;