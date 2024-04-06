import webpack, { Configuration } from "webpack";
import { BuildOptions, BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: Configuration }) => {
    if (
      config.resolve &&
      config.resolve.modules &&
      config.resolve.extensions &&
      config.module &&
      config.module.rules
    ) {
      const paths = {
        src: path.resolve(__dirname, "..", "..", "src"),
      };
  
      config.resolve.modules.push(paths.src);
      config.resolve.extensions.push(".ts", ".tsx");
      config.module.rules.push(buildCssLoader(true)); // Здесь передайте значение isDev в функцию
    } else {
      console.error(
        "Ошибка: свойство config.resolve.modules или config.resolve.extensions не определено"
      );
    }
  
    return config;
  };