export abstract class AbstractTrait {
   isStruck: boolean;

   strike(): void {
        this.isStruck = true;
   }

   abstract equals(obj: Object): boolean;
}