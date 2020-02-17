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
