/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type walletResponse = {
    id?: string;
    version?: number;
    name?: string;
    pub?: string;
    type?: string;
    framework?: string;
    endpointUrl?: string;
    lnurl?: string;
    packages?: Array<{
        id?: string;
        version?: number;
        name?: string;
        description?: string;
        config_plan_id?: string;
        wallet_id?: string;
    }>;
};

