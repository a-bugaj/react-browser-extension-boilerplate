import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import getAliasesForAbsolutePaths from "./getAliasesForAbsolutePaths";
import packageJson from "../package.json";

interface WebpackConfigParams {
    WEBPACK_SERVE: boolean;
    development: boolean;
    production: boolean;
}

const webpackConfig = (props: WebpackConfigParams): Configuration => {
    const { production = false } = props;
    const IS_PROD = production ? true : false;

    const ROOT_PATH = path.dirname(__dirname);
    const SRC_PATH = `${ROOT_PATH}/src`;

    const PATH = {
        HTML_TEMPLATE: `${SRC_PATH}/assets/popup.html`,
        ENTRY: {
            popup: `${SRC_PATH}/CoreExtension/ExtensionPopup/ExtensionPopup.tsx`,
            content: `${SRC_PATH}/CoreExtension/ExtensionContent/ExtensionContent.tsx`,
            background: `${SRC_PATH}/CoreExtension/ExtensionBackground/ExtensionBackground.ts`,
        },
        OUTPUT_PATH: `${ROOT_PATH}/dist`,
    };

    const config: Configuration = {
        mode: IS_PROD ? "production" : "development",
        entry: PATH.ENTRY,
        devtool: "cheap-module-source-map",
        output: {
            path: PATH.OUTPUT_PATH,
            publicPath: "/",
        },
        devServer: {
            hot: true,
            open: false,
            devMiddleware: {
                writeToDisk: true,
            },
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
            alias: getAliasesForAbsolutePaths(),
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|tsx|js|ts)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"],
                },
                /**
                 * Make sure to add the new loader(s) before the file-loader
                 */
                {
                    loader: "file-loader",
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    options: {
                        name: "assets/[name].[hash:8].[ext]",
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Change html title in webpack.config.ts file",
                template: PATH.HTML_TEMPLATE,
                version: packageJson.version,
                filename: "popup.html",
                chunks: ["popup"],
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/assets/manifest.json" },
                    {
                        from: "node_modules/webextension-polyfill/dist/browser-polyfill.js",
                    },
                ],
            }),
        ],
    };

    return config;
};

export default webpackConfig;
