import { AbstractTrait } from "./AbstractTrait";
import { Experience } from "./Experience";
import { objectsEqual } from "./utils/Utilities";

export class Memory extends AbstractTrait {
    experiences: Array<Experience>;

    constructor(exp: Experience) {
        super();
        this.experiences = new Array<Experience>(3);
        this.experiences.push(exp);
    }

    equals(obj: Object): boolean {
        if(obj instanceof Memory) {
            return this.isStruck == obj.isStruck && this.experiences.length === obj.experiences.length && this.experiences.every((o, idx) => objectsEqual(o, obj.experiences[idx]));
        } else {
            return false;
        }
    }

    addExperience(exp: Experience) {
        if (this.experiences.length < 3) {
            this.experiences.push(exp);
        } else {
            throw Error("This memory cannot hold another experience");
        }
    }
}