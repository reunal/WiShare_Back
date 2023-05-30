export class ResponseDto {
  constructor(serviceStatusCode: string, data: any) {
    this.serviceStatusCode = serviceStatusCode;
    this.data = data;
  }
  serviceStatusCode: string;
  data: any;
}
