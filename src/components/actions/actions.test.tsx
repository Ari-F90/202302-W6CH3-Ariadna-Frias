import React from "react";
import { screen, render } from "@testing-library/react";
import { Actions } from "./actions";
import { Provider } from "react-redux";
import { phoneReducer } from "../../reducer/phone.reducer";

describe("Given an Actions component", () => {
  describe("When it is rendered", () => {
    test("then it should be two links in the document", () => {
      render(<Actions />);
      const element = screen.getAllByRole("link");
      const elementCount = 2;
      expect(element.length).toBe(elementCount);
    });
  });
});
