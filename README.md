This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Notes

The vercel integration does not create a correct token:

```
sentry-cli releases set-commits cosmo-ops-release --auto
error: API request failed
caused by: sentry reported an error: You do not have permission to perform this action. (http status: 403)
```

Go to: https://test-company-jc.sentry.io/settings/account/api/auth-tokens/
and create a token with the following token org:read project:releases and replace the one in the vercel config.

reference: https://forum.sentry.io/t/403-error-adding-commits-to-release/4708