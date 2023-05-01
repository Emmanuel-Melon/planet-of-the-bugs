import {
    GITHUB_USER_BASIC_INFO,
    REPOS_CONTRIBUTED_TO,
    TOP_REPOS
  } from '$lib/queries/user';
  import {githubClient} from '$lib/apollo';
  import { error } from '@sveltejs/kit';
  
  export const load = async ({ params }) => {

    const { data } = await githubClient.query({
      query: GITHUB_USER_BASIC_INFO
    });
    
    const [contributedTo, topRepos] = await Promise.all([

      await githubClient.query({
        query: REPOS_CONTRIBUTED_TO
      }),
      await githubClient.query({
        query: TOP_REPOS
      })
    ]);


   
    const { data: contributionData } = contributedTo;
    const { data: topRepoData } = topRepos;
  
    return {
      user: {
        ...data
      },
      contributedTo: { ...contributionData.viewer.repositoriesContributedTo
      }, 
      topRepos: { ...topRepoData.viewer.topRepositories }
    };
  };
  