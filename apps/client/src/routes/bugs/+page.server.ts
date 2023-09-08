import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

const issues = [
  {
    id: 1,
    title: "Analyze and recommend GitHub issues via MindsDB",
    description: "",
    createdAt: "2 July, 2023",
    repo: "planet-of-the-bugs",
    labels: ["backend"],
  },
  {
    id: 2,
    title: "Microsoft Teams working in the same way as Slack",
    description: "",
    createdAt: "4 July, 2023",
    repo: "mindsdB",
    labels: ["integration"],
  },
  {
    id: 3,
    title: "Add Confirmation Dialog for Logout Feature",
    description: "",
    createdAt: "5 July, 2023",
    repo: "todo-react-redux",
    labels: ["bug"],
  },
];

const fetchIssueRecommendations = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => resolve(issues), 1000);
  });
};

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/login");
  const recommendedIssues = await fetchIssueRecommendations();

  return {
    issues: recommendedIssues,
  };
};
