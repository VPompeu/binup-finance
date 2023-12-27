/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReceitas = /* GraphQL */ `
  mutation CreateReceitas(
    $input: CreateReceitasInput!
    $condition: ModelReceitasConditionInput
  ) {
    createReceitas(input: $input, condition: $condition) {
      id
      titulo
      valor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReceitas = /* GraphQL */ `
  mutation UpdateReceitas(
    $input: UpdateReceitasInput!
    $condition: ModelReceitasConditionInput
  ) {
    updateReceitas(input: $input, condition: $condition) {
      id
      titulo
      valor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReceitas = /* GraphQL */ `
  mutation DeleteReceitas(
    $input: DeleteReceitasInput!
    $condition: ModelReceitasConditionInput
  ) {
    deleteReceitas(input: $input, condition: $condition) {
      id
      titulo
      valor
      createdAt
      updatedAt
      __typename
    }
  }
`;
