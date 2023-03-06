const { render } = require("@testing-library/react")
import Expenses from './Expenses';

describe('Expense Component', () => {
    test('testing expesne word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('expense');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing food word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('food');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing food word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('food');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing food word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('food');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing movie word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('movie');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing electricity word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('electricity');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing submit word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('submit');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing EDIT word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('EDIT');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing Amount word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('Amount');
        expect(expenseWord).toBeInTheDocument();
    })
    test('testing cat word', () => {
        createRoot(<Expenses />);
        const expenseWord = screen.getBtText('cat');
        expect(expenseWord).toBeInTheDocument();
    })
})
