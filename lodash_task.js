const _ = require('lodash');

let users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'David', age: 40, active: false }
  ];

  function getActiveUsers(users) {
    return _.filter(users, {active: true});
  }

  function getSortedUsersByAge(users) {
    return _.sortBy(users, ['age']);
  }

  function getUserNames(users) {
    return _.map(users, 'name');
  }

  function getUserById(users, id) {
    return _.find(users, {id}) || null;
  }

  function addUser(users, newUser) {
    return [...users, newUser];
  }

  function removeUserById(users, id) {
    return _.reject(users, {id});
  }

  function updateUser(users, updatedUser) {
    return _.map(users, (user) => {
        return user.id === updatedUser.id ? {...user, ...updatedUser} : user;
    });
  }

  console.log('Active users:', getActiveUsers(users));
  console.log('Sorted users by age:', getSortedUsersByAge(users));
  console.log('User names:', getUserNames(users));
  console.log('Ger user by id 3:', getUserById(users, 3));

  let newUser = {id: 5, name: 'Eve', age: 28, active: true};
  users = addUser (users, newUser);
  console.log('Users after adding new user:', users);

  users = removeUserById(users, 2);
  console.log('Users after removing user with id 2:', users);

  let updatedUser = {id: 1, name:'Alice', age: 26, active: true};
  users = updateUser(users, updateUser);
  console.log('Users after updating user with id 1:', users);