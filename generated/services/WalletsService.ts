/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { walletLightingLabsRequest } from '../models/walletLightingLabsRequest';
import type { walletLnUrlRequest } from '../models/walletLnUrlRequest';
import type { walletResponse } from '../models/walletResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WalletsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of all the wallets.
     * @returns walletResponse List of wallets
     * @throws ApiError
     */
    public getWallet(): CancelablePromise<Array<walletResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wallet/',
            errors: {
                400: `Getting wallets failed`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Adds a wallet.
     * @returns walletResponse The created wallet
     * @throws ApiError
     */
    public postWallet({
        requestBody,
    }: {
        requestBody?: (walletLightingLabsRequest | walletLnUrlRequest),
    }): CancelablePromise<walletResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wallet/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Adding wallet failed`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns a list of all the wallets names.
     * @returns any Wallet names list
     * @throws ApiError
     */
    public getWalletNames(): CancelablePromise<Array<{
        id?: string;
        name?: string;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wallet/names',
            errors: {
                400: `Getting wallets failed`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Returns a wallet.
     * @returns walletResponse Wallet
     * @throws ApiError
     */
    public getWallet1({
        id,
    }: {
        id: string,
    }): CancelablePromise<walletResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wallet/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Updates a wallet.
     * @returns walletResponse The updated wallet
     * @throws ApiError
     */
    public putWallet({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: (walletLightingLabsRequest | walletLnUrlRequest),
    }): CancelablePromise<walletResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wallet/{id}',
            path: {
                'id': id,
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
