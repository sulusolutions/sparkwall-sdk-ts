/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AnalyticsService } from './services/AnalyticsService';
import { ApIsService } from './services/ApIsService';
import { HealthService } from './services/HealthService';
import { InvoicesService } from './services/InvoicesService';
import { PackagesService } from './services/PackagesService';
import { RequestsService } from './services/RequestsService';
import { WalletsService } from './services/WalletsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class SparkwallApi {
    public readonly analytics: AnalyticsService;
    public readonly apIs: ApIsService;
    public readonly health: HealthService;
    public readonly invoices: InvoicesService;
    public readonly packages: PackagesService;
    public readonly requests: RequestsService;
    public readonly wallets: WalletsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.analytics = new AnalyticsService(this.request);
        this.apIs = new ApIsService(this.request);
        this.health = new HealthService(this.request);
        this.invoices = new InvoicesService(this.request);
        this.packages = new PackagesService(this.request);
        this.requests = new RequestsService(this.request);
        this.wallets = new WalletsService(this.request);
    }
}

