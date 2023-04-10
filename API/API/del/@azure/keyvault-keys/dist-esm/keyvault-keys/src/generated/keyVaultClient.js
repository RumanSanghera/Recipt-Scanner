/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { KeyVaultClientContext } from "./keyVaultClientContext";
/** @hidden */
export class KeyVaultClient extends KeyVaultClientContext {
    /**
     * Initializes a new instance of the KeyVaultClient class.
     * @param apiVersion Api Version
     * @param options The parameter options
     */
    constructor(apiVersion, options) {
        super(apiVersion, options);
    }
    /**
     * The create key operation can be used to create any key type in Azure Key Vault. If the named key
     * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
     * permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name for the new key. The system will generate the version name for the new key.
     * @param kty The type of key to create. For valid values, see JsonWebKeyType.
     * @param options The options parameters.
     */
    createKey(vaultBaseUrl, keyName, kty, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            kty,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, createKeyOperationSpec);
    }
    /**
     * The import key operation may be used to import any key type into an Azure Key Vault. If the named
     * key already exists, Azure Key Vault creates a new version of the key. This operation requires the
     * keys/import permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName Name for the imported key.
     * @param key The Json web key
     * @param options The options parameters.
     */
    importKey(vaultBaseUrl, keyName, key, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            key,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, importKeyOperationSpec);
    }
    /**
     * The delete key operation cannot be used to remove individual versions of a key. This operation
     * removes the cryptographic material associated with the key, which means the key is not usable for
     * Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations. This operation requires the keys/delete
     * permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key to delete.
     * @param options The options parameters.
     */
    deleteKey(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, deleteKeyOperationSpec);
    }
    /**
     * In order to perform this operation, the key must already exist in the Key Vault. Note: The
     * cryptographic material of a key itself cannot be changed. This operation requires the keys/update
     * permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of key to update.
     * @param keyVersion The version of the key to update.
     * @param options The options parameters.
     */
    updateKey(vaultBaseUrl, keyName, keyVersion, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, updateKeyOperationSpec);
    }
    /**
     * The get key operation is applicable to all key types. If the requested key is symmetric, then no key
     * material is released in the response. This operation requires the keys/get permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key to get.
     * @param keyVersion Adding the version parameter retrieves a specific version of a key. This URI
     *                   fragment is optional. If not specified, the latest version of the key is returned.
     * @param options The options parameters.
     */
    getKey(vaultBaseUrl, keyName, keyVersion, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getKeyOperationSpec);
    }
    /**
     * The full key identifier, attributes, and tags are provided in the response. This operation requires
     * the keys/list permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param options The options parameters.
     */
    getKeyVersions(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getKeyVersionsOperationSpec);
    }
    /**
     * Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public
     * part of a stored key. The LIST operation is applicable to all key types, however only the base key
     * identifier, attributes, and tags are provided in the response. Individual versions of a key are not
     * listed in the response. This operation requires the keys/list permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param options The options parameters.
     */
    getKeys(vaultBaseUrl, options) {
        const operationArguments = {
            vaultBaseUrl,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getKeysOperationSpec);
    }
    /**
     * The Key Backup operation exports a key from Azure Key Vault in a protected form. Note that this
     * operation does NOT return key material in a form that can be used outside the Azure Key Vault
     * system, the returned key material is either protected to a Azure Key Vault HSM or to Azure Key Vault
     * itself. The intent of this operation is to allow a client to GENERATE a key in one Azure Key Vault
     * instance, BACKUP the key, and then RESTORE it into another Azure Key Vault instance. The BACKUP
     * operation may be used to export, in protected form, any key type from Azure Key Vault. Individual
     * versions of a key cannot be backed up. BACKUP / RESTORE can be performed within geographical
     * boundaries only; meaning that a BACKUP from one geographical area cannot be restored to another
     * geographical area. For example, a backup from the US geographical area cannot be restored in an EU
     * geographical area. This operation requires the key/backup permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param options The options parameters.
     */
    backupKey(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, backupKeyOperationSpec);
    }
    /**
     * Imports a previously backed up key into Azure Key Vault, restoring the key, its key identifier,
     * attributes and access control policies. The RESTORE operation may be used to import a previously
     * backed up key. Individual versions of a key cannot be restored. The key is restored in its entirety
     * with the same key name as it had when it was backed up. If the key name is not available in the
     * target Key Vault, the RESTORE operation will be rejected. While the key name is retained during
     * restore, the final key identifier will change if the key is restored to a different vault. Restore
     * will restore all versions and preserve version identifiers. The RESTORE operation is subject to
     * security constraints: The target Key Vault must be owned by the same Microsoft Azure Subscription as
     * the source Key Vault The user must have RESTORE permission in the target Key Vault. This operation
     * requires the keys/restore permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyBundleBackup The backup blob associated with a key bundle.
     * @param options The options parameters.
     */
    restoreKey(vaultBaseUrl, keyBundleBackup, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyBundleBackup,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, restoreKeyOperationSpec);
    }
    /**
     * The ENCRYPT operation encrypts an arbitrary sequence of bytes using an encryption key that is stored
     * in Azure Key Vault. Note that the ENCRYPT operation only supports a single block of data, the size
     * of which is dependent on the target key and the encryption algorithm to be used. The ENCRYPT
     * operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection
     * with an asymmetric key can be performed using public portion of the key. This operation is supported
     * for asymmetric keys as a convenience for callers that have a key-reference but do not have access to
     * the public key material. This operation requires the keys/encrypt permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm algorithm identifier
     * @param value
     * @param options The options parameters.
     */
    encrypt(vaultBaseUrl, keyName, keyVersion, algorithm, value, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            value,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, encryptOperationSpec);
    }
    /**
     * The DECRYPT operation decrypts a well-formed block of ciphertext using the target encryption key and
     * specified algorithm. This operation is the reverse of the ENCRYPT operation; only a single block of
     * data may be decrypted, the size of this block is dependent on the target key and the algorithm to be
     * used. The DECRYPT operation applies to asymmetric and symmetric keys stored in Azure Key Vault since
     * it uses the private portion of the key. This operation requires the keys/decrypt permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm algorithm identifier
     * @param value
     * @param options The options parameters.
     */
    decrypt(vaultBaseUrl, keyName, keyVersion, algorithm, value, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            value,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, decryptOperationSpec);
    }
    /**
     * The SIGN operation is applicable to asymmetric and symmetric keys stored in Azure Key Vault since
     * this operation uses the private portion of the key. This operation requires the keys/sign
     * permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm The signing/verification algorithm identifier. For more information on possible
     *                  algorithm types, see JsonWebKeySignatureAlgorithm.
     * @param value
     * @param options The options parameters.
     */
    sign(vaultBaseUrl, keyName, keyVersion, algorithm, value, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            value,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, signOperationSpec);
    }
    /**
     * The VERIFY operation is applicable to symmetric keys stored in Azure Key Vault. VERIFY is not
     * strictly necessary for asymmetric keys stored in Azure Key Vault since signature verification can be
     * performed using the public portion of the key but this operation is supported as a convenience for
     * callers that only have a key-reference and not the public portion of the key. This operation
     * requires the keys/verify permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm The signing/verification algorithm. For more information on possible algorithm
     *                  types, see JsonWebKeySignatureAlgorithm.
     * @param digest The digest used for signing.
     * @param signature The signature to be verified.
     * @param options The options parameters.
     */
    verify(vaultBaseUrl, keyName, keyVersion, algorithm, digest, signature, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            digest,
            signature,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, verifyOperationSpec);
    }
    /**
     * The WRAP operation supports encryption of a symmetric key using a key encryption key that has
     * previously been stored in an Azure Key Vault. The WRAP operation is only strictly necessary for
     * symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed
     * using the public portion of the key. This operation is supported for asymmetric keys as a
     * convenience for callers that have a key-reference but do not have access to the public key material.
     * This operation requires the keys/wrapKey permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm algorithm identifier
     * @param value
     * @param options The options parameters.
     */
    wrapKey(vaultBaseUrl, keyName, keyVersion, algorithm, value, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            value,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, wrapKeyOperationSpec);
    }
    /**
     * The UNWRAP operation supports decryption of a symmetric key using the target key encryption key.
     * This operation is the reverse of the WRAP operation. The UNWRAP operation applies to asymmetric and
     * symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This
     * operation requires the keys/unwrapKey permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param keyVersion The version of the key.
     * @param algorithm algorithm identifier
     * @param value
     * @param options The options parameters.
     */
    unwrapKey(vaultBaseUrl, keyName, keyVersion, algorithm, value, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            keyVersion,
            algorithm,
            value,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, unwrapKeyOperationSpec);
    }
    /**
     * Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public
     * part of a deleted key. This operation includes deletion-specific information. The Get Deleted Keys
     * operation is applicable for vaults enabled for soft-delete. While the operation can be invoked on
     * any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation
     * requires the keys/list permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param options The options parameters.
     */
    getDeletedKeys(vaultBaseUrl, options) {
        const operationArguments = {
            vaultBaseUrl,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getDeletedKeysOperationSpec);
    }
    /**
     * The Get Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can
     * be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This
     * operation requires the keys/get permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param options The options parameters.
     */
    getDeletedKey(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getDeletedKeyOperationSpec);
    }
    /**
     * The Purge Deleted Key operation is applicable for soft-delete enabled vaults. While the operation
     * can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault.
     * This operation requires the keys/purge permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key
     * @param options The options parameters.
     */
    purgeDeletedKey(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, purgeDeletedKeyOperationSpec);
    }
    /**
     * The Recover Deleted Key operation is applicable for deleted keys in soft-delete enabled vaults. It
     * recovers the deleted key back to its latest version under /keys. An attempt to recover an
     * non-deleted key will return an error. Consider this the inverse of the delete operation on
     * soft-delete enabled vaults. This operation requires the keys/recover permission.
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the deleted key.
     * @param options The options parameters.
     */
    recoverDeletedKey(vaultBaseUrl, keyName, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, recoverDeletedKeyOperationSpec);
    }
    /**
     * GetKeyVersionsNext
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param keyName The name of the key.
     * @param nextLink The nextLink from the previous successful call to the GetKeyVersions method.
     * @param options The options parameters.
     */
    getKeyVersionsNext(vaultBaseUrl, keyName, nextLink, options) {
        const operationArguments = {
            vaultBaseUrl,
            keyName,
            nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getKeyVersionsNextOperationSpec);
    }
    /**
     * GetKeysNext
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param nextLink The nextLink from the previous successful call to the GetKeys method.
     * @param options The options parameters.
     */
    getKeysNext(vaultBaseUrl, nextLink, options) {
        const operationArguments = {
            vaultBaseUrl,
            nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getKeysNextOperationSpec);
    }
    /**
     * GetDeletedKeysNext
     * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
     * @param nextLink The nextLink from the previous successful call to the GetDeletedKeys method.
     * @param options The options parameters.
     */
    getDeletedKeysNext(vaultBaseUrl, nextLink, options) {
        const operationArguments = {
            vaultBaseUrl,
            nextLink,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(operationArguments, getDeletedKeysNextOperationSpec);
    }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);
const createKeyOperationSpec = {
    path: "/keys/{key-name}/create",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            kty: ["kty"],
            keySize: ["options", "keySize"],
            publicExponent: ["options", "publicExponent"],
            keyOps: ["options", "keyOps"],
            keyAttributes: ["options", "keyAttributes"],
            tags: ["options", "tags"],
            curve: ["options", "curve"]
        },
        mapper: Mappers.KeyCreateParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const importKeyOperationSpec = {
    path: "/keys/{key-name}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            hsm: ["options", "hsm"],
            key: ["key"],
            keyAttributes: ["options", "keyAttributes"],
            tags: ["options", "tags"]
        },
        mapper: Mappers.KeyImportParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const deleteKeyOperationSpec = {
    path: "/keys/{key-name}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: Mappers.DeletedKeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const updateKeyOperationSpec = {
    path: "/keys/{key-name}/{key-version}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            keyOps: ["options", "keyOps"],
            keyAttributes: ["options", "keyAttributes"],
            tags: ["options", "tags"]
        },
        mapper: Mappers.KeyUpdateParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getKeyOperationSpec = {
    path: "/keys/{key-name}/{key-version}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getKeyVersionsOperationSpec = {
    path: "/keys/{key-name}/versions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.KeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const getKeysOperationSpec = {
    path: "/keys",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.KeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [Parameters.vaultBaseUrl],
    headerParameters: [Parameters.accept],
    serializer
};
const backupKeyOperationSpec = {
    path: "/keys/{key-name}/backup",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.BackupKeyResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const restoreKeyOperationSpec = {
    path: "/keys/restore",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: { keyBundleBackup: ["keyBundleBackup"] },
        mapper: Mappers.KeyRestoreParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const encryptOperationSpec = {
    path: "/keys/{key-name}/{key-version}/encrypt",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyOperationResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            algorithm: ["algorithm"],
            value: ["value"],
            iv: ["options", "iv"],
            additionalAuthenticatedData: ["options", "additionalAuthenticatedData"],
            authenticationTag: ["options", "authenticationTag"]
        },
        mapper: Mappers.KeyOperationsParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const decryptOperationSpec = {
    path: "/keys/{key-name}/{key-version}/decrypt",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyOperationResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            algorithm: ["algorithm"],
            value: ["value"],
            iv: ["options", "iv"],
            additionalAuthenticatedData: ["options", "additionalAuthenticatedData"],
            authenticationTag: ["options", "authenticationTag"]
        },
        mapper: Mappers.KeyOperationsParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const signOperationSpec = {
    path: "/keys/{key-name}/{key-version}/sign",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyOperationResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: { algorithm: ["algorithm"], value: ["value"] },
        mapper: Mappers.KeySignParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const verifyOperationSpec = {
    path: "/keys/{key-name}/{key-version}/verify",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyVerifyResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            algorithm: ["algorithm"],
            digest: ["digest"],
            signature: ["signature"]
        },
        mapper: Mappers.KeyVerifyParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const wrapKeyOperationSpec = {
    path: "/keys/{key-name}/{key-version}/wrapkey",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyOperationResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            algorithm: ["algorithm"],
            value: ["value"],
            iv: ["options", "iv"],
            additionalAuthenticatedData: ["options", "additionalAuthenticatedData"],
            authenticationTag: ["options", "authenticationTag"]
        },
        mapper: Mappers.KeyOperationsParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const unwrapKeyOperationSpec = {
    path: "/keys/{key-name}/{key-version}/unwrapkey",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyOperationResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    requestBody: {
        parameterPath: {
            algorithm: ["algorithm"],
            value: ["value"],
            iv: ["options", "iv"],
            additionalAuthenticatedData: ["options", "additionalAuthenticatedData"],
            authenticationTag: ["options", "authenticationTag"]
        },
        mapper: Mappers.KeyOperationsParameters
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.keyVersion
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getDeletedKeysOperationSpec = {
    path: "/deletedkeys",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.DeletedKeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [Parameters.vaultBaseUrl],
    headerParameters: [Parameters.accept],
    serializer
};
const getDeletedKeyOperationSpec = {
    path: "/deletedkeys/{key-name}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.DeletedKeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const purgeDeletedKeyOperationSpec = {
    path: "/deletedkeys/{key-name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const recoverDeletedKeyOperationSpec = {
    path: "/deletedkeys/{key-name}/recover",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.KeyBundle
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.keyName1],
    headerParameters: [Parameters.accept],
    serializer
};
const getKeyVersionsNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.KeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [
        Parameters.vaultBaseUrl,
        Parameters.keyName1,
        Parameters.nextLink
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getKeysNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.KeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.nextLink],
    headerParameters: [Parameters.accept],
    serializer
};
const getDeletedKeysNextOperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.DeletedKeyListResult
        },
        default: {
            bodyMapper: Mappers.KeyVaultError
        }
    },
    queryParameters: [Parameters.apiVersion, Parameters.maxresults],
    urlParameters: [Parameters.vaultBaseUrl, Parameters.nextLink],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=keyVaultClient.js.map