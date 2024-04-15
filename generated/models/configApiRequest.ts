/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type configApiRequest = {
    name?: string;
    description?: string;
    category?: string;
    backendHostname?: string;
    protocol?: configApiRequest.protocol;
    headers?: Array<{
        key: string;
        value: string;
    }>;
    tlsCertificate?: string;
    healthCheckUrl?: string;
    healthCheckStatus?: configApiRequest.healthCheckStatus;
};
export namespace configApiRequest {
    export enum protocol {
        HTTP = 'http',
        HTTPS = 'https',
    }
    export enum healthCheckStatus {
        INACTIVE = 'inactive',
        PENDING = 'pending',
        FAILED = 'failed',
        SUCCESS = 'success',
    }
}

