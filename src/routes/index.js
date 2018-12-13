export default {
  data: () => ({ message: '' }),
  template: `<div class="row">
  <div class="col-12">
    <div class="form-group">
      <label v-text="'Ingresa el texto que vas a usar:'"/>
      <textarea v-model="message" class="form-control"/>
    </div>
  </div>
  <div class="col-12">
    <router-link
      class="btn btn-success"
      :to="{name: 'hangman', params: { message: message }}"
      v-text="'Generar'"
    />
  </div>
</div>`
}
