import { Display } from "../../../feature/components/display/display";
import { Keyboard } from "../../../feature/components/keyboard/keyboard";
import { Actions } from "../../../feature/components/actions/actions";
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
