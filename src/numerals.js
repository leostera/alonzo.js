import {
  id,
  fst,
} from './prelude'

const zero = id

const succ = n => s => s(False)(n)(zero)

const one = succ(zero)

export {
  zero,
  one,
  succ,
}
