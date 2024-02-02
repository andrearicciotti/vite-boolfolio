<script>
import axios from 'axios';

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
            this.projects = resp.data;
            console.log(this.projects);
        });
    },
}
</script>
<template>
    <div>
        <h2>heeee</h2>
    </div>
</template>
<style lang="scss" scoped>
    
</style>