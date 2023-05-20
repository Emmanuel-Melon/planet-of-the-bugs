
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATA_BASE_URL: string;
	export const NVM_INC: string;
	export const npm_package_dependencies_sanitize_html: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const TERM_PROGRAM: string;
	export const npm_package_dependencies__svelteuidev_composables: string;
	export const NODE: string;
	export const npm_package_dependencies__auth_sveltekit: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_config_version_git_tag: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__types_cookie: string;
	export const TMPDIR: string;
	export const npm_package_dependencies_socket_io: string;
	export const npm_package_dependencies__svelteuidev_motion: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_dependencies_svelte_apollo: string;
	export const npm_package_devDependencies_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite_plugin_monaco_editor: string;
	export const npm_package_dependencies_daisyui: string;
	export const npm_package_scripts_turbo_build: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_dependencies__babel_standalone: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const ZSH: string;
	export const npm_package_dependencies_dayjs: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies_mdsvex: string;
	export const npm_package_dependencies_monaco_editor: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_dependencies_gql: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_execpath: string;
	export const npm_package_dependencies_graphql: string;
	export const npm_package_dependencies__auth_core: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_mindsdb_js_sdk: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies_cors: string;
	export const npm_package_dependencies__sveltestack_svelte_query: string;
	export const LSCOLORS: string;
	export const npm_package_devDependencies__graphql_codegen_cli: string;
	export const Solana: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const npm_package_dependencies__svelteuidev_dates: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_markdown_it: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_dependencies__svelteuidev_preprocessors: string;
	export const npm_package_devDependencies_appwrite: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const npm_package_devDependencies_node_appwrite: string;
	export const npm_package_dependencies__svelteuidev_prism: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const npm_package_type: string;
	export const npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
	export const npm_package_dependencies__svelteuidev_core: string;
	export const npm_package_devDependencies__graphql_codegen_typescript: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_package_dependencies_dotenv: string;
	export const npm_package_dependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_package_devDependencies_husky: string;
	export const npm_config_version_git_message: string;
	export const ITERM_SESSION_ID: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const NVM_BIN: string;
	export const npm_package_dependencies_iconify_icon: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const LC_TERMINAL: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const npm_package_dependencies__apollo_client: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies__graphql_codegen_typescript_operations: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_HASURA_GRAPHQL_ENDPOINT: string;
	export const PUBLIC_HASURA_GRAPHQL_WS: string;
	export const PUBLIC_HASURA_ADMIN_SECRET: string;
	export const PUBLIC_AUTH_TRUST_HOST: string;
	export const PUBLIC_GITHUB_ACCESS_CODE: string;
	export const PUBLIC_GITHUB_API_ENDPOINT: string;
	export const PUBLIC_MINDS_DB_USER: string;
	export const PUBLIC_MINDS_DB_PASSWORD: string;
	export const PUBLIC_GITHUB_ID: string;
	export const PUBLIC_GITHUB_SECRET: string;
	export const PUBLIC_AUTH_SECRET: string;
	export const PUBLIC_GOOGLE_API_KEY: string;
	export const PUBLIC_GOOGLE_CLIENT_ID: string;
	export const PUBLIC_GOOGLE_CLIENT_SECRET: string;
	export const PUBLIC_OPENAI_API_KEY: string;
	export const PUBLIC_MINDSDB_OPEN_AI_KEY: string;
	export const PUBLIC_APPWRITE_DEMO_KEY: string;
	export const PUBLIC_APPWRITE_ENDPOINT: string;
	export const PUBLIC_APPWRITE_PROJECT_ID: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATA_BASE_URL: string;
		NVM_INC: string;
		npm_package_dependencies_sanitize_html: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		TERM_PROGRAM: string;
		npm_package_dependencies__svelteuidev_composables: string;
		NODE: string;
		npm_package_dependencies__auth_sveltekit: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		npm_config_version_git_tag: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__types_cookie: string;
		TMPDIR: string;
		npm_package_dependencies_socket_io: string;
		npm_package_dependencies__svelteuidev_motion: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_dependencies_svelte_apollo: string;
		npm_package_devDependencies_vite_plugin_svelte: string;
		npm_package_devDependencies_vite_plugin_monaco_editor: string;
		npm_package_dependencies_daisyui: string;
		npm_package_scripts_turbo_build: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		npm_package_dependencies__babel_standalone: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		ZSH: string;
		npm_package_dependencies_dayjs: string;
		NVM_DIR: string;
		USER: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		npm_package_devDependencies_mdsvex: string;
		npm_package_dependencies_monaco_editor: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_dependencies_gql: string;
		npm_package_devDependencies_postcss: string;
		npm_execpath: string;
		npm_package_dependencies_graphql: string;
		npm_package_dependencies__auth_core: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_mindsdb_js_sdk: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies_cors: string;
		npm_package_dependencies__sveltestack_svelte_query: string;
		LSCOLORS: string;
		npm_package_devDependencies__graphql_codegen_cli: string;
		Solana: string;
		PATH: string;
		npm_config_argv: string;
		npm_package_dependencies__svelteuidev_dates: string;
		_: string;
		LaunchInstanceID: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_markdown_it: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_dependencies__svelteuidev_preprocessors: string;
		npm_package_devDependencies_appwrite: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		npm_package_devDependencies_node_appwrite: string;
		npm_package_dependencies__svelteuidev_prism: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		npm_package_type: string;
		npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
		npm_package_dependencies__svelteuidev_core: string;
		npm_package_devDependencies__graphql_codegen_typescript: string;
		LC_TERMINAL_VERSION: string;
		npm_package_dependencies_dotenv: string;
		npm_package_dependencies__tailwindcss_typography: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_package_devDependencies_husky: string;
		npm_config_version_git_message: string;
		ITERM_SESSION_ID: string;
		LESS: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		NVM_BIN: string;
		npm_package_dependencies_iconify_icon: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		LC_TERMINAL: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		npm_package_dependencies__apollo_client: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_devDependencies__graphql_codegen_typescript_operations: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_HASURA_GRAPHQL_ENDPOINT: string;
		PUBLIC_HASURA_GRAPHQL_WS: string;
		PUBLIC_HASURA_ADMIN_SECRET: string;
		PUBLIC_AUTH_TRUST_HOST: string;
		PUBLIC_GITHUB_ACCESS_CODE: string;
		PUBLIC_GITHUB_API_ENDPOINT: string;
		PUBLIC_MINDS_DB_USER: string;
		PUBLIC_MINDS_DB_PASSWORD: string;
		PUBLIC_GITHUB_ID: string;
		PUBLIC_GITHUB_SECRET: string;
		PUBLIC_AUTH_SECRET: string;
		PUBLIC_GOOGLE_API_KEY: string;
		PUBLIC_GOOGLE_CLIENT_ID: string;
		PUBLIC_GOOGLE_CLIENT_SECRET: string;
		PUBLIC_OPENAI_API_KEY: string;
		PUBLIC_MINDSDB_OPEN_AI_KEY: string;
		PUBLIC_APPWRITE_DEMO_KEY: string;
		PUBLIC_APPWRITE_ENDPOINT: string;
		PUBLIC_APPWRITE_PROJECT_ID: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
