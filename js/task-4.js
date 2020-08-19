function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length <= maxLength) {
    return string;
  } else {
    return string.slice(0, -(string.length - maxLength)) + "...";
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
