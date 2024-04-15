/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Return a list of all the requests.
     * @returns any Paginated list of requests
     * @throws ApiError
     */
    public getRequests({
        page,
        pageSize,
        statusCodes,
        requestedFrom,
        requestedTo,
    }: {
        /**
         * Works as a cursor in paginated response. If the value is `n` it will offset the result by `(n - 1)` times `pageSize`.
         */
        page: number,
        /**
         * A limit on the number of objects to return.
         */
        pageSize: number,
        /**
         * Filters the response for the given HTTP status codes
         */
        statusCodes?: Array<number>,
        /**
         * Filters the response for requests requested after the given date
         */
        requestedFrom?: number,
        /**
         * Filters the response for requests requested before the given date
         */
        requestedTo?: number,
    }): CancelablePromise<{
        data?: Array<{
            id?: number;
            method?: string;
            path?: string;
            remote_addr?: string;
            user_agent?: string;
            response_status?: number;
            duration?: string;
            request_timestamp?: string;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requests',
            query: {
                'page': page,
                'pageSize': pageSize,
                'statusCodes': statusCodes,
                'requestedFrom': requestedFrom,
                'requestedTo': requestedTo,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
}
