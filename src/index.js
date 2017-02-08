const log = f => x => v => (console.log(`${f.name}(${x}) = ${v}`), v)

const apply = f => x => log(f)(x)(f(x))

const id = x => x

const pair = a => b => f => apply(apply(f)(a))(b)
const fst  = a => b => a
const snd  = a => b => b

const True  = fst
const False = snd
const cond  = pair

/*
 * `not` builds a pair that chooses from False or True
 * and you pass it a boolean, which are either:
 *  a) True: or the function fst, which will pick False here, or
 *  b) False: which is snd, and will pick True here!
 */
const not = x => apply(apply(apply(pair)(False))(True))(x)

/*
 * `and` also buils a pair that chooses from it's options
 *    a) The parameter `y`,
 *    b) False
 *
 *  So if `x` is True, then it will choose `y` and go on.
 *  If `x` is False, it will shortcircuit with a False.
 */
const and = x => y => apply(apply(apply(pair)(y))(False))(x)

export {
  log,
  apply,
  id,
  fst,
  snd,
  pair,
  True,
  False,
  cond,
  not,
  and,
}
