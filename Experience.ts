class Experience {
    description: string;
    relatedTraits: Array<AbstractPromptTrait>;
    
    constructor(desc: string) {
        this.description = desc;
        this.relatedTraits = [];
    }

    addTrait(trait: AbstractPromptTrait) {
        if (trait.canAdd()) {
            this.relatedTraits.push(trait);
        } else {
            throw Error("Trait can not be added to this Experience");
        }
    }
}