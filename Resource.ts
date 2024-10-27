import { AbstractPromptTrait } from "./AbstractPromptTrait";
import { Memory } from "./Memory";

export class Resource extends AbstractPromptTrait {
    isStationary: boolean;

    constructor(desc: string, isStationary: boolean) {
        super();
        this.description = desc;
        this.isStationary = isStationary;
    }

    equals(obj: Object): boolean {
        if(obj instanceof Resource) {
            return this.description === obj.description && this.isStruck == obj.isStruck && this.isStationary == obj.isStationary;
        } else {
            return false;
        }
    }
}

export class DiaryResource extends Resource {
    memory: Memory;

    constructor(desc: string, mem: Memory) {
        super(desc, false);
        this.memory = mem;
    }

    equals(obj: Object): boolean {
        if(obj instanceof DiaryResource) {
            return this.description === obj.description && this.isStruck == obj.isStruck && this.isStationary == obj.isStationary && this.memory.equals(obj.memory);
        } else {
            return false;
        }
    }
}