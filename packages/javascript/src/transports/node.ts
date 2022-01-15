import { Http, HttpRequestOptions } from "node-https"
import { Transport } from "../interfaces/transport"

const http = new Http()

export class NodeTransport implements Transport {
  public url: string

  constructor(url: string) {
    this.url = url
  }

  public send(data: string): Promise<any> {
    const options: HttpRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
      }
    }

    return http.request(this.url, "POST", options)
  }
}
