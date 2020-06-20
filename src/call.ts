import './index.types'

const cagir = function(
  that: {
    [x: string]: any;
    hasOwnProperty: (arg0: string) => any;
  }
) {
  that = that || global

  let uuid = '00' + Math.random()

  while (that.hasOwnProperty(uuid)) {
    uuid = '00' + Math.random()
  }

  that[uuid] = this

  const args = []

  // arguments are saved in strings, using args
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }
  
  // strings are reparsed into statements in the eval method
  // Here args automatically calls the Array.toString() method.
  let result = eval(`that[uuid](${args})`)

  delete that[uuid]

  return result
}

export default cagir
