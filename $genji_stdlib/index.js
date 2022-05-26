function fromVue(component) {
  const Component = Vue.extend(component);
  return new Component().$mount().$el;
}

function preview(thumbnails, options = {}) {
  const { height = 200, size = "cover" } = options;
  return fromVue({
    template: `<div class="preview__container" :style="{
      gridTemplateColumns: 'repeat(auto-fill, minmax(' + height + 'px, 5fr))'
    }">
        <a v-for="d in thumbnails" :href="d.path">
          <div class="preview__container--image" :style="{
            backgroundImage: 'url(' + d.thumbnail + ')',
            backgroundSize: size,
          }"></div>
          <div class="preview__container--title">{{d.title}}</div>
        </a>
    </div>`,
    data() {
      return {
        height,
        size,
        thumbnails,
      };
    },
  });
}

const genji = {
  preview,
};
