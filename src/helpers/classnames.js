/**
 * Conditionally output class names based on a hash of arguments.
 */
module.exports = (...args) => {
  // If the first argument is a string, it's used as the base for a BEM modifier
  const [baseClass] = args;
  const classPrefix = typeof baseClass === 'string' ? `${baseClass}--` : '';

  return args.reduce((classes, arg) => {
    // String arguments are static classes
    if (typeof arg === 'string') {
      return classes.concat([arg]);
    }

    // The Handlebars context argument contains an object of each named parameter passed
    if (arg.hash) {
      return classes.concat(Object.entries(arg.hash).reduce((list, [cls, condition]) => {
        if (condition) {
          return list.concat([`${classPrefix}${cls}`]);
        }

        return list;
      }, []));
    }

    return classes;
  }, []).join(' ');
}
