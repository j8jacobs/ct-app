import React, { createContext, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "wss://ws.blockchain.info/inv"
  );

  useEffect(() => {
    console.log(`Socket ready state: ${readyState}`);
  }, [readyState]);

  return (
    <WebSocketContext.Provider value={{ sendMessage, lastMessage, readyState }}>
      {children}
    </WebSocketContext.Provider>
  );
}
