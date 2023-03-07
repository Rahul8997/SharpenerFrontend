import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Store/index';
import '@testing-library/jest-dom'

describe('Login component', () => {
    test('renders posts if request succeeds', async () => {
        const history=jest.fn();
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        render(<Provider store={store}><Login /></Provider>);

        const SignUpText = await screen.findAllByText('Sign Up');
        expect(SignUpText).toBeInTheDocument();
    });
});