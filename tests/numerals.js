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

  end()

})
