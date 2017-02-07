import { test } from 'tape'

import * as λ from 'alonzo'

test(`apply`, ({ok, end}) => {

  ok( λ.apply( λ.id )( 1 ) === 1,
    `λ.apply will apply a function with the given argument` )

  end()

})

test(`id`, ({ok, end}) => {

  ok( λ.apply( λ.id )( 1 ) === 1,
    `λ.id returns its argument` )

  end()

})

test(`pair`, ({ok, end}) => {

  const pair = λ.pair( λ.id )( λ.apply )

  ok( typeof pair === 'function',
    `λ.pair builds a function` )

  ok( pair(λ.fst) === λ.id,
    `λ.fst retrieves the first function` )

  ok( pair(λ.snd) === λ.apply,
    `λ.snd retrieves the first function` )

  end()

})

test(`not`, ({ok, end}) => {

  ok( λ.not( λ.True ) === λ.False,
    `λ.not negates true to false` )

  ok( λ.not( λ.False ) === λ.True,
    `λ.not negates false to true` )

  end()

})

test(`and`, ({ok, end}) => {

  ok( λ.and( λ.True )( λ.False ) === λ.False,
    `λ.and true false is false` )

  ok( λ.and( λ.False )( λ.True ) === λ.False,
    `λ.and false true is false` )

  ok( λ.and( λ.False )( λ.False ) === λ.False,
    `λ.and false false is false` )

  ok( λ.and( λ.True )( λ.True ) === λ.True,
    `λ.and true true is true` ) 

  end()

})
