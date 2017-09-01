import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

// A centralized class to interact with any service for data communication
@autoinject()
export class HttpService {

    constructor(private httpClient: HttpClient) {

        httpClient.configure(config => {
            config
                //.withBaseUrl('api/') // append api fragment in base url
                .withDefaults({ // set default headers and other data
                    //credentials: 'same-origin', // when orgin is same
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                // interceptor for request and response
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });

            //config.rejectErrorResponses(); //will add a response interceptor that causes responses with unsuccessful status codes to result in a rejected Promise.

        });
    }

    // POST JSON with Fetch api 
    postJson(urlFragment: string, object: Object) {
        let response = this.postRequest(urlFragment, object)
            .then(t => t.json()); // can return json, text, arrayBuffer, blob or formData

        return response;
    }

    // GET JSON with Fetch api
    getJson(urlFragment: string) {
        let response = this.getRequest(urlFragment)
            .then(t => t.json()); // can return json, text, arrayBuffer, blob or formData
        return response;
    }

    // GET String with Fetch api
    getString(urlFragment: string) {
        let response = this.getRequest(urlFragment)
            .then(t => t.text()); // can return json, text, arrayBuffer, blob or formData
        return response;
    }

    // private methods ***********
    private getRequest(urlFragment: string): Promise<Response> {
        return this.httpClient.fetch(urlFragment, {
            method: 'get'
        });
    }

    private postRequest(urlFragment: string, object: Object): Promise<Response> {
        let response = this.httpClient.fetch(urlFragment, {
            method: 'post',
            body: json(object)
        });
        return response;
    }
}
