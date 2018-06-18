
"use strict";

let AttitudeCommand = require('./AttitudeCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let RawMagnetic = require('./RawMagnetic.js');
let RawImu = require('./RawImu.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let MotorPWM = require('./MotorPWM.js');
let MotorStatus = require('./MotorStatus.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let YawrateCommand = require('./YawrateCommand.js');
let RawRC = require('./RawRC.js');
let ThrustCommand = require('./ThrustCommand.js');
let Supply = require('./Supply.js');
let MotorCommand = require('./MotorCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let ControllerState = require('./ControllerState.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let HeightCommand = require('./HeightCommand.js');
let Altimeter = require('./Altimeter.js');
let RC = require('./RC.js');
let ServoCommand = require('./ServoCommand.js');
let Compass = require('./Compass.js');
let LandingAction = require('./LandingAction.js');
let PoseAction = require('./PoseAction.js');
let LandingFeedback = require('./LandingFeedback.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingGoal = require('./LandingGoal.js');
let PoseGoal = require('./PoseGoal.js');
let PoseResult = require('./PoseResult.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let TakeoffResult = require('./TakeoffResult.js');
let TakeoffAction = require('./TakeoffAction.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingActionResult = require('./LandingActionResult.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let PoseFeedback = require('./PoseFeedback.js');
let LandingResult = require('./LandingResult.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');

module.exports = {
  AttitudeCommand: AttitudeCommand,
  HeadingCommand: HeadingCommand,
  RawMagnetic: RawMagnetic,
  RawImu: RawImu,
  VelocityXYCommand: VelocityXYCommand,
  MotorPWM: MotorPWM,
  MotorStatus: MotorStatus,
  PositionXYCommand: PositionXYCommand,
  YawrateCommand: YawrateCommand,
  RawRC: RawRC,
  ThrustCommand: ThrustCommand,
  Supply: Supply,
  MotorCommand: MotorCommand,
  RuddersCommand: RuddersCommand,
  ControllerState: ControllerState,
  VelocityZCommand: VelocityZCommand,
  HeightCommand: HeightCommand,
  Altimeter: Altimeter,
  RC: RC,
  ServoCommand: ServoCommand,
  Compass: Compass,
  LandingAction: LandingAction,
  PoseAction: PoseAction,
  LandingFeedback: LandingFeedback,
  PoseActionGoal: PoseActionGoal,
  TakeoffGoal: TakeoffGoal,
  LandingGoal: LandingGoal,
  PoseGoal: PoseGoal,
  PoseResult: PoseResult,
  LandingActionFeedback: LandingActionFeedback,
  LandingActionGoal: LandingActionGoal,
  TakeoffResult: TakeoffResult,
  TakeoffAction: TakeoffAction,
  PoseActionResult: PoseActionResult,
  LandingActionResult: LandingActionResult,
  TakeoffActionFeedback: TakeoffActionFeedback,
  PoseFeedback: PoseFeedback,
  LandingResult: LandingResult,
  PoseActionFeedback: PoseActionFeedback,
  TakeoffActionResult: TakeoffActionResult,
  TakeoffActionGoal: TakeoffActionGoal,
  TakeoffFeedback: TakeoffFeedback,
};
