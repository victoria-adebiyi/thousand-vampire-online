import { AbstractPromptTrait } from "./AbstractPromptTrait";
import { objectsEqual } from "./Utilities";

export class Experience {
    description: string;
    relatedTraits: Array<AbstractPromptTrait>;
    
    constructor(desc: string) {
        this.description = desc;
        this.relatedTraits = [];
    }

    equals(obj: Object): boolean {
        if(obj instanceof Experience) {
            return this.description === obj.description && this.relatedTraits.every((o, idx) => objectsEqual(o, obj.relatedTraits[idx]));
        } else {
            return false;
        }
    }

    addTrait(trait: AbstractPromptTrait) {
        if (trait.canAdd()) {
            trait.add();
            this.relatedTraits.push(trait);
        } else {
            throw Error("Trait can not be added to this Experience");
        }
    }

    removeTrait(trait: AbstractPromptTrait) {
        return;
    }

    modifyDescription(description: string): void {
        this.description = description;
    }
}