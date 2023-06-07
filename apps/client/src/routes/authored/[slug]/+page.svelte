<script>
  export let data;
  import { onMount } from "svelte";
  let { course } = data;
  import { sdk, server } from "$lib/appwrite/appwriteClient";

  $: course;

  onMount(async () => {
    try {
      const bucket = await sdk.storage.listFiles(course.bucketId);
      console.log(bucket);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<section>
  <h1>{course.title}</h1>
  <p>{course.description}</p>
</section>
