export default {
  path: 'cards',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Cards'));
    });
  }
};
