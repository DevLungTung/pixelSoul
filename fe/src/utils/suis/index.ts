import {
  devnetConnection,
  mainnetConnection,
  testnetConnection,
} from "@mysten/sui.js";
import { getSuiNetworkEnv } from "../env.helpers";

export const CHECK_NAME_OBJECT_ID =
  "0x8df1913abb2a266938d12e405b4b46ae5fd86c5f09e905e77a3e4bcfb9dd0858";

export const coinType = `0x7ded10b1f9c5d04f4284e6567635e5afeaa7098826e65de54b9dba5dd23d5141::brawlz::mint_hero`;
export const package_type =
  "0x7ded10b1f9c5d04f4284e6567635e5afeaa7098826e65de54b9dba5dd23d5141::brawlz::Hero";
export const operator_address =
  "0x7589cb9fad93acf50fac1fb0add781f5418f76a37e2ebe76b0382761aa878bab";

export const soultag_package =
  "0xae7639b0cf20f6b874c75c7e04c7eb9472a9a39d718c2b8b8ccdc266b005997c::soulTag::mint";
export const soultag_check_condition =
  "0xae7639b0cf20f6b874c75c7e04c7eb9472a9a39d718c2b8b8ccdc266b005997c::soulTag::SoulTag";

export const getSuiNetworkConnection = () => {
  const env = getSuiNetworkEnv();
  console.log({ env, testnetConnection, devnetConnection });
  switch (env) {
    case "TEST":
      return testnetConnection;
    case "MAIN":
      return mainnetConnection;
    default:
      return devnetConnection;
  }
};
