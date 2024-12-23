<script setup lang="ts">
import { ref, watch } from 'vue';


  const pdfBook = ref<File | null>(null)
  const pdfName = ref("")


  const onUploadChange = (e: Event)=>{
    const target = e.target as HTMLInputElement
    if (!target.files) return;
    pdfBook.value = target.files[0]
    pdfName.value = target.files[0].name
  }

  watch(pdfBook, ()=>{
    console.log(pdfBook.value)
  })


</script>

<template>
  <div class="container">
    <input type="file" @change="onUploadChange">
    <div>File name {{ pdfName }}</div>
    <button>Store in cache</button>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
