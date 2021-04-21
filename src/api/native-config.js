import query from "./query";

export default (...args) => {
  query("config", ...args);
};
