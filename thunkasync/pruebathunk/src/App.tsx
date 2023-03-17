import React from "react";
import "./App.css";
import {
  selectCharacter,
  getCharactersAsync,
} from "./redux/character/characterSlice";
import { useAppSelector, useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCharactersAsync());
  }, [dispatch]);

  const character = useAppSelector(selectCharacter);

  console.log(character);
  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
