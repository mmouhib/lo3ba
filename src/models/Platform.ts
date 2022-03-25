import ParentPlatform from './ParentPlatform';

export default class Platform extends ParentPlatform {
   private _image: string;
   private _yearEnd: number;
   private _yearStart: number;
   private _gameCount: number;
   private _imageBackground: URL;
   private _platformReleaseDate: Date;
   private _englishSystemRequirements: string;
   private _russianSystemRequirements: string;

   constructor(
      id: number,
      name: string,
      slug: string,
      image: string,
      yearEnd: number,
      yearStart: number,
      gameCount: number,
      imageBackground: URL,
      platformReleaseDate: Date,
      englishSystemRequirements: string,
      russianSystemRequirements: string
   ) {
      super(id, name, slug);
      this._image = image;
      this._yearEnd = yearEnd;
      this._yearStart = yearStart;
      this._gameCount = gameCount;
      this._imageBackground = imageBackground;
      this._platformReleaseDate = platformReleaseDate;
      this._englishSystemRequirements = englishSystemRequirements;
      this._russianSystemRequirements = russianSystemRequirements;
   }

   get image(): string {
      return this._image;
   }

   set image(value: string) {
      this._image = value;
   }

   get yearEnd(): number {
      return this._yearEnd;
   }

   set yearEnd(value: number) {
      this._yearEnd = value;
   }

   get yearStart(): number {
      return this._yearStart;
   }

   set yearStart(value: number) {
      this._yearStart = value;
   }

   get gameCount(): number {
      return this._gameCount;
   }

   set gameCount(value: number) {
      this._gameCount = value;
   }

   get imageBackground(): URL {
      return this._imageBackground;
   }

   set imageBackground(value: URL) {
      this._imageBackground = value;
   }

   get platformReleaseDate(): Date {
      return this._platformReleaseDate;
   }

   set platformReleaseDate(value: Date) {
      this._platformReleaseDate = value;
   }

   get englishSystemRequirements(): string {
      return this._englishSystemRequirements;
   }

   set englishSystemRequirements(value: string) {
      this._englishSystemRequirements = value;
   }

   get russianSystemRequirements(): string {
      return this._russianSystemRequirements;
   }

   set russianSystemRequirements(value: string) {
      this._russianSystemRequirements = value;
   }
}
