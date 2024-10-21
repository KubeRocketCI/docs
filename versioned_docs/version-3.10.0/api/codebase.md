# Codebase Operator API

Packages:

- [v2.edp.epam.com/v1](#v2edpepamcomv1)
- [v2.edp.epam.com/v1alpha1](#v2edpepamcomv1alpha1)

# v2.edp.epam.com/v1

Resource Types:

- [CDStageDeploy](#cdstagedeploy)

- [CodebaseBranch](#codebasebranch)

- [CodebaseImageStream](#codebaseimagestream)

- [Codebase](#codebase)

- [GitServer](#gitserver)

- [JiraIssueMetadata](#jiraissuemetadata)

- [JiraServer](#jiraserver)

- [QuickLink](#quicklink)

## CDStageDeploy

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

CDStageDeploy is the Schema for the CDStageDeployments API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>CDStageDeploy</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#cdstagedeployspec">spec</a></b></td>
        <td>object</td>
        <td>
          CDStageDeploySpec defines the desired state of CDStageDeploy.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#cdstagedeploystatus">status</a></b></td>
        <td>object</td>
        <td>
          CDStageDeployStatus defines the observed state of CDStageDeploy.<br/>
          <br/>
            <i>Default</i>: map[status:pending]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CDStageDeploy.spec

<sup><sup>[↩ Parent](#cdstagedeploy)</sup></sup>

CDStageDeploySpec defines the desired state of CDStageDeploy.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>pipeline</b></td>
        <td>string</td>
        <td>
          Name of related pipeline<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>stage</b></td>
        <td>string</td>
        <td>
          Name of related stage<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#cdstagedeployspectag">tag</a></b></td>
        <td>object</td>
        <td>
          Specifies a latest available tag<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#cdstagedeployspectagsindex">tags</a></b></td>
        <td>[]object</td>
        <td>
          A list of available tags<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### CDStageDeploy.spec.tag

<sup><sup>[↩ Parent](#cdstagedeployspec)</sup></sup>

Specifies a latest available tag

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>codebase</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>tag</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### CDStageDeploy.spec.tags[index]

<sup><sup>[↩ Parent](#cdstagedeployspec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>codebase</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>tag</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### CDStageDeploy.status

<sup><sup>[↩ Parent](#cdstagedeploy)</sup></sup>

CDStageDeployStatus defines the observed state of CDStageDeploy.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>message</b></td>
        <td>string</td>
        <td>
          Descriptive message for current status.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>enum</td>
        <td>
          Specifies a current status of CDStageDeploy.<br/>
          <br/>
            <i>Enum</i>: failed, running, pending, completed, in-queue<br/>
            <i>Default</i>: pending<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## CodebaseBranch

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

CodebaseBranch is the Schema for the CodebaseBranches API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>CodebaseBranch</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#codebasebranchspec">spec</a></b></td>
        <td>object</td>
        <td>
          CodebaseBranchSpec defines the desired state of CodebaseBranch.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#codebasebranchstatus">status</a></b></td>
        <td>object</td>
        <td>
          CodebaseBranchStatus defines the observed state of CodebaseBranch.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CodebaseBranch.spec

<sup><sup>[↩ Parent](#codebasebranch)</sup></sup>

CodebaseBranchSpec defines the desired state of CodebaseBranch.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>branchName</b></td>
        <td>string</td>
        <td>
          Name of a branch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>codebaseName</b></td>
        <td>string</td>
        <td>
          Name of Codebase associated with.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>fromCommit</b></td>
        <td>string</td>
        <td>
          The new branch will be created starting from the selected commit hash.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>release</b></td>
        <td>boolean</td>
        <td>
          Flag if branch is used as "release" branch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>pipelines</b></td>
        <td>map[string]string</td>
        <td>
          Pipelines is a map of pipelines related to the branch.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>version</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CodebaseBranch.status

<sup><sup>[↩ Parent](#codebasebranch)</sup></sup>

CodebaseBranchStatus defines the observed state of CodebaseBranch.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>action</b></td>
        <td>string</td>
        <td>
          The last Action was performed.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>failureCount</b></td>
        <td>integer</td>
        <td>
          Amount of times, operator fail to serve with existing CR.<br/>
          <br/>
            <i>Format</i>: int64<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>lastTimeUpdated</b></td>
        <td>string</td>
        <td>
          Information when the last time the action were performed.<br/>
          <br/>
            <i>Format</i>: date-time<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>result</b></td>
        <td>enum</td>
        <td>
          A result of an action which were performed.
          - "success": action where performed successfully;
          - "error": error has occurred;<br/>
          <br/>
            <i>Enum</i>: success, error<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>string</td>
        <td>
          Specifies a current status of CodebaseBranch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Name of user who made a last change.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Specifies a current state of CodebaseBranch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>build</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>detailedMessage</b></td>
        <td>string</td>
        <td>
          Detailed information regarding action result
which were performed<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>git</b></td>
        <td>string</td>
        <td>
          Specifies a status of action for git.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>lastSuccessfulBuild</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>versionHistory</b></td>
        <td>[]string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## CodebaseImageStream

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

CodebaseImageStream is the Schema for the CodebaseImageStreams API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>CodebaseImageStream</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#codebaseimagestreamspec">spec</a></b></td>
        <td>object</td>
        <td>
          CodebaseImageStreamSpec defines the desired state of CodebaseImageStream.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#codebaseimagestreamstatus">status</a></b></td>
        <td>object</td>
        <td>
          CodebaseImageStreamStatus defines the observed state of CodebaseImageStream.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CodebaseImageStream.spec

<sup><sup>[↩ Parent](#codebaseimagestream)</sup></sup>

CodebaseImageStreamSpec defines the desired state of CodebaseImageStream.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>codebase</b></td>
        <td>string</td>
        <td>
          Name of Codebase associated with.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>imageName</b></td>
        <td>string</td>
        <td>
          Docker container name without tag, e.g. registry-name/path/name.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#codebaseimagestreamspectagsindex">tags</a></b></td>
        <td>[]object</td>
        <td>
          A list of docker image tags available for ImageName and their creation date.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CodebaseImageStream.spec.tags[index]

<sup><sup>[↩ Parent](#codebaseimagestreamspec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>created</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### CodebaseImageStream.status

<sup><sup>[↩ Parent](#codebaseimagestream)</sup></sup>

CodebaseImageStreamStatus defines the observed state of CodebaseImageStream.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>failureCount</b></td>
        <td>integer</td>
        <td>
          Amount of times, operator fail to serve with existing CR.<br/>
          <br/>
            <i>Format</i>: int64<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>detailed_message</b></td>
        <td>string</td>
        <td>
          Detailed information regarding action result
which were performed<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## Codebase

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

Codebase is the Schema for the Codebases API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>Codebase</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#codebasespec">spec</a></b></td>
        <td>object</td>
        <td>
          CodebaseSpec defines the desired state of Codebase.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#codebasestatus">status</a></b></td>
        <td>object</td>
        <td>
          CodebaseStatus defines the observed state of Codebase.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Codebase.spec

<sup><sup>[↩ Parent](#codebase)</sup></sup>

CodebaseSpec defines the desired state of Codebase.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>buildTool</b></td>
        <td>string</td>
        <td>
          A build tool which is used on codebase.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>defaultBranch</b></td>
        <td>string</td>
        <td>
          Name of default branch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>emptyProject</b></td>
        <td>boolean</td>
        <td>
          A flag indicating how project should be provisioned. Default: false<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>framework</b></td>
        <td>string</td>
        <td>
          A framework used in codebase.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>gitServer</b></td>
        <td>string</td>
        <td>
          A name of git server which will be used as VCS.
Example: "gerrit".<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>gitUrlPath</b></td>
        <td>string</td>
        <td>
          A relative path for git repository. Should start from /. Example: /company/api-app.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>lang</b></td>
        <td>string</td>
        <td>
          Programming language used in codebase.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>strategy</b></td>
        <td>enum</td>
        <td>
          integration strategy for a codebase, e.g. clone, import, etc.<br/>
          <br/>
            <i>Enum</i>: create, clone, import<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>string</td>
        <td>
          Type of codebase. E.g. application, autotest or library.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#codebasespecversioning">versioning</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>branchToCopyInDefaultBranch</b></td>
        <td>string</td>
        <td>
          While we clone new codebase we can select specific branch to clone.
Selected branch will become a default branch for a new codebase (e.g. master, main).<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ciTool</b></td>
        <td>string</td>
        <td>
          A name of tool which should be used as CI.<br/>
          <br/>
            <i>Default</i>: tekton<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>commitMessagePattern</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>deploymentScript</b></td>
        <td>string</td>
        <td>
          <br/>
          <br/>
            <i>Default</i>: helm-chart<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          A short description of codebase.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>disablePutDeployTemplates</b></td>
        <td>boolean</td>
        <td>
          Controller must skip step "put deploy templates" in action chain.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>jiraIssueMetadataPayload</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>jiraServer</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#codebasespecrepository">repository</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>testReportFramework</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ticketNamePattern</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Codebase.spec.versioning

<sup><sup>[↩ Parent](#codebasespec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>type</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>startFrom</b></td>
        <td>string</td>
        <td>
          StartFrom is required when versioning type is not default.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Codebase.spec.repository

<sup><sup>[↩ Parent](#codebasespec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>url</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### Codebase.status

<sup><sup>[↩ Parent](#codebase)</sup></sup>

CodebaseStatus defines the observed state of Codebase.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>action</b></td>
        <td>string</td>
        <td>
          The last Action was performed.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>available</b></td>
        <td>boolean</td>
        <td>
          This flag indicates neither Codebase are initialized and ready to work. Defaults to false.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>failureCount</b></td>
        <td>integer</td>
        <td>
          Amount of times, operator fail to serve with existing CR.<br/>
          <br/>
            <i>Format</i>: int64<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>git</b></td>
        <td>string</td>
        <td>
          Specifies a status of action for git.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>lastTimeUpdated</b></td>
        <td>string</td>
        <td>
          Information when the last time the action were performed.<br/>
          <br/>
            <i>Format</i>: date-time<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>result</b></td>
        <td>enum</td>
        <td>
          A result of an action which were performed.
          - "success": action where performed successfully;
          - "error": error has occurred;<br/>
          <br/>
            <i>Enum</i>: success, error<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>string</td>
        <td>
          Specifies a current status of Codebase.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Name of user who made a last change.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Specifies a current state of Codebase.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>detailedMessage</b></td>
        <td>string</td>
        <td>
          Detailed information regarding action result
which were performed<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>gitWebUrl</b></td>
        <td>string</td>
        <td>
          Stores GitWebUrl of codebase.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>webHookID</b></td>
        <td>integer</td>
        <td>
          Stores ID of webhook which was created for a codebase.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## GitServer

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

GitServer is the Schema for the gitservers API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>GitServer</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#gitserverspec">spec</a></b></td>
        <td>object</td>
        <td>
          GitServerSpec defines the desired state of GitServer.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#gitserverstatus">status</a></b></td>
        <td>object</td>
        <td>
          GitServerStatus defines the observed state of GitServer.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### GitServer.spec

<sup><sup>[↩ Parent](#gitserver)</sup></sup>

GitServerSpec defines the desired state of GitServer.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>gitHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>httpsPort</b></td>
        <td>integer</td>
        <td>
          <br/>
          <br/>
            <i>Format</i>: int32<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>nameSshKeySecret</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>sshPort</b></td>
        <td>integer</td>
        <td>
          <br/>
          <br/>
            <i>Format</i>: int32<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>gitProvider</b></td>
        <td>enum</td>
        <td>
          GitProvider is a git provider type. It can be gerrit, github or gitlab. Default value is gerrit.<br/>
          <br/>
            <i>Enum</i>: gerrit, gitlab, github<br/>
            <i>Default</i>: gerrit<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>gitUser</b></td>
        <td>string</td>
        <td>
          GitUser is a user name for git server.<br/>
          <br/>
            <i>Default</i>: git<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>skipWebhookSSLVerification</b></td>
        <td>boolean</td>
        <td>
          SkipWebhookSSLVerification is a flag to skip webhook tls verification.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>webhookUrl</b></td>
        <td>string</td>
        <td>
          WebhookUrl is a URL for webhook that will be created in the git provider.
If not set, a new EventListener and Ingress will be created and used for webhooks.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### GitServer.status

<sup><sup>[↩ Parent](#gitserver)</sup></sup>

GitServerStatus defines the observed state of GitServer.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>connected</b></td>
        <td>boolean</td>
        <td>
          Connected shows if operator is connected to git server.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error represents error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>string</td>
        <td>
          Status indicates the current status of the GitServer.
Possible values are: ok, failed.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## JiraIssueMetadata

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

JiraIssueMetadata is the Schema for the JiraIssueMetadatas API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>JiraIssueMetadata</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#jiraissuemetadataspec">spec</a></b></td>
        <td>object</td>
        <td>
          JiraIssueMetadataSpec defines the desired state of JiraIssueMetadata.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#jiraissuemetadatastatus">status</a></b></td>
        <td>object</td>
        <td>
          JiraIssueMetadataStatus defines the observed state of JiraIssueMetadata.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### JiraIssueMetadata.spec

<sup><sup>[↩ Parent](#jiraissuemetadata)</sup></sup>

JiraIssueMetadataSpec defines the desired state of JiraIssueMetadata.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>codebaseName</b></td>
        <td>string</td>
        <td>
          Name of Codebase associated with.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>commits</b></td>
        <td>[]string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>payload</b></td>
        <td>string</td>
        <td>
          JSON payload<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>tickets</b></td>
        <td>[]string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### JiraIssueMetadata.status

<sup><sup>[↩ Parent](#jiraissuemetadata)</sup></sup>

JiraIssueMetadataStatus defines the observed state of JiraIssueMetadata.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>failureCount</b></td>
        <td>integer</td>
        <td>
          Amount of times, operator fail to serve with existing CR.<br/>
          <br/>
            <i>Format</i>: int64<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>last_time_updated</b></td>
        <td>string</td>
        <td>
          Information when the last time the action were performed.<br/>
          <br/>
            <i>Format</i>: date-time<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>string</td>
        <td>
          Specifies a current status of JiraIssueMetadata.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>detailed_message</b></td>
        <td>string</td>
        <td>
          Detailed information regarding action result
which were performed<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## JiraServer

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

JiraServer is the Schema for the JiraServers API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>JiraServer</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#jiraserverspec">spec</a></b></td>
        <td>object</td>
        <td>
          JiraServerSpec defines the desired state of JiraServer.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#jiraserverstatus">status</a></b></td>
        <td>object</td>
        <td>
          JiraServerStatus defines the observed state of JiraServer.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### JiraServer.spec

<sup><sup>[↩ Parent](#jiraserver)</sup></sup>

JiraServerSpec defines the desired state of JiraServer.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>apiUrl</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>credentialName</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>rootUrl</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### JiraServer.status

<sup><sup>[↩ Parent](#jiraserver)</sup></sup>

JiraServerStatus defines the observed state of JiraServer.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>available</b></td>
        <td>boolean</td>
        <td>
          This flag indicates neither JiraServer are initialized and ready to work. Defaults to false.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>last_time_updated</b></td>
        <td>string</td>
        <td>
          Information when the last time the action were performed.<br/>
          <br/>
            <i>Format</i>: date-time<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>string</td>
        <td>
          Specifies a current status of JiraServer.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>detailed_message</b></td>
        <td>string</td>
        <td>
          Detailed information regarding action result
which were performed<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## QuickLink

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

QuickLink is the Schema for the quicklinks API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>QuickLink</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#quicklinkspec">spec</a></b></td>
        <td>object</td>
        <td>
          QuickLinkSpec defines the desired state of QuickLink.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>object</td>
        <td>
          QuickLinkStatus defines the observed state of QuickLink.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### QuickLink.spec

<sup><sup>[↩ Parent](#quicklink)</sup></sup>

QuickLinkSpec defines the desired state of QuickLink.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>icon</b></td>
        <td>string</td>
        <td>
          Icon is a base64 encoded SVG icon of the component.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type is a quicklink type. It can be default or system. Default value is default.<br/>
          <br/>
            <i>Enum</i>: default, system<br/>
            <i>Default</i>: default<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>url</b></td>
        <td>string</td>
        <td>
          Url specifies a link to the component.<br/>
          <br/>
            <i>Default</i>: <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>visible</b></td>
        <td>boolean</td>
        <td>
          Visible specifies whether a component is visible. The default value is true.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

# v2.edp.epam.com/v1alpha1

Resource Types:

- [Template](#template)

## Template

<sup><sup>[↩ Parent](#v2edpepamcomv1alpha1 )</sup></sup>

Template is the Schema for the templates API.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
      <td><b>apiVersion</b></td>
      <td>string</td>
      <td>v2.edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>Template</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#templatespec">spec</a></b></td>
        <td>object</td>
        <td>
          TemplateSpec defines the desired state of Template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>object</td>
        <td>
          TemplateStatus defines the observed state of Template.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Template.spec

<sup><sup>[↩ Parent](#template)</sup></sup>

TemplateSpec defines the desired state of Template.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>buildTool</b></td>
        <td>string</td>
        <td>
          The build tool used to build the component from the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          The description of the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>displayName</b></td>
        <td>string</td>
        <td>
          The name of the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>framework</b></td>
        <td>string</td>
        <td>
          The framework used to build the component from the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>language</b></td>
        <td>string</td>
        <td>
          The programming language used to build the component from the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>source</b></td>
        <td>string</td>
        <td>
          A repository containing the source code for the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>string</td>
        <td>
          The type of the template, e.g application, library, autotest, infrastructure, etc.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>version</b></td>
        <td>string</td>
        <td>
          Version is the version of the template.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>category</b></td>
        <td>string</td>
        <td>
          Category is the category of the template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#templatespeciconindex">icon</a></b></td>
        <td>[]object</td>
        <td>
          The icon for this template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>keywords</b></td>
        <td>[]string</td>
        <td>
          A list of keywords describing the template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#templatespecmaintainersindex">maintainers</a></b></td>
        <td>[]object</td>
        <td>
          A list of organizational entities maintaining the Template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>maturity</b></td>
        <td>enum</td>
        <td>
          The level of maturity the template has achieved at this version. Options include planning, pre-alpha, alpha, beta, stable, mature, inactive, and deprecated.<br/>
          <br/>
            <i>Enum</i>: planning, pre-alpha, alpha, beta, stable, mature, inactive, deprecated<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>minEDPVersion</b></td>
        <td>string</td>
        <td>
          MinEDPVersion is the minimum EDP version that this template is compatible with.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Template.spec.icon[index]

<sup><sup>[↩ Parent](#templatespec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>base64data</b></td>
        <td>string</td>
        <td>
          A base64 encoded PNG, JPEG or SVG image.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>mediatype</b></td>
        <td>string</td>
        <td>
          The media type of the image. E.g image/svg+xml, image/png, image/jpeg.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>

### Template.spec.maintainers[index]

<sup><sup>[↩ Parent](#templatespec)</sup></sup>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>email</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>
