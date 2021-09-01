/* eslint-disable */
// this is an auto generated file. This will be overwritten

// export const createTodo = {/* GraphQL */ 
//    mutation CreateTodo(name,id)
//   {
//     createTodo(input: $input, condition: $condition) {
//       id
//       name
//       description
//       createdAt
//       updatedAt
//     }
//   }
// }
// ;
// export const updateTodo = /* GraphQL */ `
  `mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
// "graphqltransformer": {
//   "addmissingownerfields": true,
//   "improvepluralization": true,
//   "validatetypenamereservedwords": true,
//   "useexperimentalpipelinedtransformer": false,
//   "enableiterativegsiupdates": true,
//   "secondarykeyasgsi": true,
//   "skipoverridemutationinputtypes": true
// },