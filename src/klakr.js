#!/usr/bin/env node
const program = require("commander");
const version = require("../package.json").version;

program.version(version);

program
  .command("run")
  .description("Run all scenarios")
  .action(() => console.log("run"));

program.option("-c, --config <filename>", "path to configuration file");

program.parse(process.argv);
