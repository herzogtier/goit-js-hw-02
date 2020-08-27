function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  const log = login.length >= min && login.length <= max ? true : false;
  return log;
  //   if (login.length >= min && login.length <= max) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
