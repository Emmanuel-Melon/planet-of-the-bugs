// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest;
    }
  }

  /// <reference types="lucia" />
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type DatabaseUserAttributes = {
      email?: string;
      github_username?: string;
    };
    type DatabaseSessionAttributes = Record<string, never>;
  }
}

export {};
