/// <reference path='../typings/tsd.d.ts' />
import * as express from "express";
import * as path from "path";

export abstract class ViewEngine {
  protected app: express.Express;
  protected engine: string;
  protected directory: string;
  public configureEngine(obj: any): void {}

  constructor(app: express.Express, engine: string, directory: string) {
    this.app = app;
    this.engine = engine;
    this.directory = directory;

    //Set Engine
    this.app.set('view engine', this.engine);
    //Need to make sure we go back one directory and then join it.
    this.app.set(this.directory, path.join(__dirname, "../", this.directory));
  }
}
