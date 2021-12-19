import { SystemManager } from "./manager.js";
import { ActionHandlerSymbaroum as ActionHandler } from "../actions/witcher/witcher-actions.js";
import { RollHandlerBaseSymbaroum as Core } from "../rollHandlers/witcher/witcher-base.js";
import * as settings from "../settings/TheWitcherTRPG-settings";

export class SymbaroumSystemManager extends SystemManager {
  constructor(appName) {
    super(appName);
  }

  /** @override */
  doGetActionHandler(filterManager, categoryManager) {
    console.log("startup");
    let actionHandler = new ActionHandler(filterManager, categoryManager);
    return actionHandler;
  }

  /** @override */
  getAvailableRollHandlers() {
    let choices = { core: "Core TheWitcherTRPG" };
    return choices;
  }

  /** @override */
  doGetRollHandler(handlerId) {
    return new Core();
  }

  /** @override */
  doRegisterSettings(appName, updateFunc) {
    settings.register(appName, updateFunc);
  }
}
