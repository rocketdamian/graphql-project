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

const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
          {data.users.map(user => (
            <tr>
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
        // <ul name="users">
        //   {data.users.map(user => (
        //     <li>ID: {user.id}, Name: {user.name}, Email: {user.email}</li>
        //   ))}
        // </ul>
      );
    }}
  </Query>
);

export default UsersList;
