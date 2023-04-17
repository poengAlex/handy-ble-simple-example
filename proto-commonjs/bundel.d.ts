import * as $protobuf from "protobufjs";
/** Namespace cloud. */
export namespace cloud {

    /** CloudConfigStatus enum. */
    enum CloudConfigStatus {
        Success = 0,
        InvalidParam = 1,
        InvalidState = 2
    }

    /** Properties of a CmdGetSetDetails. */
    interface ICmdGetSetDetails {

        /** CmdGetSetDetails UserID */
        UserID?: (string|null);

        /** CmdGetSetDetails SecretKey */
        SecretKey?: (string|null);
    }

    /** Represents a CmdGetSetDetails. */
    class CmdGetSetDetails implements ICmdGetSetDetails {

        /**
         * Constructs a new CmdGetSetDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloud.ICmdGetSetDetails);

        /** CmdGetSetDetails UserID. */
        public UserID: string;

        /** CmdGetSetDetails SecretKey. */
        public SecretKey: string;

        /**
         * Creates a new CmdGetSetDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdGetSetDetails instance
         */
        public static create(properties?: cloud.ICmdGetSetDetails): cloud.CmdGetSetDetails;

        /**
         * Encodes the specified CmdGetSetDetails message. Does not implicitly {@link cloud.CmdGetSetDetails.verify|verify} messages.
         * @param message CmdGetSetDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloud.CmdGetSetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdGetSetDetails message, length delimited. Does not implicitly {@link cloud.CmdGetSetDetails.verify|verify} messages.
         * @param message CmdGetSetDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloud.CmdGetSetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdGetSetDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdGetSetDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloud.CmdGetSetDetails;

        /**
         * Decodes a CmdGetSetDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdGetSetDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloud.CmdGetSetDetails;

        /**
         * Verifies a CmdGetSetDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdGetSetDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdGetSetDetails
         */
        public static fromObject(object: { [k: string]: any }): cloud.CmdGetSetDetails;

        /**
         * Creates a plain object from a CmdGetSetDetails message. Also converts values to other types if specified.
         * @param message CmdGetSetDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloud.CmdGetSetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdGetSetDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespGetSetDetails. */
    interface IRespGetSetDetails {

        /** RespGetSetDetails Status */
        Status?: (cloud.CloudConfigStatus|null);

        /** RespGetSetDetails DeviceSecret */
        DeviceSecret?: (string|null);
    }

    /** Represents a RespGetSetDetails. */
    class RespGetSetDetails implements IRespGetSetDetails {

        /**
         * Constructs a new RespGetSetDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloud.IRespGetSetDetails);

        /** RespGetSetDetails Status. */
        public Status: cloud.CloudConfigStatus;

        /** RespGetSetDetails DeviceSecret. */
        public DeviceSecret: string;

        /**
         * Creates a new RespGetSetDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespGetSetDetails instance
         */
        public static create(properties?: cloud.IRespGetSetDetails): cloud.RespGetSetDetails;

        /**
         * Encodes the specified RespGetSetDetails message. Does not implicitly {@link cloud.RespGetSetDetails.verify|verify} messages.
         * @param message RespGetSetDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloud.RespGetSetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespGetSetDetails message, length delimited. Does not implicitly {@link cloud.RespGetSetDetails.verify|verify} messages.
         * @param message RespGetSetDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloud.RespGetSetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGetSetDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespGetSetDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloud.RespGetSetDetails;

        /**
         * Decodes a RespGetSetDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespGetSetDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloud.RespGetSetDetails;

        /**
         * Verifies a RespGetSetDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespGetSetDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespGetSetDetails
         */
        public static fromObject(object: { [k: string]: any }): cloud.RespGetSetDetails;

        /**
         * Creates a plain object from a RespGetSetDetails message. Also converts values to other types if specified.
         * @param message RespGetSetDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloud.RespGetSetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGetSetDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** CloudConfigMsgType enum. */
    enum CloudConfigMsgType {
        TypeCmdGetSetDetails = 0,
        TypeRespGetSetDetails = 1
    }

    /** Properties of a CloudConfigPayload. */
    interface ICloudConfigPayload {

        /** CloudConfigPayload msg */
        msg?: (cloud.CloudConfigMsgType|null);

        /** CloudConfigPayload cmdGetSetDetails */
        cmdGetSetDetails?: (cloud.CmdGetSetDetails|null);

        /** CloudConfigPayload respGetSetDetails */
        respGetSetDetails?: (cloud.RespGetSetDetails|null);
    }

    /** Represents a CloudConfigPayload. */
    class CloudConfigPayload implements ICloudConfigPayload {

        /**
         * Constructs a new CloudConfigPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloud.ICloudConfigPayload);

        /** CloudConfigPayload msg. */
        public msg: cloud.CloudConfigMsgType;

        /** CloudConfigPayload cmdGetSetDetails. */
        public cmdGetSetDetails?: (cloud.CmdGetSetDetails|null);

        /** CloudConfigPayload respGetSetDetails. */
        public respGetSetDetails?: (cloud.RespGetSetDetails|null);

        /** CloudConfigPayload payload. */
        public payload?: ("cmdGetSetDetails"|"respGetSetDetails");

        /**
         * Creates a new CloudConfigPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloudConfigPayload instance
         */
        public static create(properties?: cloud.ICloudConfigPayload): cloud.CloudConfigPayload;

        /**
         * Encodes the specified CloudConfigPayload message. Does not implicitly {@link cloud.CloudConfigPayload.verify|verify} messages.
         * @param message CloudConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloud.CloudConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloudConfigPayload message, length delimited. Does not implicitly {@link cloud.CloudConfigPayload.verify|verify} messages.
         * @param message CloudConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloud.CloudConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloudConfigPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloudConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloud.CloudConfigPayload;

        /**
         * Decodes a CloudConfigPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloudConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloud.CloudConfigPayload;

        /**
         * Verifies a CloudConfigPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloudConfigPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloudConfigPayload
         */
        public static fromObject(object: { [k: string]: any }): cloud.CloudConfigPayload;

        /**
         * Creates a plain object from a CloudConfigPayload message. Also converts values to other types if specified.
         * @param message CloudConfigPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloud.CloudConfigPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloudConfigPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace espressif. */
export namespace espressif {

    /** Status enum. */
    enum Status {
        Success = 0,
        InvalidSecScheme = 1,
        InvalidProto = 2,
        TooManySessions = 3,
        InvalidArgument = 4,
        InternalError = 5,
        CryptoError = 6,
        InvalidSession = 7
    }

    /** Properties of a S0SessionCmd. */
    interface IS0SessionCmd {
    }

    /** Represents a S0SessionCmd. */
    class S0SessionCmd implements IS0SessionCmd {

        /**
         * Constructs a new S0SessionCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IS0SessionCmd);

        /**
         * Creates a new S0SessionCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S0SessionCmd instance
         */
        public static create(properties?: espressif.IS0SessionCmd): espressif.S0SessionCmd;

        /**
         * Encodes the specified S0SessionCmd message. Does not implicitly {@link espressif.S0SessionCmd.verify|verify} messages.
         * @param message S0SessionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.S0SessionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S0SessionCmd message, length delimited. Does not implicitly {@link espressif.S0SessionCmd.verify|verify} messages.
         * @param message S0SessionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.S0SessionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.S0SessionCmd;

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.S0SessionCmd;

        /**
         * Verifies a S0SessionCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S0SessionCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S0SessionCmd
         */
        public static fromObject(object: { [k: string]: any }): espressif.S0SessionCmd;

        /**
         * Creates a plain object from a S0SessionCmd message. Also converts values to other types if specified.
         * @param message S0SessionCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.S0SessionCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S0SessionCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S0SessionResp. */
    interface IS0SessionResp {

        /** S0SessionResp status */
        status?: (espressif.Status|null);
    }

    /** Represents a S0SessionResp. */
    class S0SessionResp implements IS0SessionResp {

        /**
         * Constructs a new S0SessionResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IS0SessionResp);

        /** S0SessionResp status. */
        public status: espressif.Status;

        /**
         * Creates a new S0SessionResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S0SessionResp instance
         */
        public static create(properties?: espressif.IS0SessionResp): espressif.S0SessionResp;

        /**
         * Encodes the specified S0SessionResp message. Does not implicitly {@link espressif.S0SessionResp.verify|verify} messages.
         * @param message S0SessionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.S0SessionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S0SessionResp message, length delimited. Does not implicitly {@link espressif.S0SessionResp.verify|verify} messages.
         * @param message S0SessionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.S0SessionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.S0SessionResp;

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.S0SessionResp;

        /**
         * Verifies a S0SessionResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S0SessionResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S0SessionResp
         */
        public static fromObject(object: { [k: string]: any }): espressif.S0SessionResp;

        /**
         * Creates a plain object from a S0SessionResp message. Also converts values to other types if specified.
         * @param message S0SessionResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.S0SessionResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S0SessionResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Sec0MsgType enum. */
    enum Sec0MsgType {
        S0_Session_Command = 0,
        S0_Session_Response = 1
    }

    /** Properties of a Sec0Payload. */
    interface ISec0Payload {

        /** Sec0Payload msg */
        msg?: (espressif.Sec0MsgType|null);

        /** Sec0Payload sc */
        sc?: (espressif.S0SessionCmd|null);

        /** Sec0Payload sr */
        sr?: (espressif.S0SessionResp|null);
    }

    /** Represents a Sec0Payload. */
    class Sec0Payload implements ISec0Payload {

        /**
         * Constructs a new Sec0Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISec0Payload);

        /** Sec0Payload msg. */
        public msg: espressif.Sec0MsgType;

        /** Sec0Payload sc. */
        public sc?: (espressif.S0SessionCmd|null);

        /** Sec0Payload sr. */
        public sr?: (espressif.S0SessionResp|null);

        /** Sec0Payload payload. */
        public payload?: ("sc"|"sr");

        /**
         * Creates a new Sec0Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sec0Payload instance
         */
        public static create(properties?: espressif.ISec0Payload): espressif.Sec0Payload;

        /**
         * Encodes the specified Sec0Payload message. Does not implicitly {@link espressif.Sec0Payload.verify|verify} messages.
         * @param message Sec0Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.Sec0Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sec0Payload message, length delimited. Does not implicitly {@link espressif.Sec0Payload.verify|verify} messages.
         * @param message Sec0Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.Sec0Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.Sec0Payload;

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.Sec0Payload;

        /**
         * Verifies a Sec0Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sec0Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sec0Payload
         */
        public static fromObject(object: { [k: string]: any }): espressif.Sec0Payload;

        /**
         * Creates a plain object from a Sec0Payload message. Also converts values to other types if specified.
         * @param message Sec0Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.Sec0Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sec0Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionCmd1. */
    interface ISessionCmd1 {

        /** SessionCmd1 clientVerifyData */
        clientVerifyData?: (Uint8Array|null);
    }

    /** Represents a SessionCmd1. */
    class SessionCmd1 implements ISessionCmd1 {

        /**
         * Constructs a new SessionCmd1.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISessionCmd1);

        /** SessionCmd1 clientVerifyData. */
        public clientVerifyData: Uint8Array;

        /**
         * Creates a new SessionCmd1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionCmd1 instance
         */
        public static create(properties?: espressif.ISessionCmd1): espressif.SessionCmd1;

        /**
         * Encodes the specified SessionCmd1 message. Does not implicitly {@link espressif.SessionCmd1.verify|verify} messages.
         * @param message SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.SessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionCmd1 message, length delimited. Does not implicitly {@link espressif.SessionCmd1.verify|verify} messages.
         * @param message SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.SessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.SessionCmd1;

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.SessionCmd1;

        /**
         * Verifies a SessionCmd1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionCmd1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionCmd1
         */
        public static fromObject(object: { [k: string]: any }): espressif.SessionCmd1;

        /**
         * Creates a plain object from a SessionCmd1 message. Also converts values to other types if specified.
         * @param message SessionCmd1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.SessionCmd1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionCmd1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionResp1. */
    interface ISessionResp1 {

        /** SessionResp1 status */
        status?: (espressif.Status|null);

        /** SessionResp1 deviceVerifyData */
        deviceVerifyData?: (Uint8Array|null);
    }

    /** Represents a SessionResp1. */
    class SessionResp1 implements ISessionResp1 {

        /**
         * Constructs a new SessionResp1.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISessionResp1);

        /** SessionResp1 status. */
        public status: espressif.Status;

        /** SessionResp1 deviceVerifyData. */
        public deviceVerifyData: Uint8Array;

        /**
         * Creates a new SessionResp1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionResp1 instance
         */
        public static create(properties?: espressif.ISessionResp1): espressif.SessionResp1;

        /**
         * Encodes the specified SessionResp1 message. Does not implicitly {@link espressif.SessionResp1.verify|verify} messages.
         * @param message SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.SessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionResp1 message, length delimited. Does not implicitly {@link espressif.SessionResp1.verify|verify} messages.
         * @param message SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.SessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.SessionResp1;

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.SessionResp1;

        /**
         * Verifies a SessionResp1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionResp1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionResp1
         */
        public static fromObject(object: { [k: string]: any }): espressif.SessionResp1;

        /**
         * Creates a plain object from a SessionResp1 message. Also converts values to other types if specified.
         * @param message SessionResp1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.SessionResp1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionResp1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionCmd0. */
    interface ISessionCmd0 {

        /** SessionCmd0 clientPubkey */
        clientPubkey?: (Uint8Array|null);
    }

    /** Represents a SessionCmd0. */
    class SessionCmd0 implements ISessionCmd0 {

        /**
         * Constructs a new SessionCmd0.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISessionCmd0);

        /** SessionCmd0 clientPubkey. */
        public clientPubkey: Uint8Array;

        /**
         * Creates a new SessionCmd0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionCmd0 instance
         */
        public static create(properties?: espressif.ISessionCmd0): espressif.SessionCmd0;

        /**
         * Encodes the specified SessionCmd0 message. Does not implicitly {@link espressif.SessionCmd0.verify|verify} messages.
         * @param message SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.SessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionCmd0 message, length delimited. Does not implicitly {@link espressif.SessionCmd0.verify|verify} messages.
         * @param message SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.SessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.SessionCmd0;

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.SessionCmd0;

        /**
         * Verifies a SessionCmd0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionCmd0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionCmd0
         */
        public static fromObject(object: { [k: string]: any }): espressif.SessionCmd0;

        /**
         * Creates a plain object from a SessionCmd0 message. Also converts values to other types if specified.
         * @param message SessionCmd0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.SessionCmd0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionCmd0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionResp0. */
    interface ISessionResp0 {

        /** SessionResp0 status */
        status?: (espressif.Status|null);

        /** SessionResp0 devicePubkey */
        devicePubkey?: (Uint8Array|null);

        /** SessionResp0 deviceRandom */
        deviceRandom?: (Uint8Array|null);
    }

    /** Represents a SessionResp0. */
    class SessionResp0 implements ISessionResp0 {

        /**
         * Constructs a new SessionResp0.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISessionResp0);

        /** SessionResp0 status. */
        public status: espressif.Status;

        /** SessionResp0 devicePubkey. */
        public devicePubkey: Uint8Array;

        /** SessionResp0 deviceRandom. */
        public deviceRandom: Uint8Array;

        /**
         * Creates a new SessionResp0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionResp0 instance
         */
        public static create(properties?: espressif.ISessionResp0): espressif.SessionResp0;

        /**
         * Encodes the specified SessionResp0 message. Does not implicitly {@link espressif.SessionResp0.verify|verify} messages.
         * @param message SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.SessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionResp0 message, length delimited. Does not implicitly {@link espressif.SessionResp0.verify|verify} messages.
         * @param message SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.SessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.SessionResp0;

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.SessionResp0;

        /**
         * Verifies a SessionResp0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionResp0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionResp0
         */
        public static fromObject(object: { [k: string]: any }): espressif.SessionResp0;

        /**
         * Creates a plain object from a SessionResp0 message. Also converts values to other types if specified.
         * @param message SessionResp0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.SessionResp0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionResp0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Sec1MsgType enum. */
    enum Sec1MsgType {
        Session_Command0 = 0,
        Session_Response0 = 1,
        Session_Command1 = 2,
        Session_Response1 = 3
    }

    /** Properties of a Sec1Payload. */
    interface ISec1Payload {

        /** Sec1Payload msg */
        msg?: (espressif.Sec1MsgType|null);

        /** Sec1Payload sc0 */
        sc0?: (espressif.SessionCmd0|null);

        /** Sec1Payload sr0 */
        sr0?: (espressif.SessionResp0|null);

        /** Sec1Payload sc1 */
        sc1?: (espressif.SessionCmd1|null);

        /** Sec1Payload sr1 */
        sr1?: (espressif.SessionResp1|null);
    }

    /** Represents a Sec1Payload. */
    class Sec1Payload implements ISec1Payload {

        /**
         * Constructs a new Sec1Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISec1Payload);

        /** Sec1Payload msg. */
        public msg: espressif.Sec1MsgType;

        /** Sec1Payload sc0. */
        public sc0?: (espressif.SessionCmd0|null);

        /** Sec1Payload sr0. */
        public sr0?: (espressif.SessionResp0|null);

        /** Sec1Payload sc1. */
        public sc1?: (espressif.SessionCmd1|null);

        /** Sec1Payload sr1. */
        public sr1?: (espressif.SessionResp1|null);

        /** Sec1Payload payload. */
        public payload?: ("sc0"|"sr0"|"sc1"|"sr1");

        /**
         * Creates a new Sec1Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sec1Payload instance
         */
        public static create(properties?: espressif.ISec1Payload): espressif.Sec1Payload;

        /**
         * Encodes the specified Sec1Payload message. Does not implicitly {@link espressif.Sec1Payload.verify|verify} messages.
         * @param message Sec1Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.Sec1Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sec1Payload message, length delimited. Does not implicitly {@link espressif.Sec1Payload.verify|verify} messages.
         * @param message Sec1Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.Sec1Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.Sec1Payload;

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.Sec1Payload;

        /**
         * Verifies a Sec1Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sec1Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sec1Payload
         */
        public static fromObject(object: { [k: string]: any }): espressif.Sec1Payload;

        /**
         * Creates a plain object from a Sec1Payload message. Also converts values to other types if specified.
         * @param message Sec1Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.Sec1Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sec1Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SecSchemeVersion enum. */
    enum SecSchemeVersion {
        SecScheme0 = 0,
        SecScheme1 = 1
    }

    /** Properties of a SessionData. */
    interface ISessionData {

        /** SessionData secVer */
        secVer?: (espressif.SecSchemeVersion|null);

        /** SessionData sec0 */
        sec0?: (espressif.Sec0Payload|null);

        /** SessionData sec1 */
        sec1?: (espressif.Sec1Payload|null);
    }

    /** Represents a SessionData. */
    class SessionData implements ISessionData {

        /**
         * Constructs a new SessionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ISessionData);

        /** SessionData secVer. */
        public secVer: espressif.SecSchemeVersion;

        /** SessionData sec0. */
        public sec0?: (espressif.Sec0Payload|null);

        /** SessionData sec1. */
        public sec1?: (espressif.Sec1Payload|null);

        /** SessionData proto. */
        public proto?: ("sec0"|"sec1");

        /**
         * Creates a new SessionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionData instance
         */
        public static create(properties?: espressif.ISessionData): espressif.SessionData;

        /**
         * Encodes the specified SessionData message. Does not implicitly {@link espressif.SessionData.verify|verify} messages.
         * @param message SessionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.SessionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionData message, length delimited. Does not implicitly {@link espressif.SessionData.verify|verify} messages.
         * @param message SessionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.SessionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.SessionData;

        /**
         * Decodes a SessionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.SessionData;

        /**
         * Verifies a SessionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionData
         */
        public static fromObject(object: { [k: string]: any }): espressif.SessionData;

        /**
         * Creates a plain object from a SessionData message. Also converts values to other types if specified.
         * @param message SessionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.SessionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdGetStatus. */
    interface ICmdGetStatus {
    }

    /** Represents a CmdGetStatus. */
    class CmdGetStatus implements ICmdGetStatus {

        /**
         * Constructs a new CmdGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdGetStatus);

        /**
         * Creates a new CmdGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdGetStatus instance
         */
        public static create(properties?: espressif.ICmdGetStatus): espressif.CmdGetStatus;

        /**
         * Encodes the specified CmdGetStatus message. Does not implicitly {@link espressif.CmdGetStatus.verify|verify} messages.
         * @param message CmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdGetStatus message, length delimited. Does not implicitly {@link espressif.CmdGetStatus.verify|verify} messages.
         * @param message CmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdGetStatus;

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdGetStatus;

        /**
         * Verifies a CmdGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdGetStatus
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdGetStatus;

        /**
         * Creates a plain object from a CmdGetStatus message. Also converts values to other types if specified.
         * @param message CmdGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespGetStatus. */
    interface IRespGetStatus {

        /** RespGetStatus status */
        status?: (espressif.Status|null);

        /** RespGetStatus staState */
        staState?: (espressif.WifiStationState|null);

        /** RespGetStatus failReason */
        failReason?: (espressif.WifiConnectFailedReason|null);

        /** RespGetStatus connected */
        connected?: (espressif.WifiConnectedState|null);
    }

    /** Represents a RespGetStatus. */
    class RespGetStatus implements IRespGetStatus {

        /**
         * Constructs a new RespGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespGetStatus);

        /** RespGetStatus status. */
        public status: espressif.Status;

        /** RespGetStatus staState. */
        public staState: espressif.WifiStationState;

        /** RespGetStatus failReason. */
        public failReason?: (espressif.WifiConnectFailedReason|null);

        /** RespGetStatus connected. */
        public connected?: (espressif.WifiConnectedState|null);

        /** RespGetStatus state. */
        public state?: ("failReason"|"connected");

        /**
         * Creates a new RespGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespGetStatus instance
         */
        public static create(properties?: espressif.IRespGetStatus): espressif.RespGetStatus;

        /**
         * Encodes the specified RespGetStatus message. Does not implicitly {@link espressif.RespGetStatus.verify|verify} messages.
         * @param message RespGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespGetStatus message, length delimited. Does not implicitly {@link espressif.RespGetStatus.verify|verify} messages.
         * @param message RespGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespGetStatus;

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespGetStatus;

        /**
         * Verifies a RespGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespGetStatus
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespGetStatus;

        /**
         * Creates a plain object from a RespGetStatus message. Also converts values to other types if specified.
         * @param message RespGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdSetConfig. */
    interface ICmdSetConfig {

        /** CmdSetConfig ssid */
        ssid?: (Uint8Array|null);

        /** CmdSetConfig passphrase */
        passphrase?: (Uint8Array|null);

        /** CmdSetConfig bssid */
        bssid?: (Uint8Array|null);

        /** CmdSetConfig channel */
        channel?: (number|null);
    }

    /** Represents a CmdSetConfig. */
    class CmdSetConfig implements ICmdSetConfig {

        /**
         * Constructs a new CmdSetConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdSetConfig);

        /** CmdSetConfig ssid. */
        public ssid: Uint8Array;

        /** CmdSetConfig passphrase. */
        public passphrase: Uint8Array;

        /** CmdSetConfig bssid. */
        public bssid: Uint8Array;

        /** CmdSetConfig channel. */
        public channel: number;

        /**
         * Creates a new CmdSetConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdSetConfig instance
         */
        public static create(properties?: espressif.ICmdSetConfig): espressif.CmdSetConfig;

        /**
         * Encodes the specified CmdSetConfig message. Does not implicitly {@link espressif.CmdSetConfig.verify|verify} messages.
         * @param message CmdSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdSetConfig message, length delimited. Does not implicitly {@link espressif.CmdSetConfig.verify|verify} messages.
         * @param message CmdSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdSetConfig;

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdSetConfig;

        /**
         * Verifies a CmdSetConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdSetConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdSetConfig
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdSetConfig;

        /**
         * Creates a plain object from a CmdSetConfig message. Also converts values to other types if specified.
         * @param message CmdSetConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdSetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdSetConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespSetConfig. */
    interface IRespSetConfig {

        /** RespSetConfig status */
        status?: (espressif.Status|null);
    }

    /** Represents a RespSetConfig. */
    class RespSetConfig implements IRespSetConfig {

        /**
         * Constructs a new RespSetConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespSetConfig);

        /** RespSetConfig status. */
        public status: espressif.Status;

        /**
         * Creates a new RespSetConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespSetConfig instance
         */
        public static create(properties?: espressif.IRespSetConfig): espressif.RespSetConfig;

        /**
         * Encodes the specified RespSetConfig message. Does not implicitly {@link espressif.RespSetConfig.verify|verify} messages.
         * @param message RespSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespSetConfig message, length delimited. Does not implicitly {@link espressif.RespSetConfig.verify|verify} messages.
         * @param message RespSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespSetConfig;

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespSetConfig;

        /**
         * Verifies a RespSetConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespSetConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespSetConfig
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespSetConfig;

        /**
         * Creates a plain object from a RespSetConfig message. Also converts values to other types if specified.
         * @param message RespSetConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespSetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespSetConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdApplyConfig. */
    interface ICmdApplyConfig {
    }

    /** Represents a CmdApplyConfig. */
    class CmdApplyConfig implements ICmdApplyConfig {

        /**
         * Constructs a new CmdApplyConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdApplyConfig);

        /**
         * Creates a new CmdApplyConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdApplyConfig instance
         */
        public static create(properties?: espressif.ICmdApplyConfig): espressif.CmdApplyConfig;

        /**
         * Encodes the specified CmdApplyConfig message. Does not implicitly {@link espressif.CmdApplyConfig.verify|verify} messages.
         * @param message CmdApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdApplyConfig message, length delimited. Does not implicitly {@link espressif.CmdApplyConfig.verify|verify} messages.
         * @param message CmdApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdApplyConfig;

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdApplyConfig;

        /**
         * Verifies a CmdApplyConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdApplyConfig
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdApplyConfig;

        /**
         * Creates a plain object from a CmdApplyConfig message. Also converts values to other types if specified.
         * @param message CmdApplyConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdApplyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdApplyConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespApplyConfig. */
    interface IRespApplyConfig {

        /** RespApplyConfig status */
        status?: (espressif.Status|null);
    }

    /** Represents a RespApplyConfig. */
    class RespApplyConfig implements IRespApplyConfig {

        /**
         * Constructs a new RespApplyConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespApplyConfig);

        /** RespApplyConfig status. */
        public status: espressif.Status;

        /**
         * Creates a new RespApplyConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespApplyConfig instance
         */
        public static create(properties?: espressif.IRespApplyConfig): espressif.RespApplyConfig;

        /**
         * Encodes the specified RespApplyConfig message. Does not implicitly {@link espressif.RespApplyConfig.verify|verify} messages.
         * @param message RespApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespApplyConfig message, length delimited. Does not implicitly {@link espressif.RespApplyConfig.verify|verify} messages.
         * @param message RespApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespApplyConfig;

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespApplyConfig;

        /**
         * Verifies a RespApplyConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespApplyConfig
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespApplyConfig;

        /**
         * Creates a plain object from a RespApplyConfig message. Also converts values to other types if specified.
         * @param message RespApplyConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespApplyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespApplyConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** WiFiConfigMsgType enum. */
    enum WiFiConfigMsgType {
        TypeCmdGetStatus = 0,
        TypeRespGetStatus = 1,
        TypeCmdSetConfig = 2,
        TypeRespSetConfig = 3,
        TypeCmdApplyConfig = 4,
        TypeRespApplyConfig = 5
    }

    /** Properties of a WiFiConfigPayload. */
    interface IWiFiConfigPayload {

        /** WiFiConfigPayload msg */
        msg?: (espressif.WiFiConfigMsgType|null);

        /** WiFiConfigPayload cmdGetStatus */
        cmdGetStatus?: (espressif.CmdGetStatus|null);

        /** WiFiConfigPayload respGetStatus */
        respGetStatus?: (espressif.RespGetStatus|null);

        /** WiFiConfigPayload cmdSetConfig */
        cmdSetConfig?: (espressif.CmdSetConfig|null);

        /** WiFiConfigPayload respSetConfig */
        respSetConfig?: (espressif.RespSetConfig|null);

        /** WiFiConfigPayload cmdApplyConfig */
        cmdApplyConfig?: (espressif.CmdApplyConfig|null);

        /** WiFiConfigPayload respApplyConfig */
        respApplyConfig?: (espressif.RespApplyConfig|null);
    }

    /** Represents a WiFiConfigPayload. */
    class WiFiConfigPayload implements IWiFiConfigPayload {

        /**
         * Constructs a new WiFiConfigPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IWiFiConfigPayload);

        /** WiFiConfigPayload msg. */
        public msg: espressif.WiFiConfigMsgType;

        /** WiFiConfigPayload cmdGetStatus. */
        public cmdGetStatus?: (espressif.CmdGetStatus|null);

        /** WiFiConfigPayload respGetStatus. */
        public respGetStatus?: (espressif.RespGetStatus|null);

        /** WiFiConfigPayload cmdSetConfig. */
        public cmdSetConfig?: (espressif.CmdSetConfig|null);

        /** WiFiConfigPayload respSetConfig. */
        public respSetConfig?: (espressif.RespSetConfig|null);

        /** WiFiConfigPayload cmdApplyConfig. */
        public cmdApplyConfig?: (espressif.CmdApplyConfig|null);

        /** WiFiConfigPayload respApplyConfig. */
        public respApplyConfig?: (espressif.RespApplyConfig|null);

        /** WiFiConfigPayload payload. */
        public payload?: ("cmdGetStatus"|"respGetStatus"|"cmdSetConfig"|"respSetConfig"|"cmdApplyConfig"|"respApplyConfig");

        /**
         * Creates a new WiFiConfigPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiConfigPayload instance
         */
        public static create(properties?: espressif.IWiFiConfigPayload): espressif.WiFiConfigPayload;

        /**
         * Encodes the specified WiFiConfigPayload message. Does not implicitly {@link espressif.WiFiConfigPayload.verify|verify} messages.
         * @param message WiFiConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.WiFiConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiConfigPayload message, length delimited. Does not implicitly {@link espressif.WiFiConfigPayload.verify|verify} messages.
         * @param message WiFiConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.WiFiConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.WiFiConfigPayload;

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.WiFiConfigPayload;

        /**
         * Verifies a WiFiConfigPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiConfigPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiConfigPayload
         */
        public static fromObject(object: { [k: string]: any }): espressif.WiFiConfigPayload;

        /**
         * Creates a plain object from a WiFiConfigPayload message. Also converts values to other types if specified.
         * @param message WiFiConfigPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.WiFiConfigPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiConfigPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** WifiStationState enum. */
    enum WifiStationState {
        Connected = 0,
        Connecting = 1,
        Disconnected = 2,
        ConnectionFailed = 3
    }

    /** WifiConnectFailedReason enum. */
    enum WifiConnectFailedReason {
        AuthError = 0,
        NetworkNotFound = 1
    }

    /** WifiAuthMode enum. */
    enum WifiAuthMode {
        Open = 0,
        WEP = 1,
        WPA_PSK = 2,
        WPA2_PSK = 3,
        WPA_WPA2_PSK = 4,
        WPA2_ENTERPRISE = 5
    }

    /** Properties of a WifiConnectedState. */
    interface IWifiConnectedState {

        /** WifiConnectedState ip4Addr */
        ip4Addr?: (string|null);

        /** WifiConnectedState authMode */
        authMode?: (espressif.WifiAuthMode|null);

        /** WifiConnectedState ssid */
        ssid?: (Uint8Array|null);

        /** WifiConnectedState bssid */
        bssid?: (Uint8Array|null);

        /** WifiConnectedState channel */
        channel?: (number|null);
    }

    /** Represents a WifiConnectedState. */
    class WifiConnectedState implements IWifiConnectedState {

        /**
         * Constructs a new WifiConnectedState.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IWifiConnectedState);

        /** WifiConnectedState ip4Addr. */
        public ip4Addr: string;

        /** WifiConnectedState authMode. */
        public authMode: espressif.WifiAuthMode;

        /** WifiConnectedState ssid. */
        public ssid: Uint8Array;

        /** WifiConnectedState bssid. */
        public bssid: Uint8Array;

        /** WifiConnectedState channel. */
        public channel: number;

        /**
         * Creates a new WifiConnectedState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WifiConnectedState instance
         */
        public static create(properties?: espressif.IWifiConnectedState): espressif.WifiConnectedState;

        /**
         * Encodes the specified WifiConnectedState message. Does not implicitly {@link espressif.WifiConnectedState.verify|verify} messages.
         * @param message WifiConnectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.WifiConnectedState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WifiConnectedState message, length delimited. Does not implicitly {@link espressif.WifiConnectedState.verify|verify} messages.
         * @param message WifiConnectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.WifiConnectedState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.WifiConnectedState;

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.WifiConnectedState;

        /**
         * Verifies a WifiConnectedState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WifiConnectedState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WifiConnectedState
         */
        public static fromObject(object: { [k: string]: any }): espressif.WifiConnectedState;

        /**
         * Creates a plain object from a WifiConnectedState message. Also converts values to other types if specified.
         * @param message WifiConnectedState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.WifiConnectedState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WifiConnectedState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdScanStart. */
    interface ICmdScanStart {

        /** CmdScanStart blocking */
        blocking?: (boolean|null);

        /** CmdScanStart passive */
        passive?: (boolean|null);

        /** CmdScanStart groupChannels */
        groupChannels?: (number|null);

        /** CmdScanStart periodMs */
        periodMs?: (number|null);
    }

    /** Represents a CmdScanStart. */
    class CmdScanStart implements ICmdScanStart {

        /**
         * Constructs a new CmdScanStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdScanStart);

        /** CmdScanStart blocking. */
        public blocking: boolean;

        /** CmdScanStart passive. */
        public passive: boolean;

        /** CmdScanStart groupChannels. */
        public groupChannels: number;

        /** CmdScanStart periodMs. */
        public periodMs: number;

        /**
         * Creates a new CmdScanStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanStart instance
         */
        public static create(properties?: espressif.ICmdScanStart): espressif.CmdScanStart;

        /**
         * Encodes the specified CmdScanStart message. Does not implicitly {@link espressif.CmdScanStart.verify|verify} messages.
         * @param message CmdScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanStart message, length delimited. Does not implicitly {@link espressif.CmdScanStart.verify|verify} messages.
         * @param message CmdScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdScanStart;

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdScanStart;

        /**
         * Verifies a CmdScanStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanStart
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdScanStart;

        /**
         * Creates a plain object from a CmdScanStart message. Also converts values to other types if specified.
         * @param message CmdScanStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdScanStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespScanStart. */
    interface IRespScanStart {
    }

    /** Represents a RespScanStart. */
    class RespScanStart implements IRespScanStart {

        /**
         * Constructs a new RespScanStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespScanStart);

        /**
         * Creates a new RespScanStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanStart instance
         */
        public static create(properties?: espressif.IRespScanStart): espressif.RespScanStart;

        /**
         * Encodes the specified RespScanStart message. Does not implicitly {@link espressif.RespScanStart.verify|verify} messages.
         * @param message RespScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanStart message, length delimited. Does not implicitly {@link espressif.RespScanStart.verify|verify} messages.
         * @param message RespScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespScanStart;

        /**
         * Decodes a RespScanStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespScanStart;

        /**
         * Verifies a RespScanStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanStart
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespScanStart;

        /**
         * Creates a plain object from a RespScanStart message. Also converts values to other types if specified.
         * @param message RespScanStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespScanStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdScanStatus. */
    interface ICmdScanStatus {
    }

    /** Represents a CmdScanStatus. */
    class CmdScanStatus implements ICmdScanStatus {

        /**
         * Constructs a new CmdScanStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdScanStatus);

        /**
         * Creates a new CmdScanStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanStatus instance
         */
        public static create(properties?: espressif.ICmdScanStatus): espressif.CmdScanStatus;

        /**
         * Encodes the specified CmdScanStatus message. Does not implicitly {@link espressif.CmdScanStatus.verify|verify} messages.
         * @param message CmdScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanStatus message, length delimited. Does not implicitly {@link espressif.CmdScanStatus.verify|verify} messages.
         * @param message CmdScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdScanStatus;

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdScanStatus;

        /**
         * Verifies a CmdScanStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanStatus
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdScanStatus;

        /**
         * Creates a plain object from a CmdScanStatus message. Also converts values to other types if specified.
         * @param message CmdScanStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdScanStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespScanStatus. */
    interface IRespScanStatus {

        /** RespScanStatus scanFinished */
        scanFinished?: (boolean|null);

        /** RespScanStatus resultCount */
        resultCount?: (number|null);
    }

    /** Represents a RespScanStatus. */
    class RespScanStatus implements IRespScanStatus {

        /**
         * Constructs a new RespScanStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespScanStatus);

        /** RespScanStatus scanFinished. */
        public scanFinished: boolean;

        /** RespScanStatus resultCount. */
        public resultCount: number;

        /**
         * Creates a new RespScanStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanStatus instance
         */
        public static create(properties?: espressif.IRespScanStatus): espressif.RespScanStatus;

        /**
         * Encodes the specified RespScanStatus message. Does not implicitly {@link espressif.RespScanStatus.verify|verify} messages.
         * @param message RespScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanStatus message, length delimited. Does not implicitly {@link espressif.RespScanStatus.verify|verify} messages.
         * @param message RespScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespScanStatus;

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespScanStatus;

        /**
         * Verifies a RespScanStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanStatus
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespScanStatus;

        /**
         * Creates a plain object from a RespScanStatus message. Also converts values to other types if specified.
         * @param message RespScanStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespScanStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CmdScanResult. */
    interface ICmdScanResult {

        /** CmdScanResult startIndex */
        startIndex?: (number|null);

        /** CmdScanResult count */
        count?: (number|null);
    }

    /** Represents a CmdScanResult. */
    class CmdScanResult implements ICmdScanResult {

        /**
         * Constructs a new CmdScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.ICmdScanResult);

        /** CmdScanResult startIndex. */
        public startIndex: number;

        /** CmdScanResult count. */
        public count: number;

        /**
         * Creates a new CmdScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanResult instance
         */
        public static create(properties?: espressif.ICmdScanResult): espressif.CmdScanResult;

        /**
         * Encodes the specified CmdScanResult message. Does not implicitly {@link espressif.CmdScanResult.verify|verify} messages.
         * @param message CmdScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.CmdScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanResult message, length delimited. Does not implicitly {@link espressif.CmdScanResult.verify|verify} messages.
         * @param message CmdScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.CmdScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.CmdScanResult;

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.CmdScanResult;

        /**
         * Verifies a CmdScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanResult
         */
        public static fromObject(object: { [k: string]: any }): espressif.CmdScanResult;

        /**
         * Creates a plain object from a CmdScanResult message. Also converts values to other types if specified.
         * @param message CmdScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.CmdScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WiFiScanResult. */
    interface IWiFiScanResult {

        /** WiFiScanResult ssid */
        ssid?: (Uint8Array|null);

        /** WiFiScanResult channel */
        channel?: (number|null);

        /** WiFiScanResult rssi */
        rssi?: (number|null);

        /** WiFiScanResult bssid */
        bssid?: (Uint8Array|null);

        /** WiFiScanResult auth */
        auth?: (espressif.WifiAuthMode|null);
    }

    /** Represents a WiFiScanResult. */
    class WiFiScanResult implements IWiFiScanResult {

        /**
         * Constructs a new WiFiScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IWiFiScanResult);

        /** WiFiScanResult ssid. */
        public ssid: Uint8Array;

        /** WiFiScanResult channel. */
        public channel: number;

        /** WiFiScanResult rssi. */
        public rssi: number;

        /** WiFiScanResult bssid. */
        public bssid: Uint8Array;

        /** WiFiScanResult auth. */
        public auth: espressif.WifiAuthMode;

        /**
         * Creates a new WiFiScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiScanResult instance
         */
        public static create(properties?: espressif.IWiFiScanResult): espressif.WiFiScanResult;

        /**
         * Encodes the specified WiFiScanResult message. Does not implicitly {@link espressif.WiFiScanResult.verify|verify} messages.
         * @param message WiFiScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.WiFiScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiScanResult message, length delimited. Does not implicitly {@link espressif.WiFiScanResult.verify|verify} messages.
         * @param message WiFiScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.WiFiScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.WiFiScanResult;

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.WiFiScanResult;

        /**
         * Verifies a WiFiScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiScanResult
         */
        public static fromObject(object: { [k: string]: any }): espressif.WiFiScanResult;

        /**
         * Creates a plain object from a WiFiScanResult message. Also converts values to other types if specified.
         * @param message WiFiScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.WiFiScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespScanResult. */
    interface IRespScanResult {

        /** RespScanResult entries */
        entries?: (espressif.WiFiScanResult[]|null);
    }

    /** Represents a RespScanResult. */
    class RespScanResult implements IRespScanResult {

        /**
         * Constructs a new RespScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IRespScanResult);

        /** RespScanResult entries. */
        public entries: espressif.WiFiScanResult[];

        /**
         * Creates a new RespScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanResult instance
         */
        public static create(properties?: espressif.IRespScanResult): espressif.RespScanResult;

        /**
         * Encodes the specified RespScanResult message. Does not implicitly {@link espressif.RespScanResult.verify|verify} messages.
         * @param message RespScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.RespScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanResult message, length delimited. Does not implicitly {@link espressif.RespScanResult.verify|verify} messages.
         * @param message RespScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.RespScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.RespScanResult;

        /**
         * Decodes a RespScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.RespScanResult;

        /**
         * Verifies a RespScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanResult
         */
        public static fromObject(object: { [k: string]: any }): espressif.RespScanResult;

        /**
         * Creates a plain object from a RespScanResult message. Also converts values to other types if specified.
         * @param message RespScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.RespScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** WiFiScanMsgType enum. */
    enum WiFiScanMsgType {
        TypeCmdScanStart = 0,
        TypeRespScanStart = 1,
        TypeCmdScanStatus = 2,
        TypeRespScanStatus = 3,
        TypeCmdScanResult = 4,
        TypeRespScanResult = 5
    }

    /** Properties of a WiFiScanPayload. */
    interface IWiFiScanPayload {

        /** WiFiScanPayload msg */
        msg?: (espressif.WiFiScanMsgType|null);

        /** WiFiScanPayload status */
        status?: (espressif.Status|null);

        /** WiFiScanPayload cmdScanStart */
        cmdScanStart?: (espressif.CmdScanStart|null);

        /** WiFiScanPayload respScanStart */
        respScanStart?: (espressif.RespScanStart|null);

        /** WiFiScanPayload cmdScanStatus */
        cmdScanStatus?: (espressif.CmdScanStatus|null);

        /** WiFiScanPayload respScanStatus */
        respScanStatus?: (espressif.RespScanStatus|null);

        /** WiFiScanPayload cmdScanResult */
        cmdScanResult?: (espressif.CmdScanResult|null);

        /** WiFiScanPayload respScanResult */
        respScanResult?: (espressif.RespScanResult|null);
    }

    /** Represents a WiFiScanPayload. */
    class WiFiScanPayload implements IWiFiScanPayload {

        /**
         * Constructs a new WiFiScanPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: espressif.IWiFiScanPayload);

        /** WiFiScanPayload msg. */
        public msg: espressif.WiFiScanMsgType;

        /** WiFiScanPayload status. */
        public status: espressif.Status;

        /** WiFiScanPayload cmdScanStart. */
        public cmdScanStart?: (espressif.CmdScanStart|null);

        /** WiFiScanPayload respScanStart. */
        public respScanStart?: (espressif.RespScanStart|null);

        /** WiFiScanPayload cmdScanStatus. */
        public cmdScanStatus?: (espressif.CmdScanStatus|null);

        /** WiFiScanPayload respScanStatus. */
        public respScanStatus?: (espressif.RespScanStatus|null);

        /** WiFiScanPayload cmdScanResult. */
        public cmdScanResult?: (espressif.CmdScanResult|null);

        /** WiFiScanPayload respScanResult. */
        public respScanResult?: (espressif.RespScanResult|null);

        /** WiFiScanPayload payload. */
        public payload?: ("cmdScanStart"|"respScanStart"|"cmdScanStatus"|"respScanStatus"|"cmdScanResult"|"respScanResult");

        /**
         * Creates a new WiFiScanPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiScanPayload instance
         */
        public static create(properties?: espressif.IWiFiScanPayload): espressif.WiFiScanPayload;

        /**
         * Encodes the specified WiFiScanPayload message. Does not implicitly {@link espressif.WiFiScanPayload.verify|verify} messages.
         * @param message WiFiScanPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: espressif.WiFiScanPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiScanPayload message, length delimited. Does not implicitly {@link espressif.WiFiScanPayload.verify|verify} messages.
         * @param message WiFiScanPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: espressif.WiFiScanPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): espressif.WiFiScanPayload;

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): espressif.WiFiScanPayload;

        /**
         * Verifies a WiFiScanPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiScanPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiScanPayload
         */
        public static fromObject(object: { [k: string]: any }): espressif.WiFiScanPayload;

        /**
         * Creates a plain object from a WiFiScanPayload message. Also converts values to other types if specified.
         * @param message WiFiScanPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: espressif.WiFiScanPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiScanPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace hdyRpc. */
export namespace hdyRpc {

    /** ResultCodes enum. */
    enum ResultCodes {
        RESULT_UNKNOWN = 0,
        RESULT_OK = 1,
        RESULT_OK_ALREADY_SET = 2,
        RESULT_ERR_GENERIC = -1,
        RESULT_ERR_NO_MEMORY = -2,
        RESULT_ERR_INVALID_ARG = -3,
        RESULT_ERR_INVALID_STATE = -4,
        RESULT_ERR_INVALID_SIZE = -5,
        RESULT_ERR_NOT_FOUND = -6,
        RESULT_ERR_NOT_SUPPORTED = -7,
        RESULT_ERR_TIMEOUT = -8,
        RESULT_ERR_INVALID_RESPONSE = -9
    }

    /** Modes enum. */
    enum Modes {
        MODE_HAMP = 0,
        MODE_HDSP = 1,
        MODE_HSSP = 2,
        MODE_MAINTENANCE = 3
    }

    /** HampStates enum. */
    enum HampStates {
        HAMP_STATE_STOPPED = 0,
        HAMP_STATE_RUNNING = 1
    }

    /** Properties of a RequestCmdGetServerTime. */
    interface IRequestCmdGetServerTime {
    }

    /** Represents a RequestCmdGetServerTime. */
    class RequestCmdGetServerTime implements IRequestCmdGetServerTime {

        /**
         * Constructs a new RequestCmdGetServerTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetServerTime);

        /**
         * Creates a new RequestCmdGetServerTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetServerTime instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetServerTime): hdyRpc.RequestCmdGetServerTime;

        /**
         * Encodes the specified RequestCmdGetServerTime message. Does not implicitly {@link hdyRpc.RequestCmdGetServerTime.verify|verify} messages.
         * @param message RequestCmdGetServerTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetServerTime message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetServerTime.verify|verify} messages.
         * @param message RequestCmdGetServerTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetServerTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetServerTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetServerTime;

        /**
         * Decodes a RequestCmdGetServerTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetServerTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetServerTime;

        /**
         * Verifies a RequestCmdGetServerTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetServerTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetServerTime
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetServerTime;

        /**
         * Creates a plain object from a RequestCmdGetServerTime message. Also converts values to other types if specified.
         * @param message RequestCmdGetServerTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetServerTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetServerTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetServerTime. */
    interface IResponseCmdGetServerTime {

        /** ResponseCmdGetServerTime time */
        time?: (number|Long|null);
    }

    /** Represents a ResponseCmdGetServerTime. */
    class ResponseCmdGetServerTime implements IResponseCmdGetServerTime {

        /**
         * Constructs a new ResponseCmdGetServerTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetServerTime);

        /** ResponseCmdGetServerTime time. */
        public time: (number|Long);

        /**
         * Creates a new ResponseCmdGetServerTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetServerTime instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetServerTime): hdyRpc.ResponseCmdGetServerTime;

        /**
         * Encodes the specified ResponseCmdGetServerTime message. Does not implicitly {@link hdyRpc.ResponseCmdGetServerTime.verify|verify} messages.
         * @param message ResponseCmdGetServerTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetServerTime message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetServerTime.verify|verify} messages.
         * @param message ResponseCmdGetServerTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetServerTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetServerTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetServerTime;

        /**
         * Decodes a ResponseCmdGetServerTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetServerTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetServerTime;

        /**
         * Verifies a ResponseCmdGetServerTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetServerTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetServerTime
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetServerTime;

        /**
         * Creates a plain object from a ResponseCmdGetServerTime message. Also converts values to other types if specified.
         * @param message ResponseCmdGetServerTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetServerTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetServerTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdWsHandshake. */
    interface IRequestCmdWsHandshake {

        /** RequestCmdWsHandshake test */
        test?: (string|null);
    }

    /** Represents a RequestCmdWsHandshake. */
    class RequestCmdWsHandshake implements IRequestCmdWsHandshake {

        /**
         * Constructs a new RequestCmdWsHandshake.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdWsHandshake);

        /** RequestCmdWsHandshake test. */
        public test: string;

        /**
         * Creates a new RequestCmdWsHandshake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdWsHandshake instance
         */
        public static create(properties?: hdyRpc.IRequestCmdWsHandshake): hdyRpc.RequestCmdWsHandshake;

        /**
         * Encodes the specified RequestCmdWsHandshake message. Does not implicitly {@link hdyRpc.RequestCmdWsHandshake.verify|verify} messages.
         * @param message RequestCmdWsHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdWsHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdWsHandshake message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdWsHandshake.verify|verify} messages.
         * @param message RequestCmdWsHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdWsHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdWsHandshake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdWsHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdWsHandshake;

        /**
         * Decodes a RequestCmdWsHandshake message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdWsHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdWsHandshake;

        /**
         * Verifies a RequestCmdWsHandshake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdWsHandshake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdWsHandshake
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdWsHandshake;

        /**
         * Creates a plain object from a RequestCmdWsHandshake message. Also converts values to other types if specified.
         * @param message RequestCmdWsHandshake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdWsHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdWsHandshake to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdWsHandshake. */
    interface IResponseCmdWsHandshake {

        /** ResponseCmdWsHandshake testResult */
        testResult?: (string|null);
    }

    /** Represents a ResponseCmdWsHandshake. */
    class ResponseCmdWsHandshake implements IResponseCmdWsHandshake {

        /**
         * Constructs a new ResponseCmdWsHandshake.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdWsHandshake);

        /** ResponseCmdWsHandshake testResult. */
        public testResult: string;

        /**
         * Creates a new ResponseCmdWsHandshake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdWsHandshake instance
         */
        public static create(properties?: hdyRpc.IResponseCmdWsHandshake): hdyRpc.ResponseCmdWsHandshake;

        /**
         * Encodes the specified ResponseCmdWsHandshake message. Does not implicitly {@link hdyRpc.ResponseCmdWsHandshake.verify|verify} messages.
         * @param message ResponseCmdWsHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdWsHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdWsHandshake message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdWsHandshake.verify|verify} messages.
         * @param message ResponseCmdWsHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdWsHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdWsHandshake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdWsHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdWsHandshake;

        /**
         * Decodes a ResponseCmdWsHandshake message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdWsHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdWsHandshake;

        /**
         * Verifies a ResponseCmdWsHandshake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdWsHandshake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdWsHandshake
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdWsHandshake;

        /**
         * Creates a plain object from a ResponseCmdWsHandshake message. Also converts values to other types if specified.
         * @param message ResponseCmdWsHandshake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdWsHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdWsHandshake to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGenerateConnectionKey. */
    interface IRequestCmdGenerateConnectionKey {

        /** RequestCmdGenerateConnectionKey length */
        length?: (number|null);
    }

    /** Represents a RequestCmdGenerateConnectionKey. */
    class RequestCmdGenerateConnectionKey implements IRequestCmdGenerateConnectionKey {

        /**
         * Constructs a new RequestCmdGenerateConnectionKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGenerateConnectionKey);

        /** RequestCmdGenerateConnectionKey length. */
        public length: number;

        /**
         * Creates a new RequestCmdGenerateConnectionKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGenerateConnectionKey instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGenerateConnectionKey): hdyRpc.RequestCmdGenerateConnectionKey;

        /**
         * Encodes the specified RequestCmdGenerateConnectionKey message. Does not implicitly {@link hdyRpc.RequestCmdGenerateConnectionKey.verify|verify} messages.
         * @param message RequestCmdGenerateConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGenerateConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGenerateConnectionKey message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGenerateConnectionKey.verify|verify} messages.
         * @param message RequestCmdGenerateConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGenerateConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGenerateConnectionKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGenerateConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGenerateConnectionKey;

        /**
         * Decodes a RequestCmdGenerateConnectionKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGenerateConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGenerateConnectionKey;

        /**
         * Verifies a RequestCmdGenerateConnectionKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGenerateConnectionKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGenerateConnectionKey
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGenerateConnectionKey;

        /**
         * Creates a plain object from a RequestCmdGenerateConnectionKey message. Also converts values to other types if specified.
         * @param message RequestCmdGenerateConnectionKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGenerateConnectionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGenerateConnectionKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGenerateConnectionKey. */
    interface IResponseCmdGenerateConnectionKey {

        /** ResponseCmdGenerateConnectionKey result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGenerateConnectionKey key */
        key?: (string|null);
    }

    /** Represents a ResponseCmdGenerateConnectionKey. */
    class ResponseCmdGenerateConnectionKey implements IResponseCmdGenerateConnectionKey {

        /**
         * Constructs a new ResponseCmdGenerateConnectionKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGenerateConnectionKey);

        /** ResponseCmdGenerateConnectionKey result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGenerateConnectionKey key. */
        public key: string;

        /**
         * Creates a new ResponseCmdGenerateConnectionKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGenerateConnectionKey instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGenerateConnectionKey): hdyRpc.ResponseCmdGenerateConnectionKey;

        /**
         * Encodes the specified ResponseCmdGenerateConnectionKey message. Does not implicitly {@link hdyRpc.ResponseCmdGenerateConnectionKey.verify|verify} messages.
         * @param message ResponseCmdGenerateConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGenerateConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGenerateConnectionKey message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGenerateConnectionKey.verify|verify} messages.
         * @param message ResponseCmdGenerateConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGenerateConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGenerateConnectionKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGenerateConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGenerateConnectionKey;

        /**
         * Decodes a ResponseCmdGenerateConnectionKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGenerateConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGenerateConnectionKey;

        /**
         * Verifies a ResponseCmdGenerateConnectionKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGenerateConnectionKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGenerateConnectionKey
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGenerateConnectionKey;

        /**
         * Creates a plain object from a ResponseCmdGenerateConnectionKey message. Also converts values to other types if specified.
         * @param message ResponseCmdGenerateConnectionKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGenerateConnectionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGenerateConnectionKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdSetConnectionKey. */
    interface IRequestCmdSetConnectionKey {

        /** RequestCmdSetConnectionKey key */
        key?: (string|null);
    }

    /** Represents a RequestCmdSetConnectionKey. */
    class RequestCmdSetConnectionKey implements IRequestCmdSetConnectionKey {

        /**
         * Constructs a new RequestCmdSetConnectionKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdSetConnectionKey);

        /** RequestCmdSetConnectionKey key. */
        public key: string;

        /**
         * Creates a new RequestCmdSetConnectionKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdSetConnectionKey instance
         */
        public static create(properties?: hdyRpc.IRequestCmdSetConnectionKey): hdyRpc.RequestCmdSetConnectionKey;

        /**
         * Encodes the specified RequestCmdSetConnectionKey message. Does not implicitly {@link hdyRpc.RequestCmdSetConnectionKey.verify|verify} messages.
         * @param message RequestCmdSetConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdSetConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdSetConnectionKey message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdSetConnectionKey.verify|verify} messages.
         * @param message RequestCmdSetConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdSetConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdSetConnectionKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdSetConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdSetConnectionKey;

        /**
         * Decodes a RequestCmdSetConnectionKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdSetConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdSetConnectionKey;

        /**
         * Verifies a RequestCmdSetConnectionKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdSetConnectionKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdSetConnectionKey
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdSetConnectionKey;

        /**
         * Creates a plain object from a RequestCmdSetConnectionKey message. Also converts values to other types if specified.
         * @param message RequestCmdSetConnectionKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdSetConnectionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdSetConnectionKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdSetConnectionKey. */
    interface IResponseCmdSetConnectionKey {

        /** ResponseCmdSetConnectionKey result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdSetConnectionKey. */
    class ResponseCmdSetConnectionKey implements IResponseCmdSetConnectionKey {

        /**
         * Constructs a new ResponseCmdSetConnectionKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdSetConnectionKey);

        /** ResponseCmdSetConnectionKey result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdSetConnectionKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdSetConnectionKey instance
         */
        public static create(properties?: hdyRpc.IResponseCmdSetConnectionKey): hdyRpc.ResponseCmdSetConnectionKey;

        /**
         * Encodes the specified ResponseCmdSetConnectionKey message. Does not implicitly {@link hdyRpc.ResponseCmdSetConnectionKey.verify|verify} messages.
         * @param message ResponseCmdSetConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdSetConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdSetConnectionKey message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdSetConnectionKey.verify|verify} messages.
         * @param message ResponseCmdSetConnectionKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdSetConnectionKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdSetConnectionKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdSetConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdSetConnectionKey;

        /**
         * Decodes a ResponseCmdSetConnectionKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdSetConnectionKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdSetConnectionKey;

        /**
         * Verifies a ResponseCmdSetConnectionKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdSetConnectionKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdSetConnectionKey
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdSetConnectionKey;

        /**
         * Creates a plain object from a ResponseCmdSetConnectionKey message. Also converts values to other types if specified.
         * @param message ResponseCmdSetConnectionKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdSetConnectionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdSetConnectionKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGetMode. */
    interface IRequestCmdGetMode {
    }

    /** Represents a RequestCmdGetMode. */
    class RequestCmdGetMode implements IRequestCmdGetMode {

        /**
         * Constructs a new RequestCmdGetMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetMode);

        /**
         * Creates a new RequestCmdGetMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetMode instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetMode): hdyRpc.RequestCmdGetMode;

        /**
         * Encodes the specified RequestCmdGetMode message. Does not implicitly {@link hdyRpc.RequestCmdGetMode.verify|verify} messages.
         * @param message RequestCmdGetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetMode message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetMode.verify|verify} messages.
         * @param message RequestCmdGetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetMode;

        /**
         * Decodes a RequestCmdGetMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetMode;

        /**
         * Verifies a RequestCmdGetMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetMode
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetMode;

        /**
         * Creates a plain object from a RequestCmdGetMode message. Also converts values to other types if specified.
         * @param message RequestCmdGetMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetMode. */
    interface IResponseCmdGetMode {

        /** ResponseCmdGetMode result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGetMode mode */
        mode?: (hdyRpc.Modes|null);
    }

    /** Represents a ResponseCmdGetMode. */
    class ResponseCmdGetMode implements IResponseCmdGetMode {

        /**
         * Constructs a new ResponseCmdGetMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetMode);

        /** ResponseCmdGetMode result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGetMode mode. */
        public mode: hdyRpc.Modes;

        /**
         * Creates a new ResponseCmdGetMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetMode instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetMode): hdyRpc.ResponseCmdGetMode;

        /**
         * Encodes the specified ResponseCmdGetMode message. Does not implicitly {@link hdyRpc.ResponseCmdGetMode.verify|verify} messages.
         * @param message ResponseCmdGetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetMode message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetMode.verify|verify} messages.
         * @param message ResponseCmdGetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetMode;

        /**
         * Decodes a ResponseCmdGetMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetMode;

        /**
         * Verifies a ResponseCmdGetMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetMode
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetMode;

        /**
         * Creates a plain object from a ResponseCmdGetMode message. Also converts values to other types if specified.
         * @param message ResponseCmdGetMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdSetMode. */
    interface IRequestCmdSetMode {

        /** RequestCmdSetMode mode */
        mode?: (hdyRpc.Modes|null);
    }

    /** Represents a RequestCmdSetMode. */
    class RequestCmdSetMode implements IRequestCmdSetMode {

        /**
         * Constructs a new RequestCmdSetMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdSetMode);

        /** RequestCmdSetMode mode. */
        public mode: hdyRpc.Modes;

        /**
         * Creates a new RequestCmdSetMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdSetMode instance
         */
        public static create(properties?: hdyRpc.IRequestCmdSetMode): hdyRpc.RequestCmdSetMode;

        /**
         * Encodes the specified RequestCmdSetMode message. Does not implicitly {@link hdyRpc.RequestCmdSetMode.verify|verify} messages.
         * @param message RequestCmdSetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdSetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdSetMode message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdSetMode.verify|verify} messages.
         * @param message RequestCmdSetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdSetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdSetMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdSetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdSetMode;

        /**
         * Decodes a RequestCmdSetMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdSetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdSetMode;

        /**
         * Verifies a RequestCmdSetMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdSetMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdSetMode
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdSetMode;

        /**
         * Creates a plain object from a RequestCmdSetMode message. Also converts values to other types if specified.
         * @param message RequestCmdSetMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdSetMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdSetMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdSetMode. */
    interface IResponseCmdSetMode {

        /** ResponseCmdSetMode result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdSetMode. */
    class ResponseCmdSetMode implements IResponseCmdSetMode {

        /**
         * Constructs a new ResponseCmdSetMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdSetMode);

        /** ResponseCmdSetMode result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdSetMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdSetMode instance
         */
        public static create(properties?: hdyRpc.IResponseCmdSetMode): hdyRpc.ResponseCmdSetMode;

        /**
         * Encodes the specified ResponseCmdSetMode message. Does not implicitly {@link hdyRpc.ResponseCmdSetMode.verify|verify} messages.
         * @param message ResponseCmdSetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdSetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdSetMode message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdSetMode.verify|verify} messages.
         * @param message ResponseCmdSetMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdSetMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdSetMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdSetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdSetMode;

        /**
         * Decodes a ResponseCmdSetMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdSetMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdSetMode;

        /**
         * Verifies a ResponseCmdSetMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdSetMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdSetMode
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdSetMode;

        /**
         * Creates a plain object from a ResponseCmdSetMode message. Also converts values to other types if specified.
         * @param message ResponseCmdSetMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdSetMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdSetMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGetConnected. */
    interface IRequestCmdGetConnected {
    }

    /** Represents a RequestCmdGetConnected. */
    class RequestCmdGetConnected implements IRequestCmdGetConnected {

        /**
         * Constructs a new RequestCmdGetConnected.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetConnected);

        /**
         * Creates a new RequestCmdGetConnected instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetConnected instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetConnected): hdyRpc.RequestCmdGetConnected;

        /**
         * Encodes the specified RequestCmdGetConnected message. Does not implicitly {@link hdyRpc.RequestCmdGetConnected.verify|verify} messages.
         * @param message RequestCmdGetConnected message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetConnected, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetConnected message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetConnected.verify|verify} messages.
         * @param message RequestCmdGetConnected message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetConnected, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetConnected message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetConnected
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetConnected;

        /**
         * Decodes a RequestCmdGetConnected message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetConnected
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetConnected;

        /**
         * Verifies a RequestCmdGetConnected message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetConnected message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetConnected
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetConnected;

        /**
         * Creates a plain object from a RequestCmdGetConnected message. Also converts values to other types if specified.
         * @param message RequestCmdGetConnected
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetConnected to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetConnected. */
    interface IResponseCmdGetConnected {

        /** ResponseCmdGetConnected result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGetConnected connected */
        connected?: (boolean|null);
    }

    /** Represents a ResponseCmdGetConnected. */
    class ResponseCmdGetConnected implements IResponseCmdGetConnected {

        /**
         * Constructs a new ResponseCmdGetConnected.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetConnected);

        /** ResponseCmdGetConnected result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGetConnected connected. */
        public connected: boolean;

        /**
         * Creates a new ResponseCmdGetConnected instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetConnected instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetConnected): hdyRpc.ResponseCmdGetConnected;

        /**
         * Encodes the specified ResponseCmdGetConnected message. Does not implicitly {@link hdyRpc.ResponseCmdGetConnected.verify|verify} messages.
         * @param message ResponseCmdGetConnected message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetConnected, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetConnected message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetConnected.verify|verify} messages.
         * @param message ResponseCmdGetConnected message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetConnected, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetConnected message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetConnected
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetConnected;

        /**
         * Decodes a ResponseCmdGetConnected message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetConnected
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetConnected;

        /**
         * Verifies a ResponseCmdGetConnected message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetConnected message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetConnected
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetConnected;

        /**
         * Creates a plain object from a ResponseCmdGetConnected message. Also converts values to other types if specified.
         * @param message ResponseCmdGetConnected
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetConnected to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGetInfo. */
    interface IRequestCmdGetInfo {
    }

    /** Represents a RequestCmdGetInfo. */
    class RequestCmdGetInfo implements IRequestCmdGetInfo {

        /**
         * Constructs a new RequestCmdGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetInfo);

        /**
         * Creates a new RequestCmdGetInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetInfo instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetInfo): hdyRpc.RequestCmdGetInfo;

        /**
         * Encodes the specified RequestCmdGetInfo message. Does not implicitly {@link hdyRpc.RequestCmdGetInfo.verify|verify} messages.
         * @param message RequestCmdGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetInfo message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetInfo.verify|verify} messages.
         * @param message RequestCmdGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetInfo;

        /**
         * Decodes a RequestCmdGetInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetInfo;

        /**
         * Verifies a RequestCmdGetInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetInfo
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetInfo;

        /**
         * Creates a plain object from a RequestCmdGetInfo message. Also converts values to other types if specified.
         * @param message RequestCmdGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetInfo. */
    interface IResponseCmdGetInfo {

        /** ResponseCmdGetInfo result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGetInfo info */
        info?: (string|null);
    }

    /** Represents a ResponseCmdGetInfo. */
    class ResponseCmdGetInfo implements IResponseCmdGetInfo {

        /**
         * Constructs a new ResponseCmdGetInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetInfo);

        /** ResponseCmdGetInfo result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGetInfo info. */
        public info: string;

        /**
         * Creates a new ResponseCmdGetInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetInfo instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetInfo): hdyRpc.ResponseCmdGetInfo;

        /**
         * Encodes the specified ResponseCmdGetInfo message. Does not implicitly {@link hdyRpc.ResponseCmdGetInfo.verify|verify} messages.
         * @param message ResponseCmdGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetInfo message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetInfo.verify|verify} messages.
         * @param message ResponseCmdGetInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetInfo;

        /**
         * Decodes a ResponseCmdGetInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetInfo;

        /**
         * Verifies a ResponseCmdGetInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetInfo
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetInfo;

        /**
         * Creates a plain object from a ResponseCmdGetInfo message. Also converts values to other types if specified.
         * @param message ResponseCmdGetInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGetSettings. */
    interface IRequestCmdGetSettings {
    }

    /** Represents a RequestCmdGetSettings. */
    class RequestCmdGetSettings implements IRequestCmdGetSettings {

        /**
         * Constructs a new RequestCmdGetSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetSettings);

        /**
         * Creates a new RequestCmdGetSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetSettings instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetSettings): hdyRpc.RequestCmdGetSettings;

        /**
         * Encodes the specified RequestCmdGetSettings message. Does not implicitly {@link hdyRpc.RequestCmdGetSettings.verify|verify} messages.
         * @param message RequestCmdGetSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetSettings message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetSettings.verify|verify} messages.
         * @param message RequestCmdGetSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetSettings;

        /**
         * Decodes a RequestCmdGetSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetSettings;

        /**
         * Verifies a RequestCmdGetSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetSettings
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetSettings;

        /**
         * Creates a plain object from a RequestCmdGetSettings message. Also converts values to other types if specified.
         * @param message RequestCmdGetSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetSettings. */
    interface IResponseCmdGetSettings {

        /** ResponseCmdGetSettings result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGetSettings settings */
        settings?: (string|null);
    }

    /** Represents a ResponseCmdGetSettings. */
    class ResponseCmdGetSettings implements IResponseCmdGetSettings {

        /**
         * Constructs a new ResponseCmdGetSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetSettings);

        /** ResponseCmdGetSettings result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGetSettings settings. */
        public settings: string;

        /**
         * Creates a new ResponseCmdGetSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetSettings instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetSettings): hdyRpc.ResponseCmdGetSettings;

        /**
         * Encodes the specified ResponseCmdGetSettings message. Does not implicitly {@link hdyRpc.ResponseCmdGetSettings.verify|verify} messages.
         * @param message ResponseCmdGetSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetSettings message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetSettings.verify|verify} messages.
         * @param message ResponseCmdGetSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetSettings;

        /**
         * Decodes a ResponseCmdGetSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetSettings;

        /**
         * Verifies a ResponseCmdGetSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetSettings
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetSettings;

        /**
         * Creates a plain object from a ResponseCmdGetSettings message. Also converts values to other types if specified.
         * @param message ResponseCmdGetSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdGetStatus. */
    interface IRequestCmdGetStatus {
    }

    /** Represents a RequestCmdGetStatus. */
    class RequestCmdGetStatus implements IRequestCmdGetStatus {

        /**
         * Constructs a new RequestCmdGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdGetStatus);

        /**
         * Creates a new RequestCmdGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdGetStatus instance
         */
        public static create(properties?: hdyRpc.IRequestCmdGetStatus): hdyRpc.RequestCmdGetStatus;

        /**
         * Encodes the specified RequestCmdGetStatus message. Does not implicitly {@link hdyRpc.RequestCmdGetStatus.verify|verify} messages.
         * @param message RequestCmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdGetStatus message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdGetStatus.verify|verify} messages.
         * @param message RequestCmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdGetStatus;

        /**
         * Decodes a RequestCmdGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdGetStatus;

        /**
         * Verifies a RequestCmdGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdGetStatus
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdGetStatus;

        /**
         * Creates a plain object from a RequestCmdGetStatus message. Also converts values to other types if specified.
         * @param message RequestCmdGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdGetStatus. */
    interface IResponseCmdGetStatus {

        /** ResponseCmdGetStatus result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdGetStatus status */
        status?: (string|null);
    }

    /** Represents a ResponseCmdGetStatus. */
    class ResponseCmdGetStatus implements IResponseCmdGetStatus {

        /**
         * Constructs a new ResponseCmdGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdGetStatus);

        /** ResponseCmdGetStatus result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdGetStatus status. */
        public status: string;

        /**
         * Creates a new ResponseCmdGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdGetStatus instance
         */
        public static create(properties?: hdyRpc.IResponseCmdGetStatus): hdyRpc.ResponseCmdGetStatus;

        /**
         * Encodes the specified ResponseCmdGetStatus message. Does not implicitly {@link hdyRpc.ResponseCmdGetStatus.verify|verify} messages.
         * @param message ResponseCmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdGetStatus message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdGetStatus.verify|verify} messages.
         * @param message ResponseCmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdGetStatus;

        /**
         * Decodes a ResponseCmdGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdGetStatus;

        /**
         * Verifies a ResponseCmdGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdGetStatus
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdGetStatus;

        /**
         * Creates a plain object from a ResponseCmdGetStatus message. Also converts values to other types if specified.
         * @param message ResponseCmdGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHampSetStart. */
    interface IRequestCmdHampSetStart {
    }

    /** Represents a RequestCmdHampSetStart. */
    class RequestCmdHampSetStart implements IRequestCmdHampSetStart {

        /**
         * Constructs a new RequestCmdHampSetStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHampSetStart);

        /**
         * Creates a new RequestCmdHampSetStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHampSetStart instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHampSetStart): hdyRpc.RequestCmdHampSetStart;

        /**
         * Encodes the specified RequestCmdHampSetStart message. Does not implicitly {@link hdyRpc.RequestCmdHampSetStart.verify|verify} messages.
         * @param message RequestCmdHampSetStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHampSetStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHampSetStart message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHampSetStart.verify|verify} messages.
         * @param message RequestCmdHampSetStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHampSetStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHampSetStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHampSetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHampSetStart;

        /**
         * Decodes a RequestCmdHampSetStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHampSetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHampSetStart;

        /**
         * Verifies a RequestCmdHampSetStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHampSetStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHampSetStart
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHampSetStart;

        /**
         * Creates a plain object from a RequestCmdHampSetStart message. Also converts values to other types if specified.
         * @param message RequestCmdHampSetStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHampSetStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHampSetStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHampSetStart. */
    interface IResponseCmdHampSetStart {

        /** ResponseCmdHampSetStart result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHampSetStart. */
    class ResponseCmdHampSetStart implements IResponseCmdHampSetStart {

        /**
         * Constructs a new ResponseCmdHampSetStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHampSetStart);

        /** ResponseCmdHampSetStart result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHampSetStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHampSetStart instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHampSetStart): hdyRpc.ResponseCmdHampSetStart;

        /**
         * Encodes the specified ResponseCmdHampSetStart message. Does not implicitly {@link hdyRpc.ResponseCmdHampSetStart.verify|verify} messages.
         * @param message ResponseCmdHampSetStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHampSetStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHampSetStart message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHampSetStart.verify|verify} messages.
         * @param message ResponseCmdHampSetStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHampSetStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHampSetStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHampSetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHampSetStart;

        /**
         * Decodes a ResponseCmdHampSetStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHampSetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHampSetStart;

        /**
         * Verifies a ResponseCmdHampSetStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHampSetStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHampSetStart
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHampSetStart;

        /**
         * Creates a plain object from a ResponseCmdHampSetStart message. Also converts values to other types if specified.
         * @param message ResponseCmdHampSetStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHampSetStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHampSetStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHampSetStop. */
    interface IRequestCmdHampSetStop {
    }

    /** Represents a RequestCmdHampSetStop. */
    class RequestCmdHampSetStop implements IRequestCmdHampSetStop {

        /**
         * Constructs a new RequestCmdHampSetStop.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHampSetStop);

        /**
         * Creates a new RequestCmdHampSetStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHampSetStop instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHampSetStop): hdyRpc.RequestCmdHampSetStop;

        /**
         * Encodes the specified RequestCmdHampSetStop message. Does not implicitly {@link hdyRpc.RequestCmdHampSetStop.verify|verify} messages.
         * @param message RequestCmdHampSetStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHampSetStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHampSetStop message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHampSetStop.verify|verify} messages.
         * @param message RequestCmdHampSetStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHampSetStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHampSetStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHampSetStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHampSetStop;

        /**
         * Decodes a RequestCmdHampSetStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHampSetStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHampSetStop;

        /**
         * Verifies a RequestCmdHampSetStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHampSetStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHampSetStop
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHampSetStop;

        /**
         * Creates a plain object from a RequestCmdHampSetStop message. Also converts values to other types if specified.
         * @param message RequestCmdHampSetStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHampSetStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHampSetStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHampSetStop. */
    interface IResponseCmdHampSetStop {

        /** ResponseCmdHampSetStop result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHampSetStop. */
    class ResponseCmdHampSetStop implements IResponseCmdHampSetStop {

        /**
         * Constructs a new ResponseCmdHampSetStop.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHampSetStop);

        /** ResponseCmdHampSetStop result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHampSetStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHampSetStop instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHampSetStop): hdyRpc.ResponseCmdHampSetStop;

        /**
         * Encodes the specified ResponseCmdHampSetStop message. Does not implicitly {@link hdyRpc.ResponseCmdHampSetStop.verify|verify} messages.
         * @param message ResponseCmdHampSetStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHampSetStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHampSetStop message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHampSetStop.verify|verify} messages.
         * @param message ResponseCmdHampSetStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHampSetStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHampSetStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHampSetStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHampSetStop;

        /**
         * Decodes a ResponseCmdHampSetStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHampSetStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHampSetStop;

        /**
         * Verifies a ResponseCmdHampSetStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHampSetStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHampSetStop
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHampSetStop;

        /**
         * Creates a plain object from a ResponseCmdHampSetStop message. Also converts values to other types if specified.
         * @param message ResponseCmdHampSetStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHampSetStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHampSetStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHampGetVelocity. */
    interface IRequestCmdHampGetVelocity {
    }

    /** Represents a RequestCmdHampGetVelocity. */
    class RequestCmdHampGetVelocity implements IRequestCmdHampGetVelocity {

        /**
         * Constructs a new RequestCmdHampGetVelocity.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHampGetVelocity);

        /**
         * Creates a new RequestCmdHampGetVelocity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHampGetVelocity instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHampGetVelocity): hdyRpc.RequestCmdHampGetVelocity;

        /**
         * Encodes the specified RequestCmdHampGetVelocity message. Does not implicitly {@link hdyRpc.RequestCmdHampGetVelocity.verify|verify} messages.
         * @param message RequestCmdHampGetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHampGetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHampGetVelocity message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHampGetVelocity.verify|verify} messages.
         * @param message RequestCmdHampGetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHampGetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHampGetVelocity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHampGetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHampGetVelocity;

        /**
         * Decodes a RequestCmdHampGetVelocity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHampGetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHampGetVelocity;

        /**
         * Verifies a RequestCmdHampGetVelocity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHampGetVelocity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHampGetVelocity
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHampGetVelocity;

        /**
         * Creates a plain object from a RequestCmdHampGetVelocity message. Also converts values to other types if specified.
         * @param message RequestCmdHampGetVelocity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHampGetVelocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHampGetVelocity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHampGetVelocity. */
    interface IResponseCmdHampGetVelocity {

        /** ResponseCmdHampGetVelocity result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHampGetVelocity velocity */
        velocity?: (number|null);
    }

    /** Represents a ResponseCmdHampGetVelocity. */
    class ResponseCmdHampGetVelocity implements IResponseCmdHampGetVelocity {

        /**
         * Constructs a new ResponseCmdHampGetVelocity.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHampGetVelocity);

        /** ResponseCmdHampGetVelocity result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHampGetVelocity velocity. */
        public velocity: number;

        /**
         * Creates a new ResponseCmdHampGetVelocity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHampGetVelocity instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHampGetVelocity): hdyRpc.ResponseCmdHampGetVelocity;

        /**
         * Encodes the specified ResponseCmdHampGetVelocity message. Does not implicitly {@link hdyRpc.ResponseCmdHampGetVelocity.verify|verify} messages.
         * @param message ResponseCmdHampGetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHampGetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHampGetVelocity message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHampGetVelocity.verify|verify} messages.
         * @param message ResponseCmdHampGetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHampGetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHampGetVelocity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHampGetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHampGetVelocity;

        /**
         * Decodes a ResponseCmdHampGetVelocity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHampGetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHampGetVelocity;

        /**
         * Verifies a ResponseCmdHampGetVelocity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHampGetVelocity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHampGetVelocity
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHampGetVelocity;

        /**
         * Creates a plain object from a ResponseCmdHampGetVelocity message. Also converts values to other types if specified.
         * @param message ResponseCmdHampGetVelocity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHampGetVelocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHampGetVelocity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHampSetVelocity. */
    interface IRequestCmdHampSetVelocity {

        /** RequestCmdHampSetVelocity velocity */
        velocity?: (number|null);
    }

    /** Represents a RequestCmdHampSetVelocity. */
    class RequestCmdHampSetVelocity implements IRequestCmdHampSetVelocity {

        /**
         * Constructs a new RequestCmdHampSetVelocity.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHampSetVelocity);

        /** RequestCmdHampSetVelocity velocity. */
        public velocity: number;

        /**
         * Creates a new RequestCmdHampSetVelocity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHampSetVelocity instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHampSetVelocity): hdyRpc.RequestCmdHampSetVelocity;

        /**
         * Encodes the specified RequestCmdHampSetVelocity message. Does not implicitly {@link hdyRpc.RequestCmdHampSetVelocity.verify|verify} messages.
         * @param message RequestCmdHampSetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHampSetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHampSetVelocity message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHampSetVelocity.verify|verify} messages.
         * @param message RequestCmdHampSetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHampSetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHampSetVelocity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHampSetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHampSetVelocity;

        /**
         * Decodes a RequestCmdHampSetVelocity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHampSetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHampSetVelocity;

        /**
         * Verifies a RequestCmdHampSetVelocity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHampSetVelocity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHampSetVelocity
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHampSetVelocity;

        /**
         * Creates a plain object from a RequestCmdHampSetVelocity message. Also converts values to other types if specified.
         * @param message RequestCmdHampSetVelocity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHampSetVelocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHampSetVelocity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHampSetVelocity. */
    interface IResponseCmdHampSetVelocity {

        /** ResponseCmdHampSetVelocity result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHampSetVelocity. */
    class ResponseCmdHampSetVelocity implements IResponseCmdHampSetVelocity {

        /**
         * Constructs a new ResponseCmdHampSetVelocity.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHampSetVelocity);

        /** ResponseCmdHampSetVelocity result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHampSetVelocity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHampSetVelocity instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHampSetVelocity): hdyRpc.ResponseCmdHampSetVelocity;

        /**
         * Encodes the specified ResponseCmdHampSetVelocity message. Does not implicitly {@link hdyRpc.ResponseCmdHampSetVelocity.verify|verify} messages.
         * @param message ResponseCmdHampSetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHampSetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHampSetVelocity message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHampSetVelocity.verify|verify} messages.
         * @param message ResponseCmdHampSetVelocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHampSetVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHampSetVelocity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHampSetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHampSetVelocity;

        /**
         * Decodes a ResponseCmdHampSetVelocity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHampSetVelocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHampSetVelocity;

        /**
         * Verifies a ResponseCmdHampSetVelocity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHampSetVelocity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHampSetVelocity
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHampSetVelocity;

        /**
         * Creates a plain object from a ResponseCmdHampSetVelocity message. Also converts values to other types if specified.
         * @param message ResponseCmdHampSetVelocity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHampSetVelocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHampSetVelocity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHampGetState. */
    interface IRequestCmdHampGetState {
    }

    /** Represents a RequestCmdHampGetState. */
    class RequestCmdHampGetState implements IRequestCmdHampGetState {

        /**
         * Constructs a new RequestCmdHampGetState.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHampGetState);

        /**
         * Creates a new RequestCmdHampGetState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHampGetState instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHampGetState): hdyRpc.RequestCmdHampGetState;

        /**
         * Encodes the specified RequestCmdHampGetState message. Does not implicitly {@link hdyRpc.RequestCmdHampGetState.verify|verify} messages.
         * @param message RequestCmdHampGetState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHampGetState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHampGetState message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHampGetState.verify|verify} messages.
         * @param message RequestCmdHampGetState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHampGetState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHampGetState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHampGetState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHampGetState;

        /**
         * Decodes a RequestCmdHampGetState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHampGetState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHampGetState;

        /**
         * Verifies a RequestCmdHampGetState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHampGetState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHampGetState
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHampGetState;

        /**
         * Creates a plain object from a RequestCmdHampGetState message. Also converts values to other types if specified.
         * @param message RequestCmdHampGetState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHampGetState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHampGetState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHampGetState. */
    interface IResponseCmdHampGetState {

        /** ResponseCmdHampGetState result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHampGetState state */
        state?: (hdyRpc.HampStates|null);
    }

    /** Represents a ResponseCmdHampGetState. */
    class ResponseCmdHampGetState implements IResponseCmdHampGetState {

        /**
         * Constructs a new ResponseCmdHampGetState.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHampGetState);

        /** ResponseCmdHampGetState result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHampGetState state. */
        public state: hdyRpc.HampStates;

        /**
         * Creates a new ResponseCmdHampGetState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHampGetState instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHampGetState): hdyRpc.ResponseCmdHampGetState;

        /**
         * Encodes the specified ResponseCmdHampGetState message. Does not implicitly {@link hdyRpc.ResponseCmdHampGetState.verify|verify} messages.
         * @param message ResponseCmdHampGetState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHampGetState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHampGetState message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHampGetState.verify|verify} messages.
         * @param message ResponseCmdHampGetState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHampGetState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHampGetState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHampGetState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHampGetState;

        /**
         * Decodes a ResponseCmdHampGetState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHampGetState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHampGetState;

        /**
         * Verifies a ResponseCmdHampGetState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHampGetState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHampGetState
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHampGetState;

        /**
         * Creates a plain object from a ResponseCmdHampGetState message. Also converts values to other types if specified.
         * @param message ResponseCmdHampGetState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHampGetState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHampGetState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXaVa. */
    interface IRequestCmdHdspSetXaVa {

        /** RequestCmdHdspSetXaVa x */
        x?: (number|null);

        /** RequestCmdHdspSetXaVa v */
        v?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXaVa. */
    class RequestCmdHdspSetXaVa implements IRequestCmdHdspSetXaVa {

        /**
         * Constructs a new RequestCmdHdspSetXaVa.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXaVa);

        /** RequestCmdHdspSetXaVa x. */
        public x: number;

        /** RequestCmdHdspSetXaVa v. */
        public v: number;

        /**
         * Creates a new RequestCmdHdspSetXaVa instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXaVa instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXaVa): hdyRpc.RequestCmdHdspSetXaVa;

        /**
         * Encodes the specified RequestCmdHdspSetXaVa message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaVa.verify|verify} messages.
         * @param message RequestCmdHdspSetXaVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXaVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXaVa message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaVa.verify|verify} messages.
         * @param message RequestCmdHdspSetXaVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXaVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXaVa message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXaVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXaVa;

        /**
         * Decodes a RequestCmdHdspSetXaVa message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXaVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXaVa;

        /**
         * Verifies a RequestCmdHdspSetXaVa message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXaVa message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXaVa
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXaVa;

        /**
         * Creates a plain object from a RequestCmdHdspSetXaVa message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXaVa
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXaVa, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXaVa to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXaVa. */
    interface IResponseCmdHdspSetXaVa {

        /** ResponseCmdHdspSetXaVa result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXaVa. */
    class ResponseCmdHdspSetXaVa implements IResponseCmdHdspSetXaVa {

        /**
         * Constructs a new ResponseCmdHdspSetXaVa.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXaVa);

        /** ResponseCmdHdspSetXaVa result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXaVa instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXaVa instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXaVa): hdyRpc.ResponseCmdHdspSetXaVa;

        /**
         * Encodes the specified ResponseCmdHdspSetXaVa message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaVa.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXaVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXaVa message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaVa.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXaVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXaVa message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXaVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXaVa;

        /**
         * Decodes a ResponseCmdHdspSetXaVa message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXaVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXaVa;

        /**
         * Verifies a ResponseCmdHdspSetXaVa message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXaVa message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXaVa
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXaVa;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXaVa message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXaVa
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXaVa, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXaVa to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXpVa. */
    interface IRequestCmdHdspSetXpVa {

        /** RequestCmdHdspSetXpVa x */
        x?: (number|null);

        /** RequestCmdHdspSetXpVa v */
        v?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXpVa. */
    class RequestCmdHdspSetXpVa implements IRequestCmdHdspSetXpVa {

        /**
         * Constructs a new RequestCmdHdspSetXpVa.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXpVa);

        /** RequestCmdHdspSetXpVa x. */
        public x: number;

        /** RequestCmdHdspSetXpVa v. */
        public v: number;

        /**
         * Creates a new RequestCmdHdspSetXpVa instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXpVa instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXpVa): hdyRpc.RequestCmdHdspSetXpVa;

        /**
         * Encodes the specified RequestCmdHdspSetXpVa message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpVa.verify|verify} messages.
         * @param message RequestCmdHdspSetXpVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXpVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXpVa message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpVa.verify|verify} messages.
         * @param message RequestCmdHdspSetXpVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXpVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXpVa message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXpVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXpVa;

        /**
         * Decodes a RequestCmdHdspSetXpVa message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXpVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXpVa;

        /**
         * Verifies a RequestCmdHdspSetXpVa message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXpVa message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXpVa
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXpVa;

        /**
         * Creates a plain object from a RequestCmdHdspSetXpVa message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXpVa
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXpVa, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXpVa to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXpVa. */
    interface IResponseCmdHdspSetXpVa {

        /** ResponseCmdHdspSetXpVa result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXpVa. */
    class ResponseCmdHdspSetXpVa implements IResponseCmdHdspSetXpVa {

        /**
         * Constructs a new ResponseCmdHdspSetXpVa.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXpVa);

        /** ResponseCmdHdspSetXpVa result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXpVa instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXpVa instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXpVa): hdyRpc.ResponseCmdHdspSetXpVa;

        /**
         * Encodes the specified ResponseCmdHdspSetXpVa message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpVa.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXpVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXpVa message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpVa.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpVa message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXpVa, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXpVa message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXpVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXpVa;

        /**
         * Decodes a ResponseCmdHdspSetXpVa message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXpVa
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXpVa;

        /**
         * Verifies a ResponseCmdHdspSetXpVa message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXpVa message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXpVa
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXpVa;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXpVa message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXpVa
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXpVa, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXpVa to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXpVp. */
    interface IRequestCmdHdspSetXpVp {

        /** RequestCmdHdspSetXpVp x */
        x?: (number|null);

        /** RequestCmdHdspSetXpVp v */
        v?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXpVp. */
    class RequestCmdHdspSetXpVp implements IRequestCmdHdspSetXpVp {

        /**
         * Constructs a new RequestCmdHdspSetXpVp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXpVp);

        /** RequestCmdHdspSetXpVp x. */
        public x: number;

        /** RequestCmdHdspSetXpVp v. */
        public v: number;

        /**
         * Creates a new RequestCmdHdspSetXpVp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXpVp instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXpVp): hdyRpc.RequestCmdHdspSetXpVp;

        /**
         * Encodes the specified RequestCmdHdspSetXpVp message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpVp.verify|verify} messages.
         * @param message RequestCmdHdspSetXpVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXpVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXpVp message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpVp.verify|verify} messages.
         * @param message RequestCmdHdspSetXpVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXpVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXpVp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXpVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXpVp;

        /**
         * Decodes a RequestCmdHdspSetXpVp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXpVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXpVp;

        /**
         * Verifies a RequestCmdHdspSetXpVp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXpVp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXpVp
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXpVp;

        /**
         * Creates a plain object from a RequestCmdHdspSetXpVp message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXpVp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXpVp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXpVp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXpVp. */
    interface IResponseCmdHdspSetXpVp {

        /** ResponseCmdHdspSetXpVp result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXpVp. */
    class ResponseCmdHdspSetXpVp implements IResponseCmdHdspSetXpVp {

        /**
         * Constructs a new ResponseCmdHdspSetXpVp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXpVp);

        /** ResponseCmdHdspSetXpVp result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXpVp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXpVp instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXpVp): hdyRpc.ResponseCmdHdspSetXpVp;

        /**
         * Encodes the specified ResponseCmdHdspSetXpVp message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpVp.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXpVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXpVp message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpVp.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXpVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXpVp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXpVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXpVp;

        /**
         * Decodes a ResponseCmdHdspSetXpVp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXpVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXpVp;

        /**
         * Verifies a ResponseCmdHdspSetXpVp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXpVp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXpVp
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXpVp;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXpVp message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXpVp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXpVp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXpVp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXaT. */
    interface IRequestCmdHdspSetXaT {

        /** RequestCmdHdspSetXaT x */
        x?: (number|null);

        /** RequestCmdHdspSetXaT t */
        t?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXaT. */
    class RequestCmdHdspSetXaT implements IRequestCmdHdspSetXaT {

        /**
         * Constructs a new RequestCmdHdspSetXaT.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXaT);

        /** RequestCmdHdspSetXaT x. */
        public x: number;

        /** RequestCmdHdspSetXaT t. */
        public t: number;

        /**
         * Creates a new RequestCmdHdspSetXaT instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXaT instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXaT): hdyRpc.RequestCmdHdspSetXaT;

        /**
         * Encodes the specified RequestCmdHdspSetXaT message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaT.verify|verify} messages.
         * @param message RequestCmdHdspSetXaT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXaT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXaT message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaT.verify|verify} messages.
         * @param message RequestCmdHdspSetXaT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXaT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXaT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXaT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXaT;

        /**
         * Decodes a RequestCmdHdspSetXaT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXaT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXaT;

        /**
         * Verifies a RequestCmdHdspSetXaT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXaT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXaT
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXaT;

        /**
         * Creates a plain object from a RequestCmdHdspSetXaT message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXaT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXaT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXaT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXaT. */
    interface IResponseCmdHdspSetXaT {

        /** ResponseCmdHdspSetXaT result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXaT. */
    class ResponseCmdHdspSetXaT implements IResponseCmdHdspSetXaT {

        /**
         * Constructs a new ResponseCmdHdspSetXaT.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXaT);

        /** ResponseCmdHdspSetXaT result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXaT instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXaT instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXaT): hdyRpc.ResponseCmdHdspSetXaT;

        /**
         * Encodes the specified ResponseCmdHdspSetXaT message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaT.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXaT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXaT message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaT.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXaT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXaT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXaT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXaT;

        /**
         * Decodes a ResponseCmdHdspSetXaT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXaT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXaT;

        /**
         * Verifies a ResponseCmdHdspSetXaT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXaT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXaT
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXaT;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXaT message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXaT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXaT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXaT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXpT. */
    interface IRequestCmdHdspSetXpT {

        /** RequestCmdHdspSetXpT x */
        x?: (number|null);

        /** RequestCmdHdspSetXpT t */
        t?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXpT. */
    class RequestCmdHdspSetXpT implements IRequestCmdHdspSetXpT {

        /**
         * Constructs a new RequestCmdHdspSetXpT.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXpT);

        /** RequestCmdHdspSetXpT x. */
        public x: number;

        /** RequestCmdHdspSetXpT t. */
        public t: number;

        /**
         * Creates a new RequestCmdHdspSetXpT instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXpT instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXpT): hdyRpc.RequestCmdHdspSetXpT;

        /**
         * Encodes the specified RequestCmdHdspSetXpT message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpT.verify|verify} messages.
         * @param message RequestCmdHdspSetXpT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXpT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXpT message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXpT.verify|verify} messages.
         * @param message RequestCmdHdspSetXpT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXpT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXpT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXpT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXpT;

        /**
         * Decodes a RequestCmdHdspSetXpT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXpT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXpT;

        /**
         * Verifies a RequestCmdHdspSetXpT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXpT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXpT
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXpT;

        /**
         * Creates a plain object from a RequestCmdHdspSetXpT message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXpT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXpT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXpT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXpT. */
    interface IResponseCmdHdspSetXpT {

        /** ResponseCmdHdspSetXpT result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXpT. */
    class ResponseCmdHdspSetXpT implements IResponseCmdHdspSetXpT {

        /**
         * Constructs a new ResponseCmdHdspSetXpT.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXpT);

        /** ResponseCmdHdspSetXpT result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXpT instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXpT instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXpT): hdyRpc.ResponseCmdHdspSetXpT;

        /**
         * Encodes the specified ResponseCmdHdspSetXpT message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpT.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXpT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXpT message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXpT.verify|verify} messages.
         * @param message ResponseCmdHdspSetXpT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXpT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXpT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXpT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXpT;

        /**
         * Decodes a ResponseCmdHdspSetXpT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXpT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXpT;

        /**
         * Verifies a ResponseCmdHdspSetXpT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXpT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXpT
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXpT;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXpT message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXpT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXpT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXpT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHdspSetXaVp. */
    interface IRequestCmdHdspSetXaVp {

        /** RequestCmdHdspSetXaVp x */
        x?: (number|null);

        /** RequestCmdHdspSetXaVp v */
        v?: (number|null);
    }

    /** Represents a RequestCmdHdspSetXaVp. */
    class RequestCmdHdspSetXaVp implements IRequestCmdHdspSetXaVp {

        /**
         * Constructs a new RequestCmdHdspSetXaVp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHdspSetXaVp);

        /** RequestCmdHdspSetXaVp x. */
        public x: number;

        /** RequestCmdHdspSetXaVp v. */
        public v: number;

        /**
         * Creates a new RequestCmdHdspSetXaVp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHdspSetXaVp instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHdspSetXaVp): hdyRpc.RequestCmdHdspSetXaVp;

        /**
         * Encodes the specified RequestCmdHdspSetXaVp message. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaVp.verify|verify} messages.
         * @param message RequestCmdHdspSetXaVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHdspSetXaVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHdspSetXaVp message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHdspSetXaVp.verify|verify} messages.
         * @param message RequestCmdHdspSetXaVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHdspSetXaVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHdspSetXaVp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHdspSetXaVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHdspSetXaVp;

        /**
         * Decodes a RequestCmdHdspSetXaVp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHdspSetXaVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHdspSetXaVp;

        /**
         * Verifies a RequestCmdHdspSetXaVp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHdspSetXaVp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHdspSetXaVp
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHdspSetXaVp;

        /**
         * Creates a plain object from a RequestCmdHdspSetXaVp message. Also converts values to other types if specified.
         * @param message RequestCmdHdspSetXaVp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHdspSetXaVp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHdspSetXaVp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHdspSetXaVp. */
    interface IResponseCmdHdspSetXaVp {

        /** ResponseCmdHdspSetXaVp result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHdspSetXaVp. */
    class ResponseCmdHdspSetXaVp implements IResponseCmdHdspSetXaVp {

        /**
         * Constructs a new ResponseCmdHdspSetXaVp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHdspSetXaVp);

        /** ResponseCmdHdspSetXaVp result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHdspSetXaVp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHdspSetXaVp instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHdspSetXaVp): hdyRpc.ResponseCmdHdspSetXaVp;

        /**
         * Encodes the specified ResponseCmdHdspSetXaVp message. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaVp.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHdspSetXaVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHdspSetXaVp message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHdspSetXaVp.verify|verify} messages.
         * @param message ResponseCmdHdspSetXaVp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHdspSetXaVp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHdspSetXaVp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHdspSetXaVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHdspSetXaVp;

        /**
         * Decodes a ResponseCmdHdspSetXaVp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHdspSetXaVp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHdspSetXaVp;

        /**
         * Verifies a ResponseCmdHdspSetXaVp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHdspSetXaVp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHdspSetXaVp
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHdspSetXaVp;

        /**
         * Creates a plain object from a ResponseCmdHdspSetXaVp message. Also converts values to other types if specified.
         * @param message ResponseCmdHdspSetXaVp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHdspSetXaVp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHdspSetXaVp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHstpGetTime. */
    interface IRequestCmdHstpGetTime {

        /** RequestCmdHstpGetTime time */
        time?: (number|Long|null);
    }

    /** Represents a RequestCmdHstpGetTime. */
    class RequestCmdHstpGetTime implements IRequestCmdHstpGetTime {

        /**
         * Constructs a new RequestCmdHstpGetTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHstpGetTime);

        /** RequestCmdHstpGetTime time. */
        public time: (number|Long);

        /**
         * Creates a new RequestCmdHstpGetTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHstpGetTime instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHstpGetTime): hdyRpc.RequestCmdHstpGetTime;

        /**
         * Encodes the specified RequestCmdHstpGetTime message. Does not implicitly {@link hdyRpc.RequestCmdHstpGetTime.verify|verify} messages.
         * @param message RequestCmdHstpGetTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHstpGetTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHstpGetTime message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHstpGetTime.verify|verify} messages.
         * @param message RequestCmdHstpGetTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHstpGetTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHstpGetTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHstpGetTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHstpGetTime;

        /**
         * Decodes a RequestCmdHstpGetTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHstpGetTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHstpGetTime;

        /**
         * Verifies a RequestCmdHstpGetTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHstpGetTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHstpGetTime
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHstpGetTime;

        /**
         * Creates a plain object from a RequestCmdHstpGetTime message. Also converts values to other types if specified.
         * @param message RequestCmdHstpGetTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHstpGetTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHstpGetTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHstpGetTime. */
    interface IResponseCmdHstpGetTime {

        /** ResponseCmdHstpGetTime result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHstpGetTime time */
        time?: (number|Long|null);
    }

    /** Represents a ResponseCmdHstpGetTime. */
    class ResponseCmdHstpGetTime implements IResponseCmdHstpGetTime {

        /**
         * Constructs a new ResponseCmdHstpGetTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHstpGetTime);

        /** ResponseCmdHstpGetTime result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHstpGetTime time. */
        public time: (number|Long);

        /**
         * Creates a new ResponseCmdHstpGetTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHstpGetTime instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHstpGetTime): hdyRpc.ResponseCmdHstpGetTime;

        /**
         * Encodes the specified ResponseCmdHstpGetTime message. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetTime.verify|verify} messages.
         * @param message ResponseCmdHstpGetTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHstpGetTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHstpGetTime message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetTime.verify|verify} messages.
         * @param message ResponseCmdHstpGetTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHstpGetTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHstpGetTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHstpGetTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHstpGetTime;

        /**
         * Decodes a ResponseCmdHstpGetTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHstpGetTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHstpGetTime;

        /**
         * Verifies a ResponseCmdHstpGetTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHstpGetTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHstpGetTime
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHstpGetTime;

        /**
         * Creates a plain object from a ResponseCmdHstpGetTime message. Also converts values to other types if specified.
         * @param message ResponseCmdHstpGetTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHstpGetTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHstpGetTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHstpGetOffset. */
    interface IRequestCmdHstpGetOffset {

        /** RequestCmdHstpGetOffset offset */
        offset?: (number|null);
    }

    /** Represents a RequestCmdHstpGetOffset. */
    class RequestCmdHstpGetOffset implements IRequestCmdHstpGetOffset {

        /**
         * Constructs a new RequestCmdHstpGetOffset.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHstpGetOffset);

        /** RequestCmdHstpGetOffset offset. */
        public offset: number;

        /**
         * Creates a new RequestCmdHstpGetOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHstpGetOffset instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHstpGetOffset): hdyRpc.RequestCmdHstpGetOffset;

        /**
         * Encodes the specified RequestCmdHstpGetOffset message. Does not implicitly {@link hdyRpc.RequestCmdHstpGetOffset.verify|verify} messages.
         * @param message RequestCmdHstpGetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHstpGetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHstpGetOffset message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHstpGetOffset.verify|verify} messages.
         * @param message RequestCmdHstpGetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHstpGetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHstpGetOffset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHstpGetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHstpGetOffset;

        /**
         * Decodes a RequestCmdHstpGetOffset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHstpGetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHstpGetOffset;

        /**
         * Verifies a RequestCmdHstpGetOffset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHstpGetOffset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHstpGetOffset
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHstpGetOffset;

        /**
         * Creates a plain object from a RequestCmdHstpGetOffset message. Also converts values to other types if specified.
         * @param message RequestCmdHstpGetOffset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHstpGetOffset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHstpGetOffset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHstpGetOffset. */
    interface IResponseCmdHstpGetOffset {

        /** ResponseCmdHstpGetOffset result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHstpGetOffset offset */
        offset?: (number|null);
    }

    /** Represents a ResponseCmdHstpGetOffset. */
    class ResponseCmdHstpGetOffset implements IResponseCmdHstpGetOffset {

        /**
         * Constructs a new ResponseCmdHstpGetOffset.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHstpGetOffset);

        /** ResponseCmdHstpGetOffset result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHstpGetOffset offset. */
        public offset: number;

        /**
         * Creates a new ResponseCmdHstpGetOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHstpGetOffset instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHstpGetOffset): hdyRpc.ResponseCmdHstpGetOffset;

        /**
         * Encodes the specified ResponseCmdHstpGetOffset message. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetOffset.verify|verify} messages.
         * @param message ResponseCmdHstpGetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHstpGetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHstpGetOffset message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetOffset.verify|verify} messages.
         * @param message ResponseCmdHstpGetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHstpGetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHstpGetOffset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHstpGetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHstpGetOffset;

        /**
         * Decodes a ResponseCmdHstpGetOffset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHstpGetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHstpGetOffset;

        /**
         * Verifies a ResponseCmdHstpGetOffset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHstpGetOffset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHstpGetOffset
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHstpGetOffset;

        /**
         * Creates a plain object from a ResponseCmdHstpGetOffset message. Also converts values to other types if specified.
         * @param message ResponseCmdHstpGetOffset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHstpGetOffset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHstpGetOffset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHstpSetOffset. */
    interface IRequestCmdHstpSetOffset {

        /** RequestCmdHstpSetOffset offset */
        offset?: (number|null);
    }

    /** Represents a RequestCmdHstpSetOffset. */
    class RequestCmdHstpSetOffset implements IRequestCmdHstpSetOffset {

        /**
         * Constructs a new RequestCmdHstpSetOffset.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHstpSetOffset);

        /** RequestCmdHstpSetOffset offset. */
        public offset: number;

        /**
         * Creates a new RequestCmdHstpSetOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHstpSetOffset instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHstpSetOffset): hdyRpc.RequestCmdHstpSetOffset;

        /**
         * Encodes the specified RequestCmdHstpSetOffset message. Does not implicitly {@link hdyRpc.RequestCmdHstpSetOffset.verify|verify} messages.
         * @param message RequestCmdHstpSetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHstpSetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHstpSetOffset message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHstpSetOffset.verify|verify} messages.
         * @param message RequestCmdHstpSetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHstpSetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHstpSetOffset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHstpSetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHstpSetOffset;

        /**
         * Decodes a RequestCmdHstpSetOffset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHstpSetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHstpSetOffset;

        /**
         * Verifies a RequestCmdHstpSetOffset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHstpSetOffset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHstpSetOffset
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHstpSetOffset;

        /**
         * Creates a plain object from a RequestCmdHstpSetOffset message. Also converts values to other types if specified.
         * @param message RequestCmdHstpSetOffset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHstpSetOffset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHstpSetOffset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHstpSetOffset. */
    interface IResponseCmdHstpSetOffset {

        /** ResponseCmdHstpSetOffset result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdHstpSetOffset. */
    class ResponseCmdHstpSetOffset implements IResponseCmdHstpSetOffset {

        /**
         * Constructs a new ResponseCmdHstpSetOffset.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHstpSetOffset);

        /** ResponseCmdHstpSetOffset result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdHstpSetOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHstpSetOffset instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHstpSetOffset): hdyRpc.ResponseCmdHstpSetOffset;

        /**
         * Encodes the specified ResponseCmdHstpSetOffset message. Does not implicitly {@link hdyRpc.ResponseCmdHstpSetOffset.verify|verify} messages.
         * @param message ResponseCmdHstpSetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHstpSetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHstpSetOffset message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHstpSetOffset.verify|verify} messages.
         * @param message ResponseCmdHstpSetOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHstpSetOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHstpSetOffset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHstpSetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHstpSetOffset;

        /**
         * Decodes a ResponseCmdHstpSetOffset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHstpSetOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHstpSetOffset;

        /**
         * Verifies a ResponseCmdHstpSetOffset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHstpSetOffset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHstpSetOffset
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHstpSetOffset;

        /**
         * Creates a plain object from a ResponseCmdHstpSetOffset message. Also converts values to other types if specified.
         * @param message ResponseCmdHstpSetOffset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHstpSetOffset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHstpSetOffset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHstpGetRtd. */
    interface IRequestCmdHstpGetRtd {
    }

    /** Represents a RequestCmdHstpGetRtd. */
    class RequestCmdHstpGetRtd implements IRequestCmdHstpGetRtd {

        /**
         * Constructs a new RequestCmdHstpGetRtd.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHstpGetRtd);

        /**
         * Creates a new RequestCmdHstpGetRtd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHstpGetRtd instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHstpGetRtd): hdyRpc.RequestCmdHstpGetRtd;

        /**
         * Encodes the specified RequestCmdHstpGetRtd message. Does not implicitly {@link hdyRpc.RequestCmdHstpGetRtd.verify|verify} messages.
         * @param message RequestCmdHstpGetRtd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHstpGetRtd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHstpGetRtd message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHstpGetRtd.verify|verify} messages.
         * @param message RequestCmdHstpGetRtd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHstpGetRtd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHstpGetRtd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHstpGetRtd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHstpGetRtd;

        /**
         * Decodes a RequestCmdHstpGetRtd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHstpGetRtd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHstpGetRtd;

        /**
         * Verifies a RequestCmdHstpGetRtd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHstpGetRtd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHstpGetRtd
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHstpGetRtd;

        /**
         * Creates a plain object from a RequestCmdHstpGetRtd message. Also converts values to other types if specified.
         * @param message RequestCmdHstpGetRtd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHstpGetRtd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHstpGetRtd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHstpGetRtd. */
    interface IResponseCmdHstpGetRtd {

        /** ResponseCmdHstpGetRtd result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHstpGetRtd rtd */
        rtd?: (number|null);
    }

    /** Represents a ResponseCmdHstpGetRtd. */
    class ResponseCmdHstpGetRtd implements IResponseCmdHstpGetRtd {

        /**
         * Constructs a new ResponseCmdHstpGetRtd.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHstpGetRtd);

        /** ResponseCmdHstpGetRtd result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHstpGetRtd rtd. */
        public rtd: number;

        /**
         * Creates a new ResponseCmdHstpGetRtd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHstpGetRtd instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHstpGetRtd): hdyRpc.ResponseCmdHstpGetRtd;

        /**
         * Encodes the specified ResponseCmdHstpGetRtd message. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetRtd.verify|verify} messages.
         * @param message ResponseCmdHstpGetRtd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHstpGetRtd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHstpGetRtd message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHstpGetRtd.verify|verify} messages.
         * @param message ResponseCmdHstpGetRtd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHstpGetRtd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHstpGetRtd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHstpGetRtd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHstpGetRtd;

        /**
         * Decodes a ResponseCmdHstpGetRtd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHstpGetRtd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHstpGetRtd;

        /**
         * Verifies a ResponseCmdHstpGetRtd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHstpGetRtd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHstpGetRtd
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHstpGetRtd;

        /**
         * Creates a plain object from a ResponseCmdHstpGetRtd message. Also converts values to other types if specified.
         * @param message ResponseCmdHstpGetRtd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHstpGetRtd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHstpGetRtd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdHstpSetSync. */
    interface IRequestCmdHstpSetSync {

        /** RequestCmdHstpSetSync syncCount */
        syncCount?: (number|null);

        /** RequestCmdHstpSetSync outliers */
        outliers?: (number|null);
    }

    /** Represents a RequestCmdHstpSetSync. */
    class RequestCmdHstpSetSync implements IRequestCmdHstpSetSync {

        /**
         * Constructs a new RequestCmdHstpSetSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdHstpSetSync);

        /** RequestCmdHstpSetSync syncCount. */
        public syncCount: number;

        /** RequestCmdHstpSetSync outliers. */
        public outliers: number;

        /**
         * Creates a new RequestCmdHstpSetSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdHstpSetSync instance
         */
        public static create(properties?: hdyRpc.IRequestCmdHstpSetSync): hdyRpc.RequestCmdHstpSetSync;

        /**
         * Encodes the specified RequestCmdHstpSetSync message. Does not implicitly {@link hdyRpc.RequestCmdHstpSetSync.verify|verify} messages.
         * @param message RequestCmdHstpSetSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdHstpSetSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdHstpSetSync message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdHstpSetSync.verify|verify} messages.
         * @param message RequestCmdHstpSetSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdHstpSetSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdHstpSetSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdHstpSetSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdHstpSetSync;

        /**
         * Decodes a RequestCmdHstpSetSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdHstpSetSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdHstpSetSync;

        /**
         * Verifies a RequestCmdHstpSetSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdHstpSetSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdHstpSetSync
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdHstpSetSync;

        /**
         * Creates a plain object from a RequestCmdHstpSetSync message. Also converts values to other types if specified.
         * @param message RequestCmdHstpSetSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdHstpSetSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdHstpSetSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdHstpSetSync. */
    interface IResponseCmdHstpSetSync {

        /** ResponseCmdHstpSetSync result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdHstpSetSync time */
        time?: (number|Long|null);

        /** ResponseCmdHstpSetSync rtd */
        rtd?: (number|null);
    }

    /** Represents a ResponseCmdHstpSetSync. */
    class ResponseCmdHstpSetSync implements IResponseCmdHstpSetSync {

        /**
         * Constructs a new ResponseCmdHstpSetSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdHstpSetSync);

        /** ResponseCmdHstpSetSync result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdHstpSetSync time. */
        public time: (number|Long);

        /** ResponseCmdHstpSetSync rtd. */
        public rtd: number;

        /**
         * Creates a new ResponseCmdHstpSetSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdHstpSetSync instance
         */
        public static create(properties?: hdyRpc.IResponseCmdHstpSetSync): hdyRpc.ResponseCmdHstpSetSync;

        /**
         * Encodes the specified ResponseCmdHstpSetSync message. Does not implicitly {@link hdyRpc.ResponseCmdHstpSetSync.verify|verify} messages.
         * @param message ResponseCmdHstpSetSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdHstpSetSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdHstpSetSync message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdHstpSetSync.verify|verify} messages.
         * @param message ResponseCmdHstpSetSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdHstpSetSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdHstpSetSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdHstpSetSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdHstpSetSync;

        /**
         * Decodes a ResponseCmdHstpSetSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdHstpSetSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdHstpSetSync;

        /**
         * Verifies a ResponseCmdHstpSetSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdHstpSetSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdHstpSetSync
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdHstpSetSync;

        /**
         * Creates a plain object from a ResponseCmdHstpSetSync message. Also converts values to other types if specified.
         * @param message ResponseCmdHstpSetSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdHstpSetSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdHstpSetSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdMaintanceSetRestart. */
    interface IRequestCmdMaintanceSetRestart {

        /** RequestCmdMaintanceSetRestart reconnect */
        reconnect?: (boolean|null);
    }

    /** Represents a RequestCmdMaintanceSetRestart. */
    class RequestCmdMaintanceSetRestart implements IRequestCmdMaintanceSetRestart {

        /**
         * Constructs a new RequestCmdMaintanceSetRestart.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdMaintanceSetRestart);

        /** RequestCmdMaintanceSetRestart reconnect. */
        public reconnect: boolean;

        /**
         * Creates a new RequestCmdMaintanceSetRestart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdMaintanceSetRestart instance
         */
        public static create(properties?: hdyRpc.IRequestCmdMaintanceSetRestart): hdyRpc.RequestCmdMaintanceSetRestart;

        /**
         * Encodes the specified RequestCmdMaintanceSetRestart message. Does not implicitly {@link hdyRpc.RequestCmdMaintanceSetRestart.verify|verify} messages.
         * @param message RequestCmdMaintanceSetRestart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdMaintanceSetRestart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdMaintanceSetRestart message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdMaintanceSetRestart.verify|verify} messages.
         * @param message RequestCmdMaintanceSetRestart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdMaintanceSetRestart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdMaintanceSetRestart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdMaintanceSetRestart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdMaintanceSetRestart;

        /**
         * Decodes a RequestCmdMaintanceSetRestart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdMaintanceSetRestart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdMaintanceSetRestart;

        /**
         * Verifies a RequestCmdMaintanceSetRestart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdMaintanceSetRestart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdMaintanceSetRestart
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdMaintanceSetRestart;

        /**
         * Creates a plain object from a RequestCmdMaintanceSetRestart message. Also converts values to other types if specified.
         * @param message RequestCmdMaintanceSetRestart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdMaintanceSetRestart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdMaintanceSetRestart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdMaintanceSetRestart. */
    interface IResponseCmdMaintanceSetRestart {

        /** ResponseCmdMaintanceSetRestart result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdMaintanceSetRestart. */
    class ResponseCmdMaintanceSetRestart implements IResponseCmdMaintanceSetRestart {

        /**
         * Constructs a new ResponseCmdMaintanceSetRestart.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdMaintanceSetRestart);

        /** ResponseCmdMaintanceSetRestart result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdMaintanceSetRestart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdMaintanceSetRestart instance
         */
        public static create(properties?: hdyRpc.IResponseCmdMaintanceSetRestart): hdyRpc.ResponseCmdMaintanceSetRestart;

        /**
         * Encodes the specified ResponseCmdMaintanceSetRestart message. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceSetRestart.verify|verify} messages.
         * @param message ResponseCmdMaintanceSetRestart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdMaintanceSetRestart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdMaintanceSetRestart message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceSetRestart.verify|verify} messages.
         * @param message ResponseCmdMaintanceSetRestart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdMaintanceSetRestart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdMaintanceSetRestart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdMaintanceSetRestart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdMaintanceSetRestart;

        /**
         * Decodes a ResponseCmdMaintanceSetRestart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdMaintanceSetRestart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdMaintanceSetRestart;

        /**
         * Verifies a ResponseCmdMaintanceSetRestart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdMaintanceSetRestart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdMaintanceSetRestart
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdMaintanceSetRestart;

        /**
         * Creates a plain object from a ResponseCmdMaintanceSetRestart message. Also converts values to other types if specified.
         * @param message ResponseCmdMaintanceSetRestart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdMaintanceSetRestart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdMaintanceSetRestart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdMaintanceSetUpdatePerform. */
    interface IRequestCmdMaintanceSetUpdatePerform {

        /** RequestCmdMaintanceSetUpdatePerform fwVersion */
        fwVersion?: (string|null);
    }

    /** Represents a RequestCmdMaintanceSetUpdatePerform. */
    class RequestCmdMaintanceSetUpdatePerform implements IRequestCmdMaintanceSetUpdatePerform {

        /**
         * Constructs a new RequestCmdMaintanceSetUpdatePerform.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdMaintanceSetUpdatePerform);

        /** RequestCmdMaintanceSetUpdatePerform fwVersion. */
        public fwVersion: string;

        /**
         * Creates a new RequestCmdMaintanceSetUpdatePerform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdMaintanceSetUpdatePerform instance
         */
        public static create(properties?: hdyRpc.IRequestCmdMaintanceSetUpdatePerform): hdyRpc.RequestCmdMaintanceSetUpdatePerform;

        /**
         * Encodes the specified RequestCmdMaintanceSetUpdatePerform message. Does not implicitly {@link hdyRpc.RequestCmdMaintanceSetUpdatePerform.verify|verify} messages.
         * @param message RequestCmdMaintanceSetUpdatePerform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdMaintanceSetUpdatePerform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdMaintanceSetUpdatePerform message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdMaintanceSetUpdatePerform.verify|verify} messages.
         * @param message RequestCmdMaintanceSetUpdatePerform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdMaintanceSetUpdatePerform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdMaintanceSetUpdatePerform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdMaintanceSetUpdatePerform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdMaintanceSetUpdatePerform;

        /**
         * Decodes a RequestCmdMaintanceSetUpdatePerform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdMaintanceSetUpdatePerform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdMaintanceSetUpdatePerform;

        /**
         * Verifies a RequestCmdMaintanceSetUpdatePerform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdMaintanceSetUpdatePerform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdMaintanceSetUpdatePerform
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdMaintanceSetUpdatePerform;

        /**
         * Creates a plain object from a RequestCmdMaintanceSetUpdatePerform message. Also converts values to other types if specified.
         * @param message RequestCmdMaintanceSetUpdatePerform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdMaintanceSetUpdatePerform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdMaintanceSetUpdatePerform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdMaintanceSetUpdatePerform. */
    interface IResponseCmdMaintanceSetUpdatePerform {

        /** ResponseCmdMaintanceSetUpdatePerform result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdMaintanceSetUpdatePerform. */
    class ResponseCmdMaintanceSetUpdatePerform implements IResponseCmdMaintanceSetUpdatePerform {

        /**
         * Constructs a new ResponseCmdMaintanceSetUpdatePerform.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdMaintanceSetUpdatePerform);

        /** ResponseCmdMaintanceSetUpdatePerform result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdMaintanceSetUpdatePerform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdMaintanceSetUpdatePerform instance
         */
        public static create(properties?: hdyRpc.IResponseCmdMaintanceSetUpdatePerform): hdyRpc.ResponseCmdMaintanceSetUpdatePerform;

        /**
         * Encodes the specified ResponseCmdMaintanceSetUpdatePerform message. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceSetUpdatePerform.verify|verify} messages.
         * @param message ResponseCmdMaintanceSetUpdatePerform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdMaintanceSetUpdatePerform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdMaintanceSetUpdatePerform message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceSetUpdatePerform.verify|verify} messages.
         * @param message ResponseCmdMaintanceSetUpdatePerform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdMaintanceSetUpdatePerform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdMaintanceSetUpdatePerform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdMaintanceSetUpdatePerform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdMaintanceSetUpdatePerform;

        /**
         * Decodes a ResponseCmdMaintanceSetUpdatePerform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdMaintanceSetUpdatePerform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdMaintanceSetUpdatePerform;

        /**
         * Verifies a ResponseCmdMaintanceSetUpdatePerform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdMaintanceSetUpdatePerform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdMaintanceSetUpdatePerform
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdMaintanceSetUpdatePerform;

        /**
         * Creates a plain object from a ResponseCmdMaintanceSetUpdatePerform message. Also converts values to other types if specified.
         * @param message ResponseCmdMaintanceSetUpdatePerform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdMaintanceSetUpdatePerform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdMaintanceSetUpdatePerform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdMaintanceGetUpdateStatus. */
    interface IRequestCmdMaintanceGetUpdateStatus {
    }

    /** Represents a RequestCmdMaintanceGetUpdateStatus. */
    class RequestCmdMaintanceGetUpdateStatus implements IRequestCmdMaintanceGetUpdateStatus {

        /**
         * Constructs a new RequestCmdMaintanceGetUpdateStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdMaintanceGetUpdateStatus);

        /**
         * Creates a new RequestCmdMaintanceGetUpdateStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdMaintanceGetUpdateStatus instance
         */
        public static create(properties?: hdyRpc.IRequestCmdMaintanceGetUpdateStatus): hdyRpc.RequestCmdMaintanceGetUpdateStatus;

        /**
         * Encodes the specified RequestCmdMaintanceGetUpdateStatus message. Does not implicitly {@link hdyRpc.RequestCmdMaintanceGetUpdateStatus.verify|verify} messages.
         * @param message RequestCmdMaintanceGetUpdateStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdMaintanceGetUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdMaintanceGetUpdateStatus message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdMaintanceGetUpdateStatus.verify|verify} messages.
         * @param message RequestCmdMaintanceGetUpdateStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdMaintanceGetUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdMaintanceGetUpdateStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdMaintanceGetUpdateStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdMaintanceGetUpdateStatus;

        /**
         * Decodes a RequestCmdMaintanceGetUpdateStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdMaintanceGetUpdateStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdMaintanceGetUpdateStatus;

        /**
         * Verifies a RequestCmdMaintanceGetUpdateStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdMaintanceGetUpdateStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdMaintanceGetUpdateStatus
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdMaintanceGetUpdateStatus;

        /**
         * Creates a plain object from a RequestCmdMaintanceGetUpdateStatus message. Also converts values to other types if specified.
         * @param message RequestCmdMaintanceGetUpdateStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdMaintanceGetUpdateStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdMaintanceGetUpdateStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdMaintanceGetUpdateStatus. */
    interface IResponseCmdMaintanceGetUpdateStatus {

        /** ResponseCmdMaintanceGetUpdateStatus result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdMaintanceGetUpdateStatus percentComplete */
        percentComplete?: (number|null);
    }

    /** Represents a ResponseCmdMaintanceGetUpdateStatus. */
    class ResponseCmdMaintanceGetUpdateStatus implements IResponseCmdMaintanceGetUpdateStatus {

        /**
         * Constructs a new ResponseCmdMaintanceGetUpdateStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdMaintanceGetUpdateStatus);

        /** ResponseCmdMaintanceGetUpdateStatus result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdMaintanceGetUpdateStatus percentComplete. */
        public percentComplete: number;

        /**
         * Creates a new ResponseCmdMaintanceGetUpdateStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdMaintanceGetUpdateStatus instance
         */
        public static create(properties?: hdyRpc.IResponseCmdMaintanceGetUpdateStatus): hdyRpc.ResponseCmdMaintanceGetUpdateStatus;

        /**
         * Encodes the specified ResponseCmdMaintanceGetUpdateStatus message. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceGetUpdateStatus.verify|verify} messages.
         * @param message ResponseCmdMaintanceGetUpdateStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdMaintanceGetUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdMaintanceGetUpdateStatus message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdMaintanceGetUpdateStatus.verify|verify} messages.
         * @param message ResponseCmdMaintanceGetUpdateStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdMaintanceGetUpdateStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdMaintanceGetUpdateStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdMaintanceGetUpdateStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdMaintanceGetUpdateStatus;

        /**
         * Decodes a ResponseCmdMaintanceGetUpdateStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdMaintanceGetUpdateStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdMaintanceGetUpdateStatus;

        /**
         * Verifies a ResponseCmdMaintanceGetUpdateStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdMaintanceGetUpdateStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdMaintanceGetUpdateStatus
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdMaintanceGetUpdateStatus;

        /**
         * Creates a plain object from a ResponseCmdMaintanceGetUpdateStatus message. Also converts values to other types if specified.
         * @param message ResponseCmdMaintanceGetUpdateStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdMaintanceGetUpdateStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdMaintanceGetUpdateStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdOtaGetLatest. */
    interface IRequestCmdOtaGetLatest {
    }

    /** Represents a RequestCmdOtaGetLatest. */
    class RequestCmdOtaGetLatest implements IRequestCmdOtaGetLatest {

        /**
         * Constructs a new RequestCmdOtaGetLatest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdOtaGetLatest);

        /**
         * Creates a new RequestCmdOtaGetLatest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdOtaGetLatest instance
         */
        public static create(properties?: hdyRpc.IRequestCmdOtaGetLatest): hdyRpc.RequestCmdOtaGetLatest;

        /**
         * Encodes the specified RequestCmdOtaGetLatest message. Does not implicitly {@link hdyRpc.RequestCmdOtaGetLatest.verify|verify} messages.
         * @param message RequestCmdOtaGetLatest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdOtaGetLatest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdOtaGetLatest message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdOtaGetLatest.verify|verify} messages.
         * @param message RequestCmdOtaGetLatest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdOtaGetLatest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdOtaGetLatest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdOtaGetLatest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdOtaGetLatest;

        /**
         * Decodes a RequestCmdOtaGetLatest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdOtaGetLatest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdOtaGetLatest;

        /**
         * Verifies a RequestCmdOtaGetLatest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdOtaGetLatest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdOtaGetLatest
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdOtaGetLatest;

        /**
         * Creates a plain object from a RequestCmdOtaGetLatest message. Also converts values to other types if specified.
         * @param message RequestCmdOtaGetLatest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdOtaGetLatest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdOtaGetLatest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdOtaGetLatest. */
    interface IResponseCmdOtaGetLatest {

        /** ResponseCmdOtaGetLatest result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdOtaGetLatest version */
        version?: (string|null);
    }

    /** Represents a ResponseCmdOtaGetLatest. */
    class ResponseCmdOtaGetLatest implements IResponseCmdOtaGetLatest {

        /**
         * Constructs a new ResponseCmdOtaGetLatest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdOtaGetLatest);

        /** ResponseCmdOtaGetLatest result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdOtaGetLatest version. */
        public version: string;

        /**
         * Creates a new ResponseCmdOtaGetLatest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdOtaGetLatest instance
         */
        public static create(properties?: hdyRpc.IResponseCmdOtaGetLatest): hdyRpc.ResponseCmdOtaGetLatest;

        /**
         * Encodes the specified ResponseCmdOtaGetLatest message. Does not implicitly {@link hdyRpc.ResponseCmdOtaGetLatest.verify|verify} messages.
         * @param message ResponseCmdOtaGetLatest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdOtaGetLatest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdOtaGetLatest message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdOtaGetLatest.verify|verify} messages.
         * @param message ResponseCmdOtaGetLatest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdOtaGetLatest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdOtaGetLatest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdOtaGetLatest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdOtaGetLatest;

        /**
         * Decodes a ResponseCmdOtaGetLatest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdOtaGetLatest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdOtaGetLatest;

        /**
         * Verifies a ResponseCmdOtaGetLatest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdOtaGetLatest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdOtaGetLatest
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdOtaGetLatest;

        /**
         * Creates a plain object from a ResponseCmdOtaGetLatest message. Also converts values to other types if specified.
         * @param message ResponseCmdOtaGetLatest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdOtaGetLatest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdOtaGetLatest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdStrokeGetStroke. */
    interface IRequestCmdStrokeGetStroke {
    }

    /** Represents a RequestCmdStrokeGetStroke. */
    class RequestCmdStrokeGetStroke implements IRequestCmdStrokeGetStroke {

        /**
         * Constructs a new RequestCmdStrokeGetStroke.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdStrokeGetStroke);

        /**
         * Creates a new RequestCmdStrokeGetStroke instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdStrokeGetStroke instance
         */
        public static create(properties?: hdyRpc.IRequestCmdStrokeGetStroke): hdyRpc.RequestCmdStrokeGetStroke;

        /**
         * Encodes the specified RequestCmdStrokeGetStroke message. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetStroke.verify|verify} messages.
         * @param message RequestCmdStrokeGetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdStrokeGetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdStrokeGetStroke message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetStroke.verify|verify} messages.
         * @param message RequestCmdStrokeGetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdStrokeGetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdStrokeGetStroke message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdStrokeGetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdStrokeGetStroke;

        /**
         * Decodes a RequestCmdStrokeGetStroke message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdStrokeGetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdStrokeGetStroke;

        /**
         * Verifies a RequestCmdStrokeGetStroke message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdStrokeGetStroke message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdStrokeGetStroke
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdStrokeGetStroke;

        /**
         * Creates a plain object from a RequestCmdStrokeGetStroke message. Also converts values to other types if specified.
         * @param message RequestCmdStrokeGetStroke
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdStrokeGetStroke, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdStrokeGetStroke to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdStrokeGetStroke. */
    interface IResponseCmdStrokeGetStroke {

        /** ResponseCmdStrokeGetStroke result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdStrokeGetStroke min */
        min?: (number|null);

        /** ResponseCmdStrokeGetStroke max */
        max?: (number|null);
    }

    /** Represents a ResponseCmdStrokeGetStroke. */
    class ResponseCmdStrokeGetStroke implements IResponseCmdStrokeGetStroke {

        /**
         * Constructs a new ResponseCmdStrokeGetStroke.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdStrokeGetStroke);

        /** ResponseCmdStrokeGetStroke result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdStrokeGetStroke min. */
        public min: number;

        /** ResponseCmdStrokeGetStroke max. */
        public max: number;

        /**
         * Creates a new ResponseCmdStrokeGetStroke instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdStrokeGetStroke instance
         */
        public static create(properties?: hdyRpc.IResponseCmdStrokeGetStroke): hdyRpc.ResponseCmdStrokeGetStroke;

        /**
         * Encodes the specified ResponseCmdStrokeGetStroke message. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetStroke.verify|verify} messages.
         * @param message ResponseCmdStrokeGetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdStrokeGetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdStrokeGetStroke message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetStroke.verify|verify} messages.
         * @param message ResponseCmdStrokeGetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdStrokeGetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdStrokeGetStroke message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdStrokeGetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdStrokeGetStroke;

        /**
         * Decodes a ResponseCmdStrokeGetStroke message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdStrokeGetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdStrokeGetStroke;

        /**
         * Verifies a ResponseCmdStrokeGetStroke message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdStrokeGetStroke message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdStrokeGetStroke
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdStrokeGetStroke;

        /**
         * Creates a plain object from a ResponseCmdStrokeGetStroke message. Also converts values to other types if specified.
         * @param message ResponseCmdStrokeGetStroke
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdStrokeGetStroke, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdStrokeGetStroke to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdStrokeSetStroke. */
    interface IRequestCmdStrokeSetStroke {

        /** RequestCmdStrokeSetStroke min */
        min?: (number|null);

        /** RequestCmdStrokeSetStroke max */
        max?: (number|null);
    }

    /** Represents a RequestCmdStrokeSetStroke. */
    class RequestCmdStrokeSetStroke implements IRequestCmdStrokeSetStroke {

        /**
         * Constructs a new RequestCmdStrokeSetStroke.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdStrokeSetStroke);

        /** RequestCmdStrokeSetStroke min. */
        public min: number;

        /** RequestCmdStrokeSetStroke max. */
        public max: number;

        /**
         * Creates a new RequestCmdStrokeSetStroke instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdStrokeSetStroke instance
         */
        public static create(properties?: hdyRpc.IRequestCmdStrokeSetStroke): hdyRpc.RequestCmdStrokeSetStroke;

        /**
         * Encodes the specified RequestCmdStrokeSetStroke message. Does not implicitly {@link hdyRpc.RequestCmdStrokeSetStroke.verify|verify} messages.
         * @param message RequestCmdStrokeSetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdStrokeSetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdStrokeSetStroke message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdStrokeSetStroke.verify|verify} messages.
         * @param message RequestCmdStrokeSetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdStrokeSetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdStrokeSetStroke message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdStrokeSetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdStrokeSetStroke;

        /**
         * Decodes a RequestCmdStrokeSetStroke message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdStrokeSetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdStrokeSetStroke;

        /**
         * Verifies a RequestCmdStrokeSetStroke message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdStrokeSetStroke message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdStrokeSetStroke
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdStrokeSetStroke;

        /**
         * Creates a plain object from a RequestCmdStrokeSetStroke message. Also converts values to other types if specified.
         * @param message RequestCmdStrokeSetStroke
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdStrokeSetStroke, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdStrokeSetStroke to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdStrokeSetStroke. */
    interface IResponseCmdStrokeSetStroke {

        /** ResponseCmdStrokeSetStroke result */
        result?: (hdyRpc.ResultCodes|null);
    }

    /** Represents a ResponseCmdStrokeSetStroke. */
    class ResponseCmdStrokeSetStroke implements IResponseCmdStrokeSetStroke {

        /**
         * Constructs a new ResponseCmdStrokeSetStroke.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdStrokeSetStroke);

        /** ResponseCmdStrokeSetStroke result. */
        public result: hdyRpc.ResultCodes;

        /**
         * Creates a new ResponseCmdStrokeSetStroke instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdStrokeSetStroke instance
         */
        public static create(properties?: hdyRpc.IResponseCmdStrokeSetStroke): hdyRpc.ResponseCmdStrokeSetStroke;

        /**
         * Encodes the specified ResponseCmdStrokeSetStroke message. Does not implicitly {@link hdyRpc.ResponseCmdStrokeSetStroke.verify|verify} messages.
         * @param message ResponseCmdStrokeSetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdStrokeSetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdStrokeSetStroke message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdStrokeSetStroke.verify|verify} messages.
         * @param message ResponseCmdStrokeSetStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdStrokeSetStroke, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdStrokeSetStroke message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdStrokeSetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdStrokeSetStroke;

        /**
         * Decodes a ResponseCmdStrokeSetStroke message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdStrokeSetStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdStrokeSetStroke;

        /**
         * Verifies a ResponseCmdStrokeSetStroke message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdStrokeSetStroke message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdStrokeSetStroke
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdStrokeSetStroke;

        /**
         * Creates a plain object from a ResponseCmdStrokeSetStroke message. Also converts values to other types if specified.
         * @param message ResponseCmdStrokeSetStroke
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdStrokeSetStroke, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdStrokeSetStroke to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdStrokeGetPositionAbsolute. */
    interface IRequestCmdStrokeGetPositionAbsolute {
    }

    /** Represents a RequestCmdStrokeGetPositionAbsolute. */
    class RequestCmdStrokeGetPositionAbsolute implements IRequestCmdStrokeGetPositionAbsolute {

        /**
         * Constructs a new RequestCmdStrokeGetPositionAbsolute.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdStrokeGetPositionAbsolute);

        /**
         * Creates a new RequestCmdStrokeGetPositionAbsolute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdStrokeGetPositionAbsolute instance
         */
        public static create(properties?: hdyRpc.IRequestCmdStrokeGetPositionAbsolute): hdyRpc.RequestCmdStrokeGetPositionAbsolute;

        /**
         * Encodes the specified RequestCmdStrokeGetPositionAbsolute message. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetPositionAbsolute.verify|verify} messages.
         * @param message RequestCmdStrokeGetPositionAbsolute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdStrokeGetPositionAbsolute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdStrokeGetPositionAbsolute message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetPositionAbsolute.verify|verify} messages.
         * @param message RequestCmdStrokeGetPositionAbsolute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdStrokeGetPositionAbsolute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdStrokeGetPositionAbsolute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdStrokeGetPositionAbsolute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdStrokeGetPositionAbsolute;

        /**
         * Decodes a RequestCmdStrokeGetPositionAbsolute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdStrokeGetPositionAbsolute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdStrokeGetPositionAbsolute;

        /**
         * Verifies a RequestCmdStrokeGetPositionAbsolute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdStrokeGetPositionAbsolute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdStrokeGetPositionAbsolute
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdStrokeGetPositionAbsolute;

        /**
         * Creates a plain object from a RequestCmdStrokeGetPositionAbsolute message. Also converts values to other types if specified.
         * @param message RequestCmdStrokeGetPositionAbsolute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdStrokeGetPositionAbsolute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdStrokeGetPositionAbsolute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdStrokeGetPositionAbsolute. */
    interface IResponseCmdStrokeGetPositionAbsolute {

        /** ResponseCmdStrokeGetPositionAbsolute result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdStrokeGetPositionAbsolute position */
        position?: (number|null);
    }

    /** Represents a ResponseCmdStrokeGetPositionAbsolute. */
    class ResponseCmdStrokeGetPositionAbsolute implements IResponseCmdStrokeGetPositionAbsolute {

        /**
         * Constructs a new ResponseCmdStrokeGetPositionAbsolute.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdStrokeGetPositionAbsolute);

        /** ResponseCmdStrokeGetPositionAbsolute result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdStrokeGetPositionAbsolute position. */
        public position: number;

        /**
         * Creates a new ResponseCmdStrokeGetPositionAbsolute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdStrokeGetPositionAbsolute instance
         */
        public static create(properties?: hdyRpc.IResponseCmdStrokeGetPositionAbsolute): hdyRpc.ResponseCmdStrokeGetPositionAbsolute;

        /**
         * Encodes the specified ResponseCmdStrokeGetPositionAbsolute message. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetPositionAbsolute.verify|verify} messages.
         * @param message ResponseCmdStrokeGetPositionAbsolute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdStrokeGetPositionAbsolute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdStrokeGetPositionAbsolute message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetPositionAbsolute.verify|verify} messages.
         * @param message ResponseCmdStrokeGetPositionAbsolute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdStrokeGetPositionAbsolute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdStrokeGetPositionAbsolute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdStrokeGetPositionAbsolute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdStrokeGetPositionAbsolute;

        /**
         * Decodes a ResponseCmdStrokeGetPositionAbsolute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdStrokeGetPositionAbsolute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdStrokeGetPositionAbsolute;

        /**
         * Verifies a ResponseCmdStrokeGetPositionAbsolute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdStrokeGetPositionAbsolute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdStrokeGetPositionAbsolute
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdStrokeGetPositionAbsolute;

        /**
         * Creates a plain object from a ResponseCmdStrokeGetPositionAbsolute message. Also converts values to other types if specified.
         * @param message ResponseCmdStrokeGetPositionAbsolute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdStrokeGetPositionAbsolute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdStrokeGetPositionAbsolute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCmdStrokeGetPositionRelative. */
    interface IRequestCmdStrokeGetPositionRelative {
    }

    /** Represents a RequestCmdStrokeGetPositionRelative. */
    class RequestCmdStrokeGetPositionRelative implements IRequestCmdStrokeGetPositionRelative {

        /**
         * Constructs a new RequestCmdStrokeGetPositionRelative.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequestCmdStrokeGetPositionRelative);

        /**
         * Creates a new RequestCmdStrokeGetPositionRelative instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCmdStrokeGetPositionRelative instance
         */
        public static create(properties?: hdyRpc.IRequestCmdStrokeGetPositionRelative): hdyRpc.RequestCmdStrokeGetPositionRelative;

        /**
         * Encodes the specified RequestCmdStrokeGetPositionRelative message. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetPositionRelative.verify|verify} messages.
         * @param message RequestCmdStrokeGetPositionRelative message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RequestCmdStrokeGetPositionRelative, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCmdStrokeGetPositionRelative message, length delimited. Does not implicitly {@link hdyRpc.RequestCmdStrokeGetPositionRelative.verify|verify} messages.
         * @param message RequestCmdStrokeGetPositionRelative message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RequestCmdStrokeGetPositionRelative, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCmdStrokeGetPositionRelative message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCmdStrokeGetPositionRelative
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RequestCmdStrokeGetPositionRelative;

        /**
         * Decodes a RequestCmdStrokeGetPositionRelative message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCmdStrokeGetPositionRelative
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RequestCmdStrokeGetPositionRelative;

        /**
         * Verifies a RequestCmdStrokeGetPositionRelative message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCmdStrokeGetPositionRelative message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCmdStrokeGetPositionRelative
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RequestCmdStrokeGetPositionRelative;

        /**
         * Creates a plain object from a RequestCmdStrokeGetPositionRelative message. Also converts values to other types if specified.
         * @param message RequestCmdStrokeGetPositionRelative
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RequestCmdStrokeGetPositionRelative, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCmdStrokeGetPositionRelative to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCmdStrokeGetPositionRelative. */
    interface IResponseCmdStrokeGetPositionRelative {

        /** ResponseCmdStrokeGetPositionRelative result */
        result?: (hdyRpc.ResultCodes|null);

        /** ResponseCmdStrokeGetPositionRelative position */
        position?: (number|null);
    }

    /** Represents a ResponseCmdStrokeGetPositionRelative. */
    class ResponseCmdStrokeGetPositionRelative implements IResponseCmdStrokeGetPositionRelative {

        /**
         * Constructs a new ResponseCmdStrokeGetPositionRelative.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponseCmdStrokeGetPositionRelative);

        /** ResponseCmdStrokeGetPositionRelative result. */
        public result: hdyRpc.ResultCodes;

        /** ResponseCmdStrokeGetPositionRelative position. */
        public position: number;

        /**
         * Creates a new ResponseCmdStrokeGetPositionRelative instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCmdStrokeGetPositionRelative instance
         */
        public static create(properties?: hdyRpc.IResponseCmdStrokeGetPositionRelative): hdyRpc.ResponseCmdStrokeGetPositionRelative;

        /**
         * Encodes the specified ResponseCmdStrokeGetPositionRelative message. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetPositionRelative.verify|verify} messages.
         * @param message ResponseCmdStrokeGetPositionRelative message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.ResponseCmdStrokeGetPositionRelative, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCmdStrokeGetPositionRelative message, length delimited. Does not implicitly {@link hdyRpc.ResponseCmdStrokeGetPositionRelative.verify|verify} messages.
         * @param message ResponseCmdStrokeGetPositionRelative message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.ResponseCmdStrokeGetPositionRelative, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCmdStrokeGetPositionRelative message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCmdStrokeGetPositionRelative
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.ResponseCmdStrokeGetPositionRelative;

        /**
         * Decodes a ResponseCmdStrokeGetPositionRelative message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCmdStrokeGetPositionRelative
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.ResponseCmdStrokeGetPositionRelative;

        /**
         * Verifies a ResponseCmdStrokeGetPositionRelative message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCmdStrokeGetPositionRelative message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCmdStrokeGetPositionRelative
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.ResponseCmdStrokeGetPositionRelative;

        /**
         * Creates a plain object from a ResponseCmdStrokeGetPositionRelative message. Also converts values to other types if specified.
         * @param message ResponseCmdStrokeGetPositionRelative
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.ResponseCmdStrokeGetPositionRelative, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCmdStrokeGetPositionRelative to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RequestMethods enum. */
    enum RequestMethods {
        REQUEST_METHOD_UNKNOWN = 0,
        REQUEST_METHOD_GET_SERVER_TIME = 300,
        REQUEST_METHOD_WS_HANDSHAKE = 500,
        REQUEST_METHOD_GENERATE_CONNECTION_KEY = 501,
        REQUEST_METHOD_SET_CONNECTION_KEY = 502,
        REQUEST_METHOD_GET_MODE = 700,
        REQUEST_METHOD_SET_MODE = 701,
        REQUEST_METHOD_GET_CONNECTED = 702,
        REQUEST_METHOD_GET_INFO = 703,
        REQUEST_METHOD_GET_SETTINGS = 704,
        REQUEST_METHOD_GET_STATUS = 705,
        REQUEST_METHOD_HAMP_SET_START = 720,
        REQUEST_METHOD_HAMP_SET_STOP = 721,
        REQUEST_METHOD_HAMP_GET_VELOCITY = 722,
        REQUEST_METHOD_HAMP_SET_VELOCITY = 723,
        REQUEST_METHOD_HAMP_GET_STATE = 724,
        REQUEST_METHOD_HDSP_SET_XAVA = 740,
        REQUEST_METHOD_HDSP_SET_XPVA = 741,
        REQUEST_METHOD_HDSP_SET_XPVP = 742,
        REQUEST_METHOD_HDSP_SET_XAT = 743,
        REQUEST_METHOD_HDSP_SET_XPT = 744,
        REQUEST_METHOD_HDSP_SET_XAVP = 745,
        REQUEST_METHOD_HSTP_GET_TIME = 780,
        REQUEST_METHOD_HSTP_GET_OFFSET = 781,
        REQUEST_METHOD_HSTP_SET_OFFSET = 782,
        REQUEST_METHOD_HSTP_GET_RTD = 783,
        REQUEST_METHOD_HSTP_SET_SYNC = 784,
        REQUEST_METHOD_MAINTENANCE_SET_RESTART = 800,
        REQUEST_METHOD_MAINTENANCE_SET_UPDATE_PERFORM = 801,
        REQUEST_METHOD_MAINTENANCE_SET_UPDATE_STATUS = 802,
        REQUEST_METHOD_OTA_GET_LATEST = 820,
        REQUEST_METHOD_STROKE_GET_STROKE = 840,
        REQUEST_METHOD_STROKE_SET_STROKE = 841,
        REQUEST_METHOD_STROKE_GET_STROKE_POSITION_ABSOLUTE = 842,
        REQUEST_METHOD_STROKE_GET_STROKE_POSITION_RELATIVE = 843
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request method */
        method?: (hdyRpc.RequestMethods|null);

        /** Request requestCmdGetServerTime */
        requestCmdGetServerTime?: (hdyRpc.RequestCmdGetServerTime|null);

        /** Request requestCmdWsHandshake */
        requestCmdWsHandshake?: (hdyRpc.RequestCmdWsHandshake|null);

        /** Request requestCmdGenerateConnectionKey */
        requestCmdGenerateConnectionKey?: (hdyRpc.RequestCmdGenerateConnectionKey|null);

        /** Request requestCmdSetConnectionKey */
        requestCmdSetConnectionKey?: (hdyRpc.RequestCmdSetConnectionKey|null);

        /** Request requestCmdStrokeGetStroke */
        requestCmdStrokeGetStroke?: (hdyRpc.RequestCmdStrokeGetStroke|null);

        /** Request id */
        id?: (number|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRequest);

        /** Request method. */
        public method: hdyRpc.RequestMethods;

        /** Request requestCmdGetServerTime. */
        public requestCmdGetServerTime?: (hdyRpc.RequestCmdGetServerTime|null);

        /** Request requestCmdWsHandshake. */
        public requestCmdWsHandshake?: (hdyRpc.RequestCmdWsHandshake|null);

        /** Request requestCmdGenerateConnectionKey. */
        public requestCmdGenerateConnectionKey?: (hdyRpc.RequestCmdGenerateConnectionKey|null);

        /** Request requestCmdSetConnectionKey. */
        public requestCmdSetConnectionKey?: (hdyRpc.RequestCmdSetConnectionKey|null);

        /** Request requestCmdStrokeGetStroke. */
        public requestCmdStrokeGetStroke?: (hdyRpc.RequestCmdStrokeGetStroke|null);

        /** Request id. */
        public id: number;

        /** Request params. */
        public params?: ("requestCmdGetServerTime"|"requestCmdWsHandshake"|"requestCmdGenerateConnectionKey"|"requestCmdSetConnectionKey"|"requestCmdStrokeGetStroke");

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: hdyRpc.IRequest): hdyRpc.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link hdyRpc.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.Request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link hdyRpc.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.Request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Error. */
    interface IError {

        /** Error code */
        code?: (number|null);

        /** Error message */
        message?: (string|null);

        /** Error data */
        data?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IError);

        /** Error code. */
        public code: number;

        /** Error message. */
        public message: string;

        /** Error data. */
        public data: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: hdyRpc.IError): hdyRpc.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link hdyRpc.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link hdyRpc.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response id */
        id?: (number|null);

        /** Response responseCmdGetServerTime */
        responseCmdGetServerTime?: (hdyRpc.ResponseCmdGetServerTime|null);

        /** Response responseCmdWsHandshake */
        responseCmdWsHandshake?: (hdyRpc.ResponseCmdWsHandshake|null);

        /** Response responseCmdGenerateConnectionKey */
        responseCmdGenerateConnectionKey?: (hdyRpc.ResponseCmdGenerateConnectionKey|null);

        /** Response responseCmdSetConnectionKey */
        responseCmdSetConnectionKey?: (hdyRpc.ResponseCmdSetConnectionKey|null);

        /** Response responseCmdStrokeGetStroke */
        responseCmdStrokeGetStroke?: (hdyRpc.ResponseCmdStrokeGetStroke|null);

        /** Response error */
        error?: (hdyRpc.Error|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IResponse);

        /** Response id. */
        public id: number;

        /** Response responseCmdGetServerTime. */
        public responseCmdGetServerTime?: (hdyRpc.ResponseCmdGetServerTime|null);

        /** Response responseCmdWsHandshake. */
        public responseCmdWsHandshake?: (hdyRpc.ResponseCmdWsHandshake|null);

        /** Response responseCmdGenerateConnectionKey. */
        public responseCmdGenerateConnectionKey?: (hdyRpc.ResponseCmdGenerateConnectionKey|null);

        /** Response responseCmdSetConnectionKey. */
        public responseCmdSetConnectionKey?: (hdyRpc.ResponseCmdSetConnectionKey|null);

        /** Response responseCmdStrokeGetStroke. */
        public responseCmdStrokeGetStroke?: (hdyRpc.ResponseCmdStrokeGetStroke|null);

        /** Response error. */
        public error?: (hdyRpc.Error|null);

        /** Response result. */
        public result?: ("responseCmdGetServerTime"|"responseCmdWsHandshake"|"responseCmdGenerateConnectionKey"|"responseCmdSetConnectionKey"|"responseCmdStrokeGetStroke");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: hdyRpc.IResponse): hdyRpc.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link hdyRpc.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link hdyRpc.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MessageType enum. */
    enum MessageType {
        MESSAGE_TYPE_UNKNOWN = 0,
        MESSAGE_TYPE_REQUEST = 1,
        MESSAGE_TYPE_RESPONSE = 2
    }

    /** Properties of a RpcMessage. */
    interface IRpcMessage {

        /** RpcMessage type */
        type?: (hdyRpc.MessageType|null);

        /** RpcMessage request */
        request?: (hdyRpc.Request|null);

        /** RpcMessage response */
        response?: (hdyRpc.Response|null);
    }

    /** Represents a RpcMessage. */
    class RpcMessage implements IRpcMessage {

        /**
         * Constructs a new RpcMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: hdyRpc.IRpcMessage);

        /** RpcMessage type. */
        public type: hdyRpc.MessageType;

        /** RpcMessage request. */
        public request?: (hdyRpc.Request|null);

        /** RpcMessage response. */
        public response?: (hdyRpc.Response|null);

        /** RpcMessage message. */
        public message?: ("request"|"response");

        /**
         * Creates a new RpcMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RpcMessage instance
         */
        public static create(properties?: hdyRpc.IRpcMessage): hdyRpc.RpcMessage;

        /**
         * Encodes the specified RpcMessage message. Does not implicitly {@link hdyRpc.RpcMessage.verify|verify} messages.
         * @param message RpcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hdyRpc.RpcMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RpcMessage message, length delimited. Does not implicitly {@link hdyRpc.RpcMessage.verify|verify} messages.
         * @param message RpcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hdyRpc.RpcMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RpcMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RpcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hdyRpc.RpcMessage;

        /**
         * Decodes a RpcMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RpcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hdyRpc.RpcMessage;

        /**
         * Verifies a RpcMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RpcMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RpcMessage
         */
        public static fromObject(object: { [k: string]: any }): hdyRpc.RpcMessage;

        /**
         * Creates a plain object from a RpcMessage message. Also converts values to other types if specified.
         * @param message RpcMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hdyRpc.RpcMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RpcMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace handyplug. */
export namespace handyplug {

    /** Properties of an Ok. */
    interface IOk {

        /** Ok Id */
        Id?: (number|null);
    }

    /** Represents an Ok. */
    class Ok implements IOk {

        /**
         * Constructs a new Ok.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IOk);

        /** Ok Id. */
        public Id: number;

        /**
         * Creates a new Ok instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ok instance
         */
        public static create(properties?: handyplug.IOk): handyplug.Ok;

        /**
         * Encodes the specified Ok message. Does not implicitly {@link handyplug.Ok.verify|verify} messages.
         * @param message Ok message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.Ok, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ok message, length delimited. Does not implicitly {@link handyplug.Ok.verify|verify} messages.
         * @param message Ok message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.Ok, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ok message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ok
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.Ok;

        /**
         * Decodes an Ok message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ok
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.Ok;

        /**
         * Verifies an Ok message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ok message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ok
         */
        public static fromObject(object: { [k: string]: any }): handyplug.Ok;

        /**
         * Creates a plain object from an Ok message. Also converts values to other types if specified.
         * @param message Ok
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.Ok, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ok to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Error. */
    interface IError {

        /** Error Id */
        Id?: (number|null);

        /** Error ErrorMessage */
        ErrorMessage?: (string|null);

        /** Error ErrorCode */
        ErrorCode?: (number|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IError);

        /** Error Id. */
        public Id: number;

        /** Error ErrorMessage. */
        public ErrorMessage: string;

        /** Error ErrorCode. */
        public ErrorCode: number;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: handyplug.IError): handyplug.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link handyplug.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link handyplug.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.Error, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): handyplug.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ping. */
    interface IPing {

        /** Ping Id */
        Id?: (number|null);
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IPing);

        /** Ping Id. */
        public Id: number;

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: handyplug.IPing): handyplug.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link handyplug.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link handyplug.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): handyplug.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestServerInfo. */
    interface IRequestServerInfo {

        /** RequestServerInfo Id */
        Id?: (number|null);

        /** RequestServerInfo ClientName */
        ClientName?: (string|null);

        /** RequestServerInfo MessageVersion */
        MessageVersion?: (number|null);
    }

    /** Represents a RequestServerInfo. */
    class RequestServerInfo implements IRequestServerInfo {

        /**
         * Constructs a new RequestServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IRequestServerInfo);

        /** RequestServerInfo Id. */
        public Id: number;

        /** RequestServerInfo ClientName. */
        public ClientName: string;

        /** RequestServerInfo MessageVersion. */
        public MessageVersion: number;

        /**
         * Creates a new RequestServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestServerInfo instance
         */
        public static create(properties?: handyplug.IRequestServerInfo): handyplug.RequestServerInfo;

        /**
         * Encodes the specified RequestServerInfo message. Does not implicitly {@link handyplug.RequestServerInfo.verify|verify} messages.
         * @param message RequestServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.RequestServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestServerInfo message, length delimited. Does not implicitly {@link handyplug.RequestServerInfo.verify|verify} messages.
         * @param message RequestServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.RequestServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.RequestServerInfo;

        /**
         * Decodes a RequestServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.RequestServerInfo;

        /**
         * Verifies a RequestServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestServerInfo
         */
        public static fromObject(object: { [k: string]: any }): handyplug.RequestServerInfo;

        /**
         * Creates a plain object from a RequestServerInfo message. Also converts values to other types if specified.
         * @param message RequestServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.RequestServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo Id */
        Id?: (number|null);

        /** ServerInfo ServerName */
        ServerName?: (string|null);

        /** ServerInfo MessageVersion */
        MessageVersion?: (number|null);

        /** ServerInfo MaxPingTime */
        MaxPingTime?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IServerInfo);

        /** ServerInfo Id. */
        public Id: number;

        /** ServerInfo ServerName. */
        public ServerName: string;

        /** ServerInfo MessageVersion. */
        public MessageVersion: number;

        /** ServerInfo MaxPingTime. */
        public MaxPingTime: number;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfo instance
         */
        public static create(properties?: handyplug.IServerInfo): handyplug.ServerInfo;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link handyplug.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.ServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link handyplug.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.ServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): handyplug.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LinearCmd. */
    interface ILinearCmd {

        /** LinearCmd Id */
        Id?: (number|null);

        /** LinearCmd DeviceIndex */
        DeviceIndex?: (number|null);

        /** LinearCmd Vectors */
        Vectors?: (handyplug.LinearCmd.Vector[]|null);
    }

    /** Represents a LinearCmd. */
    class LinearCmd implements ILinearCmd {

        /**
         * Constructs a new LinearCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.ILinearCmd);

        /** LinearCmd Id. */
        public Id: number;

        /** LinearCmd DeviceIndex. */
        public DeviceIndex: number;

        /** LinearCmd Vectors. */
        public Vectors: handyplug.LinearCmd.Vector[];

        /**
         * Creates a new LinearCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinearCmd instance
         */
        public static create(properties?: handyplug.ILinearCmd): handyplug.LinearCmd;

        /**
         * Encodes the specified LinearCmd message. Does not implicitly {@link handyplug.LinearCmd.verify|verify} messages.
         * @param message LinearCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.LinearCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinearCmd message, length delimited. Does not implicitly {@link handyplug.LinearCmd.verify|verify} messages.
         * @param message LinearCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.LinearCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinearCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinearCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.LinearCmd;

        /**
         * Decodes a LinearCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinearCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.LinearCmd;

        /**
         * Verifies a LinearCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinearCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinearCmd
         */
        public static fromObject(object: { [k: string]: any }): handyplug.LinearCmd;

        /**
         * Creates a plain object from a LinearCmd message. Also converts values to other types if specified.
         * @param message LinearCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.LinearCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinearCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace LinearCmd {

        /** Properties of a Vector. */
        interface IVector {

            /** Vector Index */
            Index?: (number|null);

            /** Vector Duration */
            Duration?: (number|null);

            /** Vector Position */
            Position?: (number|null);
        }

        /** Represents a Vector. */
        class Vector implements IVector {

            /**
             * Constructs a new Vector.
             * @param [properties] Properties to set
             */
            constructor(properties?: handyplug.LinearCmd.IVector);

            /** Vector Index. */
            public Index: number;

            /** Vector Duration. */
            public Duration: number;

            /** Vector Position. */
            public Position: number;

            /**
             * Creates a new Vector instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector instance
             */
            public static create(properties?: handyplug.LinearCmd.IVector): handyplug.LinearCmd.Vector;

            /**
             * Encodes the specified Vector message. Does not implicitly {@link handyplug.LinearCmd.Vector.verify|verify} messages.
             * @param message Vector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: handyplug.LinearCmd.Vector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector message, length delimited. Does not implicitly {@link handyplug.LinearCmd.Vector.verify|verify} messages.
             * @param message Vector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: handyplug.LinearCmd.Vector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.LinearCmd.Vector;

            /**
             * Decodes a Vector message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.LinearCmd.Vector;

            /**
             * Verifies a Vector message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector
             */
            public static fromObject(object: { [k: string]: any }): handyplug.LinearCmd.Vector;

            /**
             * Creates a plain object from a Vector message. Also converts values to other types if specified.
             * @param message Vector
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: handyplug.LinearCmd.Vector, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message Ok */
        Ok?: (handyplug.Ok|null);

        /** Message Error */
        Error?: (handyplug.Error|null);

        /** Message Ping */
        Ping?: (handyplug.Ping|null);

        /** Message RequestServerInfo */
        RequestServerInfo?: (handyplug.RequestServerInfo|null);

        /** Message ServerInfo */
        ServerInfo?: (handyplug.ServerInfo|null);

        /** Message LinearCmd */
        LinearCmd?: (handyplug.LinearCmd|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IMessage);

        /** Message Ok. */
        public Ok?: (handyplug.Ok|null);

        /** Message Error. */
        public Error?: (handyplug.Error|null);

        /** Message Ping. */
        public Ping?: (handyplug.Ping|null);

        /** Message RequestServerInfo. */
        public RequestServerInfo?: (handyplug.RequestServerInfo|null);

        /** Message ServerInfo. */
        public ServerInfo?: (handyplug.ServerInfo|null);

        /** Message LinearCmd. */
        public LinearCmd?: (handyplug.LinearCmd|null);

        /** Message Message. */
        public Message?: ("Ok"|"Error"|"Ping"|"RequestServerInfo"|"ServerInfo"|"LinearCmd");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: handyplug.IMessage): handyplug.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link handyplug.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.Message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link handyplug.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.Message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): handyplug.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Payload. */
    interface IPayload {

        /** Payload Messages */
        Messages?: (handyplug.Message[]|null);
    }

    /** Represents a Payload. */
    class Payload implements IPayload {

        /**
         * Constructs a new Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: handyplug.IPayload);

        /** Payload Messages. */
        public Messages: handyplug.Message[];

        /**
         * Creates a new Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payload instance
         */
        public static create(properties?: handyplug.IPayload): handyplug.Payload;

        /**
         * Encodes the specified Payload message. Does not implicitly {@link handyplug.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: handyplug.Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link handyplug.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: handyplug.Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): handyplug.Payload;

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): handyplug.Payload;

        /**
         * Verifies a Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payload
         */
        public static fromObject(object: { [k: string]: any }): handyplug.Payload;

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @param message Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: handyplug.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a CmdProtocolVersionGet. */
export interface ICmdProtocolVersionGet {
}

/** Represents a CmdProtocolVersionGet. */
export class CmdProtocolVersionGet implements ICmdProtocolVersionGet {

    /**
     * Constructs a new CmdProtocolVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdProtocolVersionGet);

    /**
     * Creates a new CmdProtocolVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdProtocolVersionGet instance
     */
    public static create(properties?: ICmdProtocolVersionGet): CmdProtocolVersionGet;

    /**
     * Encodes the specified CmdProtocolVersionGet message. Does not implicitly {@link CmdProtocolVersionGet.verify|verify} messages.
     * @param message CmdProtocolVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdProtocolVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdProtocolVersionGet message, length delimited. Does not implicitly {@link CmdProtocolVersionGet.verify|verify} messages.
     * @param message CmdProtocolVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdProtocolVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdProtocolVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdProtocolVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdProtocolVersionGet;

    /**
     * Decodes a CmdProtocolVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdProtocolVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdProtocolVersionGet;

    /**
     * Verifies a CmdProtocolVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdProtocolVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdProtocolVersionGet
     */
    public static fromObject(object: { [k: string]: any }): CmdProtocolVersionGet;

    /**
     * Creates a plain object from a CmdProtocolVersionGet message. Also converts values to other types if specified.
     * @param message CmdProtocolVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdProtocolVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdProtocolVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespProtocolVersionGet. */
export interface IRespProtocolVersionGet {

    /** RespProtocolVersionGet result */
    result?: (number|null);

    /** RespProtocolVersionGet semver */
    semver?: (string|null);
}

/** Represents a RespProtocolVersionGet. */
export class RespProtocolVersionGet implements IRespProtocolVersionGet {

    /**
     * Constructs a new RespProtocolVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespProtocolVersionGet);

    /** RespProtocolVersionGet result. */
    public result: number;

    /** RespProtocolVersionGet semver. */
    public semver: string;

    /**
     * Creates a new RespProtocolVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespProtocolVersionGet instance
     */
    public static create(properties?: IRespProtocolVersionGet): RespProtocolVersionGet;

    /**
     * Encodes the specified RespProtocolVersionGet message. Does not implicitly {@link RespProtocolVersionGet.verify|verify} messages.
     * @param message RespProtocolVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespProtocolVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespProtocolVersionGet message, length delimited. Does not implicitly {@link RespProtocolVersionGet.verify|verify} messages.
     * @param message RespProtocolVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespProtocolVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespProtocolVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespProtocolVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespProtocolVersionGet;

    /**
     * Decodes a RespProtocolVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespProtocolVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespProtocolVersionGet;

    /**
     * Verifies a RespProtocolVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespProtocolVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespProtocolVersionGet
     */
    public static fromObject(object: { [k: string]: any }): RespProtocolVersionGet;

    /**
     * Creates a plain object from a RespProtocolVersionGet message. Also converts values to other types if specified.
     * @param message RespProtocolVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespProtocolVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespProtocolVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdConnectionKeyGet. */
export interface ICmdConnectionKeyGet {
}

/** Represents a CmdConnectionKeyGet. */
export class CmdConnectionKeyGet implements ICmdConnectionKeyGet {

    /**
     * Constructs a new CmdConnectionKeyGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdConnectionKeyGet);

    /**
     * Creates a new CmdConnectionKeyGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdConnectionKeyGet instance
     */
    public static create(properties?: ICmdConnectionKeyGet): CmdConnectionKeyGet;

    /**
     * Encodes the specified CmdConnectionKeyGet message. Does not implicitly {@link CmdConnectionKeyGet.verify|verify} messages.
     * @param message CmdConnectionKeyGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdConnectionKeyGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdConnectionKeyGet message, length delimited. Does not implicitly {@link CmdConnectionKeyGet.verify|verify} messages.
     * @param message CmdConnectionKeyGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdConnectionKeyGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdConnectionKeyGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdConnectionKeyGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdConnectionKeyGet;

    /**
     * Decodes a CmdConnectionKeyGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdConnectionKeyGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdConnectionKeyGet;

    /**
     * Verifies a CmdConnectionKeyGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdConnectionKeyGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdConnectionKeyGet
     */
    public static fromObject(object: { [k: string]: any }): CmdConnectionKeyGet;

    /**
     * Creates a plain object from a CmdConnectionKeyGet message. Also converts values to other types if specified.
     * @param message CmdConnectionKeyGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdConnectionKeyGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdConnectionKeyGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespConnectionKeyGet. */
export interface IRespConnectionKeyGet {

    /** RespConnectionKeyGet result */
    result?: (number|null);

    /** RespConnectionKeyGet key */
    key?: (string|null);
}

/** Represents a RespConnectionKeyGet. */
export class RespConnectionKeyGet implements IRespConnectionKeyGet {

    /**
     * Constructs a new RespConnectionKeyGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespConnectionKeyGet);

    /** RespConnectionKeyGet result. */
    public result: number;

    /** RespConnectionKeyGet key. */
    public key: string;

    /**
     * Creates a new RespConnectionKeyGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespConnectionKeyGet instance
     */
    public static create(properties?: IRespConnectionKeyGet): RespConnectionKeyGet;

    /**
     * Encodes the specified RespConnectionKeyGet message. Does not implicitly {@link RespConnectionKeyGet.verify|verify} messages.
     * @param message RespConnectionKeyGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespConnectionKeyGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespConnectionKeyGet message, length delimited. Does not implicitly {@link RespConnectionKeyGet.verify|verify} messages.
     * @param message RespConnectionKeyGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespConnectionKeyGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespConnectionKeyGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespConnectionKeyGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespConnectionKeyGet;

    /**
     * Decodes a RespConnectionKeyGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespConnectionKeyGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespConnectionKeyGet;

    /**
     * Verifies a RespConnectionKeyGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespConnectionKeyGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespConnectionKeyGet
     */
    public static fromObject(object: { [k: string]: any }): RespConnectionKeyGet;

    /**
     * Creates a plain object from a RespConnectionKeyGet message. Also converts values to other types if specified.
     * @param message RespConnectionKeyGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespConnectionKeyGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespConnectionKeyGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdConnectionKeyGen. */
export interface ICmdConnectionKeyGen {

    /** CmdConnectionKeyGen length */
    length?: (number|null);
}

/** Represents a CmdConnectionKeyGen. */
export class CmdConnectionKeyGen implements ICmdConnectionKeyGen {

    /**
     * Constructs a new CmdConnectionKeyGen.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdConnectionKeyGen);

    /** CmdConnectionKeyGen length. */
    public length: number;

    /**
     * Creates a new CmdConnectionKeyGen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdConnectionKeyGen instance
     */
    public static create(properties?: ICmdConnectionKeyGen): CmdConnectionKeyGen;

    /**
     * Encodes the specified CmdConnectionKeyGen message. Does not implicitly {@link CmdConnectionKeyGen.verify|verify} messages.
     * @param message CmdConnectionKeyGen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdConnectionKeyGen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdConnectionKeyGen message, length delimited. Does not implicitly {@link CmdConnectionKeyGen.verify|verify} messages.
     * @param message CmdConnectionKeyGen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdConnectionKeyGen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdConnectionKeyGen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdConnectionKeyGen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdConnectionKeyGen;

    /**
     * Decodes a CmdConnectionKeyGen message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdConnectionKeyGen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdConnectionKeyGen;

    /**
     * Verifies a CmdConnectionKeyGen message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdConnectionKeyGen message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdConnectionKeyGen
     */
    public static fromObject(object: { [k: string]: any }): CmdConnectionKeyGen;

    /**
     * Creates a plain object from a CmdConnectionKeyGen message. Also converts values to other types if specified.
     * @param message CmdConnectionKeyGen
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdConnectionKeyGen, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdConnectionKeyGen to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespConnectionKeyGen. */
export interface IRespConnectionKeyGen {

    /** RespConnectionKeyGen result */
    result?: (number|null);

    /** RespConnectionKeyGen key */
    key?: (string|null);
}

/** Represents a RespConnectionKeyGen. */
export class RespConnectionKeyGen implements IRespConnectionKeyGen {

    /**
     * Constructs a new RespConnectionKeyGen.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespConnectionKeyGen);

    /** RespConnectionKeyGen result. */
    public result: number;

    /** RespConnectionKeyGen key. */
    public key: string;

    /**
     * Creates a new RespConnectionKeyGen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespConnectionKeyGen instance
     */
    public static create(properties?: IRespConnectionKeyGen): RespConnectionKeyGen;

    /**
     * Encodes the specified RespConnectionKeyGen message. Does not implicitly {@link RespConnectionKeyGen.verify|verify} messages.
     * @param message RespConnectionKeyGen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespConnectionKeyGen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespConnectionKeyGen message, length delimited. Does not implicitly {@link RespConnectionKeyGen.verify|verify} messages.
     * @param message RespConnectionKeyGen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespConnectionKeyGen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespConnectionKeyGen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespConnectionKeyGen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespConnectionKeyGen;

    /**
     * Decodes a RespConnectionKeyGen message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespConnectionKeyGen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespConnectionKeyGen;

    /**
     * Verifies a RespConnectionKeyGen message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespConnectionKeyGen message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespConnectionKeyGen
     */
    public static fromObject(object: { [k: string]: any }): RespConnectionKeyGen;

    /**
     * Creates a plain object from a RespConnectionKeyGen message. Also converts values to other types if specified.
     * @param message RespConnectionKeyGen
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespConnectionKeyGen, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespConnectionKeyGen to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdSerialNumberGet. */
export interface ICmdSerialNumberGet {
}

/** Represents a CmdSerialNumberGet. */
export class CmdSerialNumberGet implements ICmdSerialNumberGet {

    /**
     * Constructs a new CmdSerialNumberGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdSerialNumberGet);

    /**
     * Creates a new CmdSerialNumberGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdSerialNumberGet instance
     */
    public static create(properties?: ICmdSerialNumberGet): CmdSerialNumberGet;

    /**
     * Encodes the specified CmdSerialNumberGet message. Does not implicitly {@link CmdSerialNumberGet.verify|verify} messages.
     * @param message CmdSerialNumberGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdSerialNumberGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdSerialNumberGet message, length delimited. Does not implicitly {@link CmdSerialNumberGet.verify|verify} messages.
     * @param message CmdSerialNumberGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdSerialNumberGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdSerialNumberGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdSerialNumberGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdSerialNumberGet;

    /**
     * Decodes a CmdSerialNumberGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdSerialNumberGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdSerialNumberGet;

    /**
     * Verifies a CmdSerialNumberGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdSerialNumberGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdSerialNumberGet
     */
    public static fromObject(object: { [k: string]: any }): CmdSerialNumberGet;

    /**
     * Creates a plain object from a CmdSerialNumberGet message. Also converts values to other types if specified.
     * @param message CmdSerialNumberGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdSerialNumberGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdSerialNumberGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespSerialNumberGet. */
export interface IRespSerialNumberGet {

    /** RespSerialNumberGet result */
    result?: (number|null);

    /** RespSerialNumberGet serialNumber */
    serialNumber?: (number|null);
}

/** Represents a RespSerialNumberGet. */
export class RespSerialNumberGet implements IRespSerialNumberGet {

    /**
     * Constructs a new RespSerialNumberGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespSerialNumberGet);

    /** RespSerialNumberGet result. */
    public result: number;

    /** RespSerialNumberGet serialNumber. */
    public serialNumber: number;

    /**
     * Creates a new RespSerialNumberGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespSerialNumberGet instance
     */
    public static create(properties?: IRespSerialNumberGet): RespSerialNumberGet;

    /**
     * Encodes the specified RespSerialNumberGet message. Does not implicitly {@link RespSerialNumberGet.verify|verify} messages.
     * @param message RespSerialNumberGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespSerialNumberGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespSerialNumberGet message, length delimited. Does not implicitly {@link RespSerialNumberGet.verify|verify} messages.
     * @param message RespSerialNumberGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespSerialNumberGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespSerialNumberGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespSerialNumberGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespSerialNumberGet;

    /**
     * Decodes a RespSerialNumberGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespSerialNumberGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespSerialNumberGet;

    /**
     * Verifies a RespSerialNumberGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespSerialNumberGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespSerialNumberGet
     */
    public static fromObject(object: { [k: string]: any }): RespSerialNumberGet;

    /**
     * Creates a plain object from a RespSerialNumberGet message. Also converts values to other types if specified.
     * @param message RespSerialNumberGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespSerialNumberGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespSerialNumberGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdProductionDateGet. */
export interface ICmdProductionDateGet {
}

/** Represents a CmdProductionDateGet. */
export class CmdProductionDateGet implements ICmdProductionDateGet {

    /**
     * Constructs a new CmdProductionDateGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdProductionDateGet);

    /**
     * Creates a new CmdProductionDateGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdProductionDateGet instance
     */
    public static create(properties?: ICmdProductionDateGet): CmdProductionDateGet;

    /**
     * Encodes the specified CmdProductionDateGet message. Does not implicitly {@link CmdProductionDateGet.verify|verify} messages.
     * @param message CmdProductionDateGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdProductionDateGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdProductionDateGet message, length delimited. Does not implicitly {@link CmdProductionDateGet.verify|verify} messages.
     * @param message CmdProductionDateGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdProductionDateGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdProductionDateGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdProductionDateGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdProductionDateGet;

    /**
     * Decodes a CmdProductionDateGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdProductionDateGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdProductionDateGet;

    /**
     * Verifies a CmdProductionDateGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdProductionDateGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdProductionDateGet
     */
    public static fromObject(object: { [k: string]: any }): CmdProductionDateGet;

    /**
     * Creates a plain object from a CmdProductionDateGet message. Also converts values to other types if specified.
     * @param message CmdProductionDateGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdProductionDateGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdProductionDateGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespProductionDateGet. */
export interface IRespProductionDateGet {

    /** RespProductionDateGet result */
    result?: (number|null);

    /** RespProductionDateGet productionDate */
    productionDate?: (string|null);
}

/** Represents a RespProductionDateGet. */
export class RespProductionDateGet implements IRespProductionDateGet {

    /**
     * Constructs a new RespProductionDateGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespProductionDateGet);

    /** RespProductionDateGet result. */
    public result: number;

    /** RespProductionDateGet productionDate. */
    public productionDate: string;

    /**
     * Creates a new RespProductionDateGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespProductionDateGet instance
     */
    public static create(properties?: IRespProductionDateGet): RespProductionDateGet;

    /**
     * Encodes the specified RespProductionDateGet message. Does not implicitly {@link RespProductionDateGet.verify|verify} messages.
     * @param message RespProductionDateGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespProductionDateGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespProductionDateGet message, length delimited. Does not implicitly {@link RespProductionDateGet.verify|verify} messages.
     * @param message RespProductionDateGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespProductionDateGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespProductionDateGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespProductionDateGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespProductionDateGet;

    /**
     * Decodes a RespProductionDateGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespProductionDateGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespProductionDateGet;

    /**
     * Verifies a RespProductionDateGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespProductionDateGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespProductionDateGet
     */
    public static fromObject(object: { [k: string]: any }): RespProductionDateGet;

    /**
     * Creates a plain object from a RespProductionDateGet message. Also converts values to other types if specified.
     * @param message RespProductionDateGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespProductionDateGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespProductionDateGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdHardwareVersionGet. */
export interface ICmdHardwareVersionGet {
}

/** Represents a CmdHardwareVersionGet. */
export class CmdHardwareVersionGet implements ICmdHardwareVersionGet {

    /**
     * Constructs a new CmdHardwareVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdHardwareVersionGet);

    /**
     * Creates a new CmdHardwareVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdHardwareVersionGet instance
     */
    public static create(properties?: ICmdHardwareVersionGet): CmdHardwareVersionGet;

    /**
     * Encodes the specified CmdHardwareVersionGet message. Does not implicitly {@link CmdHardwareVersionGet.verify|verify} messages.
     * @param message CmdHardwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdHardwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdHardwareVersionGet message, length delimited. Does not implicitly {@link CmdHardwareVersionGet.verify|verify} messages.
     * @param message CmdHardwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdHardwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdHardwareVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdHardwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdHardwareVersionGet;

    /**
     * Decodes a CmdHardwareVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdHardwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdHardwareVersionGet;

    /**
     * Verifies a CmdHardwareVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdHardwareVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdHardwareVersionGet
     */
    public static fromObject(object: { [k: string]: any }): CmdHardwareVersionGet;

    /**
     * Creates a plain object from a CmdHardwareVersionGet message. Also converts values to other types if specified.
     * @param message CmdHardwareVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdHardwareVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdHardwareVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespHardwareVersionGet. */
export interface IRespHardwareVersionGet {

    /** RespHardwareVersionGet result */
    result?: (number|null);

    /** RespHardwareVersionGet hardwareVersion */
    hardwareVersion?: (number|null);
}

/** Represents a RespHardwareVersionGet. */
export class RespHardwareVersionGet implements IRespHardwareVersionGet {

    /**
     * Constructs a new RespHardwareVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespHardwareVersionGet);

    /** RespHardwareVersionGet result. */
    public result: number;

    /** RespHardwareVersionGet hardwareVersion. */
    public hardwareVersion: number;

    /**
     * Creates a new RespHardwareVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespHardwareVersionGet instance
     */
    public static create(properties?: IRespHardwareVersionGet): RespHardwareVersionGet;

    /**
     * Encodes the specified RespHardwareVersionGet message. Does not implicitly {@link RespHardwareVersionGet.verify|verify} messages.
     * @param message RespHardwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespHardwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespHardwareVersionGet message, length delimited. Does not implicitly {@link RespHardwareVersionGet.verify|verify} messages.
     * @param message RespHardwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespHardwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespHardwareVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespHardwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespHardwareVersionGet;

    /**
     * Decodes a RespHardwareVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespHardwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespHardwareVersionGet;

    /**
     * Verifies a RespHardwareVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespHardwareVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespHardwareVersionGet
     */
    public static fromObject(object: { [k: string]: any }): RespHardwareVersionGet;

    /**
     * Creates a plain object from a RespHardwareVersionGet message. Also converts values to other types if specified.
     * @param message RespHardwareVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespHardwareVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespHardwareVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdPcbaVersionGet. */
export interface ICmdPcbaVersionGet {
}

/** Represents a CmdPcbaVersionGet. */
export class CmdPcbaVersionGet implements ICmdPcbaVersionGet {

    /**
     * Constructs a new CmdPcbaVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdPcbaVersionGet);

    /**
     * Creates a new CmdPcbaVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdPcbaVersionGet instance
     */
    public static create(properties?: ICmdPcbaVersionGet): CmdPcbaVersionGet;

    /**
     * Encodes the specified CmdPcbaVersionGet message. Does not implicitly {@link CmdPcbaVersionGet.verify|verify} messages.
     * @param message CmdPcbaVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdPcbaVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdPcbaVersionGet message, length delimited. Does not implicitly {@link CmdPcbaVersionGet.verify|verify} messages.
     * @param message CmdPcbaVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdPcbaVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdPcbaVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdPcbaVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdPcbaVersionGet;

    /**
     * Decodes a CmdPcbaVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdPcbaVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdPcbaVersionGet;

    /**
     * Verifies a CmdPcbaVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdPcbaVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdPcbaVersionGet
     */
    public static fromObject(object: { [k: string]: any }): CmdPcbaVersionGet;

    /**
     * Creates a plain object from a CmdPcbaVersionGet message. Also converts values to other types if specified.
     * @param message CmdPcbaVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdPcbaVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdPcbaVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespPcbaVersionGet. */
export interface IRespPcbaVersionGet {

    /** RespPcbaVersionGet result */
    result?: (number|null);

    /** RespPcbaVersionGet PcbaVersion */
    PcbaVersion?: (string|null);
}

/** Represents a RespPcbaVersionGet. */
export class RespPcbaVersionGet implements IRespPcbaVersionGet {

    /**
     * Constructs a new RespPcbaVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespPcbaVersionGet);

    /** RespPcbaVersionGet result. */
    public result: number;

    /** RespPcbaVersionGet PcbaVersion. */
    public PcbaVersion: string;

    /**
     * Creates a new RespPcbaVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespPcbaVersionGet instance
     */
    public static create(properties?: IRespPcbaVersionGet): RespPcbaVersionGet;

    /**
     * Encodes the specified RespPcbaVersionGet message. Does not implicitly {@link RespPcbaVersionGet.verify|verify} messages.
     * @param message RespPcbaVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespPcbaVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespPcbaVersionGet message, length delimited. Does not implicitly {@link RespPcbaVersionGet.verify|verify} messages.
     * @param message RespPcbaVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespPcbaVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespPcbaVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespPcbaVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespPcbaVersionGet;

    /**
     * Decodes a RespPcbaVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespPcbaVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespPcbaVersionGet;

    /**
     * Verifies a RespPcbaVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespPcbaVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespPcbaVersionGet
     */
    public static fromObject(object: { [k: string]: any }): RespPcbaVersionGet;

    /**
     * Creates a plain object from a RespPcbaVersionGet message. Also converts values to other types if specified.
     * @param message RespPcbaVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespPcbaVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespPcbaVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdModelGet. */
export interface ICmdModelGet {
}

/** Represents a CmdModelGet. */
export class CmdModelGet implements ICmdModelGet {

    /**
     * Constructs a new CmdModelGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdModelGet);

    /**
     * Creates a new CmdModelGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdModelGet instance
     */
    public static create(properties?: ICmdModelGet): CmdModelGet;

    /**
     * Encodes the specified CmdModelGet message. Does not implicitly {@link CmdModelGet.verify|verify} messages.
     * @param message CmdModelGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdModelGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdModelGet message, length delimited. Does not implicitly {@link CmdModelGet.verify|verify} messages.
     * @param message CmdModelGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdModelGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdModelGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdModelGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdModelGet;

    /**
     * Decodes a CmdModelGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdModelGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdModelGet;

    /**
     * Verifies a CmdModelGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdModelGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdModelGet
     */
    public static fromObject(object: { [k: string]: any }): CmdModelGet;

    /**
     * Creates a plain object from a CmdModelGet message. Also converts values to other types if specified.
     * @param message CmdModelGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdModelGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdModelGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespModelGet. */
export interface IRespModelGet {

    /** RespModelGet result */
    result?: (number|null);

    /** RespModelGet model */
    model?: (string|null);
}

/** Represents a RespModelGet. */
export class RespModelGet implements IRespModelGet {

    /**
     * Constructs a new RespModelGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespModelGet);

    /** RespModelGet result. */
    public result: number;

    /** RespModelGet model. */
    public model: string;

    /**
     * Creates a new RespModelGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespModelGet instance
     */
    public static create(properties?: IRespModelGet): RespModelGet;

    /**
     * Encodes the specified RespModelGet message. Does not implicitly {@link RespModelGet.verify|verify} messages.
     * @param message RespModelGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespModelGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespModelGet message, length delimited. Does not implicitly {@link RespModelGet.verify|verify} messages.
     * @param message RespModelGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespModelGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespModelGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespModelGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespModelGet;

    /**
     * Decodes a RespModelGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespModelGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespModelGet;

    /**
     * Verifies a RespModelGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespModelGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespModelGet
     */
    public static fromObject(object: { [k: string]: any }): RespModelGet;

    /**
     * Creates a plain object from a RespModelGet message. Also converts values to other types if specified.
     * @param message RespModelGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespModelGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespModelGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdTermsSet. */
export interface ICmdTermsSet {

    /** CmdTermsSet termsBits */
    termsBits?: (number|null);
}

/** Represents a CmdTermsSet. */
export class CmdTermsSet implements ICmdTermsSet {

    /**
     * Constructs a new CmdTermsSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdTermsSet);

    /** CmdTermsSet termsBits. */
    public termsBits: number;

    /**
     * Creates a new CmdTermsSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdTermsSet instance
     */
    public static create(properties?: ICmdTermsSet): CmdTermsSet;

    /**
     * Encodes the specified CmdTermsSet message. Does not implicitly {@link CmdTermsSet.verify|verify} messages.
     * @param message CmdTermsSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdTermsSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdTermsSet message, length delimited. Does not implicitly {@link CmdTermsSet.verify|verify} messages.
     * @param message CmdTermsSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdTermsSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdTermsSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdTermsSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdTermsSet;

    /**
     * Decodes a CmdTermsSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdTermsSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdTermsSet;

    /**
     * Verifies a CmdTermsSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdTermsSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdTermsSet
     */
    public static fromObject(object: { [k: string]: any }): CmdTermsSet;

    /**
     * Creates a plain object from a CmdTermsSet message. Also converts values to other types if specified.
     * @param message CmdTermsSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdTermsSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdTermsSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespTermsSet. */
export interface IRespTermsSet {

    /** RespTermsSet result */
    result?: (number|null);
}

/** Represents a RespTermsSet. */
export class RespTermsSet implements IRespTermsSet {

    /**
     * Constructs a new RespTermsSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespTermsSet);

    /** RespTermsSet result. */
    public result: number;

    /**
     * Creates a new RespTermsSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespTermsSet instance
     */
    public static create(properties?: IRespTermsSet): RespTermsSet;

    /**
     * Encodes the specified RespTermsSet message. Does not implicitly {@link RespTermsSet.verify|verify} messages.
     * @param message RespTermsSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespTermsSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespTermsSet message, length delimited. Does not implicitly {@link RespTermsSet.verify|verify} messages.
     * @param message RespTermsSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespTermsSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespTermsSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespTermsSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespTermsSet;

    /**
     * Decodes a RespTermsSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespTermsSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespTermsSet;

    /**
     * Verifies a RespTermsSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespTermsSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespTermsSet
     */
    public static fromObject(object: { [k: string]: any }): RespTermsSet;

    /**
     * Creates a plain object from a RespTermsSet message. Also converts values to other types if specified.
     * @param message RespTermsSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespTermsSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespTermsSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdTermsGet. */
export interface ICmdTermsGet {
}

/** Represents a CmdTermsGet. */
export class CmdTermsGet implements ICmdTermsGet {

    /**
     * Constructs a new CmdTermsGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdTermsGet);

    /**
     * Creates a new CmdTermsGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdTermsGet instance
     */
    public static create(properties?: ICmdTermsGet): CmdTermsGet;

    /**
     * Encodes the specified CmdTermsGet message. Does not implicitly {@link CmdTermsGet.verify|verify} messages.
     * @param message CmdTermsGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdTermsGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdTermsGet message, length delimited. Does not implicitly {@link CmdTermsGet.verify|verify} messages.
     * @param message CmdTermsGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdTermsGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdTermsGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdTermsGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdTermsGet;

    /**
     * Decodes a CmdTermsGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdTermsGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdTermsGet;

    /**
     * Verifies a CmdTermsGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdTermsGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdTermsGet
     */
    public static fromObject(object: { [k: string]: any }): CmdTermsGet;

    /**
     * Creates a plain object from a CmdTermsGet message. Also converts values to other types if specified.
     * @param message CmdTermsGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdTermsGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdTermsGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespTermsGet. */
export interface IRespTermsGet {

    /** RespTermsGet result */
    result?: (number|null);

    /** RespTermsGet termsBits */
    termsBits?: (number|null);
}

/** Represents a RespTermsGet. */
export class RespTermsGet implements IRespTermsGet {

    /**
     * Constructs a new RespTermsGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespTermsGet);

    /** RespTermsGet result. */
    public result: number;

    /** RespTermsGet termsBits. */
    public termsBits: number;

    /**
     * Creates a new RespTermsGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespTermsGet instance
     */
    public static create(properties?: IRespTermsGet): RespTermsGet;

    /**
     * Encodes the specified RespTermsGet message. Does not implicitly {@link RespTermsGet.verify|verify} messages.
     * @param message RespTermsGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespTermsGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespTermsGet message, length delimited. Does not implicitly {@link RespTermsGet.verify|verify} messages.
     * @param message RespTermsGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespTermsGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespTermsGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespTermsGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespTermsGet;

    /**
     * Decodes a RespTermsGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespTermsGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespTermsGet;

    /**
     * Verifies a RespTermsGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespTermsGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespTermsGet
     */
    public static fromObject(object: { [k: string]: any }): RespTermsGet;

    /**
     * Creates a plain object from a RespTermsGet message. Also converts values to other types if specified.
     * @param message RespTermsGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespTermsGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespTermsGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdFirmwareVersionGet. */
export interface ICmdFirmwareVersionGet {
}

/** Represents a CmdFirmwareVersionGet. */
export class CmdFirmwareVersionGet implements ICmdFirmwareVersionGet {

    /**
     * Constructs a new CmdFirmwareVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdFirmwareVersionGet);

    /**
     * Creates a new CmdFirmwareVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdFirmwareVersionGet instance
     */
    public static create(properties?: ICmdFirmwareVersionGet): CmdFirmwareVersionGet;

    /**
     * Encodes the specified CmdFirmwareVersionGet message. Does not implicitly {@link CmdFirmwareVersionGet.verify|verify} messages.
     * @param message CmdFirmwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdFirmwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdFirmwareVersionGet message, length delimited. Does not implicitly {@link CmdFirmwareVersionGet.verify|verify} messages.
     * @param message CmdFirmwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdFirmwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdFirmwareVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdFirmwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdFirmwareVersionGet;

    /**
     * Decodes a CmdFirmwareVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdFirmwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdFirmwareVersionGet;

    /**
     * Verifies a CmdFirmwareVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdFirmwareVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdFirmwareVersionGet
     */
    public static fromObject(object: { [k: string]: any }): CmdFirmwareVersionGet;

    /**
     * Creates a plain object from a CmdFirmwareVersionGet message. Also converts values to other types if specified.
     * @param message CmdFirmwareVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdFirmwareVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdFirmwareVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespFirmwareVersionGet. */
export interface IRespFirmwareVersionGet {

    /** RespFirmwareVersionGet result */
    result?: (number|null);

    /** RespFirmwareVersionGet semver */
    semver?: (string|null);
}

/** Represents a RespFirmwareVersionGet. */
export class RespFirmwareVersionGet implements IRespFirmwareVersionGet {

    /**
     * Constructs a new RespFirmwareVersionGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespFirmwareVersionGet);

    /** RespFirmwareVersionGet result. */
    public result: number;

    /** RespFirmwareVersionGet semver. */
    public semver: string;

    /**
     * Creates a new RespFirmwareVersionGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespFirmwareVersionGet instance
     */
    public static create(properties?: IRespFirmwareVersionGet): RespFirmwareVersionGet;

    /**
     * Encodes the specified RespFirmwareVersionGet message. Does not implicitly {@link RespFirmwareVersionGet.verify|verify} messages.
     * @param message RespFirmwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespFirmwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespFirmwareVersionGet message, length delimited. Does not implicitly {@link RespFirmwareVersionGet.verify|verify} messages.
     * @param message RespFirmwareVersionGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespFirmwareVersionGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespFirmwareVersionGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespFirmwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespFirmwareVersionGet;

    /**
     * Decodes a RespFirmwareVersionGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespFirmwareVersionGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespFirmwareVersionGet;

    /**
     * Verifies a RespFirmwareVersionGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespFirmwareVersionGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespFirmwareVersionGet
     */
    public static fromObject(object: { [k: string]: any }): RespFirmwareVersionGet;

    /**
     * Creates a plain object from a RespFirmwareVersionGet message. Also converts values to other types if specified.
     * @param message RespFirmwareVersionGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespFirmwareVersionGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespFirmwareVersionGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdWifiStaMacGet. */
export interface ICmdWifiStaMacGet {
}

/** Represents a CmdWifiStaMacGet. */
export class CmdWifiStaMacGet implements ICmdWifiStaMacGet {

    /**
     * Constructs a new CmdWifiStaMacGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdWifiStaMacGet);

    /**
     * Creates a new CmdWifiStaMacGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdWifiStaMacGet instance
     */
    public static create(properties?: ICmdWifiStaMacGet): CmdWifiStaMacGet;

    /**
     * Encodes the specified CmdWifiStaMacGet message. Does not implicitly {@link CmdWifiStaMacGet.verify|verify} messages.
     * @param message CmdWifiStaMacGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdWifiStaMacGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdWifiStaMacGet message, length delimited. Does not implicitly {@link CmdWifiStaMacGet.verify|verify} messages.
     * @param message CmdWifiStaMacGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdWifiStaMacGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdWifiStaMacGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdWifiStaMacGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdWifiStaMacGet;

    /**
     * Decodes a CmdWifiStaMacGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdWifiStaMacGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdWifiStaMacGet;

    /**
     * Verifies a CmdWifiStaMacGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdWifiStaMacGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdWifiStaMacGet
     */
    public static fromObject(object: { [k: string]: any }): CmdWifiStaMacGet;

    /**
     * Creates a plain object from a CmdWifiStaMacGet message. Also converts values to other types if specified.
     * @param message CmdWifiStaMacGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdWifiStaMacGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdWifiStaMacGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespWifiStaMacGet. */
export interface IRespWifiStaMacGet {

    /** RespWifiStaMacGet result */
    result?: (number|null);

    /** RespWifiStaMacGet mac */
    mac?: (string|null);
}

/** Represents a RespWifiStaMacGet. */
export class RespWifiStaMacGet implements IRespWifiStaMacGet {

    /**
     * Constructs a new RespWifiStaMacGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespWifiStaMacGet);

    /** RespWifiStaMacGet result. */
    public result: number;

    /** RespWifiStaMacGet mac. */
    public mac: string;

    /**
     * Creates a new RespWifiStaMacGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespWifiStaMacGet instance
     */
    public static create(properties?: IRespWifiStaMacGet): RespWifiStaMacGet;

    /**
     * Encodes the specified RespWifiStaMacGet message. Does not implicitly {@link RespWifiStaMacGet.verify|verify} messages.
     * @param message RespWifiStaMacGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespWifiStaMacGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespWifiStaMacGet message, length delimited. Does not implicitly {@link RespWifiStaMacGet.verify|verify} messages.
     * @param message RespWifiStaMacGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespWifiStaMacGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespWifiStaMacGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespWifiStaMacGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespWifiStaMacGet;

    /**
     * Decodes a RespWifiStaMacGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespWifiStaMacGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespWifiStaMacGet;

    /**
     * Verifies a RespWifiStaMacGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespWifiStaMacGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespWifiStaMacGet
     */
    public static fromObject(object: { [k: string]: any }): RespWifiStaMacGet;

    /**
     * Creates a plain object from a RespWifiStaMacGet message. Also converts values to other types if specified.
     * @param message RespWifiStaMacGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespWifiStaMacGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespWifiStaMacGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdWifiStaIpGet. */
export interface ICmdWifiStaIpGet {
}

/** Represents a CmdWifiStaIpGet. */
export class CmdWifiStaIpGet implements ICmdWifiStaIpGet {

    /**
     * Constructs a new CmdWifiStaIpGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdWifiStaIpGet);

    /**
     * Creates a new CmdWifiStaIpGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdWifiStaIpGet instance
     */
    public static create(properties?: ICmdWifiStaIpGet): CmdWifiStaIpGet;

    /**
     * Encodes the specified CmdWifiStaIpGet message. Does not implicitly {@link CmdWifiStaIpGet.verify|verify} messages.
     * @param message CmdWifiStaIpGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdWifiStaIpGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdWifiStaIpGet message, length delimited. Does not implicitly {@link CmdWifiStaIpGet.verify|verify} messages.
     * @param message CmdWifiStaIpGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdWifiStaIpGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdWifiStaIpGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdWifiStaIpGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdWifiStaIpGet;

    /**
     * Decodes a CmdWifiStaIpGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdWifiStaIpGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdWifiStaIpGet;

    /**
     * Verifies a CmdWifiStaIpGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdWifiStaIpGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdWifiStaIpGet
     */
    public static fromObject(object: { [k: string]: any }): CmdWifiStaIpGet;

    /**
     * Creates a plain object from a CmdWifiStaIpGet message. Also converts values to other types if specified.
     * @param message CmdWifiStaIpGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdWifiStaIpGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdWifiStaIpGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespWifiStaIpGet. */
export interface IRespWifiStaIpGet {

    /** RespWifiStaIpGet result */
    result?: (number|null);

    /** RespWifiStaIpGet ip */
    ip?: (string|null);
}

/** Represents a RespWifiStaIpGet. */
export class RespWifiStaIpGet implements IRespWifiStaIpGet {

    /**
     * Constructs a new RespWifiStaIpGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespWifiStaIpGet);

    /** RespWifiStaIpGet result. */
    public result: number;

    /** RespWifiStaIpGet ip. */
    public ip: string;

    /**
     * Creates a new RespWifiStaIpGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespWifiStaIpGet instance
     */
    public static create(properties?: IRespWifiStaIpGet): RespWifiStaIpGet;

    /**
     * Encodes the specified RespWifiStaIpGet message. Does not implicitly {@link RespWifiStaIpGet.verify|verify} messages.
     * @param message RespWifiStaIpGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespWifiStaIpGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespWifiStaIpGet message, length delimited. Does not implicitly {@link RespWifiStaIpGet.verify|verify} messages.
     * @param message RespWifiStaIpGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespWifiStaIpGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespWifiStaIpGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespWifiStaIpGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespWifiStaIpGet;

    /**
     * Decodes a RespWifiStaIpGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespWifiStaIpGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespWifiStaIpGet;

    /**
     * Verifies a RespWifiStaIpGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespWifiStaIpGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespWifiStaIpGet
     */
    public static fromObject(object: { [k: string]: any }): RespWifiStaIpGet;

    /**
     * Creates a plain object from a RespWifiStaIpGet message. Also converts values to other types if specified.
     * @param message RespWifiStaIpGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespWifiStaIpGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespWifiStaIpGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdPing. */
export interface ICmdPing {
}

/** Represents a CmdPing. */
export class CmdPing implements ICmdPing {

    /**
     * Constructs a new CmdPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdPing);

    /**
     * Creates a new CmdPing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdPing instance
     */
    public static create(properties?: ICmdPing): CmdPing;

    /**
     * Encodes the specified CmdPing message. Does not implicitly {@link CmdPing.verify|verify} messages.
     * @param message CmdPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdPing message, length delimited. Does not implicitly {@link CmdPing.verify|verify} messages.
     * @param message CmdPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdPing;

    /**
     * Decodes a CmdPing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdPing;

    /**
     * Verifies a CmdPing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdPing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdPing
     */
    public static fromObject(object: { [k: string]: any }): CmdPing;

    /**
     * Creates a plain object from a CmdPing message. Also converts values to other types if specified.
     * @param message CmdPing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdPing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespPing. */
export interface IRespPing {
}

/** Represents a RespPing. */
export class RespPing implements IRespPing {

    /**
     * Constructs a new RespPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespPing);

    /**
     * Creates a new RespPing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespPing instance
     */
    public static create(properties?: IRespPing): RespPing;

    /**
     * Encodes the specified RespPing message. Does not implicitly {@link RespPing.verify|verify} messages.
     * @param message RespPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespPing message, length delimited. Does not implicitly {@link RespPing.verify|verify} messages.
     * @param message RespPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespPing;

    /**
     * Decodes a RespPing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespPing;

    /**
     * Verifies a RespPing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespPing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespPing
     */
    public static fromObject(object: { [k: string]: any }): RespPing;

    /**
     * Creates a plain object from a RespPing message. Also converts values to other types if specified.
     * @param message RespPing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespPing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdEIOConnect. */
export interface ICmdEIOConnect {
}

/** Represents a CmdEIOConnect. */
export class CmdEIOConnect implements ICmdEIOConnect {

    /**
     * Constructs a new CmdEIOConnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdEIOConnect);

    /**
     * Creates a new CmdEIOConnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdEIOConnect instance
     */
    public static create(properties?: ICmdEIOConnect): CmdEIOConnect;

    /**
     * Encodes the specified CmdEIOConnect message. Does not implicitly {@link CmdEIOConnect.verify|verify} messages.
     * @param message CmdEIOConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdEIOConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdEIOConnect message, length delimited. Does not implicitly {@link CmdEIOConnect.verify|verify} messages.
     * @param message CmdEIOConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdEIOConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdEIOConnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdEIOConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdEIOConnect;

    /**
     * Decodes a CmdEIOConnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdEIOConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdEIOConnect;

    /**
     * Verifies a CmdEIOConnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdEIOConnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdEIOConnect
     */
    public static fromObject(object: { [k: string]: any }): CmdEIOConnect;

    /**
     * Creates a plain object from a CmdEIOConnect message. Also converts values to other types if specified.
     * @param message CmdEIOConnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdEIOConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdEIOConnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespEIOConnect. */
export interface IRespEIOConnect {

    /** RespEIOConnect result */
    result?: (number|null);
}

/** Represents a RespEIOConnect. */
export class RespEIOConnect implements IRespEIOConnect {

    /**
     * Constructs a new RespEIOConnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespEIOConnect);

    /** RespEIOConnect result. */
    public result: number;

    /**
     * Creates a new RespEIOConnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespEIOConnect instance
     */
    public static create(properties?: IRespEIOConnect): RespEIOConnect;

    /**
     * Encodes the specified RespEIOConnect message. Does not implicitly {@link RespEIOConnect.verify|verify} messages.
     * @param message RespEIOConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespEIOConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespEIOConnect message, length delimited. Does not implicitly {@link RespEIOConnect.verify|verify} messages.
     * @param message RespEIOConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespEIOConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespEIOConnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespEIOConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespEIOConnect;

    /**
     * Decodes a RespEIOConnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespEIOConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespEIOConnect;

    /**
     * Verifies a RespEIOConnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespEIOConnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespEIOConnect
     */
    public static fromObject(object: { [k: string]: any }): RespEIOConnect;

    /**
     * Creates a plain object from a RespEIOConnect message. Also converts values to other types if specified.
     * @param message RespEIOConnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespEIOConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespEIOConnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CmdConfigWifiSsidGet. */
export interface ICmdConfigWifiSsidGet {
}

/** Represents a CmdConfigWifiSsidGet. */
export class CmdConfigWifiSsidGet implements ICmdConfigWifiSsidGet {

    /**
     * Constructs a new CmdConfigWifiSsidGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICmdConfigWifiSsidGet);

    /**
     * Creates a new CmdConfigWifiSsidGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CmdConfigWifiSsidGet instance
     */
    public static create(properties?: ICmdConfigWifiSsidGet): CmdConfigWifiSsidGet;

    /**
     * Encodes the specified CmdConfigWifiSsidGet message. Does not implicitly {@link CmdConfigWifiSsidGet.verify|verify} messages.
     * @param message CmdConfigWifiSsidGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CmdConfigWifiSsidGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CmdConfigWifiSsidGet message, length delimited. Does not implicitly {@link CmdConfigWifiSsidGet.verify|verify} messages.
     * @param message CmdConfigWifiSsidGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: CmdConfigWifiSsidGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CmdConfigWifiSsidGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CmdConfigWifiSsidGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CmdConfigWifiSsidGet;

    /**
     * Decodes a CmdConfigWifiSsidGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CmdConfigWifiSsidGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CmdConfigWifiSsidGet;

    /**
     * Verifies a CmdConfigWifiSsidGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CmdConfigWifiSsidGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CmdConfigWifiSsidGet
     */
    public static fromObject(object: { [k: string]: any }): CmdConfigWifiSsidGet;

    /**
     * Creates a plain object from a CmdConfigWifiSsidGet message. Also converts values to other types if specified.
     * @param message CmdConfigWifiSsidGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CmdConfigWifiSsidGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CmdConfigWifiSsidGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespConfigWifiSsidGet. */
export interface IRespConfigWifiSsidGet {

    /** RespConfigWifiSsidGet result */
    result?: (number|null);

    /** RespConfigWifiSsidGet ssid */
    ssid?: (string|null);
}

/** Represents a RespConfigWifiSsidGet. */
export class RespConfigWifiSsidGet implements IRespConfigWifiSsidGet {

    /**
     * Constructs a new RespConfigWifiSsidGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespConfigWifiSsidGet);

    /** RespConfigWifiSsidGet result. */
    public result: number;

    /** RespConfigWifiSsidGet ssid. */
    public ssid: string;

    /**
     * Creates a new RespConfigWifiSsidGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespConfigWifiSsidGet instance
     */
    public static create(properties?: IRespConfigWifiSsidGet): RespConfigWifiSsidGet;

    /**
     * Encodes the specified RespConfigWifiSsidGet message. Does not implicitly {@link RespConfigWifiSsidGet.verify|verify} messages.
     * @param message RespConfigWifiSsidGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RespConfigWifiSsidGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespConfigWifiSsidGet message, length delimited. Does not implicitly {@link RespConfigWifiSsidGet.verify|verify} messages.
     * @param message RespConfigWifiSsidGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RespConfigWifiSsidGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespConfigWifiSsidGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespConfigWifiSsidGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespConfigWifiSsidGet;

    /**
     * Decodes a RespConfigWifiSsidGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespConfigWifiSsidGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespConfigWifiSsidGet;

    /**
     * Verifies a RespConfigWifiSsidGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespConfigWifiSsidGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespConfigWifiSsidGet
     */
    public static fromObject(object: { [k: string]: any }): RespConfigWifiSsidGet;

    /**
     * Creates a plain object from a RespConfigWifiSsidGet message. Also converts values to other types if specified.
     * @param message RespConfigWifiSsidGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespConfigWifiSsidGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespConfigWifiSsidGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** HdyMsgType enum. */
export enum HdyMsgType {
    TypeCmdProtocolVersionGet = 0,
    TypeRespProtocolVersionGet = 1,
    TypeCmdConnectionKeyGet = 2,
    TypeRespConnectionKeyGet = 3,
    TypeCmdConnectionKeyGen = 6,
    TypeRespConnectionKeyGen = 7,
    TypeCmdSerialNumberGet = 8,
    TypeRespSerialNumberGet = 9,
    TypeCmdProductionDateGet = 10,
    TypeRespProductionDateGet = 11,
    TypeCmdHardwareVersionGet = 12,
    TypeRespHardwareVersionGet = 13,
    TypeCmdPcbaVersionGet = 14,
    TypeRespPcbaVersionGet = 15,
    TypeCmdModelGet = 16,
    TypeRespModelGet = 17,
    TypeCmdTermsSet = 18,
    TypeRespTermsSet = 19,
    TypeCmdTermsGet = 20,
    TypeRespTermsGet = 21,
    TypeCmdFirmwareVersionGet = 22,
    TypeRespFirmwareVersionGet = 23,
    TypeCmdWifiStaMacGet = 24,
    TypeRespWifiStaMacGet = 25,
    TypeCmdWifiStaIpGet = 26,
    TypeRespWifiStaIpGet = 27,
    TypeCmdPing = 28,
    TypeRespPing = 29,
    TypeCmdEIOConnect = 30,
    TypeRespEIOConnect = 31,
    TypeCmdConfigWifiSsidGet = 32,
    TypeRespConfigWifiSsidGet = 33
}

/** Represents a HdyPayload. */
export class HdyPayload implements IHdyPayload {

    /**
     * Constructs a new HdyPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHdyPayload);

    /** HdyPayload msg. */
    public msg: HdyMsgType;

    /** HdyPayload cmdProtocolVersionGet. */
    public cmdProtocolVersionGet?: (CmdProtocolVersionGet|null);

    /** HdyPayload respProtocolVersionGet. */
    public respProtocolVersionGet?: (RespProtocolVersionGet|null);

    /** HdyPayload cmdConnectionKeyGet. */
    public cmdConnectionKeyGet?: (CmdConnectionKeyGet|null);

    /** HdyPayload respConnectionKeyGet. */
    public respConnectionKeyGet?: (RespConnectionKeyGet|null);

    /** HdyPayload cmdConnectionKeyGen. */
    public cmdConnectionKeyGen?: (CmdConnectionKeyGen|null);

    /** HdyPayload respConnectionKeyGen. */
    public respConnectionKeyGen?: (RespConnectionKeyGen|null);

    /** HdyPayload cmdSerialNumberGet. */
    public cmdSerialNumberGet?: (CmdSerialNumberGet|null);

    /** HdyPayload respSerialNumberGet. */
    public respSerialNumberGet?: (RespSerialNumberGet|null);

    /** HdyPayload cmdProductionDateGet. */
    public cmdProductionDateGet?: (CmdProductionDateGet|null);

    /** HdyPayload respProductionDateGet. */
    public respProductionDateGet?: (RespProductionDateGet|null);

    /** HdyPayload cmdHardwareVersionGet. */
    public cmdHardwareVersionGet?: (CmdHardwareVersionGet|null);

    /** HdyPayload respHardwareVersionGet. */
    public respHardwareVersionGet?: (RespHardwareVersionGet|null);

    /** HdyPayload cmdPcbaVersionGet. */
    public cmdPcbaVersionGet?: (CmdPcbaVersionGet|null);

    /** HdyPayload respPcbaVersionGet. */
    public respPcbaVersionGet?: (RespPcbaVersionGet|null);

    /** HdyPayload cmdModelGet. */
    public cmdModelGet?: (CmdModelGet|null);

    /** HdyPayload respModelGet. */
    public respModelGet?: (RespModelGet|null);

    /** HdyPayload cmdTermsSet. */
    public cmdTermsSet?: (CmdTermsSet|null);

    /** HdyPayload respTermsSet. */
    public respTermsSet?: (RespTermsSet|null);

    /** HdyPayload cmdTermsGet. */
    public cmdTermsGet?: (CmdTermsGet|null);

    /** HdyPayload respTermsGet. */
    public respTermsGet?: (RespTermsGet|null);

    /** HdyPayload cmdFirmwareVersionGet. */
    public cmdFirmwareVersionGet?: (CmdFirmwareVersionGet|null);

    /** HdyPayload respFirmwareVersionGet. */
    public respFirmwareVersionGet?: (RespFirmwareVersionGet|null);

    /** HdyPayload cmdWifiStaMacGet. */
    public cmdWifiStaMacGet?: (CmdWifiStaMacGet|null);

    /** HdyPayload respWifiStaMacGet. */
    public respWifiStaMacGet?: (RespWifiStaMacGet|null);

    /** HdyPayload cmdWifiStaIpGet. */
    public cmdWifiStaIpGet?: (CmdWifiStaIpGet|null);

    /** HdyPayload respWifiStaIpGet. */
    public respWifiStaIpGet?: (RespWifiStaIpGet|null);

    /** HdyPayload cmdPing. */
    public cmdPing?: (CmdPing|null);

    /** HdyPayload respPing. */
    public respPing?: (RespPing|null);

    /** HdyPayload cmdEioConnect. */
    public cmdEioConnect?: (CmdEIOConnect|null);

    /** HdyPayload respEioConnect. */
    public respEioConnect?: (RespEIOConnect|null);

    /** HdyPayload cmdConfigWifiSsidGet. */
    public cmdConfigWifiSsidGet?: (CmdConfigWifiSsidGet|null);

    /** HdyPayload respConfigWifiSsidGet. */
    public respConfigWifiSsidGet?: (RespConfigWifiSsidGet|null);

    /** HdyPayload payload. */
    public payload?: ("cmdProtocolVersionGet"|"respProtocolVersionGet"|"cmdConnectionKeyGet"|"respConnectionKeyGet"|"cmdConnectionKeyGen"|"respConnectionKeyGen"|"cmdSerialNumberGet"|"respSerialNumberGet"|"cmdProductionDateGet"|"respProductionDateGet"|"cmdHardwareVersionGet"|"respHardwareVersionGet"|"cmdPcbaVersionGet"|"respPcbaVersionGet"|"cmdModelGet"|"respModelGet"|"cmdTermsSet"|"respTermsSet"|"cmdTermsGet"|"respTermsGet"|"cmdFirmwareVersionGet"|"respFirmwareVersionGet"|"cmdWifiStaMacGet"|"respWifiStaMacGet"|"cmdWifiStaIpGet"|"respWifiStaIpGet"|"cmdPing"|"respPing"|"cmdEioConnect"|"respEioConnect"|"cmdConfigWifiSsidGet"|"respConfigWifiSsidGet");

    /**
     * Creates a new HdyPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HdyPayload instance
     */
    public static create(properties?: IHdyPayload): HdyPayload;

    /**
     * Encodes the specified HdyPayload message. Does not implicitly {@link HdyPayload.verify|verify} messages.
     * @param message HdyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: HdyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HdyPayload message, length delimited. Does not implicitly {@link HdyPayload.verify|verify} messages.
     * @param message HdyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: HdyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HdyPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HdyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HdyPayload;

    /**
     * Decodes a HdyPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HdyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HdyPayload;

    /**
     * Verifies a HdyPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HdyPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HdyPayload
     */
    public static fromObject(object: { [k: string]: any }): HdyPayload;

    /**
     * Creates a plain object from a HdyPayload message. Also converts values to other types if specified.
     * @param message HdyPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HdyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HdyPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
