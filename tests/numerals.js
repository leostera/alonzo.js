import { test } from 'tape'

const focus = test.only

import * as λ from 'alonzo'

test(`zero`, ({ok, end}) => {

  ok( λ.zero( 1 ) === 1,
    `λ.zero is the identity function` )

  end()

})

test(`isZero`, ({ok, end}) => {

  ok( λ.isZero( λ.zero ) === λ.True,
    `λ.zero is λ.zero` )

  ok( λ.isZero( λ.one ) === λ.False,
    `λ.one is not λ.zero` )

  end()

})

test(`succ/pred`, ({ok, end}) => {

  ok( λ.pred( λ.one ) === λ.zero,
    `λ.pred returns the predecessor of a number`)

  ok( λ.pred( λ.succ( λ.zero ) ) === λ.zero,
    `λ.succ returns the successor of a number`)

  ok( λ.pred( λ.pred( λ.two ) ) === λ.zero,
    `λ.pred can be applied several times`)

  ok( λ.pred( λ.zero ) === λ.zero,
    `λ.pred of λ.zero is λ.zero`)

  ok( λ.pred( λ.pred( λ.zero ) ) === λ.zero,
    `λ.pred of λ.pred of λ.zero is λ.zero`)

  end()

})

test(`add`, ({ok, end}) => {

  ok( λ.pred( λ.pred( λ.add( λ.one )( λ.one ) ) ) === λ.zero,
    `λ.add takes two numbers and adds them together`)

  ok( λ.pred( λ.pred( λ.add( λ.two )( λ.zero ) ) ) === λ.zero,
    `λ.add-ing a number with zero returns the number`)

  end()

})

test(`sub`, ({ok, end}) => {

  ok( λ.sub( λ.one )( λ.one ) === λ.zero,
    `λ.sub-stracting a number from itself returns zero`)

  ok( λ.pred( λ.sub( λ.two )( λ.one ) ) === λ.zero,
    `λ.sub takes two numbers and substracts the second from the first`)

  end()

})

test(`equals`, ({ok, end}) => {

  ok( λ.equals( λ.one )( λ.one ) === λ.True,
    `λ.equals returns true if the operands are equal`)

  ok( λ.equals( λ.succ( λ.one ) )( λ.two ) === λ.True,
    `λ.equals returns true if the operands are equal`)

  ok( λ.equals( λ.one )( λ.zero ) === λ.False,
    `λ.equals returns false if the operands are not equal`)

  end()

})

focus(`mul`, ({ok, end}) => {

  ok( λ.equals( λ.zero )( λ.mul( λ.zero )( λ.one ) ) === λ.True,
    `λ.mult-iplying by zero on the left returns zero`)

  ok( λ.equals( λ.zero )( λ.mul( λ.one )( λ.zero ) ) === λ.True,
    `λ.mult-iplying by zero on the right returns zero`)

  ok( λ.equals( λ.zero )( λ.mul( λ.zero )( λ.zero ) ) === λ.True,
    `λ.mult-iplying zero by zero returns zero`)

  ok( λ.equals( λ.two )( λ.mul( λ.one )( λ.two ) ) === λ.True,
    `λ.mult-iplying by one on the left returns the second argument`)

  ok( λ.equals( λ.two )( λ.mul( λ.two )( λ.one ) ) === λ.True,
    `λ.mult-iplying by one on the right returns first argument`)

  ok( λ.equals( λ.one )( λ.mul( λ.one )( λ.one ) ) === λ.True,
    `λ.mult-iplying one by one returns one`)

  ok( λ.equals( λ.succ(λ.three) )( λ.mul( λ.two )( λ.two ) ) === λ.True,
    `λ.mult-iplying adds the first argument to itself second-argument times`) 

  end()

})
