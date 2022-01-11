/*
The below predefining of values is because my teacher
is making me use strict to clean my lazy JS >:(
*/

"use strict";

var sceneWidth;
var sceneHeight;
var camera;
var scene;
var renderer;
var dom;
var sun;
var ground;
var rollingGroundSphere;
var ball;
var rollingSpeed = 0.008;
var ballRollingSpeed;
var worldRadius = 26;
var heroRadius = 0.2;
var sphericalHelper;
var pathAngleValues;
var heroBaseY = 1.86;
var bounceValue = 0.1;
var gravity = 0.005;
var leftLane = -1;
var rightLane = 1;
var middleLane = 0;
var currentLane;
var clock;
var jumping;
var treeReleaseInterval = 0.5;
var lastTreeReleaseTime = 0;
var treesInPath;
var treesPool;
var explodeParticleGeometry;
var particleCount = 20;
var explosionPower = 1.06;
var explodeParticles;
var titleText;
var scoreText;
var pausedText;
var highText;
var score;
var highScore;
var paused;

init();

