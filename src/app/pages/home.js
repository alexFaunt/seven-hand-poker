import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const GET_USERS = gql`
  query users {
    users {
      id
      nickname
    }
  }
`;

const Loading = () => <span>Loading</span>;
const Error = ({ children }) => <span>{ children }</span>;
const UserList = ({ users }) => (
  <ul>
    { users.map(({ id, nickname }) => <li key={id}><Link to={`/user/${id}`}>{ nickname }</Link></li>) }
  </ul>
);

const Home = () => (
  <div>
    <h1>Users:</h1>
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loading />;
        }

        if (error) {
          return <Error>{ error }</Error>;
        }

        return <UserList users={data.users} />;
      }}
    </Query>
  </div>
);

export default Home;
