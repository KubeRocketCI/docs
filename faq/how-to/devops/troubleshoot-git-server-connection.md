# How to Troubleshoot Git Server Connection?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/developer/troubleshoot-git-server-connection" />
</head>

The reason why you can't connect to the Git server could be the following:

* Incorrect host;
* Incorrect private SSH key;

To ensure that you specified the correct host, verify that your host is one of these:

* **GitHub** - github.com;
* **Bitbucket** - bitbucket.org;
* **Gerrit** - your Gerrit endpoint;
* **Gitlab** - your GitLab endpoint.

The private key generated using the command must be added to the platform in the format:

```bash
-----BEGIN OPENSSH PRIVATE KEY-----
--------key-data--------
-----END OPENSSH PRIVATE KEY-----
```

The passphrase does not need to be specified.

## Bitbucket: 401 Unauthorized or "Invalid Authorization header"

Bitbucket Cloud [deprecated app passwords](https://developer.atlassian.com/cloud/bitbucket/changelog/#CHANGE-3222) in favour of API tokens. If your Bitbucket pipelines stop reporting status, or the interceptor logs `failed to get PR latest commit message: Invalid Authorization header`, check the Git Server `token`:

* It must be the base64 of `<atlassian-account-email>:<api-token>` — an **API token**, not a legacy app password.
* The username part must be your **Atlassian account email**, not your Bitbucket nickname. A wrong identifier returns `401 Unauthorized`.
* Encode it with `echo -n` so there is **no trailing newline** — a newline corrupts the HTTP header and causes `Invalid Authorization header`:

```bash
echo -n "jane.doe@example.com:ATATT3xFf...your-api-token" | base64
```

See [Manage Git Servers](https://docs.kuberocketci.io/docs/user-guide/add-git-server) for the full setup and the required API token scopes.
