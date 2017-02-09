import {
  id,
  True,
  fst,
  snd,
  pair,
  cond,
  False,
  y2,
} from './prelude'

const zero = id

const isZero = n => n(True)

/*
 * Successor will build up a pair of [λ.True, rest],
 * where rest can be another pair or λ.zero, so that
 *
 *    one: ( True, Zero )
 *    two: ( True, ( True, Zero )
 *    three: ( True, ( True, ( True, Zero ) ) )
 *
 * and so on.
 */
const succ = n => pair(False)(n)

/*
 * Given how `succ` works, `pred` will take the tail of the
 * nested pairs.
 *
 *    pred(two) = pred( (True, (True, Zero)) ) == (True, Zero)
 *
 * and so on.
 */
const pred = n => isZero(n)(zero)(n(snd))

const one = succ(zero)
const two = succ(one)
const three = succ(two)

/*
 * Recursively add numbers:
 *
 * If `isZero(y)` returns `False`, then select the second branch
 * of the cond.
 *
 * If `isZero(y)` returns `True`, then select `x`
 *
 * The second branch calls the function `f` with itself`, and passes along
 * the successor of `x` and the predecesor of `y`.
 *
 * This pointed recursion will eventually yield a `y` for which `isZero`
 * returns `True`, and breaks out of the loop by returning `x`.
 */
const add = y2( f => x => y =>
  (cond
    ( () => x )
    ( () => f(f)(succ(x))(pred(y)) )
    ( isZero(y) )) ) 

export {
  add,
  isZero,
  zero,
  one,
  succ,
  pred,
}
