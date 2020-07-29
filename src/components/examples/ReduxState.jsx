import React from 'react';
import { useSelector } from 'react-redux';
import JSONPretty from 'react-json-pretty';

const replacer = (key, value) => {
  return value instanceof Error ? value.toString() : value;
};

export default function ReduxState() {
  return <JSONPretty keyStyle="color: #3298dc;" data={{ ...useSelector((state) => state) }} replacer={replacer} />;
}
