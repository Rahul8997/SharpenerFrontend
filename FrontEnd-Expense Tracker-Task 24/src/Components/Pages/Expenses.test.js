import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Store/index';
import Expenses from './Expenses';
import '@testing-library/jest-dom'
describe('Expense Component', () => {
    test('testing Enter your expense word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('Enter your expense',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing Enter your expenseamount: word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('expenseamount:',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing movie word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('movie',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing food word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('food',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing electricity word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('electricity',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing fuel word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('fuel',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing Amount word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('Amount',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing Total word', () => {
        render(<Provider store={store}><Expenses /></Provider>);
        const expenseWord = screen.getByText('Total',{exact:false});
        expect(expenseWord).toBeInTheDocument();
    })
 
})



