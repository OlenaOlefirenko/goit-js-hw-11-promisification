const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const toggleUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(toggleUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);
const errorMsg = error => console.log(error);
/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger).catch(errorMsg);
toggleUserState(users, 'Lux').then(logger).catch(errorMsg);
