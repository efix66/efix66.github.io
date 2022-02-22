import { src, dest, watch, series } from "gulp";
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("Sass/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["Sass/**/*.scss"], buildStyles);
}

const _default = series(buildStyles, watchTask);
export { _default as default };
