console.log('Vue OK', Vue);

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            message: 'Ciao! A me piace Vue JS!',
            image: 'https://www.nuovomille.it/wp-content/uploads/2023/07/origine-di-ciao-768x512.jpg'
        }
    }
});
app.mount('#root');