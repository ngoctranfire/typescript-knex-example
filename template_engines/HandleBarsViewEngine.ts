/// <reference path='../typings/tsd.d.ts' />
import {ViewEngine} from './ViewEngine'
import * as path from "path";
import * as express from "express";
var hbs = require("express-hbs");

export class HBSTemplate extends ViewEngine {
  public configureEngine(obj: any): void {
      super.configureEngine(obj);
      this.app.engine(this.engine, hbs.express4(obj));
  }

}
