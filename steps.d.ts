/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Test = typeof import('./pages/demo_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, Test: Test }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
