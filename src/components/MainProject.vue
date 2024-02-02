<script>
export default {
    props: {
        project: Object
    },

    data() {
        return {

        };
    },

    created() {
        console.log(this.project);
    }
}
</script>
<template>
    <div class="card-header">
        <strong>Title:</strong> {{ project.title }}
    </div>

    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Description:</strong> {{ project.description }}</li>
        <!-- <li class="list-group-item"><strong>Type:</strong> {{ project.type }}</li>
            <li class="list-group-item"><strong>Technology:</strong> {{ project.technology }}</li> -->
    </ul>
</template>
<style lang="scss" scoped></style>