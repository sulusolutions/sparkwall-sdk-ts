/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InvoicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of all the invoices.
     * @returns any Paginated list of invoices
     * @throws ApiError
     */
    public getInvoices({
        page,
        pageSize,
        statusArray,
        createdFrom,
        createdTo,
        paidFrom,
        paidTo,
        minValue,
        maxValue,
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
         * Array of invoice statuses to filter the queried invoices for. Possible values: OPEN, SETTLED, CANCELED
         */
        statusArray?: Array<'OPEN' | 'SETTLED' | 'CANCELED'>,
        /**
         * Epoch timestamp representing the point of time after the queried invoices created
         */
        createdFrom?: number,
        /**
         * Epoch timestamp representing the point of time before the queried invoices created
         */
        createdTo?: number,
        /**
         * Epoch timestamp representing the point of time after the queried invoices paid
         */
        paidFrom?: number,
        /**
         * Epoch timestamp representing the point of time before the queried invoices paid
         */
        paidTo?: number,
        /**
         * Sat value representing the minimum value of the queried invoices
         */
        minValue?: string,
        /**
         * Sat value representing the maximum value of the queried invoices
         */
        maxValue?: string,
    }): CancelablePromise<{
        data?: Array<{
            uuid?: string;
            state?: string;
            timestamp_created?: string;
            timestamp_paid?: string;
            sats?: string;
        }>;
        /**
         * Total number of rows
         */
        numRows?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/invoices',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status[]': statusArray,
                'createdFrom': createdFrom,
                'createdTo': createdTo,
                'paidFrom': paidFrom,
                'paidTo': paidTo,
                'minValue': minValue,
                'maxValue': maxValue,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns a generated excel file containing a list of all the invoices.
     * @returns any Excel file containing a list of invoices
     * @throws ApiError
     */
    public getInvoicesXlsxExport({
        statusArray,
        createdFrom,
        createdTo,
        paidFrom,
        paidTo,
        minValue,
        maxValue,
    }: {
        /**
         * Array of invoice statuses to filter the queried invoices for. Possible values: OPEN, SETTLED, CANCELED
         */
        statusArray?: Array<'OPEN' | 'SETTLED' | 'CANCELED'>,
        /**
         * Epoch timestamp representing the point of time after the queried invoices created
         */
        createdFrom?: number,
        /**
         * Epoch timestamp representing the point of time before the queried invoices created
         */
        createdTo?: number,
        /**
         * Epoch timestamp representing the point of time after the queried invoices paid
         */
        paidFrom?: number,
        /**
         * Epoch timestamp representing the point of time before the queried invoices paid
         */
        paidTo?: number,
        /**
         * Sat value representing the minimum value of the queried invoices
         */
        minValue?: string,
        /**
         * Sat value representing the maximum value of the queried invoices
         */
        maxValue?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/invoices/xlsx-export',
            query: {
                'status[]': statusArray,
                'createdFrom': createdFrom,
                'createdTo': createdTo,
                'paidFrom': paidFrom,
                'paidTo': paidTo,
                'minValue': minValue,
                'maxValue': maxValue,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
}
