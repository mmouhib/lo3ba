export default class Tag {
   private _id: number;
   private _name: string;
   private _slug: string;
   private _language: string;
   private _gamesCount: number; //number of games in that tag:
   private _tagBackgroundImage: URL;

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

   get language(): string {
      return this._language;
   }

   set language(value: string) {
      this._language = value;
   }

   get gamesCount(): number {
      return this._gamesCount;
   }

   set gamesCount(value: number) {
      this._gamesCount = value;
   }

   get tagBackgroundImage(): URL {
      return this._tagBackgroundImage;
   }

   set tagBackgroundImage(value: URL) {
      this._tagBackgroundImage = value;
   }
}
