/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReceitas = /* GraphQL */ `
  query GetReceitas($id: ID!) {
    getReceitas(id: $id) {
      id
      titulo
      valor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReceitass = /* GraphQL */ `
  query ListReceitass(
    $filter: ModelReceitasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceitass(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        valor
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
