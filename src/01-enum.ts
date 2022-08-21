enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
};

type User = {
  username: string
  role: ROLES
}

const gonzaUser: User = {
  username: 'gnzlplcs',
  role: ROLES.SELLER
}
