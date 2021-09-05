/**
 * Sample
 *
 * @returns {{init: init}}
 */
const Sample = (() => {
  const DOM = {};

  const cacheDOM = () => {
    console.log('Sample module login js')
  }

  const eventListener = () => {
    //
  }

  const init = () => {
    cacheDOM();
    eventListener();
  };

  return {
    init,
  };
})();

export default Sample;
