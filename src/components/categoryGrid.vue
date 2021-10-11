<template>
    <section>
        <div class="text-center py-12 relative container">
            <span class="z-0 absolute top-2/4 block left-4 right-4 h-0.5 bg-secondery"></span>
            <h2 class="px-6 sm:px-8 sticky z-10 inline-block uppercase font-msExtraBold md:underline leading-none bg-white">
                {{ categoryContent.title }}
            </h2>
        </div>
        <div class="text-white text-center grid grid-cols-2 md:grid-cols-3">
            <div 
                v-for="item in categoryContent.list"
                :key="item.id"

                class="exploreItem py-8 sm:py-10 lg:py-20 px-4"
            >
                <h1 class="font-msExtraBold text-lg md:text-4xl lg:text-7xl xl:text-8xl mb-1 md:mb-3">
                    {{ item.title }}
                </h1>
                <nuxt-link 
                    class="font-msExtraBold bg-secondery py-3 px-6 md:py-4 md:px-12 uppercase leading-none inline-block"
                    :to="item.link"
                >
                    SHOP NOW
                </nuxt-link>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "CategoryGrid",
    props: {
        categoryContent: {
            default: null,
            type: Object,
        },
    },
}
</script>