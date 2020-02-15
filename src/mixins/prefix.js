export const PREFIX = 'Yt'
export default {
  methods: {
    getCls (...args) {
      const componentName = this.$options.name
      const camelName = componentName.slice(0, 1).toLowerCase() + componentName.slice(1)
      const className = camelName.replace(/([A-Z])/g, '-$1').toLowerCase()
      if (!args.length) return className
      return [...new Set(args)].map(cls => cls ? `${className}-${cls}` : className)
    }
  }
}
