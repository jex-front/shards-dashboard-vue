<template>
  <div ref="editor" class="add-new-post__editor mb-1"></div>
</template>

<script>
import Quill from 'quill';

export default {
  name: 'editor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    const toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
    ];

    // Init the Quill RTE
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: toolbarOptions,
      },
      placeholder: 'Words can be like x-rays if you use them properly...',
      theme: 'snow',
    });

    this.editor.root.innerHTML = this.value;

    this.editor.on('text-change', () => this.update());
  },
  methods: {
    update() {
      this.$emit('update', this.editor.getText() ? this.editor.root.innerHTML : '');
    },
  },
};
</script>
