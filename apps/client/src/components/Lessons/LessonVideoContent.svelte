<script>
    import { Card } from "svelte-ui";
    export let lesson;
</script>

<section>
    <Card title={lesson.title}>
        {lesson.content}
    </Card>
</section>