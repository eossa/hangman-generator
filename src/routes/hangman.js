export default {
  components: {
    'button-letter': {
      props: {
        letter: { type: String, required: true }
      },
      data: () => ({ disabled: false }),
      methods: {
        action () {
          this.disabled = true
          this.$emit('click', this.letter)
        }
      },
      template: `<button
  class="btn btn-success border"
  :disabled="disabled"
  :style="{minWidth: '37px'}"
  @click="action"
  v-text="letter"
/>`
    }
  },
  data () {
    return {
      hidden: [],
      letters: []
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  created () {
    this.fillLetters()
    this.fillHidden()
  },
  methods: {
    attempt (letter) {
      let hidden = Object.assign({}, this.hidden)
      for (let key in this.message) {
        if (this.message[key].toLowerCase() === letter.toLowerCase()) {
          hidden[key] = this.message[key]
        }
      }
      this.hidden = Object.assign({}, hidden)
    },
    fillHidden () {
      for (let char of this.message) {
        if (char === ' ') {
          this.hidden.push('<span class="px-2" v-text="\' \'">')
        } else if (/^[a-z0-9]$/i.test(char)) {
          this.hidden.push('_')
        } else {
          this.hidden.push(char)
        }
      }
    },
    fillLetters () {
      let i = 'a'.charCodeAt(0)
      let j = 'z'.charCodeAt(0)
      for (; i <= j; i++) {
        this.letters.push(String.fromCharCode(i).toUpperCase())
      }
      i = '0'.charCodeAt(0)
      j = '9'.charCodeAt(0)
      for (; i <= j; i++) {
        this.letters.push(String.fromCharCode(i).toUpperCase())
      }
    }
  },
  template: `<div class="row">
  <div class="col-12">
    <h2
    v-for="(char, index) in hidden"
    :key="index"
    :class="{'d-inline-block': true, 'px-1': char === '_'}"
    v-html="char"
    />
  </div>
  <div class="col-12 mt-4">
    <button-letter
      v-for="letter in letters"
      :key="letter"
      :letter="letter"
      @click="attempt(arguments[0])"
    />
  </div>
</div>`
}
