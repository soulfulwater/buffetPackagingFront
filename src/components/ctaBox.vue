<template>
    <div class="w-full bg-primary text-white py-5 lg:py-8 px-4 lg:px-6">
        <h4 class="text-secondery text-lg lg:text-2xl leading-normal pb-4 lg:pb-6 border-b-2 border-white mb-4 lg:mb-6">
            Not sure? Call us on
            <a class="inline-block" href="tel:01234567890">
                01234 567 890
            </a>
        </h4>
        <div class="text-sm">
            <p class="mb-4">
                Monday - Friday: 8:00am - 6:00pm
            </p>
            <p>
                Lines are closed on Weekends and
                Bank Holidays. During these times
                you can email us and we will aim to
                reply within 48 hrs:
                <a
                    class="font-msBold inline-block underline" 
                    href="email:sales@buffetpackaging.co.uk"
                >
                    sales@buffetpackaging.co.uk
                </a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CtaBox",
}
</script>