# SonarQube

Packages:

- [edp.epam.com/v1alpha1](#edpepamcomv1alpha1)

# edp.epam.com/v1alpha1

Resource Types:

- [SonarGroup](#sonargroup)

- [SonarPermissionTemplate](#sonarpermissiontemplate)

- [SonarQualityGate](#sonarqualitygate)

- [SonarQualityProfile](#sonarqualityprofile)

- [Sonar](#sonar)

- [SonarUser](#sonaruser)




## SonarGroup
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






SonarGroup is the Schema for the sonar group API.

<table>
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
      <td>SonarGroup</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonargroupspec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarGroupSpec defines the desired state of SonarGroup.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonargroupstatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarGroupStatus defines the observed state of SonarGroup.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarGroup.spec
<sup><sup>[↩ Parent](#sonargroup)</sup></sup>



SonarGroupSpec defines the desired state of SonarGroup.

<table>
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
          Name is a group name.
Name should be unique across all groups.
Do not edit this field after creation. Otherwise, the group will be recreated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonargroupspecsonarref">sonarRef</a></b></td>
        <td>object</td>
        <td>
          SonarRef is a reference to Sonar custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          Description of sonar group.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>permissions</b></td>
        <td>[]string</td>
        <td>
          Permissions is a list of permissions assigned to group.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarGroup.spec.sonarRef
<sup><sup>[↩ Parent](#sonargroupspec)</sup></sup>



SonarRef is a reference to Sonar custom resource.

<table>
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
          Name specifies the name of the Sonar resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Sonar resource.<br/>
          <br/>
            <i>Default</i>: Sonar<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarGroup.status
<sup><sup>[↩ Parent](#sonargroup)</sup></sup>



SonarGroupStatus defines the observed state of SonarGroup.

<table>
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
          Value is a status of the group.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## SonarPermissionTemplate
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






SonarPermissionTemplate is the Schema for the sonar permission template API.

<table>
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
      <td>SonarPermissionTemplate</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarpermissiontemplatespec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarPermissionTemplateSpec defines the desired state of SonarPermissionTemplate.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarpermissiontemplatestatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarPermissionTemplateStatus defines the observed state of SonarPermissionTemplate.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarPermissionTemplate.spec
<sup><sup>[↩ Parent](#sonarpermissiontemplate)</sup></sup>



SonarPermissionTemplateSpec defines the desired state of SonarPermissionTemplate.

<table>
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
          Name is a name of permission template.
Name should be unique across all permission templates.
Do not edit this field after creation. Otherwise, the permission template will be recreated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarpermissiontemplatespecsonarref">sonarRef</a></b></td>
        <td>object</td>
        <td>
          SonarRef is a reference to Sonar custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>default</b></td>
        <td>boolean</td>
        <td>
          Default is a flag to set permission template as default.
Only one permission template can be default.
If several permission templates have default flag, the random one will be chosen.
Default permission template can't be deleted. You need to set another permission template as default before.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>description</b></td>
        <td>string</td>
        <td>
          Description of sonar permission template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>groupsPermissions</b></td>
        <td>map[string][]string</td>
        <td>
          GroupsPermissions is a map of groups and permissions assigned to them.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>projectKeyPattern</b></td>
        <td>string</td>
        <td>
          ProjectKeyPattern is key pattern. Must be a valid Java regular expression.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarPermissionTemplate.spec.sonarRef
<sup><sup>[↩ Parent](#sonarpermissiontemplatespec)</sup></sup>



SonarRef is a reference to Sonar custom resource.

<table>
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
          Name specifies the name of the Sonar resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Sonar resource.<br/>
          <br/>
            <i>Default</i>: Sonar<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarPermissionTemplate.status
<sup><sup>[↩ Parent](#sonarpermissiontemplate)</sup></sup>



SonarPermissionTemplateStatus defines the observed state of SonarPermissionTemplate.

<table>
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
          Value is a status of the permission template.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## SonarQualityGate
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






SonarQualityGate is the Schema for the sonarqualitygates API

<table>
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
      <td>SonarQualityGate</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarqualitygatespec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarQualityGateSpec defines the desired state of SonarQualityGate<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarqualitygatestatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarQualityGateStatus defines the observed state of SonarQualityGate<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityGate.spec
<sup><sup>[↩ Parent](#sonarqualitygate)</sup></sup>



SonarQualityGateSpec defines the desired state of SonarQualityGate

<table>
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
          Name is a name of quality gate.
Name should be unique across all quality gates.
Don't change this field after creation otherwise quality gate will be recreated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarqualitygatespecsonarref">sonarRef</a></b></td>
        <td>object</td>
        <td>
          SonarRef is a reference to Sonar custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarqualitygatespecconditionskey">conditions</a></b></td>
        <td>map[string]object</td>
        <td>
          Conditions is a list of conditions for quality gate.
Key is a metric name, value is a condition.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>default</b></td>
        <td>boolean</td>
        <td>
          Default is a flag to set quality gate as default.
Only one quality gate can be default.
If several quality gates have default flag, the random one will be chosen.
Default quality gate can't be deleted. You need to set another quality gate as default before.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityGate.spec.sonarRef
<sup><sup>[↩ Parent](#sonarqualitygatespec)</sup></sup>



SonarRef is a reference to Sonar custom resource.

<table>
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
          Name specifies the name of the Sonar resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Sonar resource.<br/>
          <br/>
            <i>Default</i>: Sonar<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityGate.spec.conditions[key]
<sup><sup>[↩ Parent](#sonarqualitygatespec)</sup></sup>



Condition defines the condition for quality gate.

<table>
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
          Error is condition error threshold.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>op</b></td>
        <td>enum</td>
        <td>
          Op is condition operator.
LT = is lower than
GT = is greater than<br/>
          <br/>
            <i>Enum</i>: LT, GT<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityGate.status
<sup><sup>[↩ Parent](#sonarqualitygate)</sup></sup>



SonarQualityGateStatus defines the observed state of SonarQualityGate

<table>
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
          Value is a status of the quality gate.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## SonarQualityProfile
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






SonarQualityProfile is the Schema for the sonarqualityprofiles API

<table>
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
      <td>SonarQualityProfile</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarqualityprofilespec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarQualityProfileSpec defines the desired state of SonarQualityProfile<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarqualityprofilestatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarQualityProfileStatus defines the observed state of SonarQualityProfile<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityProfile.spec
<sup><sup>[↩ Parent](#sonarqualityprofile)</sup></sup>



SonarQualityProfileSpec defines the desired state of SonarQualityProfile

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>language</b></td>
        <td>string</td>
        <td>
          Language is a language of quality profile.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name is a name of quality profile.
Name should be unique across all quality profiles.
Don't change this field after creation otherwise quality profile will be recreated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarqualityprofilespecsonarref">sonarRef</a></b></td>
        <td>object</td>
        <td>
          SonarRef is a reference to Sonar custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>default</b></td>
        <td>boolean</td>
        <td>
          Default is a flag to set quality profile as default.
Only one quality profile can be default.
If several quality profiles have default flag, the random one will be chosen.
Default quality profile can't be deleted. You need to set another quality profile as default before.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarqualityprofilespecruleskey">rules</a></b></td>
        <td>map[string]object</td>
        <td>
          Rules is a list of rules for quality profile.
Key is a rule key, value is a rule.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityProfile.spec.sonarRef
<sup><sup>[↩ Parent](#sonarqualityprofilespec)</sup></sup>



SonarRef is a reference to Sonar custom resource.

<table>
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
          Name specifies the name of the Sonar resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Sonar resource.<br/>
          <br/>
            <i>Default</i>: Sonar<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityProfile.spec.rules[key]
<sup><sup>[↩ Parent](#sonarqualityprofilespec)</sup></sup>



Rule defines a rule of quality profile.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>params</b></td>
        <td>string</td>
        <td>
          Params is as semicolon list of key=value.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>severity</b></td>
        <td>enum</td>
        <td>
          Severity is a severity of rule.<br/>
          <br/>
            <i>Enum</i>: INFO, MINOR, MAJOR, CRITICAL, BLOCKER<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarQualityProfile.status
<sup><sup>[↩ Parent](#sonarqualityprofile)</sup></sup>



SonarQualityProfileStatus defines the observed state of SonarQualityProfile

<table>
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
          Value is a status of the quality profile.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## Sonar
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






Sonar is the Schema for the sonars API.

<table>
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
      <td>Sonar</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonarspec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarSpec defines the desired state of Sonar.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarstatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarStatus defines the observed state of Sonar.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### Sonar.spec
<sup><sup>[↩ Parent](#sonar)</sup></sup>



SonarSpec defines the desired state of Sonar.

<table>
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
          Secret is the name of the k8s object Secret related to sonar.
Secret should contain a user field with a sonar username and a password field with a sonar password.
Pass the token in the user field and leave the password field empty for token authentication.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>url</b></td>
        <td>string</td>
        <td>
          Url is the url of sonar instance.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>defaultPermissionTemplate</b></td>
        <td>string</td>
        <td>
          DefaultPermissionTemplate is the name of the default permission template.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonarspecsettingsindex">settings</a></b></td>
        <td>[]object</td>
        <td>
          Settings specify which settings should be configured.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### Sonar.spec.settings[index]
<sup><sup>[↩ Parent](#sonarspec)</sup></sup>



SonarSetting defines the setting of sonar.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>key</b></td>
        <td>string</td>
        <td>
          Key is the key of the setting.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>fieldValues</b></td>
        <td>map[string]string</td>
        <td>
          Setting field values. To set several values, the parameter must be called once for each value.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is the value of the setting.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>values</b></td>
        <td>[]string</td>
        <td>
          Setting multi value. To set several values, the parameter must be called once for each value.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### Sonar.status
<sup><sup>[↩ Parent](#sonar)</sup></sup>



SonarStatus defines the observed state of Sonar.

<table>
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
          Connected shows if operator is connected to sonar.<br/>
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
        <td><b>processedSettings</b></td>
        <td>string</td>
        <td>
          ProcessedSettings shows which settings were processed.
It is used to compare the current settings with the settings that were processed
to unset the settings that are not in the current settings.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>value</b></td>
        <td>string</td>
        <td>
          Value is status of sonar instance.
Possible values:
GREEN: SonarQube is fully operational
YELLOW: SonarQube is usable, but it needs attention in order to be fully operational
RED: SonarQube is not operational<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>

## SonarUser
<sup><sup>[↩ Parent](#edpepamcomv1alpha1 )</sup></sup>






SonarUser is the Schema for the sonarusers API

<table>
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
      <td>SonarUser</td>
      <td>true</td>
      </tr>
      <tr>
      <td><b><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#objectmeta-v1-meta">metadata</a></b></td>
      <td>object</td>
      <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
      <td>true</td>
      </tr><tr>
        <td><b><a href="#sonaruserspec">spec</a></b></td>
        <td>object</td>
        <td>
          SonarUserSpec defines the desired state of SonarUser<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b><a href="#sonaruserstatus">status</a></b></td>
        <td>object</td>
        <td>
          SonarUserStatus defines the observed state of SonarUser<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarUser.spec
<sup><sup>[↩ Parent](#sonaruser)</sup></sup>



SonarUserSpec defines the desired state of SonarUser

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody><tr>
        <td><b>login</b></td>
        <td>string</td>
        <td>
          Login is a user login.
Do not edit this field after creation. Otherwise, the user will be recreated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>name</b></td>
        <td>string</td>
        <td>
          Name is a username.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>secret</b></td>
        <td>string</td>
        <td>
          Secret is the name of the secret with the user password.
It should contain a password field with a user password.
User password can't be updated.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b><a href="#sonaruserspecsonarref">sonarRef</a></b></td>
        <td>object</td>
        <td>
          SonarRef is a reference to Sonar custom resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>email</b></td>
        <td>string</td>
        <td>
          Email is a user email.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>groups</b></td>
        <td>[]string</td>
        <td>
          Groups is a list of groups assigned to user.<br/>
        </td>
        <td>false</td>
      </tr><tr>
        <td><b>permissions</b></td>
        <td>[]string</td>
        <td>
          Permissions is a list of permissions assigned to user.<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarUser.spec.sonarRef
<sup><sup>[↩ Parent](#sonaruserspec)</sup></sup>



SonarRef is a reference to Sonar custom resource.

<table>
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
          Name specifies the name of the Sonar resource.<br/>
        </td>
        <td>true</td>
      </tr><tr>
        <td><b>kind</b></td>
        <td>string</td>
        <td>
          Kind specifies the kind of the Sonar resource.<br/>
          <br/>
            <i>Default</i>: Sonar<br/>
        </td>
        <td>false</td>
      </tr></tbody>
</table>


### SonarUser.status
<sup><sup>[↩ Parent](#sonaruser)</sup></sup>



SonarUserStatus defines the observed state of SonarUser

<table>
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
