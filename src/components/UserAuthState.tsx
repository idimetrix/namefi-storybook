import React, { useMemo } from 'react'
import { LoadingButton } from './LoadingButton'
import { LoggedOutButton } from './LoggedOutButton'
import {ShortAddress} from "@components/ShortAddress";

export type UserAuthStateProps = Partial<
    {
        balance: number,
        userAddress,
        userLoading,
        balanceLoading,
        onSignOut: () => any,
        onLogin: () => any
        onNetworkClicked: () => any
    }>


export const UserAuthState = ({balance, userAddress, userLoading, balanceLoading, onLogin, onSignOut, onNetworkClicked}: UserAuthStateProps) => {

    const [truncatedBalance, balanceFractions] = useMemo(() => {
        if (balance !== undefined && balance !== null) {
            return balance.toFixed(2).split('.')
        }
        return [undefined, undefined]
    }, [balance])





  return (
    <div className="relative flex items-center h-[60px] max-w-[440px] gap-5 ">
        {userAddress && truncatedBalance &&
            <div className="h-full w-[150px] flex justify-between items-center ">
                <button>
                    <img className="w-[20px]" src="/assets/bells.svg" alt="bells image" role="img"/>
                </button>
                <p className="text-lg text-white tracking-[0.02em] font-medium ">
                    {truncatedBalance}.<span className="text-sm">{balanceFractions}</span> $NFSC</p>
            </div>
        }
        {
            userLoading || balanceLoading ? (<>
                <LoadingButton />

            </>) : (<>
                <LoggedOutButton shortUserAddress={userAddress? <ShortAddress address={userAddress}/> : <>Connect Wallet</>} userAddress={userAddress} onSignOut={onSignOut} onLogin={onLogin} />
            </>)
        }

    </div>
  )
}
