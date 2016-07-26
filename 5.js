function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(
      (test) => goodUsers.some(
        (good) => good.id === test.id
      )
    );
  };
}

module.exports = checkUsersValid;
