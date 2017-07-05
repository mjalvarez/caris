export default {
  path: 'terms',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Terms').default);
    });
  }
};
