export default {
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
  },
  template: `<div class="row">
  <div class="col-12">
    <div class="form-group">
      <label v-text="'Ingresa el texto que vas a usar:'"/>
      <textarea
        class="form-control"
        :value="message"
        @input="updateMessage"
      />
    </div>
  </div>
  <div class="col-12">
    <router-link
      class="btn btn-success"
      :to="{name: 'hangman'}"
      v-text="'Generar'"
    />
  </div>
</div>`
}
