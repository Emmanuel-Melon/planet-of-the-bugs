// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      auth: import('lucia').AuthRequest
    }
  }

  /// <reference types="lucia" />
  namespace Lucia {
    type Auth = import('$lib/auth/lucia').Auth
    type UserAttributes = {
      username: string;
      email: string;
      name: string;
      githubUsername: string;
    };
    type DatabaseSessionAttributes = Record<string, never>;
  }
}

export {};
