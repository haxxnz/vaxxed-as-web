import dotenv from "dotenv";
import { Resolver, DIDResolutionResult } from "did-resolver";
import { getResolver } from "web-did-resolver";
import fsExtra from "fs-extra";

dotenv.config({ path: ".env.production" });

const { outputJSON } = fsExtra;

const webResolver = getResolver();

const didResolver = new Resolver(
  {
    ...webResolver
    // ...you can flatten multiple resolver methods into the Resolver
  },
  {
    cache: true
  }
);

const resolve = async (): Promise<void> => {
  const did: DIDResolutionResult = await didResolver.resolve(
    process.env.GATSBY_TRUSTED_ISSUER
  );
  await outputJSON("./src/data/did.json", did, { spaces: 2 });
};

resolve();
