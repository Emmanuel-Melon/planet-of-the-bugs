import {
    USER_BASIC_INFO 
  } from '$lib/queries/user';
  import {githubClient} from '$lib/apollo';
  import { error } from '@sveltejs/kit';
  
  export const load = async ({ params }) => {
    
  
    const { data } = await githubClient.query({
      query: USER_BASIC_INFO
    });
  
    return {
      user: {
        ...data
      }
    };
  };
  