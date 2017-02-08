const log = f => x => v => (console.log(`${f.name}(${x}) = ${v}`), v)

const apply = f => x => log(f)(x)(f(x))

const id = x => x

const pair = a => b => f => apply(apply(f)(a))(b)
const fst  = a => b => a
const snd  = a => b => b

const True  = fst
const False = snd
const cond  = pair

const not = x => pair(False)(True)(x) 
const and = x => y => apply(apply(x)(y))(False)

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
}
