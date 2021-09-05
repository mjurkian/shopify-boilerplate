/**
 * Import additional modules here:
 *
 * import './module_xyz';
 */
import Sample from "./Sample";

/**
 * Main App module used in bundles/* to initialise all other modules, includes helpers js/helpers for use in initialising
 * modules depending on various criteria
 *
 * @returns {{init: init}}
 */
export default (() => {
  /**
   * @param Module {Object}
   * @param Module.init {Function}
   * @param name {string|boolean}
   * @param options {Object}
   */
  const alwaysInit = (Module, name = false, options = false) => {
    if (name) {
      loadedModules[name] = Module
    }
    Module.init(options)
  }

  const init = () => {
    /**
     * Initialise other modules here
     */

	alwaysInit(Sample);
  }

  return {
    init,
  }
})()
