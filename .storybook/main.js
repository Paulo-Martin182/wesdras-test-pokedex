module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-react-jsx']
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
