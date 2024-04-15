/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type configPackageResponse = {
    id?: string;
    name?: string;
    description?: string;
    wallet?: {
        id?: string;
        name?: string;
    };
    plan?: {
        id?: string;
        name?: string;
        type?: configPackageResponse.type;
        currency?: string;
        price?: number;
        durationInput?: number;
        durationUnit?: configPackageResponse.durationUnit;
        numberOfCalls?: number;
    };
};
export namespace configPackageResponse {
    export enum type {
        PAY_PER_CALL = 'Pay-per-call',
        PAY_PER_N_CALLS = 'Pay-per-n-calls',
        PAY_PER_TIME = 'Pay-per-time',
    }
    export enum durationUnit {
        IN_MINUTES = 'in minutes',
        IN_HOURS = 'in hours',
        IN_DAYS = 'in days',
        IN_WEEKS = 'in weeks',
        IN_MONTHS = 'in months',
    }
}

