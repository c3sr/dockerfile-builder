// source: build_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb.js");
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol("proto.raiprojectcom.docker.DockerBuildRequest", null, global);
goog.exportSymbol("proto.raiprojectcom.docker.DockerBuildResponse", null, global);
goog.exportSymbol("proto.raiprojectcom.docker.ErrorStatus", null, global);
goog.exportSymbol("proto.raiprojectcom.docker.PushOptions", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.raiprojectcom.docker.PushOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.raiprojectcom.docker.PushOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.raiprojectcom.docker.PushOptions.displayName = "proto.raiprojectcom.docker.PushOptions";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.raiprojectcom.docker.DockerBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.raiprojectcom.docker.DockerBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.raiprojectcom.docker.DockerBuildRequest.displayName =
    "proto.raiprojectcom.docker.DockerBuildRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.raiprojectcom.docker.DockerBuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.raiprojectcom.docker.DockerBuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.raiprojectcom.docker.DockerBuildResponse.displayName =
    "proto.raiprojectcom.docker.DockerBuildResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.raiprojectcom.docker.ErrorStatus = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.raiprojectcom.docker.ErrorStatus.repeatedFields_,
    null
  );
};
goog.inherits(proto.raiprojectcom.docker.ErrorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.raiprojectcom.docker.ErrorStatus.displayName = "proto.raiprojectcom.docker.ErrorStatus";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.raiprojectcom.docker.PushOptions.prototype.toObject = function(opt_includeInstance) {
    return proto.raiprojectcom.docker.PushOptions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.raiprojectcom.docker.PushOptions} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.raiprojectcom.docker.PushOptions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        username: jspb.Message.getFieldWithDefault(msg, 1, ""),
        password: jspb.Message.getFieldWithDefault(msg, 2, ""),
        imageName: jspb.Message.getFieldWithDefault(msg, 3, "")
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.raiprojectcom.docker.PushOptions}
 */
proto.raiprojectcom.docker.PushOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.raiprojectcom.docker.PushOptions();
  return proto.raiprojectcom.docker.PushOptions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.raiprojectcom.docker.PushOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.raiprojectcom.docker.PushOptions}
 */
proto.raiprojectcom.docker.PushOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUsername(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassword(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setImageName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.raiprojectcom.docker.PushOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.raiprojectcom.docker.PushOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.raiprojectcom.docker.PushOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.raiprojectcom.docker.PushOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getImageName();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string username = 1;
 * @return {string}
 */
proto.raiprojectcom.docker.PushOptions.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.PushOptions} returns this
 */
proto.raiprojectcom.docker.PushOptions.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string password = 2;
 * @return {string}
 */
proto.raiprojectcom.docker.PushOptions.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.PushOptions} returns this
 */
proto.raiprojectcom.docker.PushOptions.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string image_name = 3;
 * @return {string}
 */
proto.raiprojectcom.docker.PushOptions.prototype.getImageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.PushOptions} returns this
 */
proto.raiprojectcom.docker.PushOptions.prototype.setImageName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.raiprojectcom.docker.DockerBuildRequest.prototype.toObject = function(opt_includeInstance) {
    return proto.raiprojectcom.docker.DockerBuildRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.raiprojectcom.docker.DockerBuildRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.raiprojectcom.docker.DockerBuildRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ""),
        imageName: jspb.Message.getFieldWithDefault(msg, 2, ""),
        content: jspb.Message.getFieldWithDefault(msg, 3, ""),
        pushOptions:
          (f = msg.getPushOptions()) &&
          proto.raiprojectcom.docker.PushOptions.toObject(includeInstance, f),
        arch: jspb.Message.getFieldWithDefault(msg, 5, "")
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest}
 */
proto.raiprojectcom.docker.DockerBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.raiprojectcom.docker.DockerBuildRequest();
  return proto.raiprojectcom.docker.DockerBuildRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.raiprojectcom.docker.DockerBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest}
 */
proto.raiprojectcom.docker.DockerBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setImageName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setContent(value);
        break;
      case 4:
        var value = new proto.raiprojectcom.docker.PushOptions();
        reader.readMessage(
          value,
          proto.raiprojectcom.docker.PushOptions.deserializeBinaryFromReader
        );
        msg.setPushOptions(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setArch(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.raiprojectcom.docker.DockerBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.raiprojectcom.docker.DockerBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.raiprojectcom.docker.DockerBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getImageName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getPushOptions();
  if (f != null) {
    writer.writeMessage(4, f, proto.raiprojectcom.docker.PushOptions.serializeBinaryToWriter);
  }
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string image_name = 2;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.getImageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.setImageName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string content = 3;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional PushOptions push_options = 4;
 * @return {?proto.raiprojectcom.docker.PushOptions}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.getPushOptions = function() {
  return /** @type{?proto.raiprojectcom.docker.PushOptions} */ (jspb.Message.getWrapperField(
    this,
    proto.raiprojectcom.docker.PushOptions,
    4
  ));
};

/**
 * @param {?proto.raiprojectcom.docker.PushOptions|undefined} value
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.setPushOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.clearPushOptions = function() {
  return this.setPushOptions(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.hasPushOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional string arch = 5;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildRequest} returns this
 */
proto.raiprojectcom.docker.DockerBuildRequest.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.raiprojectcom.docker.DockerBuildResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.raiprojectcom.docker.DockerBuildResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.raiprojectcom.docker.DockerBuildResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.raiprojectcom.docker.DockerBuildResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ""),
        content: jspb.Message.getFieldWithDefault(msg, 2, ""),
        error:
          (f = msg.getError()) &&
          proto.raiprojectcom.docker.ErrorStatus.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse}
 */
proto.raiprojectcom.docker.DockerBuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.raiprojectcom.docker.DockerBuildResponse();
  return proto.raiprojectcom.docker.DockerBuildResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.raiprojectcom.docker.DockerBuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse}
 */
proto.raiprojectcom.docker.DockerBuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setContent(value);
        break;
      case 3:
        var value = new proto.raiprojectcom.docker.ErrorStatus();
        reader.readMessage(
          value,
          proto.raiprojectcom.docker.ErrorStatus.deserializeBinaryFromReader
        );
        msg.setError(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.raiprojectcom.docker.DockerBuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.raiprojectcom.docker.DockerBuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.raiprojectcom.docker.DockerBuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(3, f, proto.raiprojectcom.docker.ErrorStatus.serializeBinaryToWriter);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse} returns this
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string content = 2;
 * @return {string}
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse} returns this
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional ErrorStatus error = 3;
 * @return {?proto.raiprojectcom.docker.ErrorStatus}
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.getError = function() {
  return /** @type{?proto.raiprojectcom.docker.ErrorStatus} */ (jspb.Message.getWrapperField(
    this,
    proto.raiprojectcom.docker.ErrorStatus,
    3
  ));
};

/**
 * @param {?proto.raiprojectcom.docker.ErrorStatus|undefined} value
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse} returns this
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.raiprojectcom.docker.DockerBuildResponse} returns this
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.clearError = function() {
  return this.setError(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.raiprojectcom.docker.DockerBuildResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.raiprojectcom.docker.ErrorStatus.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.raiprojectcom.docker.ErrorStatus.prototype.toObject = function(opt_includeInstance) {
    return proto.raiprojectcom.docker.ErrorStatus.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.raiprojectcom.docker.ErrorStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.raiprojectcom.docker.ErrorStatus.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        message: jspb.Message.getFieldWithDefault(msg, 1, ""),
        detailsList: jspb.Message.toObjectList(
          msg.getDetailsList(),
          google_protobuf_any_pb.Any.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.raiprojectcom.docker.ErrorStatus}
 */
proto.raiprojectcom.docker.ErrorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.raiprojectcom.docker.ErrorStatus();
  return proto.raiprojectcom.docker.ErrorStatus.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.raiprojectcom.docker.ErrorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.raiprojectcom.docker.ErrorStatus}
 */
proto.raiprojectcom.docker.ErrorStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 2:
        var value = new google_protobuf_any_pb.Any();
        reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
        msg.addDetails(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.raiprojectcom.docker.ErrorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.raiprojectcom.docker.ErrorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.raiprojectcom.docker.ErrorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
  }
};

/**
 * optional string message = 1;
 * @return {string}
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.raiprojectcom.docker.ErrorStatus} returns this
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated google.protobuf.Any details = 2;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.getDetailsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    google_protobuf_any_pb.Any,
    2
  ));
};

/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.raiprojectcom.docker.ErrorStatus} returns this
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.setDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.addDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.protobuf.Any,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.raiprojectcom.docker.ErrorStatus} returns this
 */
proto.raiprojectcom.docker.ErrorStatus.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
};

goog.object.extend(exports, proto.raiprojectcom.docker);
