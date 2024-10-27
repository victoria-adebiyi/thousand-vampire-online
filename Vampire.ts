class Vampire {
    promptNumber: number;
    draftExperience: Experience;
    memories: Array<Memory>;
    resources: Array<Resource>;
    characters: Array<Character>;
    marks: Array<Mark>;
    skills: Array<Skill>;

    constructor(promptNumber?: number, skills?: Array<Skill>, resources?: Array<Resource>, characters?: Array<Character>, marks?: Array<Mark>, experiences?: Array<Experience>) {
        this.promptNumber = promptNumber ?? 1;

        this.memories = new Array<Memory>(5);
        this.skills = skills ?? new Array<Skill>();
        this.resources = resources ?? new Array<Resource>();
        this.characters = characters ?? new Array<Character>();
        this.marks = marks ?? new Array<Mark>();
        
        if (experiences) {
            experiences.forEach(experience => {
                if(this.memories.length < 5) {
                    this.memories.push(new Memory(experience));
                } else throw new Error("You may not start with more than 5 experiences");
            });
        }
    }

    advanceStory(): String {
        let d6 = Math.floor(Math.random() * 6) + 1;
        let d10 = Math.floor(Math.random() * 10) + 1;
        let move = d10 - d6;
        if (this.promptNumber + move < 1) {
            this.promptNumber = 1;
            return "Rolled " + move.toString + ", stayed at Prompt #1"
        }
        else {
            this.promptNumber = this.promptNumber + move;
            return "Rolled " + move.toString + ", moved to Prompt #" + this.promptNumber;
        }
    }
}