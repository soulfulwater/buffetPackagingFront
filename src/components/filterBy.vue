<template>
    <div class="w-full bg-customGray p-4">
        <div class="mb-6 w-full flex items-center justify-between gap-3">
            <h5 class="font-msBold">
                Filter by
            </h5>
            <span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </span>
        </div>
        <div class="mb-6 lg:text-base">
            <h6 class="text-sm font-msRegular mb-1">
                Type
            </h6>
            <ul class="uppercase font-msBold">
                <li>
                    <a href="">
                        BAKING PARCHMENT (1)
                    </a>
                </li>
                <li>
                    <a href="">
                        CAKE BOXES (3)
                    </a>
                </li>
                <li>
                    <a href="">
                        CAKE CASES (1)  
                    </a>
                </li>
                <li>
                    <a href="">
                        TART BOXES (1)
                    </a>
                </li>
            </ul>
        </div>
        <div class="mb-6 lg:text-base">
            <h6 class="text-sm font-msRegular mb-1">
                Colour
            </h6>
            <ul class="uppercase font-msBold">
                <li>
                    <a href="">
                        BROWN (1)
                    </a>
                </li>
                <li>
                    <a href="">
                        PRINTED (1)
                    </a>
                </li>
                <li>
                    <a href="">
                        WHITE (4)
                    </a>
                </li>
            </ul>
        </div>
        <div class="mb-6 lg:text-base">
            <h6 class="text-sm font-msRegular mb-1">
                Material
            </h6>
            <ul class="uppercase font-msBold">
                <li>
                    <a href="">
                        BAKING PARCHMENT (1)
                    </a>
                </li>
                <li>
                    <a href="">
                        GREASEPROOF PAPER (1)
                    </a>
                </li>
                <li>
                    <a href="">
                        PAPER (3)
                    </a>
                </li>
                <li>
                    <a href="">
                        PAPER & FILM (1)
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterBy"
}
</script>