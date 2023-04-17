import _, { reject } from 'lodash';
import { espressif,handyplug } from "../proto-ts/bundel.js"; 


const UUID_ESP = "1775244d-6b43-439b-877c-060f2d9bed07"; //Service ID
const CHARACTERISTICS_PROV_SESSION = "1775ff51-6b43-439b-877c-060f2d9bed07";
const CHARACTERISTICS_HANDY_PLUG = "1775ff55-6b43-439b-877c-060f2d9bed07";

const BLE_NAME = "The Handy";

let bleDevice;
let gattService;
let handyplugCharacteristic;
async function connectBle() {
    return new Promise((resolve, reject) => {
        navigator.bluetooth
        .requestDevice({
            filters: [
                {
                    name: BLE_NAME,
                },
            ],
            optionalServices: [UUID_ESP],
        })
        .then((device) => {
            console.log("Connected. Device:", device);
            bleDevice = device;
            resolve(device);
        })
        .catch((error) => {
            console.error(error);
            reject(error);
        });
    });
}

async function disconnect() {
    if (bleDevice !== undefined) {
        await bleDevice.gatt?.disconnect();
        console.log("Disconnected");
    }
}

async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function connectGatt() {
    console.log("startSession");
    if (bleDevice === undefined) {
        throw "bleDevice not connected";
    } else if (bleDevice.gatt === undefined) {
        throw "bleDevice.gatt is undefined";
    }
    await wait(100); //Should not be needed: wait for device to be ready
    console.log("Connecting to GATT server...");
    let gattServer;
    try {
        gattServer = await bleDevice.gatt.connect();
        console.log("gatt connected. gattServer:", gattServer);
    } catch (error) {
        console.log("error:", error);
        throw error;
    }

    await wait(50); //Should not be needed: wait for device to be ready
    try {
        gattService = await gattServer.getPrimaryService(UUID_ESP);
        console.log("gattService:", gattService);
    } catch (error) {
        console.log("error:", error);
        throw error;
    }
}

async function startSession() {
    let provSession = await gattService.getCharacteristic(CHARACTERISTICS_PROV_SESSION);
    console.log("provSession:", provSession);
    await wait(50);
    let s0SessionCmd = espressif.S0SessionCmd.create();
    let sec0Payload = espressif.Sec0Payload.create({
        sc: s0SessionCmd,
    });
    let newSessionData = espressif.SessionData.create({
        secVer: 0,
        sec0: sec0Payload,
    });

    let newSessionDataBytes = espressif.SessionData.encode(newSessionData).finish();
    await provSession.writeValue(newSessionDataBytes);


    console.log("Handy BLE session Connected!");
}

async function startHandyplugSession() {
    //Both RX and TX is on this char
    handyplugCharacteristic = await gattService.getCharacteristic(CHARACTERISTICS_HANDY_PLUG);
    console.log("handyplugChar:", handyplugCharacteristic);
}
async function sendLinearCmd(position,duration) {
    let Id = Math.round(Math.random() * 10000); //2147483647 max int value
    let msgProto;
    const vector= handyplug.LinearCmd.Vector.create({
        Index: 0,
        Duration: duration,
        Position: position
    })
    const linearCmd= handyplug.LinearCmd.create({
        Id: Id,
        DeviceIndex: 0,
        Vectors: [vector]
    })
    msgProto = handyplug.Message.create({
        LinearCmd: linearCmd
    });
    let payload = handyplug.Payload.create({
        Messages: [msgProto]
    });
    let payloadBytes = handyplug.Payload.encode(payload).finish();
    await handyplugCharacteristic.writeValue(payloadBytes);
    await wait(5);
    const res = await handyplugCharacteristic.readValue();
    console.log('res', res);
}


window.handy = {
    connectBle,
    disconnect,
    connectGatt,
    startSession,
    startHandyplugSession,
    sendLinearCmd
};