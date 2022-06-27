"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Input a number ', (answer) => {
    let n = parseInt(answer);
    for (let i = 1; i <= n; i++) {
        let nr = 1;
        if (i % 17 == 0) {
            if (i % 13 == 0) {
                process.stdout.write("Fezz");
                nr = 0;
                13;
            }
            if (i % 11 == 0) {
                process.stdout.write("Bong");
                nr = 0;
            }
            if (i % 7 == 0) {
                process.stdout.write("Bang");
                nr = 0;
            }
            if (i % 5 == 0) {
                process.stdout.write("Buzz");
                nr = 0;
            }
            if (i % 3 == 0) {
                process.stdout.write("Fizz");
                nr = 0;
            }
        }
        else {
            if (i % 3 == 0) {
                process.stdout.write("Fizz");
                nr = 0;
            }
            if (i % 5 == 0) {
                process.stdout.write("Buzz");
                nr = 0;
            }
            if (i % 7 == 0) {
                process.stdout.write("Bang");
                nr = 0;
            }
            if (i % 11 == 0) {
                process.stdout.write("Bong");
                nr = 0;
            }
            if (i % 13 == 0) {
                process.stdout.write("Fezz");
                nr = 0;
            }
        }
        if (nr == 1) {
            process.stdout.write(i.toString());
        }
        console.log();
    }
    rl.close();
});
//# sourceMappingURL=index.js.map