import './index.types'

const uygula = function(
  that: {
    [x: string]: any;
    hasOwnProperty: any;
  },
  arr: string | any[]
) {
  that = that || global

  let uuid = '00' + Math.random()

  while (that.hasOwnProperty(uuid)) {
    uuid = '00' + Math.random()
  }

  that[uuid] = this

  let args = []
  let result = null

  if (!arr) {
    result = that[uuid]()
  } else {
    for (let i = 1, len = arr.length; i < len; i++) {
      args.push(`arr[${i}]`)
    }

    result = eval(`that[uuid](${args})`)
  }

  delete that[uuid]

  return result
}

export default uygula
