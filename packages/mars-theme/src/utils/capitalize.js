export default (str) =>
  str
    .split(/[\s-_]+/)
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join("");