import bcrypt from 'bcryptjs';

export const users = [
  {
    Name: 'Admin User',
    Email: 'admin@email.com',
    Password: bcrypt.hashSync('123456', 10),
    IsAdmin: true,
  },
  {
    Name: 'John Doe',
    Email: 'john@email.com',
    Password: bcrypt.hashSync('123456', 10),
  },
  {
    Name: 'Jane Doe',
    Email: 'jane@email.com',
    Password: bcrypt.hashSync('123456', 10),
  },
];

