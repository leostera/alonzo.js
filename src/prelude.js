const log = f => x => v => (console.log(`${f.name}(${x}) = ${v}`), v)

/*
 * A function that will apply a function to an argument.
 *
 * Handy to wrap interact with all function applications,
 * like we're doing here with log.
 */
const apply = f => x => f(x) //log(f)(x)(f(x))

/*
 * A self application of a function
 */
const self = f => f(f)

/*
 * `id` returns exactly what you pass it
 */
const id = x => x

/*
 * `pair` will build a tuple of two elements, and apply a function
 * to the first, and then to the second.
 *
 * Used in conjunction with `fst` and `snd` (the projections of
 * this product type) you can extract the first or second value
 * from a pair built with `pair`
 */
const pair = a => b => f => f(a)(b)
const fst  = a => b => a
const snd  = a => b => b

/*
 * As it turns out, building logical conditions with True and False
 * is the same as operating with pairs.
 *
 * The correspondance is obvious when you consider that a pair has
 * always 2 elements, and there's always two boolean values: True,
 * and False.
 *
 * Inherein, we call this named pairing `cond`, and it's projections:
 * `True` and `False`.
 */
const cond  = pair
const True  = fst
const False = snd

/*
 * `not` builds a cond that chooses from False or True
 * and you pass it a boolean, which are either:
 *  a) True: or the function fst, which will pick False here, or
 *  b) False: which is snd, and will pick True here!
 */
const not = cond(False)(True)

/*
 * `and` also buils a cond that chooses from it's options
 *    a) The parameter `y`,
 *    b) False
 *
 *  So if `x` is True, then it will choose `y` and go on.
 *  If `x` is False, it will shortcircuit with a False.
 */
const and = x => y => cond(y)(False)(x)

/*
 * `or` also buils a cond that chooses from it's options
 *    a) True
 *    b) The parameter `y`
 *
 *  So if `x` is True, then it will shortcircuit with True
 *  If `x` is False, it will return `y`
 */
const or = x => y => cond(True)(y)(x)

/*
 * Fixed-point combinator
 */
const y  = f => ( g => f(g(g)) )( g => x => f(g(g))(x) )
const y2 = f => ( g => f(g(g)) )( g => x => y => f(g(g))(x)(y) )

export {
  False,
  True,
  and,
  apply,
  cond,
  fst,
  id,
  log,
  not,
  or,
  pair,
  self,
  snd,
  y,
  y2,
}
