# Ansible AWX

This section provides instructions on how to configure OIDC authentication for the Ansible AWX using Microsoft Entra as the Identity Provider.

## Prerequisites

- Access to the [Microsoft Entra Admin Center](https://entra.microsoft.com/?feature.msaljs=true#home) with administrative privileges.
- Created Microsoft Entra Tenant.
- Installed Ansible AWX using the [AWX Operator](https://github.com/ansible-community/awx-operator-helm).

## Configuring Microsoft Entra Application

To configure Microsoft Entra as the Identity Provider for the Ansible AWX, it is necessary to create and configure an Application in the Microsoft Entra Admin Center.

1. Log in to the [Microsoft Entra Admin Center](https://entra.microsoft.com/?feature.msaljs=true#home).

    ![Microsoft Entra Admin Center](../../assets/operator-guide/microsoft-entra-auth/microsoft-entra-admin-center.png)

2. In the left sidebar menu, select **Applications** and click **App registrations**.

    ![App registrations](../../assets/operator-guide/microsoft-entra-auth/app-registrations.png)

3. Click on the **New registration** button.

    ![New registration](../../assets/operator-guide/microsoft-entra-auth/new-registration.png)

4. Fill in the required fields, such as **Name**, **Supported account types** and **Redirect URI**. Click **Register** to create the application.

    :::note
    The **Redirect URI** should be in the format `https://<Ansible AWX URL>/sso/complete/azuread-oauth2/`.
    :::

    ![Register application](../../assets/operator-guide/microsoft-entra-auth/register-application.png)

5. In the created application, navigate to the **Certificates & secrets** section from the left sidebar menu. In the **Client secrets** tab, click on the **New client secret** button to create a new secret. Fill in the required fields and click **Add**.

    ![Client secrets](../../assets/operator-guide/microsoft-entra-auth/awx-client-secrets.png)

6. Copy the generated Client secret value and store it securely.

    ![Client secret](../../assets/operator-guide/microsoft-entra-auth/awx-client-secret.png)

7. Navigate to the **API permissions** section. Ensure that the **User.Read** permission is added under the **Microsoft Graph** API. If not, click on the **Add a permission** button, select **Microsoft Graph**, and add the **User.Read** permission. After adding the permission, click on the **Grant admin consent for 'Tenant name'** button to grant the required permissions.

    ![API permissions](../../assets/operator-guide/microsoft-entra-auth/awx-api-permissions.png)

## Configuring Ansible AWX

To integrate Ansible AWX with the configured Microsoft Entra Application, it is necessary to configure the Ansible AWX to use OIDC authentication.

1. Open the Ansible AWX web interface and log in as an administrator.

    ![AWX Login](../../assets/operator-guide/microsoft-entra-auth/awx-login.png)

2. In the left sidebar menu, navigate to **Settings** section. In the **Authentication** tab, click on the **Azure AD settings**.

    ![AWX Settings](../../assets/operator-guide/microsoft-entra-auth/awx-settings.png)

3. Fill in the required fields, such as **Azure AD OAuth2 Key** and **Azure AD OAuth2 Secret**. Click on the **Save** button to apply the changes.

    :::note
    - **Azure AD OAuth2 Key** refers to the **Application (client) ID** of your Microsoft Entra Application.
    - **Azure AD OAuth2 Secret** refers to the **Application Client Secret** value of your Microsoft Entra Application.
    :::

    ![AWX Azure AD Settings](../../assets/operator-guide/microsoft-entra-auth/awx-entra-settings.png)

4. Verify that the OIDC authentication is configured correctly by logging in to the AWX using **Sign in with Azure AD** button.

    ![AWX Login with Azure AD](../../assets/operator-guide/microsoft-entra-auth/awx-login-entra.png)

After completing these steps, the Ansible AWX will be configured to use OIDC authentication with Microsoft Entra as the Identity Provider.

## Related Articles

- [OpenID Connect (OIDC) Authentication Overview](./oidc-authentication-overview.md)
