import {
  False,
  True,
  and,
  cond,
  fst,
  id,
  or,
  pair,
  snd,
  y2,
} from './prelude'

const zero = id

const isZero = n => n(fst)

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
 * Recursively operate on church numerals:
 *
 * If `isZero(y)` returns `False`, then select the second branch
 * of the cond.
 *
 * If `isZero(y)` returns `True`, then select `x`
 *
 * The second branch calls the function `f` with itself`, and passes along
 * the new `x` and new `y`
 *
 * This pointed recursion will eventually yield a `y` for which `isZero`
 * returns `True`, and breaks out of the loop by returning `x`.
 */

/*
 * add one three
 * add two two
 * add three one
 * add four zero
 * four
 */
const add = y2( f => x => y => cond
  (() => x)
  (() => f(succ(x))(pred(y)))
  (isZero(y))() )

/*
 * sub four two
 * sub three one
 * sub two zero
 * two
 */
const sub = y2( f => x => y => cond
  (() => x)
  (() => f(pred(x))(pred(y)))
  (isZero(y))() )

/*
 * mul two three
 * add two (mul two two)
 * add two (add two (mul two one))
 * add two (add two (add two (mul two zero)))
 * add two (add two (add two zero))
 * add two (add two two)
 * add two four
 * six
 */
const mul = y2( f => x => y => cond
  (() => zero)
  (() => add(x)( f(x)(pred(y)) ))
  (isZero(y))() )

/*
 * equals three two
 * equals two one
 * equals one zero
 * False
 *
 * equals two two
 * equals one one
 * equals zero zero
 * True
 */
const equals = y2( f => x => y => cond
    (() => True)
    (() => cond(() => False)
               (() => f(pred(x))(pred(y)))
               (or(isZero(x))(isZero(y)))())
    (and(isZero(x))(isZero(y)))())

export {
  add,
  isZero,
  one,
  pred,
  sub,
  succ,
  three,
  two,
  zero,
  mul,
  equals,
}
