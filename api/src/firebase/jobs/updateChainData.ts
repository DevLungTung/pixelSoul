import { DataSnapshot } from 'firebase/database'
import { FirebaseService } from '../firebase.service'
import { ADMIN_CAP, PACKAGE_ID } from 'src/app.settings'
import { buildSigner } from '../firebase.utils'
import { TransactionBlock } from '@mysten/sui.js'

async function updateUserInfor(board: DataSnapshot) {
  try {
    // update to sui chain
    const objectId = board.val()?.object_id
    if (objectId) {
      const address = board.val()?.address
      const p_level = board.val()?.p_level
      const p_xp = board.val()?.p_xp
      const wins_bots = board.val()?.wins_bots
      const wins_users = board.val()?.wins_users

      console.log({ address, p_level, p_xp, wins_bots, wins_users })

      const signer = await buildSigner()
      const tx = new TransactionBlock()
      tx.moveCall({
        target: `${PACKAGE_ID}::brawlz::update_hero`,
        arguments: [
          tx.pure(ADMIN_CAP),
          tx.pure(objectId),
          tx.pure(p_level),
          tx.pure(p_xp),
          tx.pure(wins_bots),
          tx.pure(wins_users)
        ]
      })
      const update = await signer.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        requestType: 'WaitForLocalExecution'
      })

      console.log('update', update)

      await delay(1000 * 5)

      const tx_transfer = new TransactionBlock()

      tx_transfer.transferObjects([tx_transfer.object(objectId)], tx_transfer.pure(address))
      const result = await signer.signAndExecuteTransactionBlock({
        transactionBlock: tx_transfer,
        requestType: 'WaitForLocalExecution'
      })
      console.log('result', result)
    }
  } catch (error) {
    console.log('error', error)
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  const fb = new FirebaseService()
  fb.listen('/auth', updateUserInfor)
}

main().catch((err) => console.log('job error', err))
