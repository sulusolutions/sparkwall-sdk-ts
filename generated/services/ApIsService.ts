/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { configApiRequest } from '../models/configApiRequest';
import type { configApiResponse } from '../models/configApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApIsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of all the APIs.
     * @returns configApiResponse Paginated list of APIs
     * @throws ApiError
     */
    public getConfigApi(): CancelablePromise<Array<configApiResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Adds an API.
     * @returns configApiResponse API added
     * @throws ApiError
     */
    public postConfigApi({
        requestBody,
    }: {
        requestBody?: configApiRequest,
    }): CancelablePromise<configApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/config/api/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Error adding API`,
            },
        });
    }
    /**
     * Check if company has APIs
     * @returns any Return true if company has APIs
     * @throws ApiError
     */
    public getConfigApiHas(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/has',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Check if company has deleted APIs
     * @returns any Return true if company has deleted APIs
     * @throws ApiError
     */
    public getConfigApiHad(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/had',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get generated hostname preview
     * @returns any Return generated hostname preview
     * @throws ApiError
     */
    public getConfigApiHostnamePreview({
        name,
    }: {
        name: string,
    }): CancelablePromise<{
        host?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/hostnamePreview/{name}',
            path: {
                'name': name,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns an API.
     * @returns configApiResponse API
     * @throws ApiError
     */
    public getConfigApi1({
        id,
    }: {
        id: string,
    }): CancelablePromise<configApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/api/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                404: `API not found`,
            },
        });
    }
    /**
     * Updates an API.
     * @returns configApiResponse API updated
     * @throws ApiError
     */
    public putConfigApi({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: configApiRequest,
    }): CancelablePromise<configApiResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/config/api/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                500: `Error updating API`,
            },
        });
    }
    /**
     * Deletes an API.
     * @returns any API deleted
     * @throws ApiError
     */
    public deleteConfigApi({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/config/api/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                500: `Error deleting API`,
            },
        });
    }
    /**
     * Publishes an API.
     * @returns configApiResponse API published
     * @throws ApiError
     */
    public postConfigApiPublish({
        id,
    }: {
        id: string,
    }): CancelablePromise<configApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/config/api/publish/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
                500: `Error publishing API`,
            },
        });
    }
}
