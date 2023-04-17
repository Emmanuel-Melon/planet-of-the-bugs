import {
    FETCH_ISSUES_BY_DIFFICULTY 
  } from '$lib/queries/issues';
  import { FETCH_REPOSITORIES_BY_TOPIC } from "$lib/queries/repositories.js"
  import {githubClient} from '$lib/apollo';
  import { error } from '@sveltejs/kit';
  
  export const load = async ({ params }) => {
    
  
    const { data } = await githubClient.query({
      query: FETCH_REPOSITORIES_BY_TOPIC
    });
  
    return {
      pullRequests: data?.search
    };
  };
  