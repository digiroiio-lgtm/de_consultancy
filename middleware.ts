// Next.js requires the middleware entry point to be named "middleware.ts" at
// the project root. All logic lives in proxy.ts so it can be unit-tested
// independently of the Next.js middleware runtime.
export { proxy as default, config } from "./proxy";
