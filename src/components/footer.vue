<template>
    <!-- footer -->
    <footer class="mt-16">
        <div class="container">
            <ClientOnly>
                <carousel
                    class="px-8 md:px-0 clientSlider border-t-2 border-b-2 border-customGray py-9"
                    :loop="true"
                    :dots="false"
                    :nav="false"
                    :margin="10"
                    :responsive-class="true"
                    :responsive="{0:{items:2, nav:true},768:{items:5, nav:false},}"
                >
                    <div class="sliderItem block">
                        <img src="@/assets/images/Award5.png" alt="">
                    </div>
                    <div class="sliderItem block">
                        <img src="@/assets/images/Award2.png" alt="">
                    </div>
                    <div class="sliderItem block">
                        <img src="@/assets/images/Award3.png" alt="">
                    </div>
                    <div class="sliderItem block">
                        <img src="@/assets/images/Award4.png" alt="">
                    </div>   
                    <div class="sliderItem block">
                        <img src="@/assets/images/Award1.png" alt="">
                    </div>    
                </carousel>
            </ClientOnly>            
            <div class="py-8 gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left">
                <div class="footerContent col-start-1 col-end-2 md:col-start-1 md:col-end-2 row-start-4 row-end-5 md:row-start-2 md:row-end-3 lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-2">
                    <h5>
                        Customer Services
                    </h5>
                    <div class="fcItem">
                        <a href="">
                            01234 567 890
                        </a>
                        <p>
                            Monday - Friday: 8:00am - 6:00pm
                        </p>
                    </div>
                    <div class="fcItem text-sm">
                        <p>
                            Lines are closed on Weekends and Bank
                            Holidays. During these times you can email us
                            and we will aim to reply within 48 hrs:
                        </p>
                        <a href="" class="font-msBold">
                            sales@buffetpackaging.co.uk
                        </a>
                    </div>
                </div>
                <div class="footerContent col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-2 row-end-3 md:row-start-2 md:row-end-3 lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-3">
                    <h5>
                        Buffet Packaging
                    </h5>
                    <div class="fcItem">
                        <a href="">
                            sales@buffetpackaging.co.uk
                        </a>
                        <a href="">
                            Shop
                        </a>
                        <a href="">
                            Platters
                        </a>
                        <a href="">
                            Tableware
                        </a>
                        <a href="">
                            Pots
                        </a>
                        <a href="">
                            Bowls
                        </a>
                        <a href="">
                            Hot Foods
                        </a>
                        <a href="">
                            PPE & Cleaning
                        </a>
                    </div>
                </div>
                <div class="footerContent col-start-1 col-end-2 md:col-start-3 md:col-end-4 row-start-3 row-end-4 md:row-start-2 md:row-end-3 lg:row-start-1 lg:row-end-1 lg:col-start-3 lg:col-end-4">
                    <h5>
                        Useful Links
                    </h5>
                    <div class="fcItem">
                        <a href="">
                            About Us
                        </a>
                        <a href="">
                            My Account & Orders
                        </a>
                        <a href="">
                            Help & Support
                        </a>
                        <a href="">
                            Deliveries & Returns
                        </a>
                        <a href="">
                            Contact
                        </a>
                        <a href="">
                            Ideas & Advice
                        </a>
                        <a href="">
                            Reviews
                        </a>
                    </div>
                </div>
                <div class="footerContent col-start-1 col-end-2 md:col-start-1 md:col-end-4 row-start-1 row-end-1 lg:row-start-1 lg:row-end-1 lg:col-start-4 lg:col-end-5">
                    <div class="flex flex-col md:flex-row lg:flex-col gap-6">
                        <div class="fcItem">
                            <a href="">
                                <img class="mx-auto md:ml-0 md:mr-0 max-w-full w-40" src="@/assets/images/logoLight.svg" alt="logo">
                            </a>
                        </div>
                        <div class="hidden md:block fcItem">
                            <h6 class="text-sm font-msExtraBold mb-3">
                                Secured by
                            </h6>
                            <div class="flex gap-2 flex-wrap justify-center md:justify-start">
                                <a href="">
                                    <img class="w-10" src="@/assets/images/pay1.png" alt="py">
                                </a>
                                <a href="">
                                    <img class="w-10" src="@/assets/images/pay2.png" alt="py">
                                </a>
                                <a href="">
                                    <img class="w-10" src="@/assets/images/pay3.png" alt="py">
                                </a>
                                <a href="">
                                    <img class="w-10" src="@/assets/images/pay4.png" alt="py">
                                </a>
                                <a href="">
                                    <img class="w-10" src="@/assets/images/pay5.png" alt="py">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:hidden text-center mb-8 fcItem">
                <h6 class="text-sm font-msExtraBold mb-3">
                    Secured by
                </h6>
                <div class="flex gap-2 flex-wrap justify-center md:justify-start">
                    <a href="">
                        <img class="w-10" src="@/assets/images/pay1.png" alt="py">
                    </a>
                    <a href="">
                        <img class="w-10" src="@/assets/images/pay2.png" alt="py">
                    </a>
                    <a href="">
                        <img class="w-10" src="@/assets/images/pay3.png" alt="py">
                    </a>
                    <a href="">
                        <img class="w-10" src="@/assets/images/pay4.png" alt="py">
                    </a>
                    <a href="">
                        <img class="w-10" src="@/assets/images/pay5.png" alt="py">
                    </a>
                </div>
            </div>
        </div>
        <div class="py-6 bg-primary text-white leading-none">
            <div class="container flex flex-col-reverse md:flex-row justify-center lg:justify-start items-center flex-nowrap md:flex-wrap gap-4">
                <p class="text-xs md:text-base md:font-msSemiBold text-center">
                    Copyright © Buffet Packaging Ltd. All Rights Reserved.
                </p>
                <ul class="md:font-msBold bottomMenu flex flex-wrap items-center justify-center gap-3">
                    <li>
                        <a href="">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    components: {
        carousel: () => import('vue-owl-carousel2'),
    },
}
</script>