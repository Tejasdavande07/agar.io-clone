module.exports = {
    host: "0.0.0.0",
    port: 3000,
    logpath: "logger.php",
    foodMass: 1,
    fireFood: 20,
    limitSplit: 16,
    defaultPlayerMass: 5,
	virus: {
        fill: "#33ff33",
        stroke: "#8a2be2",
        strokeWidth: 20,
        defaultMass: {
            from: 50,
            to: 150
        },
        splitMass: 180,
        uniformDisposition: false,
	},
    gameWidth: 20000,
    gameHeight: 20000,
    adminPass: "DEFAULT",
    gameMass: 2500000,
    maxFood: 30000,
    maxVirus: 800,
    slowBase: 4.5,
    logChat: 0,
    networkUpdateFactor: 40,
    maxHeartbeatInterval: 5000,
    foodUniformDisposition: true,
    newPlayerInitialPosition: "farthest",
    massLossRate: 1,
    minMassLoss: 50,
    sqlinfo: {
      fileName: "db.sqlite3",
    }
};
