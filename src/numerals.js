import {
  id,
  apply,
} from './prelude'

const zero = id

const succ = n => s => apply(apply(apply(s)(False))(n))(zero)

const one = apply(succ)(zero)

export {
  zero,
  one,
  succ,
}
