import React from 'react';
import App from '../App';
import { create, update } from 'react-test-renderer'

describe('My first snapshot test', () => {
    test('testing app button', () => {
        let tree = create(<App />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})


describe("Changing our button name to Hide", () => {

    test('toggle the button', () => {
        let tree = create(<App />);

        let instance = tree.getInstance();

        expect(instance.state.isActive).toBe(false)

        // changing  the state
        instance.handleClick();

        expect(instance.state.isActive).toBe(true);

        expect(tree.toJSON()).toMatchSnapshot()
    })
})