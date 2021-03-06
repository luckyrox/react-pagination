module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'PaginationReact',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    compat: {
      enzyme: true,
      sinon: true
    }
  }
}
