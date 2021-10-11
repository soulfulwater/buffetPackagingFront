<template>
    <Layout>
        <section class="md:pt-12 pb-0 md:pb-20 md:pb-28">
            <!-- headeing for mobile -->
            <div class="block md:hidden">
                <div class="container py-4">
                    <h1 class="text-center text-secondery text-4xl">
                        Shop
                    </h1>
                </div>
                <div class="relative filterTabs">
                    <div class="w-full bg-customGray grid grid-cols-3">
                        <a class="tabBtn" tabId="viewBy">
                            <span class="block">
                                VIEW BY
                            </span>
                            <span class="tabIcon block">
                                <img class="w-2.5" src="@/assets/images/icon/down.svg" alt="down">    
                            </span>
                        </a>
                        <a class="tabBtn" tabId="sortBy">
                            <span class="block">
                                SORT BY
                            </span>
                            <span class="tabIcon block">
                                <img class="w-2.5" src="@/assets/images/icon/down.svg" alt="down">    
                            </span>
                        </a>
                        <a class="tabBtn" tabId="filterBy">
                            <span class="block">
                                FILTER
                            </span>
                            <span class="tabIcon block">
                                <img class="w-2.5" src="@/assets/images/icon/down.svg" alt="down">    
                            </span>
                        </a>
                    </div>
                    <div id="viewBy" class="tabItem">
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Product
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        12
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        13
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        14
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        15
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="sortBy" class="tabItem">
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Price
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker" 
                                        href=""
                                    >
                                        £ (High to Low)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker" 
                                        href=""
                                    >
                                        £ (Low to High )
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Size
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        Small - Medium - Large
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        Medium - Large - Small
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        Large - Small - Medium
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="filterBy" class="tabItem">
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Type
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        BAKING PARCHMENT (1)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        CAKE BOXES (3)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        CAKE CASES (1)  
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        TART BOXES (1)
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Colour
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker" 
                                        href=""
                                    >
                                        BROWN (1)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker" 
                                        href=""
                                    >
                                        PRINTED (1)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker" 
                                        href=""
                                    >
                                        WHITE (4)
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 class="px-4 font-msSemiBold mb-1">
                                Material
                            </h6>
                            <ul class="text-sm uppercase font-msExtraBold">
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        BAKING PARCHMENT (1)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        GREASEPROOF PAPER (1)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        PAPER (3)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        class="px-4 py-1 block duration-300 hover:bg-cgDarker"
                                        href=""
                                    >
                                        PAPER & FILM (1)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container flex flex-col md:flex-row items-start gap-3 lg:gap-6">
                <div class="w-full md:w-9/12">
                    <!-- heading for desktop -->
                    <div class="hidden md:flex flex-row flex-wrap items-center justify-center md:justify-between gap-6">
                        <h1 class="font-msExtraBold text-secondery text-4xl lg:text-6xl">
                            Shop
                        </h1>
                        <div class="flex flex-wrap justify-center items-center text-sm gap-5">
                            <div class="flex items-center gap-2">
                                <label class="font-msBold" for="qnt">
                                    View:
                                </label>
                                <div class="relative">
                                    <select
                                        id="qnt"
                                        class="text-sm cursor-pointer bg-customGray focus:outline-none py-1 pl-3 pr-8 appearance-none"
                                        name="" 
                                    >
                                        <option value="">
                                            12 Products
                                        </option>
                                        <option value="">
                                            10 Products
                                        </option>
                                        <option value="">
                                            8 Products
                                        </option>
                                    </select>
                                    <span class="tabIcon absolute z-10 right-1.5 top-2/4 transform -translate-y-2/4">
                                        <img class="w-2.5" src="@/assets/images/icon/down.svg" alt="">    
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <label class="font-msBold" for="qnt">
                                    Sort by:
                                </label>
                                <div class="relative">
                                    <select
                                        id="qnt"
                                        class="text-sm cursor-pointer bg-customGray focus:outline-none py-1 pl-3 pr-8 appearance-none" 
                                        name="" 
                                    >
                                        <option value="">
                                            £ (High to Low)
                                        </option>
                                        <option value="">
                                            £ (High to Low)
                                        </option>
                                        <option value="">
                                            £ (High to Low)
                                        </option>
                                    </select>
                                    <span class="tabIcon absolute z-10 right-1.5 top-2/4 transform -translate-y-2/4">
                                        <img class="w-2.5" src="@/assets/images/icon/down.svg" alt="">    
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 pb-10 md:py-10">
                        <ProductGrid :product-list="productList" />
                    </div>
                    <div>
                        <ProductPagination />
                    </div>
                </div>
                <div class="mt-8 md:mt-0 w-full md:w-3/12">
                    <!-- filter for desktop -->
                    <div class="hidden md:block mb-3 lg:mb-6">
                        <FilterBy />
                    </div>
                    <div>
                        <CtaBox />
                    </div>
                </div>
            </div>
        </section>
        <CategoryGrid :category-content="categoryContent" />
    </Layout>
</template>

<script>
import CategoryGrid from '~/components/categoryGrid'
import FilterBy from '~/components/filterBy'
import CtaBox from '~/components/ctaBox'
import ProductGrid from '~/components/productGrid'
import ProductPagination from '~/components/productPagination'

export default {
    name: "Home",

    components: {
        CategoryGrid,
        FilterBy,
        CtaBox,
        ProductGrid,
        ProductPagination,
    },

    data() {
        return {
            productList: [
                {
                    id: "1",
                    title: "Kraft Sandwich Platter w/ Window (Medium)",
                    inStock: true,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product2.png"),
                },
                {
                    id: "2",
                    title: "Kraft Salad Box w/ Window (Large)",
                    inStock: false,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product.png"),
                },
                {
                    id: "3",
                    title: "Kraft Sandwich Platter w/ Window (Medium)",
                    inStock: true,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product.png"),
                },
                {
                    id: "4",
                    title: "Kraft Sandwich Platter w/ Window (Medium)",
                    inStock: false,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product3.png"),
                },
                {
                    id: "5",
                    title: "Kraft Salad Box w/ Window (Large)",
                    inStock: true,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product.png"),
                },
                {
                    id: "6",
                    title: "Kraft Sandwich Platter w/ Window (Medium)",
                    inStock: true,
                    priceRange: {
                        min: "30",
                        max: "50"
                    },
                    link: "/",
                    featuredImage: require("~/assets/images/product4.png"),
                },
            ],
            categoryContent: {
                title: "EXPLORE OUR PRODUCT RANGE",
                list: [
                    {
                        id: "1",
                        title: "Platters",
                        link: "/",
                    },
                    {
                        id: "2",
                        title: "Tableware",
                        link: "/",
                    },
                    {
                        id: "3",
                        title: "Pots",
                        link: "/",
                    },
                    {
                        id: "4",
                        title: "Bowls",
                        link: "/",
                    },
                    {
                        id: "5",
                        title: "Hot Foods",
                        link: "/",
                    },
                    {
                        id: "6",
                        title: "PPE & Cleaning",
                        link: "/",
                    },
                ],
            },
        }
    },
}
</script>