import expect from 'expect'

import { createDevTools } from 'fooScript'
import fooScript from 'fooScript'

console.log('Inside fooscript.spec')
console.log('createDevTools', createDevTools)
console.log('fooScript', fooScript)

describe('fooScript spec', () => {
    it('createDevTools should be a function', () => {
        expect(createDevTools).toBeA('function')
    })
});
