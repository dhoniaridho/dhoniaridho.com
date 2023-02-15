<script setup lang="ts">
const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Gears",
        href: "/gears",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];
</script>

<template>
    <div class="relative text-slate-200 overflow-x-hidden">
        <div class="relative z-10">
            <nav class="flex justify-center items-center h-20 fixed w-full top-0 z-50 bg-black/10 backdrop-blur-md">
                <ul class="flex items-center gap-5">
                    <li
                        v-for="link in links"
                        :key="link.name"
                        class="group relative pl-5"
                    >
                        <nuxt-link href="/"> {{ link.name }} </nuxt-link>
                    </li>
                </ul>
            </nav>
            <main class="overflow-x-hidden relative pb-20 flex flex-col gap-10"><slot /></main>
            <footer class="border-t border-slate-800 w-full">
                <div
                    class="w-full h-16 inline-flex justify-center items-center"
                >
                    <p class="text-sm">© Copyright 2023 Ahmad Ridhoni</p>
                </div>
            </footer>
        </div>
        <div class="w-full h-full absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900 to-black z-0"></div>
    </div>
</template>
