/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Health check
     * @returns any Health check OK
     * @throws ApiError
     */
    public getHealth(): CancelablePromise<{
        health?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
}
