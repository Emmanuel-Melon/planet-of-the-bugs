import {
    GITHUB_USER_BASIC_INFO,
    REPOS_CONTRIBUTED_TO,
    GET_PINNED_ITEMS
  } from '$lib/queries/user';
  import {githubClient} from '$lib/apollo';
  import { error } from '@sveltejs/kit';
  
  export const load = async ({ params }) => {

    const { data } = await githubClient.query({
      query: GITHUB_USER_BASIC_INFO
    });
    
    const [contributedTo, pinnedItems] = await Promise.all([

      await githubClient.query({
        query: REPOS_CONTRIBUTED_TO
      }),
      await githubClient.query({
        query: GET_PINNED_ITEMS,
        variables: {
          login: "Emmanuel-Melon"
        }
      })
    ]);


   
    const { data: contributionData } = contributedTo;
    const { data: topRepoData } = pinnedItems;

    console.log(topRepoData.user.pinnedItems)
  
    return {
      user: {
        ...data
      },
      contributedTo: { ...contributionData.viewer.repositoriesContributedTo
      }, 
      pinnedItems: topRepoData.user.pinnedItems
    };
  };
  