import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

export const ADD_USER = gql`
  mutation create($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

class AddUser extends React.Component {
  state = {
    name: '',
    email: ''
  };
  render() {
    const { name, email } = this.state;

    return (
      <Mutation mutation={ADD_USER} variables={{ name, email }} onError={() => {}}>
        {(addUser, result) => {
          const { data, loading, error, called } = result;

          if (!called) {
            return (
              <div>
                <input
                  placeholder="name"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <input
                  placeholder="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <button data-testid="add-user-button" onClick={addUser}>
                  Create new user
                </button>
              </div>
            );
          }
          if (loading) {
            return <div>LOADING</div>;
          }
          if (error) {
            return <div>ERROR</div>;
          }

          const { createUser } = data;

          if (createUser) {
            const { id, name, email } = createUser;

            return <div>{`Created ${name}, email: ${email} with id ${id}`}</div>;
          } else {
            return null;
          }
        }}
      </Mutation>
    );
  }
}

export default AddUser;