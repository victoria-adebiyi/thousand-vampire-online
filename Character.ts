class Character extends AbstractPromptTrait {
    isMortal: boolean;

    constructor(desc: string, isMortal: boolean) {
        super();
        this.description = desc;
        this.isMortal = isMortal;
    }
}