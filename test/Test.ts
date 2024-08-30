import assert from "assert";
import { 
  TestHelpers,
  FaucetVault_CooldownToggled
} from "generated";
const { MockDb, FaucetVault } = TestHelpers;

describe("FaucetVault contract CooldownToggled event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FaucetVault contract CooldownToggled event
  const event = FaucetVault.CooldownToggled.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FaucetVault_CooldownToggled is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FaucetVault.CooldownToggled.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFaucetVaultCooldownToggled = mockDbUpdated.entities.FaucetVault_CooldownToggled.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedFaucetVaultCooldownToggled: FaucetVault_CooldownToggled = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      enabled: event.params.enabled,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFaucetVaultCooldownToggled, expectedFaucetVaultCooldownToggled, "Actual FaucetVaultCooldownToggled should be the same as the expectedFaucetVaultCooldownToggled");
  });
});
