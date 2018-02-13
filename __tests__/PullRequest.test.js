import React from "react";
import { shallow } from "enzyme";
import PullRequests from "../src/components/pullRequests/PullRequests";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

const initialState = {
  pullRequests: [
    {
      url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708",
      id: 168847121,
      html_url: "https://github.com/freeCodeCamp/freeCodeCamp/pull/16708",
      diff_url: "https://github.com/freeCodeCamp/freeCodeCamp/pull/16708.diff",
      patch_url:
        "https://github.com/freeCodeCamp/freeCodeCamp/pull/16708.patch",
      issue_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/16708",
      number: 16708,
      state: "open",
      locked: false,
      title: "fix(seed): Typo in test message",
      user: {
        login: "ahmadabdolsaheb",
        id: 4591597,
        avatar_url: "https://avatars3.githubusercontent.com/u/4591597?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ahmadabdolsaheb",
        html_url: "https://github.com/ahmadabdolsaheb",
        followers_url: "https://api.github.com/users/ahmadabdolsaheb/followers",
        following_url:
          "https://api.github.com/users/ahmadabdolsaheb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/ahmadabdolsaheb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ahmadabdolsaheb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ahmadabdolsaheb/subscriptions",
        organizations_url: "https://api.github.com/users/ahmadabdolsaheb/orgs",
        repos_url: "https://api.github.com/users/ahmadabdolsaheb/repos",
        events_url:
          "https://api.github.com/users/ahmadabdolsaheb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ahmadabdolsaheb/received_events",
        type: "User",
        site_admin: false
      },
      body:
        "test description\r\n\r\n<!-- freeCodeCamp Pull Request Template -->\r\n\r\n<!-- IMPORTANT Please review https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md for detailed contributing guidelines -->\r\n<!-- Help with PRs can be found at https://gitter.im/FreeCodeCamp/Contributors -->\r\n<!-- Make sure that your PR is not a duplicate -->\r\n\r\n#### Pre-Submission Checklist\r\n<!-- Go over all points below, and after creating the PR, tick all the checkboxes that apply. -->\r\n<!-- All points should be verified, otherwise, read the CONTRIBUTING guidelines from above-->\r\n<!-- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->\r\n- [x] Your pull request targets the `staging` branch of freeCodeCamp.\r\n- [x] Branch starts with either `fix/`, `feature/`, or `translate/` (e.g. `fix/signin-issue`)\r\n- [x] You have only one commit (if not, [squash](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) them into one commit).\r\n- [x] All new and existing tests pass the command `npm test`. Use `git commit --amend` to amend any fixes.\r\n\r\n#### Type of Change\r\n<!-- What type of change does your code introduce? After creating the PR, tick the checkboxes that apply. -->\r\n- [x] Small bug fix (non-breaking change which fixes an issue)\r\n- [ ] New feature (non-breaking change which adds new functionality)\r\n- [ ] Breaking change (fix or feature that would change existing functionality)\r\n- [ ] Add new translation (feature adding new translations)\r\n\r\n#### Checklist:\r\n<!-- Go over all points below, and after creating the PR, tick the checkboxes that apply. -->\r\n<!-- If you're unsure about any of these, don't hesitate to ask in the Contributors room linked above. We're here to help! -->\r\n- [x] Tested changes locally.\r\n- [ ] Addressed currently open issue (replace XXXXX with an issue no in next line)\r\n\r\nCloses #XXXXX\r\n\r\n#### Description\r\n<!-- Describe your changes in detail -->\r\nthe word 'have' was misspelled as 'khave'. this typo is corrected with this PR\r\n",
      created_at: "2018-02-13T13:41:04Z",
      updated_at: "2018-02-13T14:15:40Z",
      closed_at: null,
      merged_at: null,
      merge_commit_sha: "dad785ff864f246b4eb2adb2d5f91736ff733085",
      assignee: null,
      assignees: [],
      requested_reviewers: [],
      requested_teams: [],
      labels: [
        {
          id: 199856930,
          url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels/status:%20ready%20for%20QA",
          name: "status: ready for QA",
          color: "006b75",
          default: false
        }
      ],
      milestone: null,
      commits_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708/commits",
      review_comments_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708/comments",
      review_comment_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/comments{/number}",
      comments_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/16708/comments",
      statuses_url:
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/e4e64430a00a9ef21ebf0e6d8c107fb1a944fae1",
      head: {
        label: "ahmadabdolsaheb:fix/test-typo",
        ref: "fix/test-typo",
        sha: "e4e64430a00a9ef21ebf0e6d8c107fb1a944fae1",
        user: {
          login: "ahmadabdolsaheb",
          id: 4591597,
          avatar_url: "https://avatars3.githubusercontent.com/u/4591597?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ahmadabdolsaheb",
          html_url: "https://github.com/ahmadabdolsaheb",
          followers_url:
            "https://api.github.com/users/ahmadabdolsaheb/followers",
          following_url:
            "https://api.github.com/users/ahmadabdolsaheb/following{/other_user}",
          gists_url:
            "https://api.github.com/users/ahmadabdolsaheb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ahmadabdolsaheb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ahmadabdolsaheb/subscriptions",
          organizations_url:
            "https://api.github.com/users/ahmadabdolsaheb/orgs",
          repos_url: "https://api.github.com/users/ahmadabdolsaheb/repos",
          events_url:
            "https://api.github.com/users/ahmadabdolsaheb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ahmadabdolsaheb/received_events",
          type: "User",
          site_admin: false
        },
        repo: {
          id: 117095347,
          name: "freeCodeCamp",
          full_name: "ahmadabdolsaheb/freeCodeCamp",
          owner: {
            login: "ahmadabdolsaheb",
            id: 4591597,
            avatar_url: "https://avatars3.githubusercontent.com/u/4591597?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahmadabdolsaheb",
            html_url: "https://github.com/ahmadabdolsaheb",
            followers_url:
              "https://api.github.com/users/ahmadabdolsaheb/followers",
            following_url:
              "https://api.github.com/users/ahmadabdolsaheb/following{/other_user}",
            gists_url:
              "https://api.github.com/users/ahmadabdolsaheb/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahmadabdolsaheb/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahmadabdolsaheb/subscriptions",
            organizations_url:
              "https://api.github.com/users/ahmadabdolsaheb/orgs",
            repos_url: "https://api.github.com/users/ahmadabdolsaheb/repos",
            events_url:
              "https://api.github.com/users/ahmadabdolsaheb/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahmadabdolsaheb/received_events",
            type: "User",
            site_admin: false
          },
          private: false,
          html_url: "https://github.com/ahmadabdolsaheb/freeCodeCamp",
          description:
            "The https://freeCodeCamp.org open source codebase and curriculum. Learn to code and help nonprofits.",
          fork: true,
          url: "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp",
          forks_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/forks",
          keys_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/teams",
          hooks_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/events",
          assignees_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/tags",
          blobs_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/languages",
          stargazers_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/subscription",
          commits_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/merges",
          archive_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/downloads",
          issues_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahmadabdolsaheb/freeCodeCamp/deployments",
          created_at: "2018-01-11T12:08:09Z",
          updated_at: "2018-01-11T12:08:13Z",
          pushed_at: "2018-02-13T13:36:00Z",
          git_url: "git://github.com/ahmadabdolsaheb/freeCodeCamp.git",
          ssh_url: "git@github.com:ahmadabdolsaheb/freeCodeCamp.git",
          clone_url: "https://github.com/ahmadabdolsaheb/freeCodeCamp.git",
          svn_url: "https://github.com/ahmadabdolsaheb/freeCodeCamp",
          homepage: "",
          size: 32509,
          stargazers_count: 0,
          watchers_count: 0,
          language: "JavaScript",
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "staging"
        }
      },
      base: {
        label: "freeCodeCamp:staging",
        ref: "staging",
        sha: "71974d697236cf8f79c5e19fde58f3337fd6f1ed",
        user: {
          login: "freeCodeCamp",
          id: 9892522,
          avatar_url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/freeCodeCamp",
          html_url: "https://github.com/freeCodeCamp",
          followers_url: "https://api.github.com/users/freeCodeCamp/followers",
          following_url:
            "https://api.github.com/users/freeCodeCamp/following{/other_user}",
          gists_url:
            "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/freeCodeCamp/subscriptions",
          organizations_url: "https://api.github.com/users/freeCodeCamp/orgs",
          repos_url: "https://api.github.com/users/freeCodeCamp/repos",
          events_url:
            "https://api.github.com/users/freeCodeCamp/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/freeCodeCamp/received_events",
          type: "Organization",
          site_admin: false
        },
        repo: {
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
            followers_url:
              "https://api.github.com/users/freeCodeCamp/followers",
            following_url:
              "https://api.github.com/users/freeCodeCamp/following{/other_user}",
            gists_url:
              "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/freeCodeCamp/subscriptions",
            organizations_url: "https://api.github.com/users/freeCodeCamp/orgs",
            repos_url: "https://api.github.com/users/freeCodeCamp/repos",
            events_url:
              "https://api.github.com/users/freeCodeCamp/events{/privacy}",
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
          forks_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
          keys_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
          hooks_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
          issue_events_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
          assignees_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
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
          merges_url:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
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
          updated_at: "2018-02-13T13:42:08Z",
          pushed_at: "2018-02-13T14:09:45Z",
          git_url: "git://github.com/freeCodeCamp/freeCodeCamp.git",
          ssh_url: "git@github.com:freeCodeCamp/freeCodeCamp.git",
          clone_url: "https://github.com/freeCodeCamp/freeCodeCamp.git",
          svn_url: "https://github.com/freeCodeCamp/freeCodeCamp",
          homepage: "",
          size: 32549,
          stargazers_count: 291627,
          watchers_count: 291627,
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
          watchers: 291627,
          default_branch: "staging"
        }
      },
      _links: {
        self: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708"
        },
        html: {
          href: "https://github.com/freeCodeCamp/freeCodeCamp/pull/16708"
        },
        issue: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/16708"
        },
        comments: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/16708/comments"
        },
        review_comments: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708/comments"
        },
        review_comment: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/comments{/number}"
        },
        commits: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls/16708/commits"
        },
        statuses: {
          href:
            "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/e4e64430a00a9ef21ebf0e6d8c107fb1a944fae1"
        }
      },
      author_association: "CONTRIBUTOR"
    }
  ]
};

const store = mockStore(initialState);

describe("Testing PullRequests component", () => {
  it("Should render correctly with redux", () => {
    const wrapper = shallow(<PullRequests store={store} />);

    expect(wrapper).toMatchSnapshot();
  });
});
