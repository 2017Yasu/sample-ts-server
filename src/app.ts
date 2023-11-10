import * as http from "http";

export class App {
  private _server: http.Server;
  /**
   * App constructor
   */
  constructor() {
    this._server = http.createServer((request, response) => {
      response.end("Hello! Node.js with TypeScript");
    });
  }

  /**
   * Run server
   */
  public run(port: number) {
    this._server.listen(port);
    console.log(`Access http://localhost:${port}`);
  }
}
