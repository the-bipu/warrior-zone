<svelte:head>
  <title>Confess</title>
  <meta name="description" content="Confess Here" />
</svelte:head>

<script>
  let username = '';
  let confession = '';
  let type = 'general';
  let message = '';

  const submitConfession = async () => {
    if (!username || !confession) {
      message = 'Please fill out all fields!';
      return;
    }

    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, confession, type }),
      });

      if (response.ok) {
        const data = await response.json();
        message = 'Confession submitted successfully!';
        username = '';
        confession = '';
        type = 'general';
      } else {
        const errorData = await response.json();
        message = errorData.message || 'Something went wrong!';
      }
    } catch (error) {
      message = 'Failed to submit. Please try again later.';
    }
  };
</script>

<div class="flex flex-col items-center justify-start w-full min-h-screen">
  <div class="w-10/12 h-full py-24 text-white">
    <h1 class="font-bold text-2xl uppercase">Confess Here</h1>

    <div class="w-1/2 h-full text-justify text-base font-normal mt-4 rounded-xl text-black flex flex-col gap-4">
      <input
        type="text"
        class="indent-2 backdrop-blur-sm bg-transparent rounded pb-0.5 text-white focus:border-none outline-none placeholder:text-sm"
        placeholder="Username Here..."
        bind:value={username}
      />
      <textarea
        class="pl-2 min-h-80 backdrop-blur-sm bg-transparent rounded pt-1 text-white focus:border-none outline-none placeholder:text-sm"
        placeholder="Confession Here..."
        bind:value={confession}
      ></textarea>
      <select name="type" id="type" bind:value={type} class="h-7 backdrop-blur-sm bg-transparent focus:border-none outline-none text-sm text-white indent-2">
        <option value="general" class="text-black">General</option>
        <option value="heartbreak" class="text-black">Heartbreak</option>
      </select>
      <button on:click={submitConfession} class="px-4 py-2 bg-[#fffa] font-black text-black rounded">
        Submit
      </button>
    </div>

    {#if message}
      <div class="mt-4 text-center text-lg">
        {message}
      </div>
    {/if}
  </div>
</div>
