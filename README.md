## Vaxxed As

A web based NZ COVID Pass scanner

### Getting started

Create a `.env.development` file

```sh
touch .env.development
```

Add trusted verifiers to environment variables

```
GATSBY_TRUSTED_ISSUER=did:web:nzcp.covid19.health.nz
```

Install node packages

```sh
yarn
```

Run the development scripts

```sh
yarn gatsby:clean && yarn gatsby:develop
```
