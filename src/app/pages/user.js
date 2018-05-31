// @flow
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import type { Match } from 'react-router';
import type { Node } from 'react';

type ErrorProps = {
  children: Node,
};

type UserProps = {
  id: number,
  nickname: string,
};

type UserPageProps = {
  match: Match,
};

const GET_USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      nickname
    }
  }
`;

const Loading = () => <span>Loading</span>;
const Error = ({ children }: ErrorProps) => <span>{ children }</span>;
const User = ({ id, nickname }: UserProps) => (
  <h1>{ `${nickname} is id: ${id}` }</h1>
);

const UserPage = ({ match }: UserPageProps) => (
  <Query query={GET_USER} variables={{ id: match.params.id }}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <Loading />;
        }

        if (error) {
          return <Error>{ error }</Error>;
        }

        return <User {...data.user} />;
      }
    }
  </Query>
);

export default UserPage;
