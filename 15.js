function loadUsers(userIds, load, done) {
  const users = [];
  let counter = 0;
  userIds.forEach((id, i) =>
    load(id, (res) => {
      users[i] = res;
      if (++counter === userIds.length) {
        done(users);
      }
    })
  );
  return users;
}

module.exports = loadUsers;
