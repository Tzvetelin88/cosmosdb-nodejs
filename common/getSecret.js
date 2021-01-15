const KeyVaultSecret = require('@azure/keyvault-secrets');
const identity = require('@azure/identity');
const keyVaultName = process.env["KeyVaultName"];
const KVUri = "https://" + keyVaultName + ".vault.azure.net";
const KEY_VAULT_URL = null || KVUri;

function getKeyVaultCredentials() {
    return new identity.ChainedTokenCredential(new identity.DefaultAzureCredential());
}

function getSecret(secretName) {
    const credentials = getKeyVaultCredentials();
    const keyVaultClient = new KeyVaultSecret.SecretClient(KEY_VAULT_URL, credentials);
    return keyVaultClient.getSecret(secretName);
}

function setSecret(secretName, secretValue, options) {
    const credentials = getKeyVaultCredentials();
    const keyVaultClient = new KeyVaultSecret.SecretClient(KEY_VAULT_URL, credentials);
    return keyVaultClient.setSecret(secretName, secretValue, options);
}

module.exports = { getSecret, setSecret }
