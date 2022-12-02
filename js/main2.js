//import components first!!
import WorkThumb from './components/workThumb.js';
import LightBox from './components/lightBox.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.heroData = data)
            .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {},
                lbData: {},
                showLB: false
            }
        },

        components: {
            theworkThumb: WorkThumb,
            thelightbox: LightBox
        },

        methods: {
            loadLightbox(hero) {
                this.lbData = hero;
                this.showLB = true;
            }
        }
    }).mount('#app')
})()