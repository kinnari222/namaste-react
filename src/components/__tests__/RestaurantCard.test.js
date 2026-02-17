import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurantcard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Pizza Paradise");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})