import { AbstractPromptTrait } from "./AbstractPromptTrait";

export class Mark extends AbstractPromptTrait {
    constructor(desc: string) {
        super()
        this.description = desc;
    }

    equals(obj: Object): boolean {
        if(obj instanceof Mark) {
            return this.description === obj.description && this.isStruck == obj.isStruck;
        } else {
            return false;
        }
    }
}