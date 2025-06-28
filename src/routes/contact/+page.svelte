<script>
  import github from "$lib/images/github.png";
  import x from "$lib/images/x.svg";
</script>

<svelte:head>
  <title>Contact Us | Warrior Zone</title>
  <meta name="description" content="Get in touch with the Warrior Zone team. Reach out for queries, support, or collaboration." />
</svelte:head>

<div class="flex flex-col items-center justify-start w-full h-full">
  <div class="w-10/12 h-full py-24 text-white">
    <h1 class="font-bold text-2xl uppercase">Contact Us</h1>

    <div class="w-10/12 h-full mt-4">
      <div class="flex flex-row justify-start items-center w-10/12">
        <div class="text-left mt-2 backdrop-blur-sm">
          <div class="mb-4">
            If any queries, you can reach us on:
          </div>
          <div class="flex flex-row gap-4">
            <img src={github} alt="GitHub" class="p-1 border border-white bg-[#d72b2b9c] w-10 h-10 rounded" />
            <img src={x} alt="GitHub" class="p-1.5 border border-white bg-[#d72b2b9c] w-10 h-10 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
