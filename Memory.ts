class Memory extends AbstractTrait {
    experiences: Array<Experience>;

    constructor(exp: Experience) {
        super();
        this.experiences = new Array<Experience>(3);
        this.experiences.push(exp);
    }

    addExperience(exp: Experience) {
        if (this.experiences.length < 3) {
            this.experiences.push(exp);
        } else {
            throw Error("This memory cannot hold another experience");
        }
    }
}