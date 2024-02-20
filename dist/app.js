var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
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

// node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module2) {
    init_cjs_shims();
    var fs2 = require("fs");
    var path3 = require("path");
    var os2 = require("os");
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
      return envPath[0] === "~" ? path3.join(os2.homedir(), envPath.slice(1)) : envPath;
    }
    function config(options) {
      let dotenvPath = path3.resolve(process.cwd(), ".env");
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
    module2.exports.config = DotenvModule.config;
    module2.exports.parse = DotenvModule.parse;
    module2.exports = DotenvModule;
  }
});

// src/app.ts
init_cjs_shims();

// src/dotenv.ts
init_cjs_shims();
var import_dotenv = __toESM(require_main());
var ENV = process.env.NODE_ENV || "production";
import_dotenv.default.config({ path: `env/.env.${ENV}` });

// src/app.ts
var import_events = require("events");

// src/server.ts
init_cjs_shims();
var import_koa = __toESM(require("koa"));
var import_path2 = __toESM(require("path"));
var import_koa_helmet = __toESM(require("koa-helmet"));
var import_koa2_cors = __toESM(require("koa2-cors"));
var import_koa_router = __toESM(require("koa-router"));
var import_koa_static = __toESM(require("koa-static"));
var import_koa_websocket = __toESM(require("koa-websocket"));
var import_koa_body = __toESM(require("koa-body"));
var import_koa_async_validator = __toESM(require("koa-async-validator"));
var import_koa_route = __toESM(require("koa-route"));
var import_koa_logger = __toESM(require("koa-logger"));
var import_chalk2 = __toESM(require("chalk"));
var import_consola2 = __toESM(require("consola"));

// src/routes.ts
init_cjs_shims();

// src/controller/UserController.ts
init_cjs_shims();

// src/service/UserService.ts
init_cjs_shims();

// src/config/result.ts
init_cjs_shims();
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
init_cjs_shims();

// src/service/FileService.ts
init_cjs_shims();
var import_path = __toESM(require("path"));
var import_fs_extra = __toESM(require("fs-extra"));

// src/config/index.ts
init_cjs_shims();

// src/utils/index.ts
init_cjs_shims();
var import_os = __toESM(require("os"));

// src/utils/is.ts
init_cjs_shims();

// src/utils/index.ts
var getIPAdress = () => {
  const interfaces = import_os.default.networkInterfaces();
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
var filePath = import_path.default.resolve("static/upload/");
import_fs_extra.default.ensureDir(filePath);
var UserService2 = class {
  async upload(ctx, files) {
    let fileReader, fileResource, writeStream;
    const isMultiple = Array.isArray(files);
    const fileFunc = function(file) {
      fileReader = import_fs_extra.default.createReadStream(file.path);
      fileResource = filePath + `/${file.name}`;
      writeStream = import_fs_extra.default.createWriteStream(fileResource);
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
    import_fs_extra.default.ensureDir(filePath);
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
init_cjs_shims();
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
init_cjs_shims();
var import_chalk = __toESM(require("chalk"));
var import_consola = __toESM(require("consola"));
var errorHandler_default = async (ctx, next) => {
  var _a;
  try {
    await next();
    const code = (_a = ctx.body) == null ? void 0 : _a.code;
    if (code && code !== 0) {
      import_consola.default.error(import_chalk.default.red(`${code}-error:`, ctx.body.message));
    }
  } catch (err) {
    const status = err.statusCode || err.status || 500;
    import_consola.default.error(import_chalk.default.red(`${status}-error:`, err.message));
    ctx.status = status;
    ctx.body = {
      code: status,
      message: err.message
    };
  }
};

// src/server.ts
var app = (0, import_koa_websocket.default)(new import_koa.default());
app.ws.use(function(ctx, next) {
  ctx.websocket.send("connection succeeded!");
  return next();
});
app.ws.use(import_koa_route.default.all("/test", function(ctx) {
  ctx.websocket.on("message", function(message) {
    if (message !== "ping") {
      const data = JSON.stringify({
        id: Math.ceil(Math.random() * 1e3),
        time: new Date().getTime(),
        res: `${message}`
      });
      ctx.websocket.send(data);
    } else {
      import_chalk2.default.green(`WS: ${message} received`);
    }
  });
}));
var logger = (0, import_koa_logger.default)();
app.use(logger);
app.use((0, import_koa_helmet.default)({
  referrerPolicy: { policy: "origin" },
  contentSecurityPolicy: false
}));
app.use((0, import_koa2_cors.default)());
app.use((0, import_koa_body.default)({
  multipart: true,
  formidable: {
    keepExtensions: true,
    maxFieldsSize: 20 * 1024 * 1024
  }
}));
app.use(errorHandler_default);
app.use(staticValidator_default);
app.use((0, import_koa_static.default)(import_path2.default.resolve(__dirname, "../static"), { gzip: true }));
app.use((0, import_koa_async_validator.default)({
  customValidators: {
    isArray: (value) => Array.isArray(value)
  }
}));
var router = new import_koa_router.default({ prefix: ROUTER_PREFIX });
routes_default.forEach((route2) => router[route2.method](route2.path, route2.action));
app.use(router.routes());
app.use(router.allowedMethods());
var startService = async (pid = process.pid) => {
  app.listen(APP_PORT, APP_HOST, () => {
    const server = APP_HOST === "0.0.0.0" ? `http://${IP_ADDRESS}:${APP_PORT} & http://127.0.0.1:${APP_PORT}` : `http://${APP_HOST}:${APP_PORT}`;
    import_consola2.default.ready({
      message: `Server ${pid} listening on ${server} in ${app.env}`,
      badge: true
    });
  });
};
var server_default = startService;

// src/app.ts
import_events.EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(-1);
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection:", reason);
});
server_default();
