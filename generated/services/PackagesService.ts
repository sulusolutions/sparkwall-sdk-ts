/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { configPackageResponse } from '../models/configPackageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of all the packages for an API.
     * @returns configPackageResponse List of packages for the API
     * @throws ApiError
     */
    public getConfigApiPackages({
        apiId,
    }: {
        apiId: string,
    }): CancelablePromise<Array<configPackageResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/{apiId}/packages/',
            path: {
                'apiId': apiId,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                404: `API not found`,
            },
        });
    }
    /**
     * Adds a package for an API.
     * @returns configPackageResponse Package added
     * @throws ApiError
     */
    public postConfigApiPackages({
        apiId,
        requestBody,
    }: {
        apiId: string,
        requestBody: any,
    }): CancelablePromise<configPackageResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/config/api/{apiId}/packages/',
            path: {
                'apiId': apiId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns a package for an API.
     * @returns configPackageResponse Package for the API
     * @throws ApiError
     */
    public getConfigApiPackages1({
        apiId,
        id,
    }: {
        apiId: string,
        id: string,
    }): CancelablePromise<configPackageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/{apiId}/packages/{id}',
            path: {
                'apiId': apiId,
                'id': id,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                404: `Package not found`,
            },
        });
    }
    /**
     * Updates a package for an API.
     * @returns configPackageResponse Package updated
     * @throws ApiError
     */
    public putConfigApiPackages({
        apiId,
        requestBody,
    }: {
        apiId: string,
        requestBody: any,
    }): CancelablePromise<configPackageResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/config/api/{apiId}/packages/{id}',
            path: {
                'apiId': apiId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
}
