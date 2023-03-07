// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store from '../Store/index';
// import '@testing-library/jest-dom'
// import ProfileDetails from './ProfileDetails';
// import { Router } from 'react-router-dom';
// describe('Expense Component', () => {
//     test('testing Welcome to expanse tracker!!! word', () => {
//         render(<Provider store={store}><Router><ProfileDetails /></Router></Provider>);
//         const expenseWord = screen.queryByText('Welcome',{exact:false});
//         expect(expenseWord).toBeInTheDocument();
//     })
//     test('testing Full details word', () => {
//         render(<Provider store={store}><Router><ProfileDetails /></Router></Provider>);
//         const expenseWord = screen.getByText('Full',{exact:false});
//         expect(expenseWord).toBeInTheDocument();
//     })
//     test('testing Contact word', () => {
//         render(<Provider store={store}><ProfileDetails /></Provider>);
//         const expenseWord = screen.getByText('Contact',{exact:false});
//         expect(expenseWord).toBeInTheDocument();
//     })
//     test('testing  Profile photo word', () => {
//         render(<Provider store={store}><Router><ProfileDetails /></Router></Provider>);
//         const expenseWord = screen.getAllByText('Profile photo',{exact:false});
//         expect(expenseWord).toBeInTheDocument();
//     })
// })