// kaboom Context
import kaboom from 'kaboom'
import { scale } from './constants'

// create context, way of initialize kaboom everywhere in our fonctionnality
export const k = kaboom({
  width: 256 * scale, // size of screen
  height: 144 * scale,
  letterbox: true, //
  scale,
  global: false, // false because we want only to use kaboom fonction from this constant
})
