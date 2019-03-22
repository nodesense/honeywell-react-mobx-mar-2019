import { CartState } from './CartState';
 
describe ('cart state test suite', () => {

    it('test case 1, default state ', () => {
        const state = new CartState();
        expect(state.items.length).toBe(0)
    })

});