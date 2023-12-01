import '@testing-library/jest-dom';
import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


describe('APP Test', () => {
    beforeEach(() => {
        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        );
    });
    it('should load user list', async () => {
        await screen.findByText(/Loading.../);
        await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../),{ timeout: 6000 });

        // Wait for the user list to be loaded
        const userList = await screen.findByTestId('user-list');
        expect(userList).toBeInTheDocument();

    })
    it('should find more then 15 users in page', async () => {
        // Wait for the user list to be loaded now
        const userList = await screen.findByTestId('user-list');
        expect(userList).toBeInTheDocument();

        const userItems = userList.querySelectorAll('[data-testid="user-item"]');
        expect(userItems.length).toBeGreaterThan(15);

    });
    it('should select second show user detail', async () => {

        // Wait for the user list to be loaded now
        const userList = await screen.findByTestId('user-list');
        expect(userList).toBeInTheDocument();

        // find all users
        const userItems = userList.querySelectorAll('[data-testid="user-item"]');
        expect(userItems.length).toBeGreaterThan(15);

        // select second one and check is username repeated two time in page
        await waitFor(() => userEvent.click(userItems[1]))
        const findUserName = await screen.findAllByText(/emineyazgan/)
        expect(findUserName).toHaveLength(2)


    });
});
