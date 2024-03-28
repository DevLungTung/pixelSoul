import {
  JsonRpcProvider,
  RawSigner,
  fromExportedKeypair,
  testnetConnection,
  toB64
} from '@mysten/sui.js'
import { PRIVATE_KEY } from '../app.settings'

export async function buildSigner() {
  const keypair = fromExportedKeypair({
    schema: 'ED25519',
    privateKey: toB64(Uint8Array.from(Buffer.from(PRIVATE_KEY, 'hex')))
  })
  const provider = new JsonRpcProvider(testnetConnection)
  const signer = new RawSigner(keypair, provider)
  return signer
}
