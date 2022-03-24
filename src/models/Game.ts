import Platform from './Platform';
import Store from './Store';
import Rating from './Rating';
import Tag from './Tag';
import AgeRestriction from './AgeRestriction';
import Screenshot from './Screenshot';

export default class Game {
   /**slug = URL friendly string*/
   private slug: string;
   private name: string;
   private platforms: Platform[];
   private stores: Store[];
   private releaseDate: Date;
   private backgroundImage: URL;
   private rating: number;
   private ratings: Rating[];
   private ratingCount: number;
   private metacriticsRating: number;
   private tags: Tag[];
   private ageRestrictions: AgeRestriction;
   private saturatedColor: string;
   private dominantColor: string;
   private Screenshots: Screenshot[];
   private parentPlatforms: Platform[];
}
