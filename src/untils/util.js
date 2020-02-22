/**
 * @param {*} modulesContext
 */
export const importAll = (modulesContext, fileNameReg) => {
  return modulesContext.keys().map((modulesPath) => {
    const moduleName = modulesPath.match(
      fileNameReg
    )
    return {
      moduleName,
      camelModuleName: moduleName[1].replace(
        /-(\w)/g,
        (_, c) => (c ? c.toUpperCase() : '')
      ),
      module: modulesContext(modulesPath).default
    }
  })
}

export const pageScroll = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false

  return {
    lock (el) {
      if (islock) return
      islock = true;
      (el || document).addEventListener('touchmove', fn)
    },
    unlock (el) {
      islock = false;
      (el || document).removeEventListener('touchmove', fn)
    }
  }
})()
