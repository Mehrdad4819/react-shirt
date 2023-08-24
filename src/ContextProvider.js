import { createContext, useState } from 'react';

export const store = createContext();

function ContextProvider({ children }) {
  const [color, setColor] = useState('#EFBD4E');
  const [decal, setDecal] = useState('three2');
  const [intro, setIntro] = useState(true);
  const [imageRotate, setImageRotate] = useState(0);
  const [imageXPosition, setImageXPosition] = useState(0);
  const [imageYPosition, setImageYPosition] = useState(0);
  const [imageScale, setImageScale] = useState(1);

  function resetChanges(params) {
    setImageRotate(0)
    setImageYPosition(0)
    setImageXPosition(0)
    setImageScale(1)
  }

  return (
    <store.Provider
      value={{
        color,
        setColor,
        decal,
        setDecal,
        intro,
        setIntro,
        imageRotate,
        imageXPosition,
        imageYPosition,
        imageScale,
        setImageRotate,
        setImageYPosition,
        setImageXPosition,
        setImageScale,
        resetChanges
      }}
    >
      {children}
    </store.Provider>
  );
}

export default ContextProvider;
