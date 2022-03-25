export default class AddedStatus {
   private _yet: number;
   private _owned: number;
   private _beaten: number;
   private _toPlay: number;
   private _dropped: number;
   private _playing: number;


   constructor(
      yet: number,
      owned: number,
      beaten: number,
      toplay: number,
      dropped: number,
      playing: number
   ) {
      this._yet = yet;
      this._owned = owned;
      this._beaten = beaten;
      this._toPlay = toplay;
      this._dropped = dropped;
      this._playing = playing;
   }

   get yet(): number {
      return this._yet;
   }

   set yet(value: number) {
      this._yet = value;
   }

   get owned(): number {
      return this._owned;
   }

   set owned(value: number) {
      this._owned = value;
   }

   get beaten(): number {
      return this._beaten;
   }

   set beaten(value: number) {
      this._beaten = value;
   }

   get toPlay(): number {
      return this._toPlay;
   }

   set toPlay(value: number) {
      this._toPlay = value;
   }

   get dropped(): number {
      return this._dropped;
   }

   set dropped(value: number) {
      this._dropped = value;
   }

   get playing(): number {
      return this._playing;
   }

   set playing(value: number) {
      this._playing = value;
   }
}
