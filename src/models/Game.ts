import Platform from './Platform';
import Store from './Store';
import Rating from './Rating';
import Tag from './Tag';
import EsrbRating from './EsrbRating';
import Screenshot from './Screenshot';
import AddedStatus from './AddedStatus';
import ParentPlatform from './ParentPlatform';
import Genre from './Genre';

export default class Game {
   /**slug = URL friendly string*/
   private _id: number;
   private _slug: string;
   private _name: string;
   private _releaseDate: Date;
   private _tba: boolean;
   private _backgroundImage: URL;
   private _rating: number;
   /**rating top is the max rating for example rating = 4.5 top rating 5 => 4.5/5*/
   private _ratingTop: number;
   private _ratings: Rating[];
   private _ratingCount: number;
   private _added: number;
   private _addedStatus: AddedStatus[];
   private _metacriticsRating: number;
   private _playtime: number;
   private _suggestionCount: number;
   private _updated: Date;
   private _userGame: any;
   private _reviewsCount: number;
   private _saturatedColor: string;
   private _dominantColor: string;
   private _platforms: Platform[];
   private _parentPlatforms: ParentPlatform[];
   private _genres: Genre[];
   private _stores: Store[];
   private _clip: any;
   private _tags: Tag[];
   private _esrbRating: EsrbRating;
   private _Screenshots: Screenshot[];

   constructor(
      id: number,
      slug: string,
      name: string,
      releaseDate: Date,
      tba: boolean,
      backgroundImage: URL,
      rating: number,
      ratingTop: number,
      ratings: Rating[],
      ratingCount: number,
      added: number,
      addedStatus: AddedStatus[],
      metacriticsRating: number,
      playtime: number,
      suggestionCount: number,
      updated: Date,
      userGame: any,
      reviewsCount: number,
      saturatedColor: string,
      dominantColor: string,
      platforms: Platform[],
      parentPlatforms: ParentPlatform[],
      genres: Genre[],
      stores: Store[],
      clip: any,
      tags: Tag[],
      esrbRating: EsrbRating,
      Screenshots: Screenshot[]
   ) {
      this._id = id;
      this._slug = slug;
      this._name = name;
      this._releaseDate = releaseDate;
      this._tba = tba;
      this._backgroundImage = backgroundImage;
      this._rating = rating;
      this._ratingTop = ratingTop;
      this._ratings = ratings;
      this._ratingCount = ratingCount;
      this._added = added;
      this._addedStatus = addedStatus;
      this._metacriticsRating = metacriticsRating;
      this._playtime = playtime;
      this._suggestionCount = suggestionCount;
      this._updated = updated;
      this._userGame = userGame;
      this._reviewsCount = reviewsCount;
      this._saturatedColor = saturatedColor;
      this._dominantColor = dominantColor;
      this._platforms = platforms;
      this._parentPlatforms = parentPlatforms;
      this._genres = genres;
      this._stores = stores;
      this._clip = clip;
      this._tags = tags;
      this._esrbRating = esrbRating;
      this._Screenshots = Screenshots;
   }

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

   get esrbRating(): EsrbRating {
      return this._esrbRating;
   }

   set esrbRating(value: EsrbRating) {
      this._esrbRating = value;
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

   get id(): number {
      return this._id;
   }

   set id(value: number) {
      this._id = value;
   }

   get tba(): boolean {
      return this._tba;
   }

   set tba(value: boolean) {
      this._tba = value;
   }

   get ratingTop(): number {
      return this._ratingTop;
   }

   set ratingTop(value: number) {
      this._ratingTop = value;
   }

   get added(): number {
      return this._added;
   }

   set added(value: number) {
      this._added = value;
   }

   get addedStatus(): AddedStatus[] {
      return this._addedStatus;
   }

   set addedStatus(value: AddedStatus[]) {
      this._addedStatus = value;
   }

   get playtime(): number {
      return this._playtime;
   }

   set playtime(value: number) {
      this._playtime = value;
   }

   get suggestionCount(): number {
      return this._suggestionCount;
   }

   set suggestionCount(value: number) {
      this._suggestionCount = value;
   }

   get updated(): Date {
      return this._updated;
   }

   set updated(value: Date) {
      this._updated = value;
   }

   get userGame(): any {
      return this._userGame;
   }

   set userGame(value: any) {
      this._userGame = value;
   }

   get reviewsCount(): number {
      return this._reviewsCount;
   }

   set reviewsCount(value: number) {
      this._reviewsCount = value;
   }

   get parentPlatforms(): ParentPlatform[] {
      return this._parentPlatforms;
   }

   set parentPlatforms(value: ParentPlatform[]) {
      this._parentPlatforms = value;
   }

   get genres(): Genre[] {
      return this._genres;
   }

   set genres(value: Genre[]) {
      this._genres = value;
   }

   get clip(): any {
      return this._clip;
   }

   set clip(value: any) {
      this._clip = value;
   }
}
