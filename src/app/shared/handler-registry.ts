import {ControlEmiter} from "./control-emiter.type";
import {ControlHandler} from "./form-rule";

// any jest tu celowe i zamknięte — zewnętrzne API (register/handle) jest w pełni typowane
export class HandlerRegistry<TControls> {
  private handlers: ControlHandler<any, TControls>[] = [];

  register<TValue>(handler: ControlHandler<TValue, TControls>): this {
    this.handlers.push(handler);
    return this;
  }

  handle(emited: ControlEmiter<any>, controls: TControls): void {
    const handler = this.handlers.find(h => h.forControl(controls) === emited.control);
    if (!handler) return;

    handler.reset?.(controls);
    handler.rules
      .filter(rule => rule.when(emited.value))
      .forEach(rule => rule.then(controls));
  }
}
