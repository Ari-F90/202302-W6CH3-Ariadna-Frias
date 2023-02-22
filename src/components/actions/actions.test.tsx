import React from "react";
import { screen, render } from "@testing-library/react";
import { Actions } from "./actions";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Given an Actions component", () => {
  describe("When it is rendered", () => {
    test("then it should be two links in the document", () => {
      render(
        <Provider store={store}>
          <Actions />
        </Provider>
      );
      const element = screen.getAllByRole("link");
      const elementCount = 2;
      expect(element.length).toBe(elementCount);
    });
  });
});
