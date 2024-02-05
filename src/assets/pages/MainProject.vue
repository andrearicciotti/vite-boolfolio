<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
        }
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`)
            .then((resp) => {
                this.projects = resp.data.data;
                console.log(this.projects);
            });
    },
    components: {
        ProjectCard,
    },
    name: 'MainProject'
}
</script>

<template>
    <h1 class="text-center my-4">Projects</h1>
    <div class="container">
        <div class="row g-4">
            <div class="col-4" v-for="project in projects" :key="project.id">
                <div class="card">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>