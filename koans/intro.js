/*
 * Dependencies
 */

import {
  test as koan,
} from 'tape'

import λ from 'alonzo'

/*
 * Helpers
 */

const focus = koan.only

/*
 *
 * Koan Set 1
 *
 * Introduction to Arrows
 *
 */

koan(``, ({ok, end}) => {

  ok(2 == λ.apply( λ.id )( 2 ),
    `we can invoke an arrow`)

  end()

})
