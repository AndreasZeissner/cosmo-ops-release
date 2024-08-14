const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "test-company-jc",
    project: "cosmo-ops-release",
        sourcemaps: {
        /**
         * Disable any functionality related to source maps upload.
         */
        disable: false,
        /**
         * A glob or an array of globs that specifies the build artifacts that should be uploaded to Sentry.
         *
         * If this option is not specified, the plugin will try to upload all JavaScript files and source map files that are created during build.
         *
         * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
         *
         * Use the `debug` option to print information about which files end up being uploaded.
         */
        // assets: [],
        /**
         * A glob or an array of globs that specifies which build artifacts should not be uploaded to Sentry.
         *
         * Default: `[]`
         *
         * The globbing patterns follow the implementation of the `glob` package. (https://www.npmjs.com/package/glob)
         *
         * Use the `debug` option to print information about which files end up being uploaded.
         */
        // ignore: [];
        /**
         * Toggle whether generated source maps within your Next.js build folder should be automatically deleted after being uploaded to Sentry.
         *
         * Defaults to `false`.
         */
        deleteSourcemapsAfterUpload: true,
    },

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
      enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // release: {
    //     /**
    //      * Unique identifier for the release you want to create.
    //      *
    //      * This value can also be specified via the `SENTRY_RELEASE` environment variable.
    //      *
    //      * Defaults to automatically detecting a value for your environment.
    //      * This includes values for Cordova, Heroku, AWS CodeBuild, CircleCI, Xcode, and Gradle, and otherwise uses the git `HEAD`'s commit SHA.
    //      * (the latter requires access to git CLI and for the root directory to be a valid repository)
    //      *
    //      * If you didn't provide a value and the plugin can't automatically detect one, no release will be created.
    //      */
    //     name: "cosmo-ops-release",
    //     /**
    //      * Whether the plugin should create a release on Sentry during the build.
    //      * Note that a release may still appear in Sentry even if this is value is `false` because any Sentry event that has a release value attached will automatically create a release.
    //      * (for example via the `inject` option)
    //      *
    //      * Defaults to `true`.
    //      */
    //     create: true,
    //     /**
    //      * Whether the Sentry release should be automatically finalized (meaning an end timestamp is added) after the build ends.
    //      *
    //      * Defaults to `true`.
    //      */
    //     finalize: true,
    //     /**
    //      * Unique identifier for the distribution, used to further segment your release.
    //      * Usually your build number.
    //      */
    //     // dist: "",
    //     /**
    //      * Version control system remote name.
    //      *
    //      * This value can also be specified via the `SENTRY_VSC_REMOTE` environment variable.
    //      *
    //      * Defaults to 'origin'.
    //      */
    //     vcsRemote: "origin",
    //     /**
    //      * Associates the release with its commits in Sentry.
    //      */
    //     setCommits: {
    //         /**
    //          * Automatically sets `commit` and `previousCommit`. Sets `commit` to `HEAD`
    //          * and `previousCommit` as described in the option's documentation.
    //          *
    //          * If you set this to `true`, manually specified `commit` and `previousCommit`
    //          * options will be overridden. It is best to not specify them at all if you
    //          * set this option to `true`.
    //          */
    //         auto: true,
    //         /**
    //          * The full repo name as defined in Sentry.
    //          *
    //          * Required if the `auto` option is not set to `true`.
    //          */
    //         // repo: "",
    //         /**
    //          * The current (last) commit in the release.
    //          *
    //          * Required if the `auto` option is not set to `true`.
    //          */
    //         // commit: "",
    //         /**
    //          * The commit before the beginning of this release (in other words,
    //          * the last commit of the previous release).
    //          *
    //          * Defaults to the last commit of the previous release in Sentry.
    //          *
    //          * If there was no previous release, the last 10 commits will be used.
    //          */
    //         // previousCommit: "",
    //         /**
    //          * If the flag is to `true` and the previous release commit was not found
    //          * in the repository, the plugin creates a release with the default commits
    //          * count instead of failing the command.
    //          *
    //          * Defaults to `false`.
    //          */
    //         // ignoreMissing: false,
    //         /**
    //          * If this flag is set, the setCommits step will not fail and just exit
    //          * silently if no new commits for a given release have been found.
    //          *
    //          * Defaults to `false`.
    //          */
    //         // ignoreEmpty: false,
    //     }
    // },
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
