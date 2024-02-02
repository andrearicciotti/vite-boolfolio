<script>
import axios from 'axios';
import MainProject from './MainProject.vue';

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
        MainProject
    }
}
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="card" style="width: 18rem;" v-for="project in projects" :key="project.id">
            <MainProject :project="project" />  
        </div>
    </div>
</template>
<style lang="scss" scoped></style>