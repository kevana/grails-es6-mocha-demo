import expect from 'expect'

import { createDevTools } from 'fooScript'

describe('fooScript spec', () => {
    it('createDevTools should be a function', () => {
        expect(createDevTools).toBeA('function')
    })
});
