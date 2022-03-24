export default class Screenshot {
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
   private _id: number;
   private _url: URL;
}
