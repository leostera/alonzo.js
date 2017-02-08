import { test } from 'tape'

const focus = test.only

import * as λ from 'alonzo'

test(`apply`, ({ok, end}) => {

  ok( λ.apply( λ.id )( 1 ) === 1,
    `λ.apply will apply a function with the given argument` )

  end()

})

test(`self`, ({ok, end}) => {

  ok( λ.apply( λ.self )( λ.id ) === λ.id,
    `λ.self will apply a function to itself` )

  end()

})

test(`id`, ({ok, end}) => {

  ok( λ.apply( λ.id )( 1 ) === 1,
    `λ.id returns its argument` )

  end()

})

test(`pair`, ({ok, end}) => {

  const pair = λ.apply( λ.apply( λ.pair )( λ.id ) )( λ.apply )

  ok( typeof pair === 'function',
    `λ.pair builds a function` )

  ok( λ.apply( pair )( λ.fst ) === λ.id,
    `λ.fst retrieves the first function` )

  ok( λ.apply( pair )( λ.snd ) === λ.apply,
    `λ.snd retrieves the first function` )

  end()

})

test(`not`, ({ok, end}) => {

  ok( λ.apply( λ.not )( λ.True ) === λ.False,
    `λ.not negates true to false` )

  ok( λ.apply( λ.not )( λ.False ) === λ.True,
    `λ.not negates false to true` )

  end()

})

test(`and`, ({ok, end}) => {

  ok( λ.apply( λ.apply( λ.and )( λ.True ) )( λ.False ) === λ.False,
    `λ.and true false is false` )

  ok( λ.apply( λ.apply( λ.and )( λ.False ) )( λ.True ) === λ.False,
    `λ.and false true is false` )

  ok( λ.apply( λ.apply( λ.and )( λ.False ) )( λ.False ) === λ.False,
    `λ.and false false is false` )

  ok( λ.apply( λ.apply( λ.and )( λ.True ) )( λ.True ) === λ.True,
    `λ.and true true is true` )

  end()

})

test(`or`, ({ok, end}) => {

  ok( λ.apply( λ.apply( λ.or )( λ.True ) )( λ.False ) === λ.True,
    `λ.or true false is true` )

  ok( λ.apply( λ.apply( λ.or )( λ.False ) )( λ.True ) === λ.True,
    `λ.or false true is true` )

  ok( λ.apply( λ.apply( λ.or )( λ.False ) )( λ.False ) === λ.False,
    `λ.or false false is false` )

  ok( λ.apply( λ.apply( λ.or )( λ.True ) )( λ.True ) === λ.True,
    `λ.or true true is true` )

  end()

})
