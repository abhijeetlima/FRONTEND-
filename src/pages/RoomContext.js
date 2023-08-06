
import { createContext, useContext, useState } from "react";

const RoomContext = createContext();

export const useRoomContext = () => useContext(RoomContext);

export const RoomProvider = ({ children }) => {
  const [roomData, setRoomData] = useState([]);

  return (
    <RoomContext.Provider value={{ roomData, setRoomData }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContext;
