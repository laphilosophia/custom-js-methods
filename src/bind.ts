const bagla = function (that: any) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable")
  }

  const boundTargetFunction = this
  const boundArguments = Array.prototype.slice.call(arguments, 1)

  return function boundFunction() {
    // here the arguments refer to the second time when we call the target function returned from bind
    const targetArguments = Array.prototype.slice.call(arguments)

    return boundTargetFunction.apply(
      that,
      boundArguments.concat(targetArguments)
    )
  }
}

export default bagla
