import { fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("Should load Restaurant Menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    )); 

    const accordianHeader = screen.getByText("Veggie Burgers (2)");
    fireEvent.click(accordianHeader);
    
    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    const addBtn = screen.getAllByRole("button", {name: "Add +" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(3);
    
    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    expect(screen.getByText("Cart is empty").toBeInTheDocument);
})