# CD Pipeline Operator API

Packages:

- [v2.edp.epam.com/v1](#v2edpepamcomv1)

# v2.edp.epam.com/v1

Resource Types:

- [CDPipeline](#cdpipeline)

- [Stage](#stage)

## CDPipeline

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

CDPipeline is the Schema for the cdpipelines API.

<table>
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
      <td>CDPipeline</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#cdpipelinespec">spec</a></b></td>
        <td>object</td>
        <td>
          CDPipelineSpec defines the desired state of CDPipeline.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#cdpipelinestatus">status</a></b></td>
        <td>object</td>
        <td>
          CDPipelineStatus defines the observed state of CDPipeline.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CDPipeline.spec

<sup><sup>[↩ Parent](#cdpipeline)</sup></sup>

CDPipelineSpec defines the desired state of CDPipeline.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>applications</b></td>
        <td>[]string</td>
        <td>
          A list of applications included in CDPipeline.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>deploymentType</b></td>
        <td>string</td>
        <td>
          Which type of kind will be deployed e.g. Container, Custom<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>inputDockerStreams</b></td>
        <td>[]string</td>
        <td>
          A list of docker streams<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name of CD pipeline<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>applicationsToPromote</b></td>
        <td>[]string</td>
        <td>
          A list of applications which will promote after successful release.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### CDPipeline.status

<sup><sup>[↩ Parent](#cdpipeline)</sup></sup>

CDPipelineStatus defines the observed state of CDPipeline.

<table>
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
          This flag indicates neither CDPipeline are initialized and ready to work. Defaults to false.<br/>
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
          Specifies a current status of CDPipeline.<br/>
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
          Specifies a current state of CDPipeline.<br/>
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

## Stage

<sup><sup>[↩ Parent](#v2edpepamcomv1 )</sup></sup>

Stage is the Schema for the stages API.

<table>
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
      <td>Stage</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#stagespec">spec</a></b></td>
        <td>object</td>
        <td>
          StageSpec defines the desired state of Stage.
NOTE: for deleting the stage use stages order - delete only the latest stage.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#stagestatus">status</a></b></td>
        <td>object</td>
        <td>
          StageStatus defines the observed state of Stage.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Stage.spec

<sup><sup>[↩ Parent](#stage)</sup></sup>

StageSpec defines the desired state of Stage.
NOTE: for deleting the stage use stages order - delete only the latest stage.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>cdPipeline</b></td>
        <td>string</td>
        <td>
          Name of CD pipeline which this Stage will be linked to.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          A description of a stage.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name of a stage.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>order</b></td>
        <td>integer</td>
        <td>
          The order to lay out Stages.
The order should start from 0, and the next stages should use +1 for the order.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#stagespecqualitygatesindex">qualityGates</a></b></td>
        <td>[]object</td>
        <td>
          A list of quality gates to be processed<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>triggerType</b></td>
        <td>string</td>
        <td>
          Stage deployment trigger type. E.g. Manual, Auto<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>cleanTemplate</b></td>
        <td>string</td>
        <td>
          CleanTemplate specifies a name of Tekton TriggerTemplate which will be used for cleaning resources.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>clusterName</b></td>
        <td>string</td>
        <td>
          Specifies a name of cluster where the application will be deployed.
Default value is "in-cluster" which means that application will be deployed in the same cluster where CD Pipeline is running.<br/>
          <br/>
            <i>Default</i>: in-cluster<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>namespace</b></td>
        <td>string</td>
        <td>
          Namespace where the application will be deployed.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#stagespecsource">source</a></b></td>
        <td>object</td>
        <td>
          Specifies a source of a pipeline library which will run release<br/>
          <br/>
            <i>Default</i>: map[type:default]<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>triggerTemplate</b></td>
        <td>string</td>
        <td>
          Specifies a name of Tekton TriggerTemplate which will be used as a blueprint for deployment pipeline.
Default value is "deploy" which means that default TriggerTemplate will be used.
The default TriggerTemplate is delivered using edp-tekton helm chart.<br/>
          <br/>
            <i>Default</i>: deploy<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Stage.spec.qualityGates[index]

<sup><sup>[↩ Parent](#stagespec)</sup></sup>

QualityGate defines a single quality for a release.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>qualityGateType</b></td>
        <td>string</td>
        <td>
          A type of quality gate, e.g. "Manual", "Autotests"<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>stepName</b></td>
        <td>string</td>
        <td>
          Specifies a name of particular<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>autotestName</b></td>
        <td>string</td>
        <td>
          A name of autotests to run with quality gate<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>branchName</b></td>
        <td>string</td>
        <td>
          A branch name to use from autotests repository<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Stage.spec.source

<sup><sup>[↩ Parent](#stagespec)</sup></sup>

Specifies a source of a pipeline library which will run release

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b><a href="#stagespecsourcelibrary">library</a></b></td>
        <td>object</td>
        <td>
          A reference to a non default source library<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>type</b></td>
        <td>string</td>
        <td>
          Type of pipeline library, e.g. default, library<br/>
          <br/>
            <i>Default</i>: default<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Stage.spec.source.library

<sup><sup>[↩ Parent](#stagespecsource)</sup></sup>

A reference to a non default source library

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>branch</b></td>
        <td>string</td>
        <td>
          Branch which should be used for a library<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          A name of a library<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### Stage.status

<sup><sup>[↩ Parent](#stage)</sup></sup>



StageStatus defines the observed state of Stage.

<table>
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
          This flag indicates neither Stage are initialized and ready to work. Defaults to false.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>last_time_updated</b></td>
        <td>string</td>
        <td>
          Information when  the last time the action were performed.<br/>
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
          Specifies a current status of Stage.<br/>
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
          Specifies a current state of Stage.<br/>
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
      </tr><tr>
        <td><b>shouldBeHandled</b></td>
        <td>boolean</td>
        <td>
          Should update of status be handled. Defaults to false.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>
