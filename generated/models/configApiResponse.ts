/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type configApiResponse = {
    id?: string;
    name?: string;
    description?: string;
    category?: string;
    backendHostname?: string;
    protocol?: configApiResponse.protocol;
    headers?: Array<{
        key?: string;
        value?: string;
    }>;
    sparkwallHostname?: string;
    tlsCertificate?: string;
    healthCheckUrl?: string;
    healthCheckStatus?: configApiResponse.healthCheckStatus;
    state?: configApiResponse.state;
};
export namespace configApiResponse {
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
    export enum state {
        INCOMPLETE = 'incomplete',
        READY = 'ready',
        PUBLISHING = 'publishing',
        PUBLISHED = 'published',
    }
}

