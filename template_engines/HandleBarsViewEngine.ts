/// <reference path='../typings/tsd.d.ts' />
import * as viewEngine from './ViewEngine'
import * as path from "path";
import * as express from "express";
var hbs = require("express-hbs");

export class HBSTemplate extends viewEngine.ViewEngine {
  public app: express.Express;
  public engine: string;
  public directory: string;

  public configureEngine(obj: any): void {
      super.configureEngine(obj);
      this.app.engine(this.engine, hbs.express4(obj));
  }

}
