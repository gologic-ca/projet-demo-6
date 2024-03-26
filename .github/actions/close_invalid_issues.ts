const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.,
});

const owner = "gologic-ca";
const repo = "project-demo-6";

async function closeIssue(issueNumber) {
  await octokit.issues.update({
    owner,
    repo,
    issue_number: issueNumber,
    state: "closed",
  });
}

const issueNumber = process.argv[2];
closeIssue(issueNumber).catch(console.error);
