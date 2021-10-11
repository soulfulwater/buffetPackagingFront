<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 items-stretch">
        <div 
            v-for="product in productList"
            :key ="product.id"
            
            class="text-center flex flex-col items-stretch justify-between bg-customGray"
        >
            <div class="block">
                <figure class="bg-white border-2 border-secondery h-48 sm:h-60 md:h-40 lg:h-52 xl:h-60 overflow-hidden relative">
                    <g-image
                        v-if="product.featuredImage"
                        :src="product.featuredImage" 
                        :alt="product.title"
                         
                        class="absolute top-2/4 left-0 right-0 transform -translate-y-2/4 w-full" 
                    />
                </figure>
                <article class="text-primary py-6 px-2 lg:px-4">
                    <h6 class="font-msExtraBold leading-snug text-lg">
                        {{ product.title }}
                    </h6>
                    <p
                        v-if="product.inStock" 
                        class="text-sm font-msSemiBold text-customGreen"
                    >
                        Available
                    </p>
                    <p
                        v-if="!product.inStock" 
                        class="text-sm lg:text-base font-msSemiBold text-customRed"
                    >
                        Out of stock
                    </p>
                </article>
            </div>
            <!-- btn for in stock -->
            <g-link 
                v-if="product.inStock" 
                :to="product.link"
                class="font-msBold text-white px-4 py-3 bg-secondery flex items-center justify-between leading-none"
            >
                <span>
                    from £{{ product.priceRange.min }}
                </span>
                <span>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
            </g-link>
            <!-- btn for out of stock -->
            <g-link
                v-if="!product.inStock" 
                :to="product"

                class="font-msBold text-white p-4 bg-cgDarker flex items-center justify-between leading-none"
            >
                <span>
                    Email me when in stock
                </span>
            </g-link>
        </div>











        <div class="text-center flex flex-col items-stretch justify-between bg-customGray">
            <div class="block">
                <figure class="bg-white border-2 border-secondery h-48 sm:h-60 md:h-40 lg:h-52 xl:h-60 overflow-hidden relative">
                    <img class="absolute top-2/4 left-0 right-0 transform -translate-y-2/4 w-full" src="@/assets/images/product2.png" alt="product">
                </figure>
                <article class="text-primary py-6 px-4">
                    <h6 class="font-msExtraBold leading-snug text-lg">
                        Kraft Salad Box w/ Window (Large)
                    </h6>
                    <p class="text-sm lg:text-base font-msSemiBold text-customRed">
                        Out of stock
                    </p>
                </article>
            </div>
            <a 
                class="font-msBold text-white p-4 bg-cgDarker flex items-center justify-between leading-none"
                href=""
            >
                <span>
                    Email me when in stock
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductGrid",

    props: {
        productList: {
            default: null,
            type: Array,
        }
    }
}
</script>