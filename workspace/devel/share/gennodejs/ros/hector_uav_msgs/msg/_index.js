
"use strict";

let MotorStatus = require('./MotorStatus.js');
let HeightCommand = require('./HeightCommand.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let MotorCommand = require('./MotorCommand.js');
let RC = require('./RC.js');
let RawImu = require('./RawImu.js');
let YawrateCommand = require('./YawrateCommand.js');
let RawMagnetic = require('./RawMagnetic.js');
let ControllerState = require('./ControllerState.js');
let ServoCommand = require('./ServoCommand.js');
let RawRC = require('./RawRC.js');
let Compass = require('./Compass.js');
let Supply = require('./Supply.js');
let RuddersCommand = require('./RuddersCommand.js');
let Altimeter = require('./Altimeter.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let MotorPWM = require('./MotorPWM.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingActionResult = require('./LandingActionResult.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let LandingAction = require('./LandingAction.js');
let PoseAction = require('./PoseAction.js');
let PoseGoal = require('./PoseGoal.js');
let PoseFeedback = require('./PoseFeedback.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let LandingGoal = require('./LandingGoal.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let TakeoffResult = require('./TakeoffResult.js');
let LandingResult = require('./LandingResult.js');
let TakeoffAction = require('./TakeoffAction.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingFeedback = require('./LandingFeedback.js');
let PoseResult = require('./PoseResult.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');

module.exports = {
  MotorStatus: MotorStatus,
  HeightCommand: HeightCommand,
  PositionXYCommand: PositionXYCommand,
  AttitudeCommand: AttitudeCommand,
  MotorCommand: MotorCommand,
  RC: RC,
  RawImu: RawImu,
  YawrateCommand: YawrateCommand,
  RawMagnetic: RawMagnetic,
  ControllerState: ControllerState,
  ServoCommand: ServoCommand,
  RawRC: RawRC,
  Compass: Compass,
  Supply: Supply,
  RuddersCommand: RuddersCommand,
  Altimeter: Altimeter,
  VelocityZCommand: VelocityZCommand,
  HeadingCommand: HeadingCommand,
  VelocityXYCommand: VelocityXYCommand,
  ThrustCommand: ThrustCommand,
  MotorPWM: MotorPWM,
  PoseActionFeedback: PoseActionFeedback,
  TakeoffActionFeedback: TakeoffActionFeedback,
  PoseActionResult: PoseActionResult,
  LandingActionResult: LandingActionResult,
  LandingActionGoal: LandingActionGoal,
  LandingAction: LandingAction,
  PoseAction: PoseAction,
  PoseGoal: PoseGoal,
  PoseFeedback: PoseFeedback,
  PoseActionGoal: PoseActionGoal,
  TakeoffFeedback: TakeoffFeedback,
  LandingGoal: LandingGoal,
  LandingActionFeedback: LandingActionFeedback,
  TakeoffResult: TakeoffResult,
  LandingResult: LandingResult,
  TakeoffAction: TakeoffAction,
  TakeoffActionResult: TakeoffActionResult,
  TakeoffGoal: TakeoffGoal,
  LandingFeedback: LandingFeedback,
  PoseResult: PoseResult,
  TakeoffActionGoal: TakeoffActionGoal,
};
