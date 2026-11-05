<script setup lang="ts">
import { Head, usePage } from "@inertiajs/vue3";
const page = usePage<{projectName: string}>();
</script>
<template><Head :title="page.props.projectName"/><main><h1>{{ page.props.projectName }}</h1><p>Laravel, Inertia and Vue application foundation.</p><p>Install reviewed domain modules before adding protected workflows.</p></main></template>
