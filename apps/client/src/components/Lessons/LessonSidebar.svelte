<script>
    import "iconify-icon";
    export let lesson;
</script>


<div class="bg-base-200">
    <div class="flex items-center gap-4 p-2 shadow-xl border-b-2 border-primary">
        <button class="btn btn-sm btn-circle btn-secondary"><iconify-icon icon="ri:arrow-left-circle-line" /></button>
        <p>Go Back to Course</p>
    </div>
    
    <div class="card card-compact">
        <div class="card-body">
            <h2 class="card-title">{lesson.title}</h2>
            <progress class="progress progress-info w-56" value="40" max="100"></progress>
        </div>
    </div>
</div>