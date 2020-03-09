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

export const pageScroll = {
  lock () {
    document.body.classList.add('yt-overflow-hidden')
  },
  unlock () {
    document.body.classList.remove('yt-overflow-hidden')
  }
}
