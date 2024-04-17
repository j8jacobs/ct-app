import React, { useEffect, useRef } from "react";
import { Platform, TextInput, View } from "react-native";
import { GlobalStyles } from "../styles";

export default function Input({ autofocus = false, ...rest }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <TextInput ref={inputRef} {...rest} style={GlobalStyles.input} />;
}
