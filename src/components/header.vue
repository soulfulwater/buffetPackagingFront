<template>
    <!-- header -->
    <header>
        <div class="hidden md:block font-msBold leading-none text-white bg-primary py-4">
            <div class="container flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
                <p>
                    Customer Services, 8am-6pm: 
                    <a
                        class="text-secondery underline" 
                        href="tel:01234567890"
                    >
                        01234 567 890
                    </a>
                </p>
                <ul class="topMenu flex flex-wrap items-center gap-3">
                    <li>
                        <a href="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            My Account & Orders
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Help & Support
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Delivery
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-xl md:text-sm lg:text-base font-msRegular md:font-msBold py-3 md:py-6">
            <nav class="mainMenu container flex items-center gap-4 justify-between">
                <a class="block w-6/12 md:w-2/12" href="">
                    <img class="max-w-full w-40" src="@/assets/images/logoDark.svg" alt="logo">
                </a>
                <ul 
                    id="mobileMenu"
                    class="
                        z-40
                        fixed md:static
                        top-0 left-0 right-0 bottom-0 
                        bg-white md:bg-transparent 
                        text-primary 
                        flex md:flex hidden
                        flex-col md:flex-row
                        flex-nowrap md:flex-wrap
                        items-stretch md:items-center 
                        justify-start md:justify-end
                        lg:gap-3 md:w-10/12
                        overflow-y-auto
                        md:overflow-y-visible
                        p-2 pt-14 sm:pt-20 md:p-0
                    "
                >   
                    <a 
                        id="menuCloser"
                        class="block md:hidden fixed top-4 right-4 sm:top-8 sm:right-8 z-50 text-primary"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </a>
                    <li class="subMenuItem">
                        <a class="subMenuBtn">
                            Platters
                        </a>
                        <ul class="subMenu">
                            <li>
                                <a href="">
                                    - Mini
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    - Card and Compostable
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    - Recycled
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    - Compartment
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="" href="">
                            Tableware
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            Pots
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            Bowls
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            Hot Foods
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            PPE & Cleaning
                        </a>
                    </li>
                </ul>
                <div class="flex items-center gap-4">
                    <a class="flex items-center gap-1" href="">
                        <span class="text-secondery">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </span>
                        <span class="font-osBold">£0.00</span>
                    </a>
                    <a id="menuOpener" class="block cursor-pointer md:hidden">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </a>
                </div>
            </nav>
        </div>
        <div class="font-msBold md:font-msSemiBold leading-none bg-customGray py-4 md:py-5">
            <div class="container flex items-center gap-4 justify-center lg:justify-between">
                <!-- breadcrumb for desktop -->
                <ul class="breadcrumb hidden md:flex flex-wrap justify-center items-center gap-3 text-center md:text-left">
                    <li class="pr-3 border-r border-primary">
                        <a href="">
                            Next Day Nationwide Delivery
                        </a>
                    </li>
                    <li class="pr-3 border-r border-primary">
                        <a href="">
                            PayPal Accepted
                        </a> 
                    </li>
                    <li class="pr-3 border-r border-primary">
                        <a href="">
                            Your Food Service Packaging Provider
                        </a>
                    </li>
                </ul>
                <!-- breadcrumb fro mobile -->
                <div class="block md:hidden w-full">
                    <client-only>
                        <carousel 
                            class="breadcrumbSlider flex items-center text-center"
                            :loop="true"
                            :dots="false"
                            :autoplay="true"
                            :nav="false"
                            :items="1"
                        >
                            <li>
                                <a href="">
                                    Next Day Nationwide Delivery
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    PayPal Accepted
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Your Food Service Packaging Provider
                                </a>
                            </li>
                        </carousel>
                    </client-only>
                </div>
                <!-- current page -->
                <ul class="hidden lg:flex flex-wrap items-center gap-1">
                    <li>
                        <a href="">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",

    components: {
        carousel: () => import('vue-owl-carousel2'),
    }
}
</script>