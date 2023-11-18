export interface ActionRegister {
  action_register: {
    email: string;
    name: string;
    password: string;
    created_at: string;
  };
}

export interface ActionLogin {
  action_login: {
    token: string;
  };
}
