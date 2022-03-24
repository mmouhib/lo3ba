import Platform from './Platform';
import Store from './Store';
import Rating from './Rating';
import Tag from './Tag';
import AgeRestriction from './AgeRestriction';
import Screenshot from './Screenshot';

export default class Game {
   /**slug = URL friendly string*/
   private _slug: string;
   private _name: string;
   private _platforms: Platform[];
   private _stores: Store[];
   private _releaseDate: Date;
   private _backgroundImage: URL;
   private _rating: number;
   private _ratings: Rating[];
   private _ratingCount: number;
   private _metacriticsRating: number;
   private _tags: Tag[];
   private _ageRestrictions: AgeRestriction;
   private _saturatedColor: string;
   private _dominantColor: string;
   private _Screenshots: Screenshot[];
   private _parentPlatforms: Platform[];

   get slug(): string {
      return this._slug;
   }

   set slug(value: string) {
      this._slug = value;
   }

   get name(): string {
      return this._name;
   }

   set name(value: string) {
      this._name = value;
   }

   get platforms(): Platform[] {
      return this._platforms;
   }

   set platforms(value: Platform[]) {
      this._platforms = value;
   }

   get stores(): Store[] {
      return this._stores;
   }

   set stores(value: Store[]) {
      this._stores = value;
   }

   get releaseDate(): Date {
      return this._releaseDate;
   }

   set releaseDate(value: Date) {
      this._releaseDate = value;
   }

   get backgroundImage(): URL {
      return this._backgroundImage;
   }

   set backgroundImage(value: URL) {
      this._backgroundImage = value;
   }

   get rating(): number {
      return this._rating;
   }

   set rating(value: number) {
      this._rating = value;
   }

   get ratings(): Rating[] {
      return this._ratings;
   }

   set ratings(value: Rating[]) {
      this._ratings = value;
   }

   get ratingCount(): number {
      return this._ratingCount;
   }

   set ratingCount(value: number) {
      this._ratingCount = value;
   }

   get metacriticsRating(): number {
      return this._metacriticsRating;
   }

   set metacriticsRating(value: number) {
      this._metacriticsRating = value;
   }

   get tags(): Tag[] {
      return this._tags;
   }

   set tags(value: Tag[]) {
      this._tags = value;
   }

   get ageRestrictions(): AgeRestriction {
      return this._ageRestrictions;
   }

   set ageRestrictions(value: AgeRestriction) {
      this._ageRestrictions = value;
   }

   get saturatedColor(): string {
      return this._saturatedColor;
   }

   set saturatedColor(value: string) {
      this._saturatedColor = value;
   }

   get dominantColor(): string {
      return this._dominantColor;
   }

   set dominantColor(value: string) {
      this._dominantColor = value;
   }

   get Screenshots(): Screenshot[] {
      return this._Screenshots;
   }

   set Screenshots(value: Screenshot[]) {
      this._Screenshots = value;
   }

   get parentPlatforms(): Platform[] {
      return this._parentPlatforms;
   }

   set parentPlatforms(value: Platform[]) {
      this._parentPlatforms = value;
   }
}
