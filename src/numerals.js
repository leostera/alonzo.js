import {
  id,
  fst,
} from './prelude'

const zero = id
const isZero = n => n(fst)

const succ = n => s => s(False)(n)(zero)

const one = succ(zero)
const two = succ(one)
const three = succ(two)

export {
  zero,
  one,
  succ,
}
