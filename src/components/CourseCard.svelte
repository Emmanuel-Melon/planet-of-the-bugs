<script>
// @ts-nocheck
    export let course;

    import StartCourseButton from "./StartCourseButton.svelte";    
</script>

<div class="card h-96 w-96 bg-base-100 shadow-xl"> 
    <div class="card-body">
        <h3 class="card-title">
            <a class="link" href={`/courses/${course.slug}`}>{course.name}</a>
        </h3>
        <p>Complexity: {course.complexity}</p>
        <p>{course.description}</p>
        <p>Creator: {course.creator}</p>
        <div class="card-actions justify-end">
            <StartCourseButton />
        </div>
    </div>
</div>