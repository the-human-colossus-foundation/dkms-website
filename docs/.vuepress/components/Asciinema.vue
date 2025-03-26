<template>
    <div :id="`asciicast-${castId}`"></div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
    castId: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    const script = document.createElement("script");
    script.src = `https://asciinema.org/a/${props.castId}.js`;
    script.async = true;
    script.id = `asciicast-${props.castId}`;
    document.getElementById(`asciicast-${props.castId}`)?.appendChild(script);
});
</script>
