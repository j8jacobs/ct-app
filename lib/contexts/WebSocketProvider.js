/**
 * POC - connect to Blockchain.com websocket API https://www.blockchain.com/explorer/api/api_websocket
 * Each add = subscription (op: addr_sub)
 * Each removal = unsubscribe (op: add_unsub)
 */
import React, { createContext, useEffect } from "react";
import useWebSocket from "react-use-websocket";

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
