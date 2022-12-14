export default {
  name: "workThumb",

  emits: ['loadlbdata'],

  props: {
      hero: Object
  },

  template: `
  <li @click="loadLBData">
      <img :src='"images/" + hero.thumb' alt="hero img" style="width: 150px">
      <!-- <div class="sprite" id="cap"></div> -->
      <div class="red-bumper"></div>
      <h5>{{hero.name}}</h5>
  </li>
  `,

  methods: {
      loadLBData() {
          this.$emit('loadlbdata', this.hero);
      }
  }
}