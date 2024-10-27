class Resource extends AbstractPromptTrait {
    isStationary: boolean;

    constructor(desc: string, isStationary: boolean) {
        super();
        this.description = desc;
        this.isStationary = isStationary;
    }
}

class DiaryResource extends Resource {
    memory: Memory;

    constructor(desc: string, mem: Memory) {
        super(desc, false);
        this.memory = mem;
    }
}