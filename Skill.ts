import { AbstractPromptTrait } from "./AbstractPromptTrait";

export class Skill extends AbstractPromptTrait {
    isChecked: boolean;

    constructor(desc: string) {
        super();
        this.description = desc;
        this.isChecked = false;
    }

    equals(obj: Object): boolean {
        if(obj instanceof Skill) {
            return this.description === obj.description && this.isStruck == obj.isStruck && this.isChecked == obj.isChecked;
        } else {
            return false;
        }
    }

    canAdd(): boolean {
        return !(this.isChecked || this.isStruck);
    }

    add(): void {
        this.isChecked = true;
    }

    remove(): void {
        this.isChecked = false;
    }
}