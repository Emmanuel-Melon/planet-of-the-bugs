import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import apolloClient from "$lib/graphql/apolloClient";
import { destructureQueryResults } from "$lib/graphql/helpers";

export const load = async (event) => {
  console.log(event);
  const { parent, data: pageData } = event;

  const user = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: "emmanuelgatwech@gmail.com",
    },
  });

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const userInfo = destructuredUserObject[0];

  return {
    user: { ...userInfo, profileLoading },
  };
};
