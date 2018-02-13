import React from "react";
import { shallow } from "enzyme";

import RepositoryItem from "../src/components/repositories/RepositoryItem";

const repository = {
  id: 28457823,
  name: "freeCodeCamp",
  full_name: "freeCodeCamp/freeCodeCamp",
  owner: {
    login: "freeCodeCamp",
    id: 9892522,
    avatar_url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/freeCodeCamp",
    html_url: "https://github.com/freeCodeCamp",
    followers_url: "https://api.github.com/users/freeCodeCamp/followers",
    following_url:
      "https://api.github.com/users/freeCodeCamp/following{/other_user}",
    gists_url: "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/freeCodeCamp/subscriptions",
    organizations_url: "https://api.github.com/users/freeCodeCamp/orgs",
    repos_url: "https://api.github.com/users/freeCodeCamp/repos",
    events_url: "https://api.github.com/users/freeCodeCamp/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/freeCodeCamp/received_events",
    type: "Organization",
    site_admin: false
  },
  private: false,
  html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
  description:
    "The https://freeCodeCamp.org open source codebase and curriculum. Learn to code and help nonprofits.",
  fork: false,
  url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp",
  forks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
  keys_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
  hooks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
  issue_events_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
  events_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
  assignees_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
  tags_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
  blobs_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages",
  stargazers_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers",
  contributors_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
  subscribers_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers",
  subscription_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription",
  commits_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
  archive_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads",
  issues_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}",
  releases_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments",
  created_at: "2014-12-24T17:49:19Z",
  updated_at: "2018-02-13T02:35:52Z",
  pushed_at: "2018-02-13T00:17:23Z",
  git_url: "git://github.com/freeCodeCamp/freeCodeCamp.git",
  ssh_url: "git@github.com:freeCodeCamp/freeCodeCamp.git",
  clone_url: "https://github.com/freeCodeCamp/freeCodeCamp.git",
  svn_url: "https://github.com/freeCodeCamp/freeCodeCamp",
  homepage: "",
  size: 32545,
  stargazers_count: 291622,
  watchers_count: 291622,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 13448,
  mirror_url: null,
  archived: false,
  open_issues_count: 210,
  license: {
    key: "bsd-3-clause",
    name: 'BSD 3-Clause "New" or "Revised" License',
    spdx_id: "BSD-3-Clause",
    url: "https://api.github.com/licenses/bsd-3-clause"
  },
  forks: 13448,
  open_issues: 210,
  watchers: 291622,
  default_branch: "staging",
  score: 1.0
};

describe("Testing RepositoryItem component", () => {
  it("should render corretly with props", () => {
    const wrapper = shallow(<RepositoryItem key={0} repository={repository} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ repository: repository });
    expect(wrapper).toMatchSnapshot();
  });
});
