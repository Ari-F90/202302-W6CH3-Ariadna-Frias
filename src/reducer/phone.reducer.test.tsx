import * as ac from "../reducer/phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the phone reducer", () => {
  describe("When we passed the click action", () => {
    test("Then, it should return the initial state and the number", () => {
      const result = phoneReducer("", ac.clickCreator("1"));

      expect(result).toBe("1");
    });
  });

  describe("When we passed the delete action", () => {
    test("Then, it should return an empty string", () => {
      let mockState = "";
      const result = phoneReducer("1", ac.deleteCreator());

      expect(result).toBe(mockState);
    });
  });

  describe("When we passed an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = "";

      const action = { type: "" };

      const result = phoneReducer(initialState, action);

      expect(result).toBe("");
    });
  });
});
