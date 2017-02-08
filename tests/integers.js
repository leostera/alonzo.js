import { test } from 'tape'

const focus = test.only

import * as λ from 'alonzo'

test(`zero`, ({ok, end}) => {

  ok( λ.zero( 1 ) === 1,
    `λ.zero is the identity function` )

  end()

})

test(`succ`, ({ok, end}) => {

  ok( λ.succ( λ.id ) === λ.id,
    `λ.self will apply a function to itself` )

  end()

})
