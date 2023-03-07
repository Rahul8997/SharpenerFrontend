import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Store/index';
import '@testing-library/jest-dom'
import ProfileDetails from './ProfileDetails';
describe('Expense Component', () => {
    test('testing Welcome to expanse tracker!!! word', () => {
        render(<Provider store={store}><ProfileDetails /></Provider>);
        const expenseWord = screen.getByText('Welcome to expanse tracker!!!',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing Full details word', () => {
        render(<Provider store={store}><ProfileDetails /></Provider>);
        const expenseWord = screen.getByText('Full',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
})