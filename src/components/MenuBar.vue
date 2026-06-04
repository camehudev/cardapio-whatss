
<template>
    <div class="menu-container" style="background: white;">
        <Menubar :model="items" />
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>
<style scoped>

.menu-container {
    width: 100%;
    background: blue;
}

:deep(.p-menubar) { 
    display: flex;
    width: 100vw;
    background: var(--p-menubar-background);  
    color: var(--p-menubar-color);
    padding: var(--p-menubar-padding);
    gap: var(--p-menubar-gap);
}
</style>
