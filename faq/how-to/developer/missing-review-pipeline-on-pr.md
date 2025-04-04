# When I Create a Pull Request, the Review Pipeline Does Not Appear. How Can I Trigger the Review Pipeline?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/developer/missing-review-pipeline-on-pr" />
</head>

If the pipeline does not appear, please add a comment that begins with `/recheck` or `/ok-to-test` in the pull request. These commands must be at the beginning of your comment to be recognized by the system. For more details, read the [KubeRocketCI: Tekton Overview](/docs/user-guide/tekton-pipelines#review-pipeline) page.
