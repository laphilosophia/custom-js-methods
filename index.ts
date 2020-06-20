import cagir from './src/call'
import uygula from './src/apply'
import bagla from './src/bind'

class Func extends Function {
  constructor (props: string) {
    super(props)
  }

  call = cagir
  apply = uygula
  bind = bagla
}

export default Func
