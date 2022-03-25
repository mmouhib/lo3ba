export default class Screenshot {
   private _id: number;
   private _url: URL;

   constructor(id: number, url: URL) {
      this._id = id;
      this._url = url;
   }

   get id(): number {
      return this._id;
   }

   set id(value: number) {
      this._id = value;
   }

   get url(): URL {
      return this._url;
   }

   set url(value: URL) {
      this._url = value;
   }
}
