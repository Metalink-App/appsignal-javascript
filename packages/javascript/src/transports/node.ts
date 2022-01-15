let request = require("native-request")
import { Transport } from "../interfaces/transport"

export class NodeTransport implements Transport {
  public url: string

  constructor(url: string) {
    this.url = url
  }

  public send(data: string): Promise<any> {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
      }
    }

    return new Promise((resolve, reject) => {
      const req = request
        .request(this.url, {}, () => {})
        .on("error", (error: any) => reject(error))

      req.write(data)
      req.end()

      resolve({})
    })
  }
}
