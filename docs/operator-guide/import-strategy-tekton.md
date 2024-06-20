# Integrate GitHub/GitLab in Tekton

This page describes how to integrate EDP with GitLab or GitHub Version Control System.

![type:video](https://www.youtube.com/embed/pzheGwBLZvU)

## Integration Procedure

To start from, it is required to add both Secret with SSH key, API token, and [GitServer](../user-guide/add-git-server.md) resources
by taking the steps below.

1. Generate an SSH key pair and add a public key to [GitLab](https://docs.gitlab.com/ee/ssh/)
   or [GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
   account.

  ```bash
  ssh-keygen -t ed25519 -C "email@example.com"
  ```

2. Generate access token for [GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
   or [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   account with read/write access to the API. Both personal and project access tokens are applicable.

  === "GitHub"

      To create access token in GitHub, follow the steps below:

      * Log in to GitHub.
      * Click the profile account and navigate to **Settings** -> **Developer Settings**.
      * Select *Personal access tokens (classic)* and generate a new token with the following parameters:

      ![Repo permission](../assets/operator-guide/github-scopes-1.png "Repo permission")

      !!! note
          The access below is required for the GitHub Pull Request Builder plugin to get Pull Request commits, their status, and author info.

      ![Admin:repo permission](../assets/operator-guide/github-scopes-2.png "Admin:repo permission")
      ![Admin:org permission](../assets/operator-guide/github-scopes-4.png "Admin:org permission")
      ![User permission](../assets/operator-guide/github-scopes-3.png "User permission")

      !!! warning
          Make sure to save a new personal access token because it won`t be displayed later.

  === "GitLab"

      To create access token in GitLab, follow the steps below:

      * Log in to GitLab.
      * In the top-right corner, click the avatar and select **Settings**.
      * On the **User Settings** menu, select **Access Tokens**.
      * Choose a name and an optional expiry date for the token.
      * In the **Scopes** block, select the **api** scope for the token.

      ![Personal access tokens](../assets/operator-guide/scopes.png "Personal access tokens")

      * Click the **Create personal access token** button.

      !!! note
          Make sure to save the access token as there will not be any ability to access it once again.

      In case you want to create a project access token instead of a personal one, take the following steps:

      * Log in to GitLab and navigate to the project.
      * On the **User Settings** menu, select *Access Tokens*.
      * Choose a name and an optional expiry date for the token.
      * Choose a role: *Owner* or *Maintainer*.
      * In the **Scopes** block, select the *api* scope for the token.

      ![Project access tokens](../assets/operator-guide/scopes-project.png "Project access tokens")

      * Click the **Create project access token** button.

3. Create a secret in the `edp` namespace for the Git account with the **id_rsa**, **username**, and **token** fields. Take the following template as an example (use ci-gitlab instead of ci-github for GitLab):

  === "EDP Portal"

      Navigate to `EDP Portal` -> `EDP` -> `Configuration` -> `Git Servers`. Fill in the required fields:

      ![VCS Integration in EDP portal](../assets/operator-guide/github_integration.png "Project access tokens")

  === "kubectl"

      Create a manifest file called secret.yaml with the following content filled in:

      ```bash
      kubectl apply -f - <<EOF
            apiVersion: v1
            kind: Secret
            metadata:
              name: ci-github
              namespace: edp
              labels:
                app.edp.epam.com/secret-type: repository
            type: Opaque
            stringData:
              id_rsa: <id_rsa_data>
              username: git
              token: <your_github_access_token>
      EOF
      ```

As a result, you will be able to create codebases using an integrated Version Control System.

## Related Articles

* [Add Git Server](../user-guide/add-git-server.md)
* [Add Application](../user-guide/add-application.md)
