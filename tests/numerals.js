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

  end()

})

test(`succ`, ({ok, end}) => {

  end()

})
