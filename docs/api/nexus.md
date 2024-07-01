# Nexus Repository Manager Operator API

Packages:

- [edp.epam.com/v1alpha1](#edpepamcomv1alpha1)

# edp.epam.com/v1alpha1

Resource Types:

- [NexusBlobStore](#nexusblobstore)

- [NexusCleanupPolicy](#nexuscleanuppolicy)

- [Nexus](#nexus)

- [NexusRepository](#nexusrepository)

- [NexusRole](#nexusrole)

- [NexusScript](#nexusscript)

- [NexusUser](#nexususer)




## NexusBlobStore
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusBlobStore is the Schema for the nexusblobstores API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusBlobStore</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusblobstorespec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusBlobStoreSpec defines the desired state of NexusBlobStore.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusblobstorestatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusBlobStoreStatus defines the observed state of NexusBlobStore.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusBlobStore.spec
<sup><sup>[↩ Parent](#nexusblobstore)</sup></sup>



NexusBlobStoreSpec defines the desired state of NexusBlobStore.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name of the BlobStore.
Name should be unique across all BlobStores.<br/>
          <br/>
            <i>Validations</i>:<li>self == oldSelf: Value is immutable</li>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusblobstorespecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusblobstorespecfile">file</a></b></td>
        <td>object</td>
        <td>
          File type blobstore.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusblobstorespecsoftquota">softQuota</a></b></td>
        <td>object</td>
        <td>
          Settings to control the soft quota.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusBlobStore.spec.nexusRef
<sup><sup>[↩ Parent](#nexusblobstorespec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusBlobStore.spec.file
<sup><sup>[↩ Parent](#nexusblobstorespec)</sup></sup>



File type blobstore.

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
        <td><b>path</b></td>
        <td>string</td>
        <td>
          The path to the blobstore contents.
This can be an absolute path to anywhere on the system Nexus Repository Manager has access to it or can be a path relative to the sonatype-work directory.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusBlobStore.spec.softQuota
<sup><sup>[↩ Parent](#nexusblobstorespec)</sup></sup>



Settings to control the soft quota.

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
        <td><b>limit</b></td>
        <td>integer</td>
        <td>
          The limit in MB.<br/>
          <br/>
            <i>Format</i>: int64<br/>
            <i>Minimum</i>: 1<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of the soft quota.<br/>
          <br/>
            <i>Enum</i>: spaceRemainingQuota, spaceUsedQuota<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusBlobStore.status
<sup><sup>[↩ Parent](#nexusblobstore)</sup></sup>



NexusBlobStoreStatus defines the observed state of NexusBlobStore.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the blob store.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## NexusCleanupPolicy
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusCleanupPolicy is the Schema for the cleanuppolicies API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusCleanupPolicy</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexuscleanuppolicyspec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusCleanupPolicySpec defines the desired state of NexusCleanupPolicy.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexuscleanuppolicystatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusCleanupPolicyStatus defines the observed state of NexusCleanupPolicy.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusCleanupPolicy.spec
<sup><sup>[↩ Parent](#nexuscleanuppolicy)</sup></sup>



NexusCleanupPolicySpec defines the desired state of NexusCleanupPolicy.

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
        <td><b><a href="#nexuscleanuppolicyspeccriteria">criteria</a></b></td>
        <td>object</td>
        <td>
          Criteria for the cleanup policy.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>format</b></td>
        <td>enum</td>
        <td>
          Format that this cleanup policy can be applied to.<br/>
          <br/>
            <i>Enum</i>: apt, bower, cocoapods, conan, conda, docker, gitlfs, go, helm, maven2, npm, nuget, p2, pypi, r, raw, rubygems, yum<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name is a unique name for the cleanup policy.<br/>
          <br/>
            <i>Validations</i>:<li>self == oldSelf: Value is immutable</li>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexuscleanuppolicyspecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          Description of the cleanup policy.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusCleanupPolicy.spec.criteria
<sup><sup>[↩ Parent](#nexuscleanuppolicyspec)</sup></sup>



Criteria for the cleanup policy.

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
        <td><b>assetRegex</b></td>
        <td>string</td>
        <td>
          AssetRegex removes components that match the given regex.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>lastBlobUpdated</b></td>
        <td>integer</td>
        <td>
          LastBlobUpdated removes components published over “x” days ago.<br/>
          <br/>
            <i>Minimum</i>: 1<br/>
            <i>Maximum</i>: 24855<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>lastDownloaded</b></td>
        <td>integer</td>
        <td>
          LastDownloaded removes components downloaded over “x” days.<br/>
          <br/>
            <i>Minimum</i>: 1<br/>
            <i>Maximum</i>: 24855<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>releaseType</b></td>
        <td>enum</td>
        <td>
          ReleaseType removes components that are of the following release type.<br/>
          <br/>
            <i>Enum</i>: RELEASES, PRERELEASES, <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusCleanupPolicy.spec.nexusRef
<sup><sup>[↩ Parent](#nexuscleanuppolicyspec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusCleanupPolicy.status
<sup><sup>[↩ Parent](#nexuscleanuppolicy)</sup></sup>



NexusCleanupPolicyStatus defines the observed state of NexusCleanupPolicy.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the cleanup policy.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## Nexus
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






Nexus is the Schema for the nexus API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>Nexus</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusspec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusSpec defines the desired state of Nexus.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusstatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusStatus defines the observed state of Nexus.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### Nexus.spec
<sup><sup>[↩ Parent](#nexus)</sup></sup>



NexusSpec defines the desired state of Nexus.

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
        <td><b>secret</b></td>
        <td>string</td>
        <td>
          Secret is the name of the k8s object Secret related to nexus.
Secret should contain a user field with a nexus username and a password field with a nexus password.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>url</b></td>
        <td>string</td>
        <td>
          Url is the url of nexus instance.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### Nexus.status
<sup><sup>[↩ Parent](#nexus)</sup></sup>



NexusStatus defines the observed state of Nexus.

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
          Connected shows if operator is connected to nexus.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error represents error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## NexusRepository
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusRepository is the Schema for the nexusrepositories API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusRepository</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusRepositorySpec defines the desired state of NexusRepository.
It should contain only one format of repository - go, maven, npm, etc. and only one type - proxy, hosted or group.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositorystatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusRepositoryStatus defines the observed state of NexusRepository.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec
<sup><sup>[↩ Parent](#nexusrepository)</sup></sup>



NexusRepositorySpec defines the desired state of NexusRepository.
It should contain only one format of repository - go, maven, npm, etc. and only one type - proxy, hosted or group.

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
        <td><b><a href="#nexusrepositoryspecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecapt">apt</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbower">bower</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapods">cocoapods</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconan">conan</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconda">conda</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdocker">docker</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgitlfs">gitLfs</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgo">go</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelm">helm</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmaven">maven</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpm">npm</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnuget">nuget</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2">p2</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypi">pypi</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecr">r</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecraw">raw</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygems">rubyGems</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyum">yum</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nexusRef
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecapthosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecapt)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecapthostedapt">apt</a></b></td>
        <td>object</td>
        <td>
          Apt contains data of hosted repositories of format Apt.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecapthostedaptsigning">aptSigning</a></b></td>
        <td>object</td>
        <td>
          AptSigning contains signing data of hosted repositores of format Apt.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecapthostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecapthostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecapthostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted.apt
<sup><sup>[↩ Parent](#nexusrepositoryspecapthosted)</sup></sup>



Apt contains data of hosted repositories of format Apt.

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
        <td><b>distribution</b></td>
        <td>string</td>
        <td>
          Distribution to fetch<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted.aptSigning
<sup><sup>[↩ Parent](#nexusrepositoryspecapthosted)</sup></sup>



AptSigning contains signing data of hosted repositores of format Apt.

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
        <td><b>keypair</b></td>
        <td>string</td>
        <td>
          PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>passphrase</b></td>
        <td>string</td>
        <td>
          Passphrase to access PGP signing key<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecapthosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecapthosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecapthosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecapt)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecaptproxyapt">apt</a></b></td>
        <td>object</td>
        <td>
          Apt configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.apt
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>



Apt configuration.

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
        <td><b>distribution</b></td>
        <td>string</td>
        <td>
          Distribution to fetch.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>flat</b></td>
        <td>boolean</td>
        <td>
          Whether this repository is flat.<br/>
          <br/>
            <i>Default</i>: false<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecaptproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecaptproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.apt.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecaptproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecbowergroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.group
<sup><sup>[↩ Parent](#nexusrepositoryspecbower)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecbowergroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowergroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecbowergroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecbowergroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecbower)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecbower)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecbowerproxybower">bower</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.bower
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>





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
        <td><b>rewritePackageUrls</b></td>
        <td>boolean</td>
        <td>
          Whether to force Bower to retrieve packages through this proxy repository<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecbowerproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecbowerproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.bower.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecbowerproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspeccocoapodsproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapods)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspeccocoapodsproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccocoapodsproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.cocoapods.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspeccocoapodsproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecconanproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecconan)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecconanproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecconanproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conan.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecconanproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspeccondaproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecconda)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspeccondaproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspeccondaproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.conda.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspeccondaproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecdockergroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.group
<sup><sup>[↩ Parent](#nexusrepositoryspecdocker)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecdockergroupdocker">docker</a></b></td>
        <td>object</td>
        <td>
          Docker contains data of a Docker Repositoriy.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockergroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockergroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.group.docker
<sup><sup>[↩ Parent](#nexusrepositoryspecdockergroup)</sup></sup>



Docker contains data of a Docker Repositoriy.

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
        <td><b>forceBasicAuth</b></td>
        <td>boolean</td>
        <td>
          Whether to force authentication (Docker Bearer Token Realm required if false)<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>v1Enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to allow clients to use the V1 API to interact with this repository<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>httpPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTP connector at specified port<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>httpsPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTPS connector at specified port<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecdockergroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>writableMember</b></td>
        <td>string</td>
        <td>
          Pro-only: This field is for the Group Deployment feature available in NXRM Pro.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecdockergroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecdocker)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecdockerhosteddocker">docker</a></b></td>
        <td>object</td>
        <td>
          Docker contains data of a Docker Repositoriy.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.hosted.docker
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerhosted)</sup></sup>



Docker contains data of a Docker Repositoriy.

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
        <td><b>forceBasicAuth</b></td>
        <td>boolean</td>
        <td>
          Whether to force authentication (Docker Bearer Token Realm required if false)<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>v1Enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to allow clients to use the V1 API to interact with this repository<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>httpPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTP connector at specified port<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>httpsPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTPS connector at specified port<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecdocker)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecdockerproxydocker">docker</a></b></td>
        <td>object</td>
        <td>
          Docker contains data of a Docker Repositoriy.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxydockerproxy">dockerProxy</a></b></td>
        <td>object</td>
        <td>
          DockerProxy contains data of a Docker Proxy Repository.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.docker
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



Docker contains data of a Docker Repositoriy.

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
        <td><b>forceBasicAuth</b></td>
        <td>boolean</td>
        <td>
          Whether to force authentication (Docker Bearer Token Realm required if false)<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>v1Enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to allow clients to use the V1 API to interact with this repository<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>httpPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTP connector at specified port<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>httpsPort</b></td>
        <td>integer</td>
        <td>
          Create an HTTPS connector at specified port<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.dockerProxy
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



DockerProxy contains data of a Docker Proxy Repository.

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
        <td><b>indexType</b></td>
        <td>enum</td>
        <td>
          Type of Docker Index.<br/>
          <br/>
            <i>Enum</i>: HUB, REGISTRY, CUSTOM<br/>
            <i>Default</i>: REGISTRY<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>indexUrl</b></td>
        <td>string</td>
        <td>
          Url of Docker Index to use.
TODO: add cel validation. (Required if indexType is CUSTOM)<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecdockerproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecdockerproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.docker.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecdockerproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.gitLfs
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecgitlfshosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.gitLfs.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecgitlfs)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgitlfshostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgitlfshostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgitlfshostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.gitLfs.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecgitlfshosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.gitLfs.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecgitlfshosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.gitLfs.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecgitlfshosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecgogroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.group
<sup><sup>[↩ Parent](#nexusrepositoryspecgo)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecgogroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgogroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecgogroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecgogroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecgo)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecgoproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecgoproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.go.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecgoproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspechelmhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspechelm)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspechelmhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspechelmhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspechelmhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspechelm)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspechelmproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspechelmproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.helm.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspechelmproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecmavengroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.group
<sup><sup>[↩ Parent](#nexusrepositoryspecmaven)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecmavengroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavengroupmaven">maven</a></b></td>
        <td>object</td>
        <td>
          Maven contains additional data of maven repository.<br/>
          <br/>
            <i>Default</i>: map[contentDisposition:INLINE layoutPolicy:STRICT versionPolicy:RELEASE]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavengroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecmavengroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.group.maven
<sup><sup>[↩ Parent](#nexusrepositoryspecmavengroup)</sup></sup>



Maven contains additional data of maven repository.

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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          Add Content-Disposition header as 'Attachment' to disable some content from being inline in a browser.<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
            <i>Default</i>: INLINE<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>layoutPolicy</b></td>
        <td>enum</td>
        <td>
          Validate that all paths are maven artifact or metadata paths.<br/>
          <br/>
            <i>Enum</i>: STRICT, PERMISSIVE<br/>
            <i>Default</i>: STRICT<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>versionPolicy</b></td>
        <td>enum</td>
        <td>
          VersionPolicy is a type of artifact that this repository stores.<br/>
          <br/>
            <i>Enum</i>: RELEASE, SNAPSHOT, MIXED<br/>
            <i>Default</i>: RELEASE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecmavengroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecmaven)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenhostedmaven">maven</a></b></td>
        <td>object</td>
        <td>
          Maven contains additional data of maven repository.<br/>
          <br/>
            <i>Default</i>: map[contentDisposition:INLINE layoutPolicy:STRICT versionPolicy:RELEASE]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.hosted.maven
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenhosted)</sup></sup>



Maven contains additional data of maven repository.

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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          Add Content-Disposition header as 'Attachment' to disable some content from being inline in a browser.<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
            <i>Default</i>: INLINE<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>layoutPolicy</b></td>
        <td>enum</td>
        <td>
          Validate that all paths are maven artifact or metadata paths.<br/>
          <br/>
            <i>Enum</i>: STRICT, PERMISSIVE<br/>
            <i>Default</i>: STRICT<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>versionPolicy</b></td>
        <td>enum</td>
        <td>
          VersionPolicy is a type of artifact that this repository stores.<br/>
          <br/>
            <i>Enum</i>: RELEASE, SNAPSHOT, MIXED<br/>
            <i>Default</i>: RELEASE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecmaven)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxymaven">maven</a></b></td>
        <td>object</td>
        <td>
          Maven contains additional data of maven repository.<br/>
          <br/>
            <i>Default</i>: map[contentDisposition:INLINE layoutPolicy:STRICT versionPolicy:RELEASE]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecmavenproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthenticationWithPreemptive contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Whether to block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecmavenproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxyhttpclient)</sup></sup>



HTTPClientAuthenticationWithPreemptive contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>preemptive</b></td>
        <td>boolean</td>
        <td>
          Whether to use pre-emptive authentication. Use with caution. Defaults to false.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.maven
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>



Maven contains additional data of maven repository.

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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          Add Content-Disposition header as 'Attachment' to disable some content from being inline in a browser.<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
            <i>Default</i>: INLINE<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>layoutPolicy</b></td>
        <td>enum</td>
        <td>
          Validate that all paths are maven artifact or metadata paths.<br/>
          <br/>
            <i>Enum</i>: STRICT, PERMISSIVE<br/>
            <i>Default</i>: STRICT<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>versionPolicy</b></td>
        <td>enum</td>
        <td>
          VersionPolicy is a type of artifact that this repository stores.<br/>
          <br/>
            <i>Enum</i>: RELEASE, SNAPSHOT, MIXED<br/>
            <i>Default</i>: RELEASE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.maven.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecmavenproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecnpmgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.group
<sup><sup>[↩ Parent](#nexusrepositoryspecnpm)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecnpmgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecnpm)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecnpm)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxynpm">npm</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecnpmproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnpmproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.npm
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>





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
        <td><b>removeNonCataloged</b></td>
        <td>boolean</td>
        <td>
          Remove Non-Cataloged Versions<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>removeQuarantined</b></td>
        <td>boolean</td>
        <td>
          Remove Quarantined Versions<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.npm.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnpmproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecnugetgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugethosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.group
<sup><sup>[↩ Parent](#nexusrepositoryspecnuget)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecnugetgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecnuget)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugethostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugethostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugethostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecnugethosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecnugethosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnugethosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecnuget)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxynugetproxy">nugetProxy</a></b></td>
        <td>object</td>
        <td>
          NugetProxy contains data specific to proxy repositories of format Nuget.<br/>
          <br/>
            <i>Default</i>: map[nugetVersion:V3 queryCacheItemMaxAge:3600]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecnugetproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecnugetproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.nugetProxy
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>



NugetProxy contains data specific to proxy repositories of format Nuget.

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
        <td><b>nugetVersion</b></td>
        <td>enum</td>
        <td>
          NugetVersion is the used Nuget protocol version.<br/>
          <br/>
            <i>Enum</i>: V2, V3<br/>
            <i>Default</i>: V3<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>queryCacheItemMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache query results from the proxied repository (in seconds)<br/>
          <br/>
            <i>Default</i>: 3600<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.nuget.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecnugetproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecp2proxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecp2)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecp2proxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecp2proxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.p2.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecp2proxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecpypigroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypihosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.group
<sup><sup>[↩ Parent](#nexusrepositoryspecpypi)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecpypigroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypigroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecpypigroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecpypigroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecpypi)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypihostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypihostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypihostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecpypihosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecpypihosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecpypihosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecpypi)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecpypiproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecpypiproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.pypi.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecpypiproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.group
<sup><sup>[↩ Parent](#nexusrepositoryspecr)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecrgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecr)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecrhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecr)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecrproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.r.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrawgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.group
<sup><sup>[↩ Parent](#nexusrepositoryspecraw)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrawgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawgroupraw">raw</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecrawgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.group.raw
<sup><sup>[↩ Parent](#nexusrepositoryspecrawgroup)</sup></sup>





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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          TODO: check default value<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrawgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecraw)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawhostedraw">raw</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrawhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecrawhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.hosted.raw
<sup><sup>[↩ Parent](#nexusrepositoryspecrawhosted)</sup></sup>





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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          TODO: check default value<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrawhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecraw)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxyraw">raw</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecrawproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrawproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.raw
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>





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
        <td><b>contentDisposition</b></td>
        <td>enum</td>
        <td>
          TODO: check default value<br/>
          <br/>
            <i>Enum</i>: INLINE, ATTACHMENT<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.raw.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrawproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrubygemsgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemshosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.group
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygems)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecrubygemsgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygems)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemshostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemshostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemshostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemshosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemshosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemshosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygems)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecrubygemsproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecrubygemsproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.rubyGems.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecrubygemsproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum
<sup><sup>[↩ Parent](#nexusrepositoryspec)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecyumgroup">group</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumhosted">hosted</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.group
<sup><sup>[↩ Parent](#nexusrepositoryspecyum)</sup></sup>





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
        <td><b><a href="#nexusrepositoryspecyumgroupgroup">group</a></b></td>
        <td>object</td>
        <td>
          Group configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumgroupstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumgroupyumsigning">yumSigning</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.group.group
<sup><sup>[↩ Parent](#nexusrepositoryspecyumgroup)</sup></sup>



Group configuration.

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
        <td><b>memberNames</b></td>
        <td>[]string</td>
        <td>
          Member repositories' names.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.group.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecyumgroup)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.group.yumSigning
<sup><sup>[↩ Parent](#nexusrepositoryspecyumgroup)</sup></sup>





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
        <td><b>keypair</b></td>
        <td>string</td>
        <td>
          PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>passphrase</b></td>
        <td>string</td>
        <td>
          Passphrase to access PGP signing key<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.hosted
<sup><sup>[↩ Parent](#nexusrepositoryspecyum)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumhostedyum">yum</a></b></td>
        <td>object</td>
        <td>
          Yum contains data of hosted repositories of format Yum.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumhostedcleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumhostedcomponent">component</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumhostedstorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.hosted.yum
<sup><sup>[↩ Parent](#nexusrepositoryspecyumhosted)</sup></sup>



Yum contains data of hosted repositories of format Yum.

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
        <td><b>repodataDepth</b></td>
        <td>integer</td>
        <td>
          <br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>deployPolicy</b></td>
        <td>enum</td>
        <td>
          TODO: check default value<br/>
          <br/>
            <i>Enum</i>: PERMISSIVE, STRICT<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.hosted.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecyumhosted)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.hosted.component
<sup><sup>[↩ Parent](#nexusrepositoryspecyumhosted)</sup></sup>





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
        <td><b>proprietaryComponents</b></td>
        <td>boolean</td>
        <td>
          Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.hosted.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecyumhosted)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>writePolicy</b></td>
        <td>enum</td>
        <td>
          WritePolicy controls if deployments of and updates to assets are allowed.<br/>
          <br/>
            <i>Enum</i>: ALLOW, ALLOW_ONCE, DENY, REPLICATION_ONLY<br/>
            <i>Default</i>: ALLOW_ONCE<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecyum)</sup></sup>





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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A unique identifier for this repository.
Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed and may not start with underscore or dot.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxyproxy">proxy</a></b></td>
        <td>object</td>
        <td>
          Proxy configuration.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxycleanup">cleanup</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxyhttpclient">httpClient</a></b></td>
        <td>object</td>
        <td>
          HTTP client configuration.<br/>
          <br/>
            <i>Default</i>: map[autoBlock:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxynegativecache">negativeCache</a></b></td>
        <td>object</td>
        <td>
          Negative cache configuration.<br/>
          <br/>
            <i>Default</i>: map[enabled:true timeToLive:1440]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>online</b></td>
        <td>boolean</td>
        <td>
          Online determines if the repository accepts incoming requests.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>routingRule</b></td>
        <td>string</td>
        <td>
          The name of the routing rule assigned to this repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxystorage">storage</a></b></td>
        <td>object</td>
        <td>
          Storage configuration.<br/>
          <br/>
            <i>Default</i>: map[blobStoreName:default strictContentTypeValidation:true]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxyyumsigning">yumSigning</a></b></td>
        <td>object</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.proxy
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>



Proxy configuration.

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
        <td><b>remoteUrl</b></td>
        <td>string</td>
        <td>
          Location of the remote repository being proxied.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>contentMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache artifacts before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>metadataMaxAge</b></td>
        <td>integer</td>
        <td>
          How long to cache metadata before rechecking the remote repository (in minutes)<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.cleanup
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>





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
        <td><b>policyNames</b></td>
        <td>[]string</td>
        <td>
           Components that match any of the applied policies will be deleted.<br/>
        </td>
        <td>true</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.httpClient
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>



HTTP client configuration.

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
        <td><b><a href="#nexusrepositoryspecyumproxyhttpclientauthentication">authentication</a></b></td>
        <td>object</td>
        <td>
          HTTPClientAuthentication contains HTTP client authentication configuration data.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>autoBlock</b></td>
        <td>boolean</td>
        <td>
          Auto-block outbound connections on the repository if remote peer is detected as unreachable/unresponsive<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>blocked</b></td>
        <td>boolean</td>
        <td>
          Block outbound connections on the repository.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrepositoryspecyumproxyhttpclientconnection">connection</a></b></td>
        <td>object</td>
        <td>
          HTTPClientConnection contains HTTP client connection configuration data.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.httpClient.authentication
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxyhttpclient)</sup></sup>



HTTPClientAuthentication contains HTTP client authentication configuration data.

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
        <td><b>ntlmDomain</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>ntlmHost</b></td>
        <td>string</td>
        <td>
          <br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>password</b></td>
        <td>string</td>
        <td>
          Password for authentication.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>enum</td>
        <td>
          Type of authentication to use.<br/>
          <br/>
            <i>Enum</i>: username, ntlm<br/>
            <i>Default</i>: username<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>username</b></td>
        <td>string</td>
        <td>
          Username for authentication.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.httpClient.connection
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxyhttpclient)</sup></sup>



HTTPClientConnection contains HTTP client connection configuration data.

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
        <td><b>enableCircularRedirects</b></td>
        <td>boolean</td>
        <td>
          Whether to enable redirects to the same location (required by some servers)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>enableCookies</b></td>
        <td>boolean</td>
        <td>
          Whether to allow cookies to be stored and used<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>retries</b></td>
        <td>integer</td>
        <td>
          Total retries if the initial connection attempt suffers a timeout<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeout</b></td>
        <td>integer</td>
        <td>
          Seconds to wait for activity before stopping and retrying the connection",<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>useTrustStore</b></td>
        <td>boolean</td>
        <td>
          Use certificates stored in the Nexus Repository Manager truststore to connect to external systems<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>userAgentSuffix</b></td>
        <td>string</td>
        <td>
          Custom fragment to append to User-Agent header in HTTP requests<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.negativeCache
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>



Negative cache configuration.

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
        <td><b>enabled</b></td>
        <td>boolean</td>
        <td>
          Whether to cache responses for content not present in the proxied repository.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>timeToLive</b></td>
        <td>integer</td>
        <td>
          How long to cache the fact that a file was not found in the repository (in minutes).<br/>
          <br/>
            <i>Default</i>: 1440<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.storage
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>



Storage configuration.

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
        <td><b>blobStoreName</b></td>
        <td>string</td>
        <td>
          Blob store used to store repository contents.<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>strictContentTypeValidation</b></td>
        <td>boolean</td>
        <td>
          StrictContentTypeValidation: Whether to validate uploaded content's MIME type appropriate for the repository format.<br/>
          <br/>
            <i>Default</i>: true<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.spec.yum.proxy.yumSigning
<sup><sup>[↩ Parent](#nexusrepositoryspecyumproxy)</sup></sup>





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
        <td><b>keypair</b></td>
        <td>string</td>
        <td>
          PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>passphrase</b></td>
        <td>string</td>
        <td>
          Passphrase to access PGP signing key<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRepository.status
<sup><sup>[↩ Parent](#nexusrepository)</sup></sup>



NexusRepositoryStatus defines the observed state of NexusRepository.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the repository.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## NexusRole
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusRole is the Schema for the nexusroles API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusRole</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrolespec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusRoleSpec defines the desired state of NexusRole.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusrolestatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusRoleStatus defines the observed state of NexusRole.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRole.spec
<sup><sup>[↩ Parent](#nexusrole)</sup></sup>



NexusRoleSpec defines the desired state of NexusRole.

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
        <td><b>id</b></td>
        <td>string</td>
        <td>
          ID is the id of the role.
ID should be unique across all roles.<br/>
          <br/>
            <i>Validations</i>:<li>self == oldSelf: Value is immutable</li>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name is the name of the role.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusrolespecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          Description of nexus role.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>privileges</b></td>
        <td>[]string</td>
        <td>
          Privileges is a list of privileges assigned to role.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRole.spec.nexusRef
<sup><sup>[↩ Parent](#nexusrolespec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusRole.status
<sup><sup>[↩ Parent](#nexusrole)</sup></sup>



NexusRoleStatus defines the observed state of NexusRole.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the role.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## NexusScript
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusScript is the Schema for the nexusscripts API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusScript</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusscriptspec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusScriptSpec defines the desired state of NexusScript.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexusscriptstatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusScriptStatus defines the observed state of NexusScript.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusScript.spec
<sup><sup>[↩ Parent](#nexusscript)</sup></sup>



NexusScriptSpec defines the desired state of NexusScript.

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
        <td><b>content</b></td>
        <td>string</td>
        <td>
          Content is the content of the script.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name is the id of the script.
Name should be unique across all scripts.<br/>
          <br/>
            <i>Validations</i>:<li>self == oldSelf: Value is immutable</li>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexusscriptspecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>execute</b></td>
        <td>boolean</td>
        <td>
          Execute defines if script should be executed after creation.<br/>
          <br/>
            <i>Default</i>: false<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>payload</b></td>
        <td>string</td>
        <td>
          Payload is the payload of the script.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusScript.spec.nexusRef
<sup><sup>[↩ Parent](#nexusscriptspec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusScript.status
<sup><sup>[↩ Parent](#nexusscript)</sup></sup>



NexusScriptStatus defines the observed state of NexusScript.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>executed</b></td>
        <td>boolean</td>
        <td>
          Executed defines if script was executed.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the script.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## NexusUser
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






NexusUser is the Schema for the nexususers API.

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
      <td>edp.epam.com/v1alpha1</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b>kind</b></td>
      <td>string</td>
      <td>NexusUser</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#nexususerspec">spec</a></b></td>
        <td>object</td>
        <td>
          NexusUserSpec defines the desired state of NexusUser.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#nexususerstatus">status</a></b></td>
        <td>object</td>
        <td>
          NexusUserStatus defines the observed state of NexusUser.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusUser.spec
<sup><sup>[↩ Parent](#nexususer)</sup></sup>



NexusUserSpec defines the desired state of NexusUser.

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
          Email is the email address of the user.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>firstName</b></td>
        <td>string</td>
        <td>
          FirstName of the user.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>id</b></td>
        <td>string</td>
        <td>
          ID is the username of the user.
ID should be unique across all users.<br/>
          <br/>
            <i>Validations</i>:<li>self == oldSelf: Value is immutable</li>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>lastName</b></td>
        <td>string</td>
        <td>
          LastName of the user.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#nexususerspecnexusref">nexusRef</a></b></td>
        <td>object</td>
        <td>
          NexusRef is a reference to Nexus custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>roles</b></td>
        <td>[]string</td>
        <td>
          Roles is a list of roles assigned to user.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>secret</b></td>
        <td>string</td>
        <td>
          Secret is the reference of the k8s object Secret for the user password.
Format: $secret-name:secret-key.
Updating user password is not supported.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>enum</td>
        <td>
          Status is a status of the user.<br/>
          <br/>
            <i>Enum</i>: active, disabled<br/>
            <i>Default</i>: active<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusUser.spec.nexusRef
<sup><sup>[↩ Parent](#nexususerspec)</sup></sup>



NexusRef is a reference to Nexus custom resource.

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
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name specifies the name of the Nexus resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Nexus resource.<br/>
          <br/>
            <i>Default</i>: Nexus<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### NexusUser.status
<sup><sup>[↩ Parent](#nexususer)</sup></sup>



NexusUserStatus defines the observed state of NexusUser.

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
        <td><b>error</b></td>
        <td>string</td>
        <td>
          Error is an error message if something went wrong.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is a status of the user.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>
