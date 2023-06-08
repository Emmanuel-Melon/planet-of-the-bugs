import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  let session =  await event.locals.getSession()

  if(session){
    const user = {...session?.user, githubUsername: session?.token?.githubUsername}
    session = {...session, user}
  }
  console.log(session)
  return {
    session,
  };
};