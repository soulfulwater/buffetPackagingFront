<template>
    <div class="flex flex-col items-end">
        <div class="flex items-center flex-wrap gap-4">
            <a
                class="bg-primary text-secondery p-4" 
                href=""
            >
                <img class="w-5 mb-1" src="@/assets/images/icon/left.svg" alt="left">    
            </a>
            <p class="font-msBold">
                Page 1 of 12
            </p>
            <a
                class="bg-primary text-secondery p-4" 
                href=""
            >
            <img class="w-5 mt-1" src="@/assets/images/icon/right.svg" alt="left">    
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductPagination"
}
</script>