export default class Genre {
   private _id: number;
   private _name: string;
   private _slug: string;
   private _gamesCount: number;
   private _imageBackground: URL;

   constructor(id: number, name: string, slug: string, gamesCount: number, imageBackground: URL) {
      this._id = id;
      this._name = name;
      this._slug = slug;
      this._gamesCount = gamesCount;
      this._imageBackground = imageBackground;
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

   get gamesCount(): number {
      return this._gamesCount;
   }

   set gamesCount(value: number) {
      this._gamesCount = value;
   }

   get imageBackground(): URL {
      return this._imageBackground;
   }

   set imageBackground(value: URL) {
      this._imageBackground = value;
   }
}
