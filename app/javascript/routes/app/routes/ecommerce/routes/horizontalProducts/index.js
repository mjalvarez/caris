export default {
  path: 'horizontal-products',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HorizontalProducts').default);
    });
  }
};
