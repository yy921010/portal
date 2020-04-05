const {fixBabelImports, addWebpackPlugin, addWebpackAlias, override} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path')

const resolve = (url) => path.resolve(__dirname, `src/${url}`)

module.exports = override(
    // do stuff with the webpack config...
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        ["@mock"]: resolve("mock"),
        ["@components"]: resolve("components"),
        ["@apis"]: resolve("apis"),
        ["@pages"]: resolve("pages"),
        ["@utils"]: resolve("utils"),
        ["@actions"]: resolve("actions"),
        ["@reducers"]: resolve("reducers"),
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
)

