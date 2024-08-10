<template>
  <div class="border-4 border-indigo-100 rounded-lg p-2">
    <figure class="">
      <img class="w-full rounded-t-lg" src="~/assets/images/monochrome.jpg" alt="profile">
      <figcaption class="my-2 flex gap-2">
        <div class="text-sm bg-blue-600 inline-block px-2 py-1 text-white rounded-full">Learning</div>
        <div class="text-sm bg-blue-600 inline-block px-2 py-1 text-white rounded-full">Development</div>
      </figcaption>
    </figure>
    <p class="font-semibold">Published 21 Dec 2023</p>

    <h2 class="text-md font-bold my-4">Rihan Group Foundations</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit magnam possimus aperiam accusamus, sit tenetur
      molestiae beatae illum.</p>

    <div class="flex gap-1 justify-center items-center my-2">
      <figure class="bg-white p-2 rounded-full">
        <img class="w-[3rem] aspect-square rounded-full" src="~/assets/images/profile.jpg" alt="profile">
      </figure>
      <div>
        <div class="flex items-center gap-1">
          <BlogStarRating />
          <BlogStarRating />
          <BlogStarRating />
          <BlogStarRating />
          <BlogStarRating />
        </div>
        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
    </div>


  </div>
</template>
