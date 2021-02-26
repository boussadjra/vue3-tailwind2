import * as Vue from 'vue';
import Prism from 'prismjs';
import { Slots, VNode } from 'vue';

declare type Data = Record<string, unknown>;

export default Vue.defineComponent({
    name:'prism',
  props: {
    code: {
      type: String,
      default:''
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs }: { slots: Slots; attrs: Data }) {
    const { h } = Vue;
    // const slotsData = (slots && slots.default && slots.default()) || [];
    const code = props.code ;
    const { inline, language } = props;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;

    if (inline) {
      return (): VNode =>
        h('code', { ...attrs, class: [attrs.class, className], innerHTML: Prism.highlight(code, prismLanguage,props.language) });
    }

    const d = Prism.highlight(code, prismLanguage,props.language);
    return (): VNode =>
      h('pre', { ...attrs, class: [attrs.class, className] }, [
        h('code', {
          class: className,
          innerHTML: d,
        }),
      ]);
  },
});