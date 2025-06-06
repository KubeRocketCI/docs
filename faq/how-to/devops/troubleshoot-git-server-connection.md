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
