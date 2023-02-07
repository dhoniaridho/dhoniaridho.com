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
    <nav class="flex justify-center items-center h-20 sticky top-0">
        <ul class="flex items-center gap-5">
            <li
                v-for="link in links"
                :key="link.name"
                class="group relative pl-5"
            >
                <span class="group-hover:scale-75 absolute left-0">
                    <icon name="akar-icons:circle-fill" />
                </span>
                <nuxt-link href="/"> {{ link.name }} </nuxt-link>
            </li>
        </ul>
    </nav>
    <main class="overflow-x-hidden relative pb-20"><slot /></main>
    <footer class="border-t w-full">
        <div class="w-full h-16 inline-flex justify-center items-center">
            <p class="text-sm">© Copyright 2023 Ahmad Ridhoni</p>
        </div>
    </footer>
</template>
