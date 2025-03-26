import { defineClientConfig } from "@vuepress/client";
import Asciinema from "./components/Asciinema.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Asciinema", Asciinema);
  },
});
