/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  FaucetVault,
  FaucetVault_CooldownToggled,
  FaucetVault_CooldownUpdated,
  FaucetVault_EthClaimed,
  FaucetVault_EthDeposited,
  FaucetVault_OwnershipTransferred,
  FaucetVault_TokensClaimed,
  FaucetVault_TokensDeposited,
} from "generated";

FaucetVault.CooldownToggled.handler(async ({ event, context }) => {
  const entity: FaucetVault_CooldownToggled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    enabled: event.params.enabled,
  };

  context.FaucetVault_CooldownToggled.set(entity);
});


FaucetVault.CooldownUpdated.handler(async ({ event, context }) => {
  const entity: FaucetVault_CooldownUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newCooldown: event.params.newCooldown,
  };

  context.FaucetVault_CooldownUpdated.set(entity);
});


FaucetVault.EthClaimed.handler(async ({ event, context }) => {
  const entity: FaucetVault_EthClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.FaucetVault_EthClaimed.set(entity);
});


FaucetVault.EthDeposited.handler(async ({ event, context }) => {
  const entity: FaucetVault_EthDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    depositor: event.params.depositor,
    amount: event.params.amount,
  };

  context.FaucetVault_EthDeposited.set(entity);
});


FaucetVault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: FaucetVault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.FaucetVault_OwnershipTransferred.set(entity);
});


FaucetVault.TokensClaimed.handler(async ({ event, context }) => {
  const entity: FaucetVault_TokensClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.FaucetVault_TokensClaimed.set(entity);
});


FaucetVault.TokensDeposited.handler(async ({ event, context }) => {
  const entity: FaucetVault_TokensDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    depositor: event.params.depositor,
    amount: event.params.amount,
  };

  context.FaucetVault_TokensDeposited.set(entity);
});

