import { Display } from "../display/display";
import { Keyboard } from "../keyboard/keyboard";
import { Actions } from "../actions/actions";
export function App() {
  return (
    <div className="container">
      <Display></Display>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}
