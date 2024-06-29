import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade EDP v3.4 to 3.5

:::warning
  We suggest making a backup of the EDP environment before starting the upgrade procedure.
:::

This section provides detailed instructions for upgrading EPAM Delivery Platform to version 3.5.3. Follow the steps and requirements outlined below:

1. Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:

    ```bash
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.19.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml
    ```

    :::danger
      Codebase-operator v2.19.0 is not compatible with the previous versions. Please become familiar with the [breaking change](https://github.com/epam/edp-codebase-operator/commit/67ed1e336b7b185aba03992fd1c4fbebcd33941d) in Git Server Custom Resource Definition.
    :::

2. Familiarize yourself with the updated file structure of the [values.yaml](https://raw.githubusercontent.com/epam/edp-install/v3.5.3/deploy-templates/values.yaml) file and adjust your values.yaml file accordingly:

    1. By default, the deployment of sub components such as `edp-sonar-operator`, `edp-nexus-operator`, `edp-gerrit-operator`, and `keycloak-operator`, have been disabled. Set them back to `true` in case they are needed or manually deploy external tools, such as SonarQube, Nexus, Gerrit and integrate them with the EPAM Delivery Platform.

    2. The default Git provider has been changed from Gerrit to GitHub:

        Old format:

        ```yaml
        global:
          gitProvider: gerrit
          gerritSSHPort: "22"
        ```

        New format:

        ```yaml
        global:
          gitProvider: github
          #gerritSSHPort: "22"
        ```

    3. The **sonarUrl** and **nexusUrl** parameters have been deprecated. All the URLs from external components are stored in integration secrets:

        ```yaml
        global:
          # -- Optional parameter. Link to use custom sonarqube. Format: http://<service-name>.<sonarqube-namespace>:9000 or http://<ip-address>:9000
          sonarUrl: ""
          # -- Optional parameter. Link to use custom nexus. Format: http://<service-name>.<nexus-namespace>:8081 or http://<ip-address>:<port>
          nexusUrl: ""
        ```

    4. **Keycloak** integration has been moved from the **global** section to the **sso** section. Update the parameters accordingly:

        Old format:

        ```yaml
        global:
          # -- Keycloak URL
          keycloakUrl: https://keycloak.example.com
          # -- Administrators of your tenant
          admins:
            - "stub_user_one@example.com"
          # -- Developers of your tenant
          developers:
            - "stub_user_one@example.com"
            - "stub_user_two@example.com"
        ```

        New format:

        ```yaml
        sso:
          enabled: true
          # -- Keycloak URL
          keycloakUrl: https://keycloak.example.com
          # -- Administrators of your tenant
          admins:
            - "stub_user_one@example.com"
          # -- Developers of your tenant
          developers:
            - "stub_user_one@example.com"
            - "stub_user_two@example.com"
        ```

    5. (Optional) The default secret name for Jira integration has been changed from `jira-user` to `ci-jira`. Please adjust the secret name in the parameters accordingly:

        ```yaml
        codebase-operator:
          jira:
            credentialName: "ci-jira"
        ```

3. The secret naming and format have been refactored. Below are patterns of the changes for various components:

    <Tabs
      defaultValue="sonarqube"
      values={[
        {label: 'SonarQube', value: 'sonarqube'},
        {label: 'Dependency-Track', value: 'dependencytrack'},
        {label: 'DefectDojo', value: 'defectdojo'},
        {label: 'Jira', value: 'jira'},
        {label: 'GitLab', value: 'gitlab'},
        {label: 'GitHub', value: 'github'},
        {label: 'Nexus', value: 'nexus'}
      ]}>

      <TabItem value="sonarqube">
      Old format:

      ```json
      "sonar-ciuser-token": {
        "username": "xxxxx",
        "secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
      ```

      New format:

      ```json
      "ci-sonarqube": {
        "token": "xxxxxxxxxxxxxxxxxxxxxxx",
        "url":"https://sonar.example.com"
        }
      ```

      </TabItem>

      <TabItem value="dependencytrack">
      Old format:

      ```json
      "ci-dependency-track": {
        "token": "xxxxxxxxxxxxxxxxxx"
        }
      ```

      New format:

      ```json
      "ci-dependency-track": {
        "token": "xxxxxxxxxxxxxxxxxx",
        "url": "http://dependency-track.example.com"}
      ```

      </TabItem>

      <TabItem value="defectdojo">
      Old format:

      ```json
      "defectdojo-ciuser-token": {
        "token": "xxxxxxxxxxxxxxxxxx"
        "url": "http://defectdojo.example.com"
        }
      ```

      New format:

      ```json
      "ci-defectdojo": {
        "token": "xxxxxxxxxxxxxxxxxx",
        "url": "http://defectdojo.example.com"
        }
      ```

      </TabItem>

      <TabItem value="jira">
      Old format:

      ```json
      "jira-user": {
        "username": "xxxxx",
        "password": "xxxxx"
        }
      ```

      New format:

      ```json
      "ci-jira": {
        "username": "xxxxx",
        "password": "xxxxx"
      }
      ```

      </TabItem>

      <TabItem value="gitlab">
      Old format:

      ```json
      "gitlab": {
        "id_rsa": "xxxxxxxxxxxxxx",
        "token": "xxxxxxxxxxxxxx",
        "secretString": "xxxxxxxxxxxxxx"
        }
      ```

      New format:

      ```json
      "ci-gitlab": {
        "id_rsa": "xxxxxxxxxxxxxx",
        "token": "xxxxxxxxxxxxxx",
        "secretString": "xxxxxxxxxxxxxx"
        }

      ```

      </TabItem>

      <TabItem value="github">
      Old format:

      ```json
      "github": {
        "id_rsa": "xxxxxxxxxxxxxx",
        "token": "xxxxxxxxxxxxxx",
        "secretString": "xxxxxxxxxxxxxx"
        }
      ```

      New format:

      ```json
      "ci-github": {
        "id_rsa": "xxxxxxxxxxxxxx",
        "token": "xxxxxxxxxxxxxx",
        "secretString": "xxxxxxxxxxxxxx"
        }

      ```

      </TabItem>

      <TabItem value="nexus">
      Old format:

      ```json
      "nexus-ci-user": {
        "username": "xxxxx",
        "password": "xxxxxxxxxxxxxxxxxx"
        }
      ```

      New format:

      ```json
      "ci-nexus": {
        "username": "xxxxx",
        "password": "xxxxx",
        "url": "http://nexus.example.com"
        }
      ```

      </TabItem>
    </Tabs>

    The tables below illustrate the difference between the old and new format:

    **Old format**

    |Secret Name|Username|Password|Token|Secret|URL|
    |:-:|:-:|:-:|:-:|:-:|:-:|
    |jira-user|:white_check_mark:|:white_check_mark:||||
    |nexus-ci.user|:white_check_mark:|:white_check_mark:||||
    |sonar-ciuser-token|:white_check_mark:|||:white_check_mark:||
    |defectdojo-ciuser-token||||:white_check_mark:|:white_check_mark:|
    |ci-dependency-track||||:white_check_mark:||

    **New format**

    |Secret Name|Username|Password|Token|URL|
    |:-:|:-:|:-:|:-:|:-:|
    |ci-jira|:white_check_mark:|:white_check_mark:|||
    |ci-nexus|:white_check_mark:|:white_check_mark:||:white_check_mark:|
    |ci-sonarqube|||:white_check_mark:|:white_check_mark:|
    |ci-defectdojo|||:white_check_mark:|:white_check_mark:|
    |ci-dependency-track|||:white_check_mark:|:white_check_mark:|

4. To upgrade EDP to the v3.5.3, run the following command:

    ```bash
    helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.5.3
    ```

    :::note
      To verify the installation, it is possible to test the deployment before applying it to the cluster with the `--dry-run` tag:<br />
      `helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.5.3 --dry-run`
    :::
