<script lang="ts">
  import { enhance } from '$app/forms';
  export let course: any;
  let title: string = course.title;
  let description: string = course.description;
  import { Button, Card, FormControl, Input } from 'svelte-ui';
  import type { ButtonProps } from 'svelte-ui/Types';
  import toast, { Toaster } from 'svelte-french-toast';

  const complexity = [
    { id: 0, name: 'Beginner' },
    { id: 1, name: 'Intermediate' },
    { id: 2, name: 'Advanced' },
  ];

  let index = 0;
  const changeComplexity = (id: number) => {
    index = id;
  };

  $: index, title, description;

  let buttons: ButtonProps[] = [
    {
      CTA: 'Update Course Details',
      icon: 'ri:check-line',
      type: 'submit',
      requestState: 'idle',
    },
    {
      CTA: 'Delete Course',
      icon: 'ri:delete-bin-7-line',
      state: 'error',
      type: 'submit',
      requestState: 'idle',
    },
  ];

  const callback = (index: number) => {
    buttons[index].requestState = 'processing';

    return async ({ update, result }) => {
      await update();
      console.log(result);
      buttons[index].requestState = 'completed';
      if (result.type == 'success') {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    };
  };
</script>

<section class="space-y-4">
  <Toaster />
  <Card>
    <div class="card-body">
      <h2 class="card-title">Course Details</h2>
      <form
        method="post"
        use:enhance={() => callback(0)}
        action="?/updateCourseAction"
      >
        <FormControl
          ariaLabel="course id"
          labelText="Chapter Id"
          isHidden={true}
        >
          <Input value={course.id} name="id" id="id" size="md" />
        </FormControl>
        <FormControl ariaLabel="course title" labelText="Course Title">
          <Input value={title} id="title" name="title" size="md" />
        </FormControl>
        <FormControl
          ariaLabel="course description"
          labelText="Course Description"
        >
          <Input
            isTextArea={true}
            value={description}
            classes="h-32"
            id="description"
            name="description"
          />
        </FormControl>

        <div class="w-full space-y-4 lg:basis-1/2">
          <div class="flex flex-col">
            <label class="label" for="title">
              <span class="label-text">Course Complexity</span>
            </label>
            <div class="flex justify-between">
              {#each complexity as { id, name }}
                <div class="form-control">
                  <label class="label cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="complexity"
                      class="radio checked:bg-red-500"
                      checked={id === index}
                      value={name}
                      on:click={() => changeComplexity(id)}
                    />
                    <span class="label-text">{name}</span>
                  </label>
                </div>
              {/each}
            </div>
          </div>

          <FormControl ariaLabel="cover image" labelText="Cover Image">
            <Input
              type="file"
              fileAccept=".jpg,.jpeg,.png"
              size="md"
              classes="file-input file-input-bordered w-full max-w-xs px-0"
            />
          </FormControl>
        </div>

        <div class="card-actions justify-start mt-2 py-2">
          <Button
            CTA={buttons[0].CTA}
            icon={buttons[0].icon}
            type={buttons[0].type}
            requestState={buttons[0].requestState}
          />
        </div>
      </form>
    </div>
  </Card>

  <Card>
    <form
      method="post"
      use:enhance={() => callback(1)}
      action="?/deleteCourse"
      class="card-body"
    >
      <h3 class="card-title">Delete Course</h3>
      <p>
        This option will remove your course entirely from <span class="italic"
          >Planet Of The Bugs</span
        >. You’ll get a chance to confirm your choice.
      </p>
      <div class="card-actions justify-start">
        <Button
          state={buttons[1].state}
          icon={buttons[1].icon}
          type={buttons[1].type}
          CTA={buttons[1].CTA}
        />
      </div>
    </form>
  </Card>
</section>

<!-- <select on:change={() => handleChange} class="select select-bordered w-full max-w-xs">
      <option disabled selected>Pick a chapter</option>
      {#each course?.course_chapters as chapter}
        <option>#{chapter.index} - {chapter.title}</option>
      {/each}
    </select> -->
