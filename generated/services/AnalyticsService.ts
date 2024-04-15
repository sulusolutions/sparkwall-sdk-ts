/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AnalyticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the cumulative revenue in sats for the given period.
     * @returns any Cumulative revenue in sats for the given period
     * @throws ApiError
     */
    public getAnalyticsRevenue({
        from,
        to,
        interval,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/revenue',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns the number of transactions for the given period.
     * @returns any Number of transactions for the given period
     * @throws ApiError
     */
    public getAnalyticsTransactions({
        from,
        to,
        interval,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/transactions',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns the number of requests for the given period.
     * @returns any Number of requests for the given period
     * @throws ApiError
     */
    public getAnalyticsRequestsNumber({
        from,
        to,
        interval,
        accumulate,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
        /**
         * Get the number of requests cumulatively
         */
        accumulate?: boolean,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/requests-number',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
                'accumulate': accumulate,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns the number of incidents for the given period.
     * @returns any Number of incidents for the given period
     * @throws ApiError
     */
    public getAnalyticsIncidents({
        from,
        to,
        interval,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/incidents',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns the latency for the given period.
     * @returns any Latency for the given period
     * @throws ApiError
     */
    public getAnalyticsLatency({
        from,
        to,
        interval,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/latency',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns the number of unpaid invoices for the given period.
     * @returns any Number of unpaid invoices for the given period
     * @throws ApiError
     */
    public getAnalyticsUnpaidInvoices({
        from,
        to,
        interval,
    }: {
        /**
         * Epoch timestamp representing the starting point of the query
         */
        from: number,
        /**
         * Epoch timestamp representing the ending point of the query
         */
        to: number,
        /**
         * Interval in minutes between the data points
         */
        interval: number,
    }): CancelablePromise<{
        data?: Array<{
            time?: string;
            data?: number;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/analytics/unpaid-invoices',
            query: {
                'from': from,
                'to': to,
                'interval': interval,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
}
