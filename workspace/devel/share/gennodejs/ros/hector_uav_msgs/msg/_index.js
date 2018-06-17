
"use strict";

let MotorCommand = require('./MotorCommand.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let RawImu = require('./RawImu.js');
let Supply = require('./Supply.js');
let ControllerState = require('./ControllerState.js');
let RuddersCommand = require('./RuddersCommand.js');
let RawRC = require('./RawRC.js');
let ServoCommand = require('./ServoCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let HeightCommand = require('./HeightCommand.js');
let Compass = require('./Compass.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let MotorPWM = require('./MotorPWM.js');
let YawrateCommand = require('./YawrateCommand.js');
let Altimeter = require('./Altimeter.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let RC = require('./RC.js');
let RawMagnetic = require('./RawMagnetic.js');
let HeadingCommand = require('./HeadingCommand.js');
let MotorStatus = require('./MotorStatus.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let TakeoffAction = require('./TakeoffAction.js');
let LandingAction = require('./LandingAction.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let TakeoffResult = require('./TakeoffResult.js');
let LandingActionResult = require('./LandingActionResult.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let LandingResult = require('./LandingResult.js');
let PoseActionResult = require('./PoseActionResult.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let LandingGoal = require('./LandingGoal.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let PoseGoal = require('./PoseGoal.js');
let LandingFeedback = require('./LandingFeedback.js');
let PoseFeedback = require('./PoseFeedback.js');
let PoseAction = require('./PoseAction.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let PoseResult = require('./PoseResult.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');

module.exports = {
  MotorCommand: MotorCommand,
  AttitudeCommand: AttitudeCommand,
  RawImu: RawImu,
  Supply: Supply,
  ControllerState: ControllerState,
  RuddersCommand: RuddersCommand,
  RawRC: RawRC,
  ServoCommand: ServoCommand,
  VelocityXYCommand: VelocityXYCommand,
  HeightCommand: HeightCommand,
  Compass: Compass,
  VelocityZCommand: VelocityZCommand,
  ThrustCommand: ThrustCommand,
  MotorPWM: MotorPWM,
  YawrateCommand: YawrateCommand,
  Altimeter: Altimeter,
  PositionXYCommand: PositionXYCommand,
  RC: RC,
  RawMagnetic: RawMagnetic,
  HeadingCommand: HeadingCommand,
  MotorStatus: MotorStatus,
  TakeoffGoal: TakeoffGoal,
  PoseActionGoal: PoseActionGoal,
  TakeoffFeedback: TakeoffFeedback,
  TakeoffAction: TakeoffAction,
  LandingAction: LandingAction,
  TakeoffActionResult: TakeoffActionResult,
  TakeoffResult: TakeoffResult,
  LandingActionResult: LandingActionResult,
  TakeoffActionFeedback: TakeoffActionFeedback,
  LandingResult: LandingResult,
  PoseActionResult: PoseActionResult,
  PoseActionFeedback: PoseActionFeedback,
  LandingGoal: LandingGoal,
  TakeoffActionGoal: TakeoffActionGoal,
  PoseGoal: PoseGoal,
  LandingFeedback: LandingFeedback,
  PoseFeedback: PoseFeedback,
  PoseAction: PoseAction,
  LandingActionGoal: LandingActionGoal,
  PoseResult: PoseResult,
  LandingActionFeedback: LandingActionFeedback,
};
