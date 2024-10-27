abstract class AbstractPromptTrait extends AbstractTrait {
    description: string;

    canAdd(): boolean {
        return !this.isStruck;
    }

    add(): void {
        return;
    }
}