# Tekton Custom Task API Reference

Packages:

- [edp.epam.com/v1alpha1](#edpepamcomv1alpha1)

# edp.epam.com/v1alpha1

Resource Types:

- [ApprovalTask](#approvaltask)

## ApprovalTask

<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>

ApprovalTask is the Schema for the approvaltasks API

<table>
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
      <td>ApprovalTask</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#approvaltaskspec">spec</a></b></td>
        <td>object</td>
        <td>
          ApprovalTaskSpec defines the desired state of ApprovalTask<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>status</b></td>
        <td>object</td>
        <td>
          ApprovalTaskStatus defines the observed state of ApprovalTask<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

### ApprovalTask.spec

<sup><sup>[↩ Parent](#approvaltask)</sup></sup>

ApprovalTaskSpec defines the desired state of ApprovalTask

<table>
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
        <td>enum</td>
        <td>
          Action is the action to be taken on the task.<br/>
          <br/>
            <i>Enum</i>: Pending, Approved, Rejected, Canceled<br/>
            <i>Default</i>: Pending<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          Description that is shown to the user for the approval action.<br/>
          <br/>
            <i>Default</i>: Proceed<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>
