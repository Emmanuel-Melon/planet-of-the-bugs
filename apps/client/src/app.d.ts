// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      auth: import('lucia').AuthRequest;
    }
  }

  /// <reference types="lucia" />

  namespace Lucia {
    type Auth = import('$lib/auth/lucia').Auth;
    type DatabaseUserAttributes = {
      username: string;
      email: string;
      name: string;
      hasConnectedGithub: boolean;
      githubUsername: string;
      avatar: string;
    };
    type DatabaseSessionAttributes = {};
  }
}

export {};
