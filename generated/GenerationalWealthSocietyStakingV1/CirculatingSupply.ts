// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CirculatingSupply extends ethereum.SmartContract {
  static bind(address: Address): CirculatingSupply {
    return new CirculatingSupply("CirculatingSupply", address);
  }

  GWS(): Address {
    let result = super.call("GWS", "GWS():(address)", []);

    return result[0].toAddress();
  }

  try_GWS(): ethereum.CallResult<Address> {
    let result = super.tryCall("GWS", "GWS():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  GWSCirculatingSupply(): BigInt {
    let result = super.call(
      "GWSCirculatingSupply",
      "GWSCirculatingSupply():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_GWSCirculatingSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "GWSCirculatingSupply",
      "GWSCirculatingSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNonCirculatingGWS(): BigInt {
    let result = super.call(
      "getNonCirculatingGWS",
      "getNonCirculatingGWS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNonCirculatingGWS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNonCirculatingGWS",
      "getNonCirculatingGWS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialize(_gws: Address): boolean {
    let result = super.call("initialize", "initialize(address):(bool)", [
      ethereum.Value.fromAddress(_gws)
    ]);

    return result[0].toBoolean();
  }

  try_initialize(_gws: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialize", "initialize(address):(bool)", [
      ethereum.Value.fromAddress(_gws)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isInitialized(): boolean {
    let result = super.call("isInitialized", "isInitialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isInitialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInitialized", "isInitialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nonCirculatingGWSAddresses(param0: BigInt): Address {
    let result = super.call(
      "nonCirculatingGWSAddresses",
      "nonCirculatingGWSAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_nonCirculatingGWSAddresses(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nonCirculatingGWSAddresses",
      "nonCirculatingGWSAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setNonCirculatingGWSAddresses(
    _nonCirculatingAddresses: Array<Address>
  ): boolean {
    let result = super.call(
      "setNonCirculatingGWSAddresses",
      "setNonCirculatingGWSAddresses(address[]):(bool)",
      [ethereum.Value.fromAddressArray(_nonCirculatingAddresses)]
    );

    return result[0].toBoolean();
  }

  try_setNonCirculatingGWSAddresses(
    _nonCirculatingAddresses: Array<Address>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setNonCirculatingGWSAddresses",
      "setNonCirculatingGWSAddresses(address[]):(bool)",
      [ethereum.Value.fromAddressArray(_nonCirculatingAddresses)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferOwnership(_owner: Address): boolean {
    let result = super.call(
      "transferOwnership",
      "transferOwnership(address):(bool)",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBoolean();
  }

  try_transferOwnership(_owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferOwnership",
      "transferOwnership(address):(bool)",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _gws(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetNonCirculatingGWSAddressesCall extends ethereum.Call {
  get inputs(): SetNonCirculatingGWSAddressesCall__Inputs {
    return new SetNonCirculatingGWSAddressesCall__Inputs(this);
  }

  get outputs(): SetNonCirculatingGWSAddressesCall__Outputs {
    return new SetNonCirculatingGWSAddressesCall__Outputs(this);
  }
}

export class SetNonCirculatingGWSAddressesCall__Inputs {
  _call: SetNonCirculatingGWSAddressesCall;

  constructor(call: SetNonCirculatingGWSAddressesCall) {
    this._call = call;
  }

  get _nonCirculatingAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetNonCirculatingGWSAddressesCall__Outputs {
  _call: SetNonCirculatingGWSAddressesCall;

  constructor(call: SetNonCirculatingGWSAddressesCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
