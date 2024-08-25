<script setup>
import { ref } from "vue";
// import { useCounterStore } from "~/store/counter";
const { handleOnHomeClick } = useUtils();
handleOnHomeClick()

const hover = ref(false);

// const store = useCounterStore();
// console.log(store);
// console.log(store.name);

</script>

<template>
    <!-- <div class="grid grid-cols-3 gap-5 max-w-7xl m-auto pt-5">
        <BlogCard />
    </div> -->

    <!-- <button class="bg-teal-500 text-white p-2" @mouseover="hover = true" @mouseleave="hover = false">On Hover</button>
    <div class="bg-neutral-900">
        <div v-if="hover" class="p-4 max-w-7xl mx-auto my-2 bg-white"> Lorem ipsum dolor sit amet consectetur
            adipisicing
            elit.
            Facere ipsam, odio fuga vitae dignissimos, deleniti officiis, minus magnam veritatis totam nemo nihil id?
            Obcaecati nobis aliquid quos id placeat incidunt amet, deserunt veritatis assumenda illum recusandae, eaque
            aspernatur esse. Labore magni libero neque reprehenderit quae impedit iste mollitia eius dolor? </div>
    </div> -->

    <!-- <TsImageWithFallBack src="images/logo-1.png" fallbackText="Chess" /> -->
    <!-- <TsImageWithFallBack fallbackText="Chess" /> -->
    <!-- <TsDrawerMegaMenu /> -->

    <div class="flex gap-2">
        <TsImageWithlabel imageSrc="images/tool-1.jpg" imageWidth="95px" imageHeight="100px" imageAlt="MyLogo"
            cardWidth="115px" cardHeight="108px" text="Accessories" />
        
        <TsImageWithlabel imageSrc="images/tool-1.jpg" imageWidth="95px" imageHeight="100px" imageAlt="MyLogo"
            cardWidth="115px" cardHeight="108px" text="Accessories" />
        
        <TsImageWithlabel imageSrc="images/tool-1.jpg" imageWidth="95px" imageHeight="100px" imageAlt="MyLogo"
            cardWidth="115px" cardHeight="108px" text="Accessories" />
    </div>

    

</template>