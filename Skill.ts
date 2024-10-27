class Skill extends AbstractPromptTrait {
    isChecked: boolean;

    constructor(desc: string) {
        super();
        this.description = desc;
        this.isChecked = false;
    }

    canAdd(): boolean {
        return !(this.isChecked || this.isStruck);
    }

    add(): void {
        this.isChecked = true;
    }
}