import { AbstractPromptTrait } from "./AbstractPromptTrait";

export class Character extends AbstractPromptTrait {
    isMortal: boolean;

    constructor(desc: string, isMortal: boolean) {
        super();
        this.description = desc;
        this.isMortal = isMortal;
    }

    equals(obj: Object): boolean {
        if(obj instanceof Character) {
            return this.description === obj.description && this.isMortal == obj.isMortal && this.isStruck == obj.isStruck;
        } else {
            return false;
        }
    }
}