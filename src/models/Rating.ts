export default class Rating {
   private _id: number;
   private _title: string;
   private _count: number;
   private _percent: number;

   constructor(id: number, title: string, count: number, percent: number) {
      this._id = id;
      this._title = title;
      this._count = count;
      this._percent = percent;
   }

   get id(): number {
      return this._id;
   }

   set id(value: number) {
      this._id = value;
   }

   get title(): string {
      return this._title;
   }

   set title(value: string) {
      this._title = value;
   }

   get count(): number {
      return this._count;
   }

   set count(value: number) {
      this._count = value;
   }

   get percent(): number {
      return this._percent;
   }

   set percent(value: number) {
      this._percent = value;
   }
}
