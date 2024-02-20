var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename, getDirname, __dirname;
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
    getFilename = () => fileURLToPath(import.meta.url);
    getDirname = () => path.dirname(getFilename());
    __dirname = /* @__PURE__ */ getDirname();
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module) {
    init_esm_shims();
    var fs2 = __require("fs");
    var path4 = __require("path");
    var os2 = __require("os");
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _log(message) {
      console.log(`[dotenv][DEBUG] ${message}`);
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path4.join(os2.homedir(), envPath.slice(1)) : envPath;
    }
    function config(options) {
      let dotenvPath = path4.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (options) {
        if (options.path != null) {
          dotenvPath = _resolveHome(options.path);
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
      }
      try {
        const parsed = DotenvModule.parse(fs2.readFileSync(dotenvPath, { encoding }));
        Object.keys(parsed).forEach(function(key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else {
            if (override === true) {
              process.env[key] = parsed[key];
            }
            if (debug) {
              if (override === true) {
                _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
              } else {
                _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
              }
            }
          }
        });
        return { parsed };
      } catch (e) {
        if (debug) {
          _log(`Failed to load ${dotenvPath} ${e.message}`);
        }
        return { error: e };
      }
    }
    var DotenvModule = {
      config,
      parse
    };
    module.exports.config = DotenvModule.config;
    module.exports.parse = DotenvModule.parse;
    module.exports = DotenvModule;
  }
});

// src/app.ts
init_esm_shims();

// src/dotenv.ts
init_esm_shims();
var import_dotenv = __toESM(require_main());
var ENV = process.env.NODE_ENV || "production";
import_dotenv.default.config({ path: `env/.env.${ENV}` });

// src/app.ts
import { EventEmitter } from "events";

// src/server.ts
init_esm_shims();
import Koa from "koa";
import path3 from "path";
import helmet from "koa-helmet";
import cors from "koa2-cors";
import Router from "koa-router";
import koaStatic from "koa-static";
import websockify from "koa-websocket";
import body from "koa-body";
import koaValidator from "koa-async-validator";
import route from "koa-route";
import KoaLogger from "koa-logger";
import chalk2 from "chalk";
import consola2 from "consola";

// src/routes.ts
init_esm_shims();

// src/controller/UserController.ts
init_esm_shims();

// src/service/UserService.ts
init_esm_shims();

// src/config/result.ts
init_esm_shims();
var Result = class {
  static success(data, message) {
    return {
      code: 0,
      message,
      data
    };
  }
};

// src/service/UserService.ts
var fakeUserInfo = {
  userId: "1",
  username: "vben",
  realName: "Vben Admin",
  desc: "manager",
  password: "123456",
  token: "fakeToken1",
  roles: [
    {
      roleName: "Super Admin",
      value: "super"
    }
  ]
};
var UserService = class {
  async login() {
    return Result.success(fakeUserInfo, "login success");
  }
  async getUserInfoById() {
    return Result.success(fakeUserInfo, "get user info success");
  }
};

// src/controller/UserController.ts
var UserController = class {
  constructor() {
    this.service = new UserService();
    this.login = async (ctx) => {
      try {
        ctx.checkBody("phone", "required").notEmpty();
        ctx.checkBody("code", "required").notEmpty();
        const errors = await ctx.validationErrors();
        if (errors)
          throw { code: 400, message: JSON.stringify(errors) };
        ctx.body = await this.service.login();
      } catch (err) {
        ctx.body = {
          code: err.code || 1,
          message: err.message || "\u8BF7\u6C42\u5931\u8D25"
        };
      }
    };
    this.getUserInfoById = async (ctx) => {
      try {
        ctx.checkQuery("userId", "required").notEmpty();
        const errors = await ctx.validationErrors();
        if (errors)
          throw { code: 400, message: JSON.stringify(errors) };
        ctx.body = await this.service.getUserInfoById();
      } catch (err) {
        ctx.body = {
          code: err.code || 1,
          message: err.message || "\u8BF7\u6C42\u5931\u8D25"
        };
      }
    };
  }
};
var UserController_default = new UserController();

// src/controller/FileController.ts
init_esm_shims();

// src/service/FileService.ts
init_esm_shims();
import path2 from "path";
import fs from "fs-extra";

// src/config/index.ts
init_esm_shims();

// src/utils/index.ts
init_esm_shims();
import os from "os";

// src/utils/is.ts
init_esm_shims();

// src/utils/index.ts
var getIPAdress = () => {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
        return alias.address;
      }
    }
  }
};

// src/config/index.ts
var ROUTER_PREFIX = process.env.ROUTER_PREFIX || "/koa";
var REDIS = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PWD,
  db: Number(process.env.REDIS_DB),
  namespace: process.env.REDIS_NAMESPACE
};
var APP_PORT = Number(process.env.APP_PORT) || 3e3;
var APP_HOST = process.env.APP_HOST;
var IP_ADDRESS = getIPAdress();
var MONGODB_URI = process.env.MONGODB_URI;
var MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

// src/service/FileService.ts
var uploadUrl = `http://${APP_HOST === "0.0.0.0" ? IP_ADDRESS : APP_HOST}:${APP_PORT}/upload`;
var filePath = path2.resolve("static/upload/");
fs.ensureDir(filePath);
var UserService2 = class {
  async upload(ctx, files) {
    let fileReader, fileResource, writeStream;
    const isMultiple = Array.isArray(files);
    const fileFunc = function(file) {
      fileReader = fs.createReadStream(file.path);
      fileResource = filePath + `/${file.name}`;
      writeStream = fs.createWriteStream(fileResource);
      fileReader.pipe(writeStream);
    };
    const returnFunc = function() {
      if (isMultiple) {
        let url = "";
        for (let i = 0; i < files.length; i++) {
          url += uploadUrl + `/${files[i].name},`;
        }
        url = url.replace(/,$/gi, "");
        ctx.body = Result.success(url, "upload success");
      } else {
        ctx.body = Result.success(uploadUrl + `/${files.name}`, "upload success");
      }
    };
    if (isMultiple) {
      for (let i = 0; i < files.length; i++) {
        const f1 = files[i];
        fileFunc(f1);
      }
    } else {
      fileFunc(files);
    }
    fs.ensureDir(filePath);
    returnFunc();
  }
};

// src/controller/FileController.ts
var FileController = class {
  constructor() {
    this.service = new UserService2();
    this.upload = async (ctx) => {
      const files = ctx.request.files.file;
      this.service.upload(ctx, files);
    };
  }
};
var FileController_default = new FileController();

// src/routes.ts
var routes_default = [
  {
    path: "/login",
    method: "post",
    action: UserController_default.login
  },
  {
    path: "/getUserInfoById",
    method: "get",
    action: UserController_default.getUserInfoById
  },
  {
    path: "/upload",
    method: "post",
    action: FileController_default.upload
  }
];

// src/middlewares/staticValidator.ts
init_esm_shims();
var blackList = ["contracts"];
var staticValidator_default = async (ctx, next) => {
  if (blackList.some((item) => ctx.path.startsWith(`/${item}`))) {
    const error = Object.assign(new Error("static forbidden\uFF01"), {
      statusCode: 403
    });
    throw error;
  }
  await next();
};

// src/middlewares/errorHandler.ts
init_esm_shims();
import chalk from "chalk";
import consola from "consola";
var errorHandler_default = async (ctx, next) => {
  var _a;
  try {
    await next();
    const code = (_a = ctx.body) == null ? void 0 : _a.code;
    if (code && code !== 0) {
      consola.error(chalk.red(`${code}-error:`, ctx.body.message));
    }
  } catch (err) {
    const status = err.statusCode || err.status || 500;
    consola.error(chalk.red(`${status}-error:`, err.message));
    ctx.status = status;
    ctx.body = {
      code: status,
      message: err.message
    };
  }
};

// src/server.ts
var app = websockify(new Koa());
app.ws.use(function(ctx, next) {
  ctx.websocket.send("connection succeeded!");
  return next();
});
app.ws.use(route.all("/test", function(ctx) {
  ctx.websocket.on("message", function(message) {
    if (message !== "ping") {
      const data = JSON.stringify({
        id: Math.ceil(Math.random() * 1e3),
        time: new Date().getTime(),
        res: `${message}`
      });
      ctx.websocket.send(data);
    } else {
      chalk2.green(`WS: ${message} received`);
    }
  });
}));
var logger = KoaLogger();
app.use(logger);
app.use(helmet({
  referrerPolicy: { policy: "origin" },
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(body({
  multipart: true,
  formidable: {
    keepExtensions: true,
    maxFieldsSize: 20 * 1024 * 1024
  }
}));
app.use(errorHandler_default);
app.use(staticValidator_default);
app.use(koaStatic(path3.resolve(__dirname, "../static"), { gzip: true }));
app.use(koaValidator({
  customValidators: {
    isArray: (value) => Array.isArray(value)
  }
}));
var router = new Router({ prefix: ROUTER_PREFIX });
routes_default.forEach((route2) => router[route2.method](route2.path, route2.action));
app.use(router.routes());
app.use(router.allowedMethods());
var startService = async (pid = process.pid) => {
  app.listen(APP_PORT, APP_HOST, () => {
    const server = APP_HOST === "0.0.0.0" ? `http://${IP_ADDRESS}:${APP_PORT} & http://127.0.0.1:${APP_PORT}` : `http://${APP_HOST}:${APP_PORT}`;
    consola2.ready({
      message: `Server ${pid} listening on ${server} in ${app.env}`,
      badge: true
    });
  });
};
var server_default = startService;

// src/app.ts
EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(-1);
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection:", reason);
});
server_default();
