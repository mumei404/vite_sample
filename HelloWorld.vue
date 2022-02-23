<template>
	<p>
	{{ msg }}
	</p>
</template>

<script setup>
const props = defineProps({
	msg: String
})
</script>
