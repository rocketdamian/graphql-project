import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

class UsersList extends React.Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <tr key={user.id}>
                    <td>
                      {user.id}
                    </td>
                    <td>
                      {user.name}
                    </td>
                    <td>
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </Query>
    )
  }
}

export default UsersList;
