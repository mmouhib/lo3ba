export default class ParentPlatform {
   private _id: number;
   private _name: string;
   private _slug: string;

   constructor(id: number, name: string, slug: string) {
      this._id = id;
      this._name = name;
      this._slug = slug;
   }

   get id(): number {
      return this._id;
   }

   set id(value: number) {
      this._id = value;
   }

   get name(): string {
      return this._name;
   }

   set name(value: string) {
      this._name = value;
   }

   get slug(): string {
      return this._slug;
   }

   set slug(value: string) {
      this._slug = value;
   }
}
