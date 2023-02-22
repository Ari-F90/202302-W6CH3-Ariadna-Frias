import { useDispatch } from "react-redux";
import { clickCreator } from "../../reducer/phone.actions.creator";
import { AppDispatch } from "../../store/store";

export function Keyboard() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <button className="key" onClick={() => clickCreator("1")}>
            1
          </button>
        </li>
        <li>
          <button className="key">2</button>
        </li>
        <li>
          <button className="key">3</button>
        </li>
        <li>
          <button className="key">4</button>
        </li>
        <li>
          <button className="key">5</button>
        </li>
        <li>
          <button className="key">6</button>
        </li>
        <li>
          <button className="key">7</button>
        </li>
        <li>
          <button className="key">8</button>
        </li>
        <li>
          <button className="key">9</button>
        </li>
        <li>
          <button className="key">0</button>
        </li>
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
}