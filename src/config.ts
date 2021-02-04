import path from "path";
import fs from "fs";
import { remote } from "electron";

class config {
  static configPath = path.join(
    remote.app.getPath("userData"),
    "PUIP_preferences.json"
  );

  static addToConfig(key, value) {
    let config = {};

    if(fs.existsSync(this.configPath)) {
      config = JSON.parse(fs.readFileSync(this.configPath));
    }

    config = {...config, ...{[key]: value}};

    fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2));
  }

  static getKey(key) {
    let config = {};

    if(fs.existsSync(this.configPath)) {
      config = JSON.parse(fs.readFileSync(this.configPath));
    }

    return config[key];
  }

  static hasKey(key) {
    let config = {};

    if(fs.existsSync(this.configPath)) {
      config = JSON.parse(fs.readFileSync(this.configPath));
    }

    return config[key] !== undefined || config[key] !== null;
  }
}

export default config;
