export default {
  path: '404',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/404').default);
    });
  }
};
