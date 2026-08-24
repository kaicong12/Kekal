
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuthorizedReceiptEmail
 * 
 */
export type AuthorizedReceiptEmail = $Result.DefaultSelection<Prisma.$AuthorizedReceiptEmailPayload>
/**
 * Model Motorcycle
 * 
 */
export type Motorcycle = $Result.DefaultSelection<Prisma.$MotorcyclePayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model PromotionTarget
 * 
 */
export type PromotionTarget = $Result.DefaultSelection<Prisma.$PromotionTargetPayload>
/**
 * Model ProductSyncFile
 * 
 */
export type ProductSyncFile = $Result.DefaultSelection<Prisma.$ProductSyncFilePayload>
/**
 * Model MotorcycleImage
 * 
 */
export type MotorcycleImage = $Result.DefaultSelection<Prisma.$MotorcycleImagePayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogPostTranslation
 * 
 */
export type BlogPostTranslation = $Result.DefaultSelection<Prisma.$BlogPostTranslationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DiscountType: {
  NONE: 'NONE',
  FIXED_AMOUNT: 'FIXED_AMOUNT',
  PERCENTAGE: 'PERCENTAGE',
  OVERRIDE_PRICE: 'OVERRIDE_PRICE'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const PromotionScope: {
  ALL: 'ALL',
  TAG: 'TAG',
  BRAND: 'BRAND',
  MODEL: 'MODEL',
  MOTORCYCLE: 'MOTORCYCLE'
};

export type PromotionScope = (typeof PromotionScope)[keyof typeof PromotionScope]


export const BlogPostStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type BlogPostStatus = (typeof BlogPostStatus)[keyof typeof BlogPostStatus]

}

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

export type PromotionScope = $Enums.PromotionScope

export const PromotionScope: typeof $Enums.PromotionScope

export type BlogPostStatus = $Enums.BlogPostStatus

export const BlogPostStatus: typeof $Enums.BlogPostStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AuthorizedReceiptEmails
 * const authorizedReceiptEmails = await prisma.authorizedReceiptEmail.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AuthorizedReceiptEmails
   * const authorizedReceiptEmails = await prisma.authorizedReceiptEmail.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authorizedReceiptEmail`: Exposes CRUD operations for the **AuthorizedReceiptEmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorizedReceiptEmails
    * const authorizedReceiptEmails = await prisma.authorizedReceiptEmail.findMany()
    * ```
    */
  get authorizedReceiptEmail(): Prisma.AuthorizedReceiptEmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motorcycle`: Exposes CRUD operations for the **Motorcycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motorcycles
    * const motorcycles = await prisma.motorcycle.findMany()
    * ```
    */
  get motorcycle(): Prisma.MotorcycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotionTarget`: Exposes CRUD operations for the **PromotionTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromotionTargets
    * const promotionTargets = await prisma.promotionTarget.findMany()
    * ```
    */
  get promotionTarget(): Prisma.PromotionTargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSyncFile`: Exposes CRUD operations for the **ProductSyncFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSyncFiles
    * const productSyncFiles = await prisma.productSyncFile.findMany()
    * ```
    */
  get productSyncFile(): Prisma.ProductSyncFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motorcycleImage`: Exposes CRUD operations for the **MotorcycleImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MotorcycleImages
    * const motorcycleImages = await prisma.motorcycleImage.findMany()
    * ```
    */
  get motorcycleImage(): Prisma.MotorcycleImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostTranslation`: Exposes CRUD operations for the **BlogPostTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostTranslations
    * const blogPostTranslations = await prisma.blogPostTranslation.findMany()
    * ```
    */
  get blogPostTranslation(): Prisma.BlogPostTranslationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuthorizedReceiptEmail: 'AuthorizedReceiptEmail',
    Motorcycle: 'Motorcycle',
    Promotion: 'Promotion',
    PromotionTarget: 'PromotionTarget',
    ProductSyncFile: 'ProductSyncFile',
    MotorcycleImage: 'MotorcycleImage',
    BlogPost: 'BlogPost',
    BlogPostTranslation: 'BlogPostTranslation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authorizedReceiptEmail" | "motorcycle" | "promotion" | "promotionTarget" | "productSyncFile" | "motorcycleImage" | "blogPost" | "blogPostTranslation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthorizedReceiptEmail: {
        payload: Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>
        fields: Prisma.AuthorizedReceiptEmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorizedReceiptEmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorizedReceiptEmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          findFirst: {
            args: Prisma.AuthorizedReceiptEmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorizedReceiptEmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          findMany: {
            args: Prisma.AuthorizedReceiptEmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>[]
          }
          create: {
            args: Prisma.AuthorizedReceiptEmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          createMany: {
            args: Prisma.AuthorizedReceiptEmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorizedReceiptEmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>[]
          }
          delete: {
            args: Prisma.AuthorizedReceiptEmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          update: {
            args: Prisma.AuthorizedReceiptEmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          deleteMany: {
            args: Prisma.AuthorizedReceiptEmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorizedReceiptEmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorizedReceiptEmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>[]
          }
          upsert: {
            args: Prisma.AuthorizedReceiptEmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedReceiptEmailPayload>
          }
          aggregate: {
            args: Prisma.AuthorizedReceiptEmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorizedReceiptEmail>
          }
          groupBy: {
            args: Prisma.AuthorizedReceiptEmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorizedReceiptEmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorizedReceiptEmailCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorizedReceiptEmailCountAggregateOutputType> | number
          }
        }
      }
      Motorcycle: {
        payload: Prisma.$MotorcyclePayload<ExtArgs>
        fields: Prisma.MotorcycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorcycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorcycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          findFirst: {
            args: Prisma.MotorcycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorcycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          findMany: {
            args: Prisma.MotorcycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>[]
          }
          create: {
            args: Prisma.MotorcycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          createMany: {
            args: Prisma.MotorcycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorcycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>[]
          }
          delete: {
            args: Prisma.MotorcycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          update: {
            args: Prisma.MotorcycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          deleteMany: {
            args: Prisma.MotorcycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorcycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorcycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>[]
          }
          upsert: {
            args: Prisma.MotorcycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcyclePayload>
          }
          aggregate: {
            args: Prisma.MotorcycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotorcycle>
          }
          groupBy: {
            args: Prisma.MotorcycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorcycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorcycleCountArgs<ExtArgs>
            result: $Utils.Optional<MotorcycleCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      PromotionTarget: {
        payload: Prisma.$PromotionTargetPayload<ExtArgs>
        fields: Prisma.PromotionTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          findFirst: {
            args: Prisma.PromotionTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          findMany: {
            args: Prisma.PromotionTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>[]
          }
          create: {
            args: Prisma.PromotionTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          createMany: {
            args: Prisma.PromotionTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionTargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>[]
          }
          delete: {
            args: Prisma.PromotionTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          update: {
            args: Prisma.PromotionTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          deleteMany: {
            args: Prisma.PromotionTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionTargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>[]
          }
          upsert: {
            args: Prisma.PromotionTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionTargetPayload>
          }
          aggregate: {
            args: Prisma.PromotionTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotionTarget>
          }
          groupBy: {
            args: Prisma.PromotionTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionTargetCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionTargetCountAggregateOutputType> | number
          }
        }
      }
      ProductSyncFile: {
        payload: Prisma.$ProductSyncFilePayload<ExtArgs>
        fields: Prisma.ProductSyncFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSyncFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSyncFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          findFirst: {
            args: Prisma.ProductSyncFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSyncFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          findMany: {
            args: Prisma.ProductSyncFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>[]
          }
          create: {
            args: Prisma.ProductSyncFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          createMany: {
            args: Prisma.ProductSyncFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSyncFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>[]
          }
          delete: {
            args: Prisma.ProductSyncFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          update: {
            args: Prisma.ProductSyncFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          deleteMany: {
            args: Prisma.ProductSyncFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSyncFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSyncFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>[]
          }
          upsert: {
            args: Prisma.ProductSyncFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSyncFilePayload>
          }
          aggregate: {
            args: Prisma.ProductSyncFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSyncFile>
          }
          groupBy: {
            args: Prisma.ProductSyncFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSyncFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSyncFileCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSyncFileCountAggregateOutputType> | number
          }
        }
      }
      MotorcycleImage: {
        payload: Prisma.$MotorcycleImagePayload<ExtArgs>
        fields: Prisma.MotorcycleImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorcycleImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorcycleImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          findFirst: {
            args: Prisma.MotorcycleImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorcycleImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          findMany: {
            args: Prisma.MotorcycleImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>[]
          }
          create: {
            args: Prisma.MotorcycleImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          createMany: {
            args: Prisma.MotorcycleImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorcycleImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>[]
          }
          delete: {
            args: Prisma.MotorcycleImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          update: {
            args: Prisma.MotorcycleImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          deleteMany: {
            args: Prisma.MotorcycleImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorcycleImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorcycleImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>[]
          }
          upsert: {
            args: Prisma.MotorcycleImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorcycleImagePayload>
          }
          aggregate: {
            args: Prisma.MotorcycleImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotorcycleImage>
          }
          groupBy: {
            args: Prisma.MotorcycleImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorcycleImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorcycleImageCountArgs<ExtArgs>
            result: $Utils.Optional<MotorcycleImageCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogPostTranslation: {
        payload: Prisma.$BlogPostTranslationPayload<ExtArgs>
        fields: Prisma.BlogPostTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          findFirst: {
            args: Prisma.BlogPostTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          findMany: {
            args: Prisma.BlogPostTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          create: {
            args: Prisma.BlogPostTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          createMany: {
            args: Prisma.BlogPostTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          delete: {
            args: Prisma.BlogPostTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          update: {
            args: Prisma.BlogPostTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          aggregate: {
            args: Prisma.BlogPostTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostTranslation>
          }
          groupBy: {
            args: Prisma.BlogPostTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTranslationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    authorizedReceiptEmail?: AuthorizedReceiptEmailOmit
    motorcycle?: MotorcycleOmit
    promotion?: PromotionOmit
    promotionTarget?: PromotionTargetOmit
    productSyncFile?: ProductSyncFileOmit
    motorcycleImage?: MotorcycleImageOmit
    blogPost?: BlogPostOmit
    blogPostTranslation?: BlogPostTranslationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MotorcycleCountOutputType
   */

  export type MotorcycleCountOutputType = {
    images: number
    promotions: number
  }

  export type MotorcycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | MotorcycleCountOutputTypeCountImagesArgs
    promotions?: boolean | MotorcycleCountOutputTypeCountPromotionsArgs
  }

  // Custom InputTypes
  /**
   * MotorcycleCountOutputType without action
   */
  export type MotorcycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleCountOutputType
     */
    select?: MotorcycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotorcycleCountOutputType without action
   */
  export type MotorcycleCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorcycleImageWhereInput
  }

  /**
   * MotorcycleCountOutputType without action
   */
  export type MotorcycleCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }


  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    targets: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targets?: boolean | PromotionCountOutputTypeCountTargetsArgs
  }

  // Custom InputTypes
  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionTargetWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    translations: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | BlogPostCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTranslationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuthorizedReceiptEmail
   */

  export type AggregateAuthorizedReceiptEmail = {
    _count: AuthorizedReceiptEmailCountAggregateOutputType | null
    _min: AuthorizedReceiptEmailMinAggregateOutputType | null
    _max: AuthorizedReceiptEmailMaxAggregateOutputType | null
  }

  export type AuthorizedReceiptEmailMinAggregateOutputType = {
    email: string | null
  }

  export type AuthorizedReceiptEmailMaxAggregateOutputType = {
    email: string | null
  }

  export type AuthorizedReceiptEmailCountAggregateOutputType = {
    email: number
    _all: number
  }


  export type AuthorizedReceiptEmailMinAggregateInputType = {
    email?: true
  }

  export type AuthorizedReceiptEmailMaxAggregateInputType = {
    email?: true
  }

  export type AuthorizedReceiptEmailCountAggregateInputType = {
    email?: true
    _all?: true
  }

  export type AuthorizedReceiptEmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizedReceiptEmail to aggregate.
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedReceiptEmails to fetch.
     */
    orderBy?: AuthorizedReceiptEmailOrderByWithRelationInput | AuthorizedReceiptEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorizedReceiptEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedReceiptEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedReceiptEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorizedReceiptEmails
    **/
    _count?: true | AuthorizedReceiptEmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorizedReceiptEmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorizedReceiptEmailMaxAggregateInputType
  }

  export type GetAuthorizedReceiptEmailAggregateType<T extends AuthorizedReceiptEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorizedReceiptEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorizedReceiptEmail[P]>
      : GetScalarType<T[P], AggregateAuthorizedReceiptEmail[P]>
  }




  export type AuthorizedReceiptEmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizedReceiptEmailWhereInput
    orderBy?: AuthorizedReceiptEmailOrderByWithAggregationInput | AuthorizedReceiptEmailOrderByWithAggregationInput[]
    by: AuthorizedReceiptEmailScalarFieldEnum[] | AuthorizedReceiptEmailScalarFieldEnum
    having?: AuthorizedReceiptEmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorizedReceiptEmailCountAggregateInputType | true
    _min?: AuthorizedReceiptEmailMinAggregateInputType
    _max?: AuthorizedReceiptEmailMaxAggregateInputType
  }

  export type AuthorizedReceiptEmailGroupByOutputType = {
    email: string
    _count: AuthorizedReceiptEmailCountAggregateOutputType | null
    _min: AuthorizedReceiptEmailMinAggregateOutputType | null
    _max: AuthorizedReceiptEmailMaxAggregateOutputType | null
  }

  type GetAuthorizedReceiptEmailGroupByPayload<T extends AuthorizedReceiptEmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorizedReceiptEmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorizedReceiptEmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorizedReceiptEmailGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorizedReceiptEmailGroupByOutputType[P]>
        }
      >
    >


  export type AuthorizedReceiptEmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
  }, ExtArgs["result"]["authorizedReceiptEmail"]>

  export type AuthorizedReceiptEmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
  }, ExtArgs["result"]["authorizedReceiptEmail"]>

  export type AuthorizedReceiptEmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
  }, ExtArgs["result"]["authorizedReceiptEmail"]>

  export type AuthorizedReceiptEmailSelectScalar = {
    email?: boolean
  }

  export type AuthorizedReceiptEmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email", ExtArgs["result"]["authorizedReceiptEmail"]>

  export type $AuthorizedReceiptEmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorizedReceiptEmail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
    }, ExtArgs["result"]["authorizedReceiptEmail"]>
    composites: {}
  }

  type AuthorizedReceiptEmailGetPayload<S extends boolean | null | undefined | AuthorizedReceiptEmailDefaultArgs> = $Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload, S>

  type AuthorizedReceiptEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorizedReceiptEmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorizedReceiptEmailCountAggregateInputType | true
    }

  export interface AuthorizedReceiptEmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorizedReceiptEmail'], meta: { name: 'AuthorizedReceiptEmail' } }
    /**
     * Find zero or one AuthorizedReceiptEmail that matches the filter.
     * @param {AuthorizedReceiptEmailFindUniqueArgs} args - Arguments to find a AuthorizedReceiptEmail
     * @example
     * // Get one AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorizedReceiptEmailFindUniqueArgs>(args: SelectSubset<T, AuthorizedReceiptEmailFindUniqueArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorizedReceiptEmail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorizedReceiptEmailFindUniqueOrThrowArgs} args - Arguments to find a AuthorizedReceiptEmail
     * @example
     * // Get one AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorizedReceiptEmailFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorizedReceiptEmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorizedReceiptEmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailFindFirstArgs} args - Arguments to find a AuthorizedReceiptEmail
     * @example
     * // Get one AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorizedReceiptEmailFindFirstArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailFindFirstArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorizedReceiptEmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailFindFirstOrThrowArgs} args - Arguments to find a AuthorizedReceiptEmail
     * @example
     * // Get one AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorizedReceiptEmailFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorizedReceiptEmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorizedReceiptEmails
     * const authorizedReceiptEmails = await prisma.authorizedReceiptEmail.findMany()
     * 
     * // Get first 10 AuthorizedReceiptEmails
     * const authorizedReceiptEmails = await prisma.authorizedReceiptEmail.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const authorizedReceiptEmailWithEmailOnly = await prisma.authorizedReceiptEmail.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends AuthorizedReceiptEmailFindManyArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorizedReceiptEmail.
     * @param {AuthorizedReceiptEmailCreateArgs} args - Arguments to create a AuthorizedReceiptEmail.
     * @example
     * // Create one AuthorizedReceiptEmail
     * const AuthorizedReceiptEmail = await prisma.authorizedReceiptEmail.create({
     *   data: {
     *     // ... data to create a AuthorizedReceiptEmail
     *   }
     * })
     * 
     */
    create<T extends AuthorizedReceiptEmailCreateArgs>(args: SelectSubset<T, AuthorizedReceiptEmailCreateArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorizedReceiptEmails.
     * @param {AuthorizedReceiptEmailCreateManyArgs} args - Arguments to create many AuthorizedReceiptEmails.
     * @example
     * // Create many AuthorizedReceiptEmails
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorizedReceiptEmailCreateManyArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorizedReceiptEmails and returns the data saved in the database.
     * @param {AuthorizedReceiptEmailCreateManyAndReturnArgs} args - Arguments to create many AuthorizedReceiptEmails.
     * @example
     * // Create many AuthorizedReceiptEmails
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorizedReceiptEmails and only return the `email`
     * const authorizedReceiptEmailWithEmailOnly = await prisma.authorizedReceiptEmail.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorizedReceiptEmailCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorizedReceiptEmail.
     * @param {AuthorizedReceiptEmailDeleteArgs} args - Arguments to delete one AuthorizedReceiptEmail.
     * @example
     * // Delete one AuthorizedReceiptEmail
     * const AuthorizedReceiptEmail = await prisma.authorizedReceiptEmail.delete({
     *   where: {
     *     // ... filter to delete one AuthorizedReceiptEmail
     *   }
     * })
     * 
     */
    delete<T extends AuthorizedReceiptEmailDeleteArgs>(args: SelectSubset<T, AuthorizedReceiptEmailDeleteArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorizedReceiptEmail.
     * @param {AuthorizedReceiptEmailUpdateArgs} args - Arguments to update one AuthorizedReceiptEmail.
     * @example
     * // Update one AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorizedReceiptEmailUpdateArgs>(args: SelectSubset<T, AuthorizedReceiptEmailUpdateArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorizedReceiptEmails.
     * @param {AuthorizedReceiptEmailDeleteManyArgs} args - Arguments to filter AuthorizedReceiptEmails to delete.
     * @example
     * // Delete a few AuthorizedReceiptEmails
     * const { count } = await prisma.authorizedReceiptEmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorizedReceiptEmailDeleteManyArgs>(args?: SelectSubset<T, AuthorizedReceiptEmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorizedReceiptEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorizedReceiptEmails
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorizedReceiptEmailUpdateManyArgs>(args: SelectSubset<T, AuthorizedReceiptEmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorizedReceiptEmails and returns the data updated in the database.
     * @param {AuthorizedReceiptEmailUpdateManyAndReturnArgs} args - Arguments to update many AuthorizedReceiptEmails.
     * @example
     * // Update many AuthorizedReceiptEmails
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorizedReceiptEmails and only return the `email`
     * const authorizedReceiptEmailWithEmailOnly = await prisma.authorizedReceiptEmail.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorizedReceiptEmailUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorizedReceiptEmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorizedReceiptEmail.
     * @param {AuthorizedReceiptEmailUpsertArgs} args - Arguments to update or create a AuthorizedReceiptEmail.
     * @example
     * // Update or create a AuthorizedReceiptEmail
     * const authorizedReceiptEmail = await prisma.authorizedReceiptEmail.upsert({
     *   create: {
     *     // ... data to create a AuthorizedReceiptEmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorizedReceiptEmail we want to update
     *   }
     * })
     */
    upsert<T extends AuthorizedReceiptEmailUpsertArgs>(args: SelectSubset<T, AuthorizedReceiptEmailUpsertArgs<ExtArgs>>): Prisma__AuthorizedReceiptEmailClient<$Result.GetResult<Prisma.$AuthorizedReceiptEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorizedReceiptEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailCountArgs} args - Arguments to filter AuthorizedReceiptEmails to count.
     * @example
     * // Count the number of AuthorizedReceiptEmails
     * const count = await prisma.authorizedReceiptEmail.count({
     *   where: {
     *     // ... the filter for the AuthorizedReceiptEmails we want to count
     *   }
     * })
    **/
    count<T extends AuthorizedReceiptEmailCountArgs>(
      args?: Subset<T, AuthorizedReceiptEmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorizedReceiptEmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorizedReceiptEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorizedReceiptEmailAggregateArgs>(args: Subset<T, AuthorizedReceiptEmailAggregateArgs>): Prisma.PrismaPromise<GetAuthorizedReceiptEmailAggregateType<T>>

    /**
     * Group by AuthorizedReceiptEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedReceiptEmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorizedReceiptEmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorizedReceiptEmailGroupByArgs['orderBy'] }
        : { orderBy?: AuthorizedReceiptEmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorizedReceiptEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorizedReceiptEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorizedReceiptEmail model
   */
  readonly fields: AuthorizedReceiptEmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorizedReceiptEmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorizedReceiptEmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorizedReceiptEmail model
   */
  interface AuthorizedReceiptEmailFieldRefs {
    readonly email: FieldRef<"AuthorizedReceiptEmail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthorizedReceiptEmail findUnique
   */
  export type AuthorizedReceiptEmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter, which AuthorizedReceiptEmail to fetch.
     */
    where: AuthorizedReceiptEmailWhereUniqueInput
  }

  /**
   * AuthorizedReceiptEmail findUniqueOrThrow
   */
  export type AuthorizedReceiptEmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter, which AuthorizedReceiptEmail to fetch.
     */
    where: AuthorizedReceiptEmailWhereUniqueInput
  }

  /**
   * AuthorizedReceiptEmail findFirst
   */
  export type AuthorizedReceiptEmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter, which AuthorizedReceiptEmail to fetch.
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedReceiptEmails to fetch.
     */
    orderBy?: AuthorizedReceiptEmailOrderByWithRelationInput | AuthorizedReceiptEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizedReceiptEmails.
     */
    cursor?: AuthorizedReceiptEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedReceiptEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedReceiptEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizedReceiptEmails.
     */
    distinct?: AuthorizedReceiptEmailScalarFieldEnum | AuthorizedReceiptEmailScalarFieldEnum[]
  }

  /**
   * AuthorizedReceiptEmail findFirstOrThrow
   */
  export type AuthorizedReceiptEmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter, which AuthorizedReceiptEmail to fetch.
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedReceiptEmails to fetch.
     */
    orderBy?: AuthorizedReceiptEmailOrderByWithRelationInput | AuthorizedReceiptEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizedReceiptEmails.
     */
    cursor?: AuthorizedReceiptEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedReceiptEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedReceiptEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizedReceiptEmails.
     */
    distinct?: AuthorizedReceiptEmailScalarFieldEnum | AuthorizedReceiptEmailScalarFieldEnum[]
  }

  /**
   * AuthorizedReceiptEmail findMany
   */
  export type AuthorizedReceiptEmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter, which AuthorizedReceiptEmails to fetch.
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedReceiptEmails to fetch.
     */
    orderBy?: AuthorizedReceiptEmailOrderByWithRelationInput | AuthorizedReceiptEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorizedReceiptEmails.
     */
    cursor?: AuthorizedReceiptEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedReceiptEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedReceiptEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizedReceiptEmails.
     */
    distinct?: AuthorizedReceiptEmailScalarFieldEnum | AuthorizedReceiptEmailScalarFieldEnum[]
  }

  /**
   * AuthorizedReceiptEmail create
   */
  export type AuthorizedReceiptEmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthorizedReceiptEmail.
     */
    data: XOR<AuthorizedReceiptEmailCreateInput, AuthorizedReceiptEmailUncheckedCreateInput>
  }

  /**
   * AuthorizedReceiptEmail createMany
   */
  export type AuthorizedReceiptEmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorizedReceiptEmails.
     */
    data: AuthorizedReceiptEmailCreateManyInput | AuthorizedReceiptEmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorizedReceiptEmail createManyAndReturn
   */
  export type AuthorizedReceiptEmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorizedReceiptEmails.
     */
    data: AuthorizedReceiptEmailCreateManyInput | AuthorizedReceiptEmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorizedReceiptEmail update
   */
  export type AuthorizedReceiptEmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthorizedReceiptEmail.
     */
    data: XOR<AuthorizedReceiptEmailUpdateInput, AuthorizedReceiptEmailUncheckedUpdateInput>
    /**
     * Choose, which AuthorizedReceiptEmail to update.
     */
    where: AuthorizedReceiptEmailWhereUniqueInput
  }

  /**
   * AuthorizedReceiptEmail updateMany
   */
  export type AuthorizedReceiptEmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorizedReceiptEmails.
     */
    data: XOR<AuthorizedReceiptEmailUpdateManyMutationInput, AuthorizedReceiptEmailUncheckedUpdateManyInput>
    /**
     * Filter which AuthorizedReceiptEmails to update
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * Limit how many AuthorizedReceiptEmails to update.
     */
    limit?: number
  }

  /**
   * AuthorizedReceiptEmail updateManyAndReturn
   */
  export type AuthorizedReceiptEmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * The data used to update AuthorizedReceiptEmails.
     */
    data: XOR<AuthorizedReceiptEmailUpdateManyMutationInput, AuthorizedReceiptEmailUncheckedUpdateManyInput>
    /**
     * Filter which AuthorizedReceiptEmails to update
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * Limit how many AuthorizedReceiptEmails to update.
     */
    limit?: number
  }

  /**
   * AuthorizedReceiptEmail upsert
   */
  export type AuthorizedReceiptEmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthorizedReceiptEmail to update in case it exists.
     */
    where: AuthorizedReceiptEmailWhereUniqueInput
    /**
     * In case the AuthorizedReceiptEmail found by the `where` argument doesn't exist, create a new AuthorizedReceiptEmail with this data.
     */
    create: XOR<AuthorizedReceiptEmailCreateInput, AuthorizedReceiptEmailUncheckedCreateInput>
    /**
     * In case the AuthorizedReceiptEmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorizedReceiptEmailUpdateInput, AuthorizedReceiptEmailUncheckedUpdateInput>
  }

  /**
   * AuthorizedReceiptEmail delete
   */
  export type AuthorizedReceiptEmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
    /**
     * Filter which AuthorizedReceiptEmail to delete.
     */
    where: AuthorizedReceiptEmailWhereUniqueInput
  }

  /**
   * AuthorizedReceiptEmail deleteMany
   */
  export type AuthorizedReceiptEmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizedReceiptEmails to delete
     */
    where?: AuthorizedReceiptEmailWhereInput
    /**
     * Limit how many AuthorizedReceiptEmails to delete.
     */
    limit?: number
  }

  /**
   * AuthorizedReceiptEmail without action
   */
  export type AuthorizedReceiptEmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedReceiptEmail
     */
    select?: AuthorizedReceiptEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedReceiptEmail
     */
    omit?: AuthorizedReceiptEmailOmit<ExtArgs> | null
  }


  /**
   * Model Motorcycle
   */

  export type AggregateMotorcycle = {
    _count: MotorcycleCountAggregateOutputType | null
    _avg: MotorcycleAvgAggregateOutputType | null
    _sum: MotorcycleSumAggregateOutputType | null
    _min: MotorcycleMinAggregateOutputType | null
    _max: MotorcycleMaxAggregateOutputType | null
  }

  export type MotorcycleAvgAggregateOutputType = {
    price: Decimal | null
    engineCapacity: number | null
  }

  export type MotorcycleSumAggregateOutputType = {
    price: Decimal | null
    engineCapacity: number | null
  }

  export type MotorcycleMinAggregateOutputType = {
    id: string | null
    brand: string | null
    name: string | null
    model: string | null
    year: string | null
    price: Decimal | null
    engine: string | null
    engineCapacity: number | null
    gear: string | null
    color: string | null
    tags: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MotorcycleMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    name: string | null
    model: string | null
    year: string | null
    price: Decimal | null
    engine: string | null
    engineCapacity: number | null
    gear: string | null
    color: string | null
    tags: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MotorcycleCountAggregateOutputType = {
    id: number
    brand: number
    name: number
    model: number
    year: number
    price: number
    engine: number
    engineCapacity: number
    gear: number
    color: number
    tags: number
    description: number
    specification: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MotorcycleAvgAggregateInputType = {
    price?: true
    engineCapacity?: true
  }

  export type MotorcycleSumAggregateInputType = {
    price?: true
    engineCapacity?: true
  }

  export type MotorcycleMinAggregateInputType = {
    id?: true
    brand?: true
    name?: true
    model?: true
    year?: true
    price?: true
    engine?: true
    engineCapacity?: true
    gear?: true
    color?: true
    tags?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MotorcycleMaxAggregateInputType = {
    id?: true
    brand?: true
    name?: true
    model?: true
    year?: true
    price?: true
    engine?: true
    engineCapacity?: true
    gear?: true
    color?: true
    tags?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MotorcycleCountAggregateInputType = {
    id?: true
    brand?: true
    name?: true
    model?: true
    year?: true
    price?: true
    engine?: true
    engineCapacity?: true
    gear?: true
    color?: true
    tags?: true
    description?: true
    specification?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MotorcycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorcycle to aggregate.
     */
    where?: MotorcycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorcycles to fetch.
     */
    orderBy?: MotorcycleOrderByWithRelationInput | MotorcycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorcycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorcycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorcycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motorcycles
    **/
    _count?: true | MotorcycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorcycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorcycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorcycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorcycleMaxAggregateInputType
  }

  export type GetMotorcycleAggregateType<T extends MotorcycleAggregateArgs> = {
        [P in keyof T & keyof AggregateMotorcycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotorcycle[P]>
      : GetScalarType<T[P], AggregateMotorcycle[P]>
  }




  export type MotorcycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorcycleWhereInput
    orderBy?: MotorcycleOrderByWithAggregationInput | MotorcycleOrderByWithAggregationInput[]
    by: MotorcycleScalarFieldEnum[] | MotorcycleScalarFieldEnum
    having?: MotorcycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorcycleCountAggregateInputType | true
    _avg?: MotorcycleAvgAggregateInputType
    _sum?: MotorcycleSumAggregateInputType
    _min?: MotorcycleMinAggregateInputType
    _max?: MotorcycleMaxAggregateInputType
  }

  export type MotorcycleGroupByOutputType = {
    id: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags: string | null
    description: string | null
    specification: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MotorcycleCountAggregateOutputType | null
    _avg: MotorcycleAvgAggregateOutputType | null
    _sum: MotorcycleSumAggregateOutputType | null
    _min: MotorcycleMinAggregateOutputType | null
    _max: MotorcycleMaxAggregateOutputType | null
  }

  type GetMotorcycleGroupByPayload<T extends MotorcycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorcycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorcycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorcycleGroupByOutputType[P]>
            : GetScalarType<T[P], MotorcycleGroupByOutputType[P]>
        }
      >
    >


  export type MotorcycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    name?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    engine?: boolean
    engineCapacity?: boolean
    gear?: boolean
    color?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Motorcycle$imagesArgs<ExtArgs>
    promotions?: boolean | Motorcycle$promotionsArgs<ExtArgs>
    _count?: boolean | MotorcycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorcycle"]>

  export type MotorcycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    name?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    engine?: boolean
    engineCapacity?: boolean
    gear?: boolean
    color?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["motorcycle"]>

  export type MotorcycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    name?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    engine?: boolean
    engineCapacity?: boolean
    gear?: boolean
    color?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["motorcycle"]>

  export type MotorcycleSelectScalar = {
    id?: boolean
    brand?: boolean
    name?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    engine?: boolean
    engineCapacity?: boolean
    gear?: boolean
    color?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MotorcycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "name" | "model" | "year" | "price" | "engine" | "engineCapacity" | "gear" | "color" | "tags" | "description" | "specification" | "createdAt" | "updatedAt", ExtArgs["result"]["motorcycle"]>
  export type MotorcycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Motorcycle$imagesArgs<ExtArgs>
    promotions?: boolean | Motorcycle$promotionsArgs<ExtArgs>
    _count?: boolean | MotorcycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotorcycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MotorcycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MotorcyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motorcycle"
    objects: {
      images: Prisma.$MotorcycleImagePayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      name: string
      model: string
      year: string
      price: Prisma.Decimal
      engine: string
      engineCapacity: number
      gear: string
      color: string
      tags: string | null
      description: string | null
      specification: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["motorcycle"]>
    composites: {}
  }

  type MotorcycleGetPayload<S extends boolean | null | undefined | MotorcycleDefaultArgs> = $Result.GetResult<Prisma.$MotorcyclePayload, S>

  type MotorcycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorcycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorcycleCountAggregateInputType | true
    }

  export interface MotorcycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motorcycle'], meta: { name: 'Motorcycle' } }
    /**
     * Find zero or one Motorcycle that matches the filter.
     * @param {MotorcycleFindUniqueArgs} args - Arguments to find a Motorcycle
     * @example
     * // Get one Motorcycle
     * const motorcycle = await prisma.motorcycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorcycleFindUniqueArgs>(args: SelectSubset<T, MotorcycleFindUniqueArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motorcycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorcycleFindUniqueOrThrowArgs} args - Arguments to find a Motorcycle
     * @example
     * // Get one Motorcycle
     * const motorcycle = await prisma.motorcycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorcycleFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorcycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motorcycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleFindFirstArgs} args - Arguments to find a Motorcycle
     * @example
     * // Get one Motorcycle
     * const motorcycle = await prisma.motorcycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorcycleFindFirstArgs>(args?: SelectSubset<T, MotorcycleFindFirstArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motorcycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleFindFirstOrThrowArgs} args - Arguments to find a Motorcycle
     * @example
     * // Get one Motorcycle
     * const motorcycle = await prisma.motorcycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorcycleFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorcycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motorcycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motorcycles
     * const motorcycles = await prisma.motorcycle.findMany()
     * 
     * // Get first 10 Motorcycles
     * const motorcycles = await prisma.motorcycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motorcycleWithIdOnly = await prisma.motorcycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotorcycleFindManyArgs>(args?: SelectSubset<T, MotorcycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motorcycle.
     * @param {MotorcycleCreateArgs} args - Arguments to create a Motorcycle.
     * @example
     * // Create one Motorcycle
     * const Motorcycle = await prisma.motorcycle.create({
     *   data: {
     *     // ... data to create a Motorcycle
     *   }
     * })
     * 
     */
    create<T extends MotorcycleCreateArgs>(args: SelectSubset<T, MotorcycleCreateArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motorcycles.
     * @param {MotorcycleCreateManyArgs} args - Arguments to create many Motorcycles.
     * @example
     * // Create many Motorcycles
     * const motorcycle = await prisma.motorcycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorcycleCreateManyArgs>(args?: SelectSubset<T, MotorcycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motorcycles and returns the data saved in the database.
     * @param {MotorcycleCreateManyAndReturnArgs} args - Arguments to create many Motorcycles.
     * @example
     * // Create many Motorcycles
     * const motorcycle = await prisma.motorcycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motorcycles and only return the `id`
     * const motorcycleWithIdOnly = await prisma.motorcycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorcycleCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorcycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motorcycle.
     * @param {MotorcycleDeleteArgs} args - Arguments to delete one Motorcycle.
     * @example
     * // Delete one Motorcycle
     * const Motorcycle = await prisma.motorcycle.delete({
     *   where: {
     *     // ... filter to delete one Motorcycle
     *   }
     * })
     * 
     */
    delete<T extends MotorcycleDeleteArgs>(args: SelectSubset<T, MotorcycleDeleteArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motorcycle.
     * @param {MotorcycleUpdateArgs} args - Arguments to update one Motorcycle.
     * @example
     * // Update one Motorcycle
     * const motorcycle = await prisma.motorcycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorcycleUpdateArgs>(args: SelectSubset<T, MotorcycleUpdateArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motorcycles.
     * @param {MotorcycleDeleteManyArgs} args - Arguments to filter Motorcycles to delete.
     * @example
     * // Delete a few Motorcycles
     * const { count } = await prisma.motorcycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorcycleDeleteManyArgs>(args?: SelectSubset<T, MotorcycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motorcycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motorcycles
     * const motorcycle = await prisma.motorcycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorcycleUpdateManyArgs>(args: SelectSubset<T, MotorcycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motorcycles and returns the data updated in the database.
     * @param {MotorcycleUpdateManyAndReturnArgs} args - Arguments to update many Motorcycles.
     * @example
     * // Update many Motorcycles
     * const motorcycle = await prisma.motorcycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motorcycles and only return the `id`
     * const motorcycleWithIdOnly = await prisma.motorcycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotorcycleUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorcycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motorcycle.
     * @param {MotorcycleUpsertArgs} args - Arguments to update or create a Motorcycle.
     * @example
     * // Update or create a Motorcycle
     * const motorcycle = await prisma.motorcycle.upsert({
     *   create: {
     *     // ... data to create a Motorcycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motorcycle we want to update
     *   }
     * })
     */
    upsert<T extends MotorcycleUpsertArgs>(args: SelectSubset<T, MotorcycleUpsertArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motorcycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleCountArgs} args - Arguments to filter Motorcycles to count.
     * @example
     * // Count the number of Motorcycles
     * const count = await prisma.motorcycle.count({
     *   where: {
     *     // ... the filter for the Motorcycles we want to count
     *   }
     * })
    **/
    count<T extends MotorcycleCountArgs>(
      args?: Subset<T, MotorcycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorcycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motorcycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotorcycleAggregateArgs>(args: Subset<T, MotorcycleAggregateArgs>): Prisma.PrismaPromise<GetMotorcycleAggregateType<T>>

    /**
     * Group by Motorcycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotorcycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorcycleGroupByArgs['orderBy'] }
        : { orderBy?: MotorcycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotorcycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorcycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motorcycle model
   */
  readonly fields: MotorcycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motorcycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorcycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Motorcycle$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Motorcycle$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotions<T extends Motorcycle$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Motorcycle$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Motorcycle model
   */
  interface MotorcycleFieldRefs {
    readonly id: FieldRef<"Motorcycle", 'String'>
    readonly brand: FieldRef<"Motorcycle", 'String'>
    readonly name: FieldRef<"Motorcycle", 'String'>
    readonly model: FieldRef<"Motorcycle", 'String'>
    readonly year: FieldRef<"Motorcycle", 'String'>
    readonly price: FieldRef<"Motorcycle", 'Decimal'>
    readonly engine: FieldRef<"Motorcycle", 'String'>
    readonly engineCapacity: FieldRef<"Motorcycle", 'Int'>
    readonly gear: FieldRef<"Motorcycle", 'String'>
    readonly color: FieldRef<"Motorcycle", 'String'>
    readonly tags: FieldRef<"Motorcycle", 'String'>
    readonly description: FieldRef<"Motorcycle", 'String'>
    readonly specification: FieldRef<"Motorcycle", 'Json'>
    readonly createdAt: FieldRef<"Motorcycle", 'DateTime'>
    readonly updatedAt: FieldRef<"Motorcycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Motorcycle findUnique
   */
  export type MotorcycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter, which Motorcycle to fetch.
     */
    where: MotorcycleWhereUniqueInput
  }

  /**
   * Motorcycle findUniqueOrThrow
   */
  export type MotorcycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter, which Motorcycle to fetch.
     */
    where: MotorcycleWhereUniqueInput
  }

  /**
   * Motorcycle findFirst
   */
  export type MotorcycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter, which Motorcycle to fetch.
     */
    where?: MotorcycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorcycles to fetch.
     */
    orderBy?: MotorcycleOrderByWithRelationInput | MotorcycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motorcycles.
     */
    cursor?: MotorcycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorcycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorcycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motorcycles.
     */
    distinct?: MotorcycleScalarFieldEnum | MotorcycleScalarFieldEnum[]
  }

  /**
   * Motorcycle findFirstOrThrow
   */
  export type MotorcycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter, which Motorcycle to fetch.
     */
    where?: MotorcycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorcycles to fetch.
     */
    orderBy?: MotorcycleOrderByWithRelationInput | MotorcycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motorcycles.
     */
    cursor?: MotorcycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorcycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorcycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motorcycles.
     */
    distinct?: MotorcycleScalarFieldEnum | MotorcycleScalarFieldEnum[]
  }

  /**
   * Motorcycle findMany
   */
  export type MotorcycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter, which Motorcycles to fetch.
     */
    where?: MotorcycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorcycles to fetch.
     */
    orderBy?: MotorcycleOrderByWithRelationInput | MotorcycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motorcycles.
     */
    cursor?: MotorcycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorcycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorcycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motorcycles.
     */
    distinct?: MotorcycleScalarFieldEnum | MotorcycleScalarFieldEnum[]
  }

  /**
   * Motorcycle create
   */
  export type MotorcycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * The data needed to create a Motorcycle.
     */
    data: XOR<MotorcycleCreateInput, MotorcycleUncheckedCreateInput>
  }

  /**
   * Motorcycle createMany
   */
  export type MotorcycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motorcycles.
     */
    data: MotorcycleCreateManyInput | MotorcycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorcycle createManyAndReturn
   */
  export type MotorcycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * The data used to create many Motorcycles.
     */
    data: MotorcycleCreateManyInput | MotorcycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorcycle update
   */
  export type MotorcycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * The data needed to update a Motorcycle.
     */
    data: XOR<MotorcycleUpdateInput, MotorcycleUncheckedUpdateInput>
    /**
     * Choose, which Motorcycle to update.
     */
    where: MotorcycleWhereUniqueInput
  }

  /**
   * Motorcycle updateMany
   */
  export type MotorcycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motorcycles.
     */
    data: XOR<MotorcycleUpdateManyMutationInput, MotorcycleUncheckedUpdateManyInput>
    /**
     * Filter which Motorcycles to update
     */
    where?: MotorcycleWhereInput
    /**
     * Limit how many Motorcycles to update.
     */
    limit?: number
  }

  /**
   * Motorcycle updateManyAndReturn
   */
  export type MotorcycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * The data used to update Motorcycles.
     */
    data: XOR<MotorcycleUpdateManyMutationInput, MotorcycleUncheckedUpdateManyInput>
    /**
     * Filter which Motorcycles to update
     */
    where?: MotorcycleWhereInput
    /**
     * Limit how many Motorcycles to update.
     */
    limit?: number
  }

  /**
   * Motorcycle upsert
   */
  export type MotorcycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * The filter to search for the Motorcycle to update in case it exists.
     */
    where: MotorcycleWhereUniqueInput
    /**
     * In case the Motorcycle found by the `where` argument doesn't exist, create a new Motorcycle with this data.
     */
    create: XOR<MotorcycleCreateInput, MotorcycleUncheckedCreateInput>
    /**
     * In case the Motorcycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorcycleUpdateInput, MotorcycleUncheckedUpdateInput>
  }

  /**
   * Motorcycle delete
   */
  export type MotorcycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    /**
     * Filter which Motorcycle to delete.
     */
    where: MotorcycleWhereUniqueInput
  }

  /**
   * Motorcycle deleteMany
   */
  export type MotorcycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorcycles to delete
     */
    where?: MotorcycleWhereInput
    /**
     * Limit how many Motorcycles to delete.
     */
    limit?: number
  }

  /**
   * Motorcycle.images
   */
  export type Motorcycle$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    where?: MotorcycleImageWhereInput
    orderBy?: MotorcycleImageOrderByWithRelationInput | MotorcycleImageOrderByWithRelationInput[]
    cursor?: MotorcycleImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotorcycleImageScalarFieldEnum | MotorcycleImageScalarFieldEnum[]
  }

  /**
   * Motorcycle.promotions
   */
  export type Motorcycle$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Motorcycle without action
   */
  export type MotorcycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    displayOrder: number | null
    discountValue: Decimal | null
  }

  export type PromotionSumAggregateOutputType = {
    displayOrder: number | null
    discountValue: Decimal | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    imageUrl: string | null
    ctaText: string | null
    whatsappMessage: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    displayOrder: number | null
    discountType: $Enums.DiscountType | null
    discountValue: Decimal | null
    motorcycleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    imageUrl: string | null
    ctaText: string | null
    whatsappMessage: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    displayOrder: number | null
    discountType: $Enums.DiscountType | null
    discountValue: Decimal | null
    motorcycleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    description: number
    imageUrl: number
    ctaText: number
    whatsappMessage: number
    isFeatured: number
    isActive: number
    startDate: number
    endDate: number
    displayOrder: number
    discountType: number
    discountValue: number
    motorcycleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    displayOrder?: true
    discountValue?: true
  }

  export type PromotionSumAggregateInputType = {
    displayOrder?: true
    discountValue?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    imageUrl?: true
    ctaText?: true
    whatsappMessage?: true
    isFeatured?: true
    isActive?: true
    startDate?: true
    endDate?: true
    displayOrder?: true
    discountType?: true
    discountValue?: true
    motorcycleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    imageUrl?: true
    ctaText?: true
    whatsappMessage?: true
    isFeatured?: true
    isActive?: true
    startDate?: true
    endDate?: true
    displayOrder?: true
    discountType?: true
    discountValue?: true
    motorcycleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    imageUrl?: true
    ctaText?: true
    whatsappMessage?: true
    isFeatured?: true
    isActive?: true
    startDate?: true
    endDate?: true
    displayOrder?: true
    discountType?: true
    discountValue?: true
    motorcycleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    title: string
    subtitle: string | null
    description: string | null
    imageUrl: string | null
    ctaText: string
    whatsappMessage: string | null
    isFeatured: boolean
    isActive: boolean
    startDate: Date
    endDate: Date
    displayOrder: number
    discountType: $Enums.DiscountType
    discountValue: Decimal | null
    motorcycleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    ctaText?: boolean
    whatsappMessage?: boolean
    isFeatured?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    displayOrder?: boolean
    discountType?: boolean
    discountValue?: boolean
    motorcycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
    targets?: boolean | Promotion$targetsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    ctaText?: boolean
    whatsappMessage?: boolean
    isFeatured?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    displayOrder?: boolean
    discountType?: boolean
    discountValue?: boolean
    motorcycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    ctaText?: boolean
    whatsappMessage?: boolean
    isFeatured?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    displayOrder?: boolean
    discountType?: boolean
    discountValue?: boolean
    motorcycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    imageUrl?: boolean
    ctaText?: boolean
    whatsappMessage?: boolean
    isFeatured?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    displayOrder?: boolean
    discountType?: boolean
    discountValue?: boolean
    motorcycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "description" | "imageUrl" | "ctaText" | "whatsappMessage" | "isFeatured" | "isActive" | "startDate" | "endDate" | "displayOrder" | "discountType" | "discountValue" | "motorcycleId" | "createdAt" | "updatedAt", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
    targets?: boolean | Promotion$targetsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
  }
  export type PromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | Promotion$motorcycleArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      motorcycle: Prisma.$MotorcyclePayload<ExtArgs> | null
      targets: Prisma.$PromotionTargetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string | null
      description: string | null
      imageUrl: string | null
      ctaText: string
      whatsappMessage: string | null
      isFeatured: boolean
      isActive: boolean
      startDate: Date
      endDate: Date
      displayOrder: number
      discountType: $Enums.DiscountType
      discountValue: Prisma.Decimal | null
      motorcycleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions and returns the data updated in the database.
     * @param {PromotionUpdateManyAndReturnArgs} args - Arguments to update many Promotions.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motorcycle<T extends Promotion$motorcycleArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$motorcycleArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    targets<T extends Promotion$targetsArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$targetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly title: FieldRef<"Promotion", 'String'>
    readonly subtitle: FieldRef<"Promotion", 'String'>
    readonly description: FieldRef<"Promotion", 'String'>
    readonly imageUrl: FieldRef<"Promotion", 'String'>
    readonly ctaText: FieldRef<"Promotion", 'String'>
    readonly whatsappMessage: FieldRef<"Promotion", 'String'>
    readonly isFeatured: FieldRef<"Promotion", 'Boolean'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
    readonly startDate: FieldRef<"Promotion", 'DateTime'>
    readonly endDate: FieldRef<"Promotion", 'DateTime'>
    readonly displayOrder: FieldRef<"Promotion", 'Int'>
    readonly discountType: FieldRef<"Promotion", 'DiscountType'>
    readonly discountValue: FieldRef<"Promotion", 'Decimal'>
    readonly motorcycleId: FieldRef<"Promotion", 'String'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion updateManyAndReturn
   */
  export type PromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion.motorcycle
   */
  export type Promotion$motorcycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorcycle
     */
    select?: MotorcycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorcycle
     */
    omit?: MotorcycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleInclude<ExtArgs> | null
    where?: MotorcycleWhereInput
  }

  /**
   * Promotion.targets
   */
  export type Promotion$targetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    where?: PromotionTargetWhereInput
    orderBy?: PromotionTargetOrderByWithRelationInput | PromotionTargetOrderByWithRelationInput[]
    cursor?: PromotionTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionTargetScalarFieldEnum | PromotionTargetScalarFieldEnum[]
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model PromotionTarget
   */

  export type AggregatePromotionTarget = {
    _count: PromotionTargetCountAggregateOutputType | null
    _min: PromotionTargetMinAggregateOutputType | null
    _max: PromotionTargetMaxAggregateOutputType | null
  }

  export type PromotionTargetMinAggregateOutputType = {
    id: string | null
    scope: $Enums.PromotionScope | null
    value: string | null
    isExclusion: boolean | null
    promotionId: string | null
  }

  export type PromotionTargetMaxAggregateOutputType = {
    id: string | null
    scope: $Enums.PromotionScope | null
    value: string | null
    isExclusion: boolean | null
    promotionId: string | null
  }

  export type PromotionTargetCountAggregateOutputType = {
    id: number
    scope: number
    value: number
    isExclusion: number
    promotionId: number
    _all: number
  }


  export type PromotionTargetMinAggregateInputType = {
    id?: true
    scope?: true
    value?: true
    isExclusion?: true
    promotionId?: true
  }

  export type PromotionTargetMaxAggregateInputType = {
    id?: true
    scope?: true
    value?: true
    isExclusion?: true
    promotionId?: true
  }

  export type PromotionTargetCountAggregateInputType = {
    id?: true
    scope?: true
    value?: true
    isExclusion?: true
    promotionId?: true
    _all?: true
  }

  export type PromotionTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionTarget to aggregate.
     */
    where?: PromotionTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionTargets to fetch.
     */
    orderBy?: PromotionTargetOrderByWithRelationInput | PromotionTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromotionTargets
    **/
    _count?: true | PromotionTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionTargetMaxAggregateInputType
  }

  export type GetPromotionTargetAggregateType<T extends PromotionTargetAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotionTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotionTarget[P]>
      : GetScalarType<T[P], AggregatePromotionTarget[P]>
  }




  export type PromotionTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionTargetWhereInput
    orderBy?: PromotionTargetOrderByWithAggregationInput | PromotionTargetOrderByWithAggregationInput[]
    by: PromotionTargetScalarFieldEnum[] | PromotionTargetScalarFieldEnum
    having?: PromotionTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionTargetCountAggregateInputType | true
    _min?: PromotionTargetMinAggregateInputType
    _max?: PromotionTargetMaxAggregateInputType
  }

  export type PromotionTargetGroupByOutputType = {
    id: string
    scope: $Enums.PromotionScope
    value: string | null
    isExclusion: boolean
    promotionId: string
    _count: PromotionTargetCountAggregateOutputType | null
    _min: PromotionTargetMinAggregateOutputType | null
    _max: PromotionTargetMaxAggregateOutputType | null
  }

  type GetPromotionTargetGroupByPayload<T extends PromotionTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionTargetGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionTargetGroupByOutputType[P]>
        }
      >
    >


  export type PromotionTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    value?: boolean
    isExclusion?: boolean
    promotionId?: boolean
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotionTarget"]>

  export type PromotionTargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    value?: boolean
    isExclusion?: boolean
    promotionId?: boolean
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotionTarget"]>

  export type PromotionTargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    value?: boolean
    isExclusion?: boolean
    promotionId?: boolean
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotionTarget"]>

  export type PromotionTargetSelectScalar = {
    id?: boolean
    scope?: boolean
    value?: boolean
    isExclusion?: boolean
    promotionId?: boolean
  }

  export type PromotionTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "value" | "isExclusion" | "promotionId", ExtArgs["result"]["promotionTarget"]>
  export type PromotionTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }
  export type PromotionTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }
  export type PromotionTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }

  export type $PromotionTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromotionTarget"
    objects: {
      promotion: Prisma.$PromotionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scope: $Enums.PromotionScope
      value: string | null
      isExclusion: boolean
      promotionId: string
    }, ExtArgs["result"]["promotionTarget"]>
    composites: {}
  }

  type PromotionTargetGetPayload<S extends boolean | null | undefined | PromotionTargetDefaultArgs> = $Result.GetResult<Prisma.$PromotionTargetPayload, S>

  type PromotionTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionTargetCountAggregateInputType | true
    }

  export interface PromotionTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromotionTarget'], meta: { name: 'PromotionTarget' } }
    /**
     * Find zero or one PromotionTarget that matches the filter.
     * @param {PromotionTargetFindUniqueArgs} args - Arguments to find a PromotionTarget
     * @example
     * // Get one PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionTargetFindUniqueArgs>(args: SelectSubset<T, PromotionTargetFindUniqueArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromotionTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionTargetFindUniqueOrThrowArgs} args - Arguments to find a PromotionTarget
     * @example
     * // Get one PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromotionTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetFindFirstArgs} args - Arguments to find a PromotionTarget
     * @example
     * // Get one PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionTargetFindFirstArgs>(args?: SelectSubset<T, PromotionTargetFindFirstArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromotionTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetFindFirstOrThrowArgs} args - Arguments to find a PromotionTarget
     * @example
     * // Get one PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromotionTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromotionTargets
     * const promotionTargets = await prisma.promotionTarget.findMany()
     * 
     * // Get first 10 PromotionTargets
     * const promotionTargets = await prisma.promotionTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionTargetWithIdOnly = await prisma.promotionTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionTargetFindManyArgs>(args?: SelectSubset<T, PromotionTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromotionTarget.
     * @param {PromotionTargetCreateArgs} args - Arguments to create a PromotionTarget.
     * @example
     * // Create one PromotionTarget
     * const PromotionTarget = await prisma.promotionTarget.create({
     *   data: {
     *     // ... data to create a PromotionTarget
     *   }
     * })
     * 
     */
    create<T extends PromotionTargetCreateArgs>(args: SelectSubset<T, PromotionTargetCreateArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromotionTargets.
     * @param {PromotionTargetCreateManyArgs} args - Arguments to create many PromotionTargets.
     * @example
     * // Create many PromotionTargets
     * const promotionTarget = await prisma.promotionTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionTargetCreateManyArgs>(args?: SelectSubset<T, PromotionTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromotionTargets and returns the data saved in the database.
     * @param {PromotionTargetCreateManyAndReturnArgs} args - Arguments to create many PromotionTargets.
     * @example
     * // Create many PromotionTargets
     * const promotionTarget = await prisma.promotionTarget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromotionTargets and only return the `id`
     * const promotionTargetWithIdOnly = await prisma.promotionTarget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionTargetCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromotionTarget.
     * @param {PromotionTargetDeleteArgs} args - Arguments to delete one PromotionTarget.
     * @example
     * // Delete one PromotionTarget
     * const PromotionTarget = await prisma.promotionTarget.delete({
     *   where: {
     *     // ... filter to delete one PromotionTarget
     *   }
     * })
     * 
     */
    delete<T extends PromotionTargetDeleteArgs>(args: SelectSubset<T, PromotionTargetDeleteArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromotionTarget.
     * @param {PromotionTargetUpdateArgs} args - Arguments to update one PromotionTarget.
     * @example
     * // Update one PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionTargetUpdateArgs>(args: SelectSubset<T, PromotionTargetUpdateArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromotionTargets.
     * @param {PromotionTargetDeleteManyArgs} args - Arguments to filter PromotionTargets to delete.
     * @example
     * // Delete a few PromotionTargets
     * const { count } = await prisma.promotionTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionTargetDeleteManyArgs>(args?: SelectSubset<T, PromotionTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromotionTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromotionTargets
     * const promotionTarget = await prisma.promotionTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionTargetUpdateManyArgs>(args: SelectSubset<T, PromotionTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromotionTargets and returns the data updated in the database.
     * @param {PromotionTargetUpdateManyAndReturnArgs} args - Arguments to update many PromotionTargets.
     * @example
     * // Update many PromotionTargets
     * const promotionTarget = await prisma.promotionTarget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromotionTargets and only return the `id`
     * const promotionTargetWithIdOnly = await prisma.promotionTarget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromotionTargetUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromotionTarget.
     * @param {PromotionTargetUpsertArgs} args - Arguments to update or create a PromotionTarget.
     * @example
     * // Update or create a PromotionTarget
     * const promotionTarget = await prisma.promotionTarget.upsert({
     *   create: {
     *     // ... data to create a PromotionTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromotionTarget we want to update
     *   }
     * })
     */
    upsert<T extends PromotionTargetUpsertArgs>(args: SelectSubset<T, PromotionTargetUpsertArgs<ExtArgs>>): Prisma__PromotionTargetClient<$Result.GetResult<Prisma.$PromotionTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromotionTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetCountArgs} args - Arguments to filter PromotionTargets to count.
     * @example
     * // Count the number of PromotionTargets
     * const count = await prisma.promotionTarget.count({
     *   where: {
     *     // ... the filter for the PromotionTargets we want to count
     *   }
     * })
    **/
    count<T extends PromotionTargetCountArgs>(
      args?: Subset<T, PromotionTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromotionTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionTargetAggregateArgs>(args: Subset<T, PromotionTargetAggregateArgs>): Prisma.PrismaPromise<GetPromotionTargetAggregateType<T>>

    /**
     * Group by PromotionTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionTargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionTargetGroupByArgs['orderBy'] }
        : { orderBy?: PromotionTargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromotionTarget model
   */
  readonly fields: PromotionTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromotionTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotion<T extends PromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotionDefaultArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromotionTarget model
   */
  interface PromotionTargetFieldRefs {
    readonly id: FieldRef<"PromotionTarget", 'String'>
    readonly scope: FieldRef<"PromotionTarget", 'PromotionScope'>
    readonly value: FieldRef<"PromotionTarget", 'String'>
    readonly isExclusion: FieldRef<"PromotionTarget", 'Boolean'>
    readonly promotionId: FieldRef<"PromotionTarget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PromotionTarget findUnique
   */
  export type PromotionTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter, which PromotionTarget to fetch.
     */
    where: PromotionTargetWhereUniqueInput
  }

  /**
   * PromotionTarget findUniqueOrThrow
   */
  export type PromotionTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter, which PromotionTarget to fetch.
     */
    where: PromotionTargetWhereUniqueInput
  }

  /**
   * PromotionTarget findFirst
   */
  export type PromotionTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter, which PromotionTarget to fetch.
     */
    where?: PromotionTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionTargets to fetch.
     */
    orderBy?: PromotionTargetOrderByWithRelationInput | PromotionTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionTargets.
     */
    cursor?: PromotionTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionTargets.
     */
    distinct?: PromotionTargetScalarFieldEnum | PromotionTargetScalarFieldEnum[]
  }

  /**
   * PromotionTarget findFirstOrThrow
   */
  export type PromotionTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter, which PromotionTarget to fetch.
     */
    where?: PromotionTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionTargets to fetch.
     */
    orderBy?: PromotionTargetOrderByWithRelationInput | PromotionTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionTargets.
     */
    cursor?: PromotionTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionTargets.
     */
    distinct?: PromotionTargetScalarFieldEnum | PromotionTargetScalarFieldEnum[]
  }

  /**
   * PromotionTarget findMany
   */
  export type PromotionTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter, which PromotionTargets to fetch.
     */
    where?: PromotionTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionTargets to fetch.
     */
    orderBy?: PromotionTargetOrderByWithRelationInput | PromotionTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromotionTargets.
     */
    cursor?: PromotionTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionTargets.
     */
    distinct?: PromotionTargetScalarFieldEnum | PromotionTargetScalarFieldEnum[]
  }

  /**
   * PromotionTarget create
   */
  export type PromotionTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a PromotionTarget.
     */
    data: XOR<PromotionTargetCreateInput, PromotionTargetUncheckedCreateInput>
  }

  /**
   * PromotionTarget createMany
   */
  export type PromotionTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromotionTargets.
     */
    data: PromotionTargetCreateManyInput | PromotionTargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromotionTarget createManyAndReturn
   */
  export type PromotionTargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * The data used to create many PromotionTargets.
     */
    data: PromotionTargetCreateManyInput | PromotionTargetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromotionTarget update
   */
  export type PromotionTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a PromotionTarget.
     */
    data: XOR<PromotionTargetUpdateInput, PromotionTargetUncheckedUpdateInput>
    /**
     * Choose, which PromotionTarget to update.
     */
    where: PromotionTargetWhereUniqueInput
  }

  /**
   * PromotionTarget updateMany
   */
  export type PromotionTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromotionTargets.
     */
    data: XOR<PromotionTargetUpdateManyMutationInput, PromotionTargetUncheckedUpdateManyInput>
    /**
     * Filter which PromotionTargets to update
     */
    where?: PromotionTargetWhereInput
    /**
     * Limit how many PromotionTargets to update.
     */
    limit?: number
  }

  /**
   * PromotionTarget updateManyAndReturn
   */
  export type PromotionTargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * The data used to update PromotionTargets.
     */
    data: XOR<PromotionTargetUpdateManyMutationInput, PromotionTargetUncheckedUpdateManyInput>
    /**
     * Filter which PromotionTargets to update
     */
    where?: PromotionTargetWhereInput
    /**
     * Limit how many PromotionTargets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromotionTarget upsert
   */
  export type PromotionTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the PromotionTarget to update in case it exists.
     */
    where: PromotionTargetWhereUniqueInput
    /**
     * In case the PromotionTarget found by the `where` argument doesn't exist, create a new PromotionTarget with this data.
     */
    create: XOR<PromotionTargetCreateInput, PromotionTargetUncheckedCreateInput>
    /**
     * In case the PromotionTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionTargetUpdateInput, PromotionTargetUncheckedUpdateInput>
  }

  /**
   * PromotionTarget delete
   */
  export type PromotionTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
    /**
     * Filter which PromotionTarget to delete.
     */
    where: PromotionTargetWhereUniqueInput
  }

  /**
   * PromotionTarget deleteMany
   */
  export type PromotionTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionTargets to delete
     */
    where?: PromotionTargetWhereInput
    /**
     * Limit how many PromotionTargets to delete.
     */
    limit?: number
  }

  /**
   * PromotionTarget without action
   */
  export type PromotionTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionTarget
     */
    select?: PromotionTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromotionTarget
     */
    omit?: PromotionTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionTargetInclude<ExtArgs> | null
  }


  /**
   * Model ProductSyncFile
   */

  export type AggregateProductSyncFile = {
    _count: ProductSyncFileCountAggregateOutputType | null
    _min: ProductSyncFileMinAggregateOutputType | null
    _max: ProductSyncFileMaxAggregateOutputType | null
  }

  export type ProductSyncFileMinAggregateOutputType = {
    id: string | null
    filePath: string | null
    isProcessed: boolean | null
    createdAt: Date | null
  }

  export type ProductSyncFileMaxAggregateOutputType = {
    id: string | null
    filePath: string | null
    isProcessed: boolean | null
    createdAt: Date | null
  }

  export type ProductSyncFileCountAggregateOutputType = {
    id: number
    filePath: number
    isProcessed: number
    createdAt: number
    _all: number
  }


  export type ProductSyncFileMinAggregateInputType = {
    id?: true
    filePath?: true
    isProcessed?: true
    createdAt?: true
  }

  export type ProductSyncFileMaxAggregateInputType = {
    id?: true
    filePath?: true
    isProcessed?: true
    createdAt?: true
  }

  export type ProductSyncFileCountAggregateInputType = {
    id?: true
    filePath?: true
    isProcessed?: true
    createdAt?: true
    _all?: true
  }

  export type ProductSyncFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSyncFile to aggregate.
     */
    where?: ProductSyncFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSyncFiles to fetch.
     */
    orderBy?: ProductSyncFileOrderByWithRelationInput | ProductSyncFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSyncFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSyncFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSyncFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSyncFiles
    **/
    _count?: true | ProductSyncFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSyncFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSyncFileMaxAggregateInputType
  }

  export type GetProductSyncFileAggregateType<T extends ProductSyncFileAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSyncFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSyncFile[P]>
      : GetScalarType<T[P], AggregateProductSyncFile[P]>
  }




  export type ProductSyncFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSyncFileWhereInput
    orderBy?: ProductSyncFileOrderByWithAggregationInput | ProductSyncFileOrderByWithAggregationInput[]
    by: ProductSyncFileScalarFieldEnum[] | ProductSyncFileScalarFieldEnum
    having?: ProductSyncFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSyncFileCountAggregateInputType | true
    _min?: ProductSyncFileMinAggregateInputType
    _max?: ProductSyncFileMaxAggregateInputType
  }

  export type ProductSyncFileGroupByOutputType = {
    id: string
    filePath: string
    isProcessed: boolean
    createdAt: Date
    _count: ProductSyncFileCountAggregateOutputType | null
    _min: ProductSyncFileMinAggregateOutputType | null
    _max: ProductSyncFileMaxAggregateOutputType | null
  }

  type GetProductSyncFileGroupByPayload<T extends ProductSyncFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSyncFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSyncFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSyncFileGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSyncFileGroupByOutputType[P]>
        }
      >
    >


  export type ProductSyncFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
    isProcessed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productSyncFile"]>

  export type ProductSyncFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
    isProcessed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productSyncFile"]>

  export type ProductSyncFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
    isProcessed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productSyncFile"]>

  export type ProductSyncFileSelectScalar = {
    id?: boolean
    filePath?: boolean
    isProcessed?: boolean
    createdAt?: boolean
  }

  export type ProductSyncFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filePath" | "isProcessed" | "createdAt", ExtArgs["result"]["productSyncFile"]>

  export type $ProductSyncFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSyncFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filePath: string
      isProcessed: boolean
      createdAt: Date
    }, ExtArgs["result"]["productSyncFile"]>
    composites: {}
  }

  type ProductSyncFileGetPayload<S extends boolean | null | undefined | ProductSyncFileDefaultArgs> = $Result.GetResult<Prisma.$ProductSyncFilePayload, S>

  type ProductSyncFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSyncFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSyncFileCountAggregateInputType | true
    }

  export interface ProductSyncFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSyncFile'], meta: { name: 'ProductSyncFile' } }
    /**
     * Find zero or one ProductSyncFile that matches the filter.
     * @param {ProductSyncFileFindUniqueArgs} args - Arguments to find a ProductSyncFile
     * @example
     * // Get one ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSyncFileFindUniqueArgs>(args: SelectSubset<T, ProductSyncFileFindUniqueArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSyncFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSyncFileFindUniqueOrThrowArgs} args - Arguments to find a ProductSyncFile
     * @example
     * // Get one ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSyncFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSyncFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSyncFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileFindFirstArgs} args - Arguments to find a ProductSyncFile
     * @example
     * // Get one ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSyncFileFindFirstArgs>(args?: SelectSubset<T, ProductSyncFileFindFirstArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSyncFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileFindFirstOrThrowArgs} args - Arguments to find a ProductSyncFile
     * @example
     * // Get one ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSyncFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSyncFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSyncFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSyncFiles
     * const productSyncFiles = await prisma.productSyncFile.findMany()
     * 
     * // Get first 10 ProductSyncFiles
     * const productSyncFiles = await prisma.productSyncFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSyncFileWithIdOnly = await prisma.productSyncFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSyncFileFindManyArgs>(args?: SelectSubset<T, ProductSyncFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSyncFile.
     * @param {ProductSyncFileCreateArgs} args - Arguments to create a ProductSyncFile.
     * @example
     * // Create one ProductSyncFile
     * const ProductSyncFile = await prisma.productSyncFile.create({
     *   data: {
     *     // ... data to create a ProductSyncFile
     *   }
     * })
     * 
     */
    create<T extends ProductSyncFileCreateArgs>(args: SelectSubset<T, ProductSyncFileCreateArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSyncFiles.
     * @param {ProductSyncFileCreateManyArgs} args - Arguments to create many ProductSyncFiles.
     * @example
     * // Create many ProductSyncFiles
     * const productSyncFile = await prisma.productSyncFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSyncFileCreateManyArgs>(args?: SelectSubset<T, ProductSyncFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSyncFiles and returns the data saved in the database.
     * @param {ProductSyncFileCreateManyAndReturnArgs} args - Arguments to create many ProductSyncFiles.
     * @example
     * // Create many ProductSyncFiles
     * const productSyncFile = await prisma.productSyncFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSyncFiles and only return the `id`
     * const productSyncFileWithIdOnly = await prisma.productSyncFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSyncFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSyncFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSyncFile.
     * @param {ProductSyncFileDeleteArgs} args - Arguments to delete one ProductSyncFile.
     * @example
     * // Delete one ProductSyncFile
     * const ProductSyncFile = await prisma.productSyncFile.delete({
     *   where: {
     *     // ... filter to delete one ProductSyncFile
     *   }
     * })
     * 
     */
    delete<T extends ProductSyncFileDeleteArgs>(args: SelectSubset<T, ProductSyncFileDeleteArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSyncFile.
     * @param {ProductSyncFileUpdateArgs} args - Arguments to update one ProductSyncFile.
     * @example
     * // Update one ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSyncFileUpdateArgs>(args: SelectSubset<T, ProductSyncFileUpdateArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSyncFiles.
     * @param {ProductSyncFileDeleteManyArgs} args - Arguments to filter ProductSyncFiles to delete.
     * @example
     * // Delete a few ProductSyncFiles
     * const { count } = await prisma.productSyncFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSyncFileDeleteManyArgs>(args?: SelectSubset<T, ProductSyncFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSyncFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSyncFiles
     * const productSyncFile = await prisma.productSyncFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSyncFileUpdateManyArgs>(args: SelectSubset<T, ProductSyncFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSyncFiles and returns the data updated in the database.
     * @param {ProductSyncFileUpdateManyAndReturnArgs} args - Arguments to update many ProductSyncFiles.
     * @example
     * // Update many ProductSyncFiles
     * const productSyncFile = await prisma.productSyncFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSyncFiles and only return the `id`
     * const productSyncFileWithIdOnly = await prisma.productSyncFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductSyncFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSyncFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSyncFile.
     * @param {ProductSyncFileUpsertArgs} args - Arguments to update or create a ProductSyncFile.
     * @example
     * // Update or create a ProductSyncFile
     * const productSyncFile = await prisma.productSyncFile.upsert({
     *   create: {
     *     // ... data to create a ProductSyncFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSyncFile we want to update
     *   }
     * })
     */
    upsert<T extends ProductSyncFileUpsertArgs>(args: SelectSubset<T, ProductSyncFileUpsertArgs<ExtArgs>>): Prisma__ProductSyncFileClient<$Result.GetResult<Prisma.$ProductSyncFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSyncFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileCountArgs} args - Arguments to filter ProductSyncFiles to count.
     * @example
     * // Count the number of ProductSyncFiles
     * const count = await prisma.productSyncFile.count({
     *   where: {
     *     // ... the filter for the ProductSyncFiles we want to count
     *   }
     * })
    **/
    count<T extends ProductSyncFileCountArgs>(
      args?: Subset<T, ProductSyncFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSyncFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSyncFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSyncFileAggregateArgs>(args: Subset<T, ProductSyncFileAggregateArgs>): Prisma.PrismaPromise<GetProductSyncFileAggregateType<T>>

    /**
     * Group by ProductSyncFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSyncFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSyncFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSyncFileGroupByArgs['orderBy'] }
        : { orderBy?: ProductSyncFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSyncFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSyncFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSyncFile model
   */
  readonly fields: ProductSyncFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSyncFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSyncFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSyncFile model
   */
  interface ProductSyncFileFieldRefs {
    readonly id: FieldRef<"ProductSyncFile", 'String'>
    readonly filePath: FieldRef<"ProductSyncFile", 'String'>
    readonly isProcessed: FieldRef<"ProductSyncFile", 'Boolean'>
    readonly createdAt: FieldRef<"ProductSyncFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductSyncFile findUnique
   */
  export type ProductSyncFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter, which ProductSyncFile to fetch.
     */
    where: ProductSyncFileWhereUniqueInput
  }

  /**
   * ProductSyncFile findUniqueOrThrow
   */
  export type ProductSyncFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter, which ProductSyncFile to fetch.
     */
    where: ProductSyncFileWhereUniqueInput
  }

  /**
   * ProductSyncFile findFirst
   */
  export type ProductSyncFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter, which ProductSyncFile to fetch.
     */
    where?: ProductSyncFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSyncFiles to fetch.
     */
    orderBy?: ProductSyncFileOrderByWithRelationInput | ProductSyncFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSyncFiles.
     */
    cursor?: ProductSyncFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSyncFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSyncFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSyncFiles.
     */
    distinct?: ProductSyncFileScalarFieldEnum | ProductSyncFileScalarFieldEnum[]
  }

  /**
   * ProductSyncFile findFirstOrThrow
   */
  export type ProductSyncFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter, which ProductSyncFile to fetch.
     */
    where?: ProductSyncFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSyncFiles to fetch.
     */
    orderBy?: ProductSyncFileOrderByWithRelationInput | ProductSyncFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSyncFiles.
     */
    cursor?: ProductSyncFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSyncFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSyncFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSyncFiles.
     */
    distinct?: ProductSyncFileScalarFieldEnum | ProductSyncFileScalarFieldEnum[]
  }

  /**
   * ProductSyncFile findMany
   */
  export type ProductSyncFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter, which ProductSyncFiles to fetch.
     */
    where?: ProductSyncFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSyncFiles to fetch.
     */
    orderBy?: ProductSyncFileOrderByWithRelationInput | ProductSyncFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSyncFiles.
     */
    cursor?: ProductSyncFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSyncFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSyncFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSyncFiles.
     */
    distinct?: ProductSyncFileScalarFieldEnum | ProductSyncFileScalarFieldEnum[]
  }

  /**
   * ProductSyncFile create
   */
  export type ProductSyncFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductSyncFile.
     */
    data: XOR<ProductSyncFileCreateInput, ProductSyncFileUncheckedCreateInput>
  }

  /**
   * ProductSyncFile createMany
   */
  export type ProductSyncFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSyncFiles.
     */
    data: ProductSyncFileCreateManyInput | ProductSyncFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSyncFile createManyAndReturn
   */
  export type ProductSyncFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSyncFiles.
     */
    data: ProductSyncFileCreateManyInput | ProductSyncFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSyncFile update
   */
  export type ProductSyncFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductSyncFile.
     */
    data: XOR<ProductSyncFileUpdateInput, ProductSyncFileUncheckedUpdateInput>
    /**
     * Choose, which ProductSyncFile to update.
     */
    where: ProductSyncFileWhereUniqueInput
  }

  /**
   * ProductSyncFile updateMany
   */
  export type ProductSyncFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSyncFiles.
     */
    data: XOR<ProductSyncFileUpdateManyMutationInput, ProductSyncFileUncheckedUpdateManyInput>
    /**
     * Filter which ProductSyncFiles to update
     */
    where?: ProductSyncFileWhereInput
    /**
     * Limit how many ProductSyncFiles to update.
     */
    limit?: number
  }

  /**
   * ProductSyncFile updateManyAndReturn
   */
  export type ProductSyncFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * The data used to update ProductSyncFiles.
     */
    data: XOR<ProductSyncFileUpdateManyMutationInput, ProductSyncFileUncheckedUpdateManyInput>
    /**
     * Filter which ProductSyncFiles to update
     */
    where?: ProductSyncFileWhereInput
    /**
     * Limit how many ProductSyncFiles to update.
     */
    limit?: number
  }

  /**
   * ProductSyncFile upsert
   */
  export type ProductSyncFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductSyncFile to update in case it exists.
     */
    where: ProductSyncFileWhereUniqueInput
    /**
     * In case the ProductSyncFile found by the `where` argument doesn't exist, create a new ProductSyncFile with this data.
     */
    create: XOR<ProductSyncFileCreateInput, ProductSyncFileUncheckedCreateInput>
    /**
     * In case the ProductSyncFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSyncFileUpdateInput, ProductSyncFileUncheckedUpdateInput>
  }

  /**
   * ProductSyncFile delete
   */
  export type ProductSyncFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
    /**
     * Filter which ProductSyncFile to delete.
     */
    where: ProductSyncFileWhereUniqueInput
  }

  /**
   * ProductSyncFile deleteMany
   */
  export type ProductSyncFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSyncFiles to delete
     */
    where?: ProductSyncFileWhereInput
    /**
     * Limit how many ProductSyncFiles to delete.
     */
    limit?: number
  }

  /**
   * ProductSyncFile without action
   */
  export type ProductSyncFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSyncFile
     */
    select?: ProductSyncFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSyncFile
     */
    omit?: ProductSyncFileOmit<ExtArgs> | null
  }


  /**
   * Model MotorcycleImage
   */

  export type AggregateMotorcycleImage = {
    _count: MotorcycleImageCountAggregateOutputType | null
    _avg: MotorcycleImageAvgAggregateOutputType | null
    _sum: MotorcycleImageSumAggregateOutputType | null
    _min: MotorcycleImageMinAggregateOutputType | null
    _max: MotorcycleImageMaxAggregateOutputType | null
  }

  export type MotorcycleImageAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type MotorcycleImageSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type MotorcycleImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    displayOrder: number | null
    motorcycleId: string | null
  }

  export type MotorcycleImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    displayOrder: number | null
    motorcycleId: string | null
  }

  export type MotorcycleImageCountAggregateOutputType = {
    id: number
    url: number
    displayOrder: number
    motorcycleId: number
    _all: number
  }


  export type MotorcycleImageAvgAggregateInputType = {
    displayOrder?: true
  }

  export type MotorcycleImageSumAggregateInputType = {
    displayOrder?: true
  }

  export type MotorcycleImageMinAggregateInputType = {
    id?: true
    url?: true
    displayOrder?: true
    motorcycleId?: true
  }

  export type MotorcycleImageMaxAggregateInputType = {
    id?: true
    url?: true
    displayOrder?: true
    motorcycleId?: true
  }

  export type MotorcycleImageCountAggregateInputType = {
    id?: true
    url?: true
    displayOrder?: true
    motorcycleId?: true
    _all?: true
  }

  export type MotorcycleImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MotorcycleImage to aggregate.
     */
    where?: MotorcycleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MotorcycleImages to fetch.
     */
    orderBy?: MotorcycleImageOrderByWithRelationInput | MotorcycleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorcycleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MotorcycleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MotorcycleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MotorcycleImages
    **/
    _count?: true | MotorcycleImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorcycleImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorcycleImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorcycleImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorcycleImageMaxAggregateInputType
  }

  export type GetMotorcycleImageAggregateType<T extends MotorcycleImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMotorcycleImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotorcycleImage[P]>
      : GetScalarType<T[P], AggregateMotorcycleImage[P]>
  }




  export type MotorcycleImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorcycleImageWhereInput
    orderBy?: MotorcycleImageOrderByWithAggregationInput | MotorcycleImageOrderByWithAggregationInput[]
    by: MotorcycleImageScalarFieldEnum[] | MotorcycleImageScalarFieldEnum
    having?: MotorcycleImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorcycleImageCountAggregateInputType | true
    _avg?: MotorcycleImageAvgAggregateInputType
    _sum?: MotorcycleImageSumAggregateInputType
    _min?: MotorcycleImageMinAggregateInputType
    _max?: MotorcycleImageMaxAggregateInputType
  }

  export type MotorcycleImageGroupByOutputType = {
    id: string
    url: string
    displayOrder: number
    motorcycleId: string
    _count: MotorcycleImageCountAggregateOutputType | null
    _avg: MotorcycleImageAvgAggregateOutputType | null
    _sum: MotorcycleImageSumAggregateOutputType | null
    _min: MotorcycleImageMinAggregateOutputType | null
    _max: MotorcycleImageMaxAggregateOutputType | null
  }

  type GetMotorcycleImageGroupByPayload<T extends MotorcycleImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorcycleImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorcycleImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorcycleImageGroupByOutputType[P]>
            : GetScalarType<T[P], MotorcycleImageGroupByOutputType[P]>
        }
      >
    >


  export type MotorcycleImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    displayOrder?: boolean
    motorcycleId?: boolean
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorcycleImage"]>

  export type MotorcycleImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    displayOrder?: boolean
    motorcycleId?: boolean
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorcycleImage"]>

  export type MotorcycleImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    displayOrder?: boolean
    motorcycleId?: boolean
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorcycleImage"]>

  export type MotorcycleImageSelectScalar = {
    id?: boolean
    url?: boolean
    displayOrder?: boolean
    motorcycleId?: boolean
  }

  export type MotorcycleImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "displayOrder" | "motorcycleId", ExtArgs["result"]["motorcycleImage"]>
  export type MotorcycleImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }
  export type MotorcycleImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }
  export type MotorcycleImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorcycle?: boolean | MotorcycleDefaultArgs<ExtArgs>
  }

  export type $MotorcycleImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MotorcycleImage"
    objects: {
      motorcycle: Prisma.$MotorcyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      displayOrder: number
      motorcycleId: string
    }, ExtArgs["result"]["motorcycleImage"]>
    composites: {}
  }

  type MotorcycleImageGetPayload<S extends boolean | null | undefined | MotorcycleImageDefaultArgs> = $Result.GetResult<Prisma.$MotorcycleImagePayload, S>

  type MotorcycleImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorcycleImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorcycleImageCountAggregateInputType | true
    }

  export interface MotorcycleImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MotorcycleImage'], meta: { name: 'MotorcycleImage' } }
    /**
     * Find zero or one MotorcycleImage that matches the filter.
     * @param {MotorcycleImageFindUniqueArgs} args - Arguments to find a MotorcycleImage
     * @example
     * // Get one MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorcycleImageFindUniqueArgs>(args: SelectSubset<T, MotorcycleImageFindUniqueArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MotorcycleImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorcycleImageFindUniqueOrThrowArgs} args - Arguments to find a MotorcycleImage
     * @example
     * // Get one MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorcycleImageFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorcycleImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MotorcycleImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageFindFirstArgs} args - Arguments to find a MotorcycleImage
     * @example
     * // Get one MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorcycleImageFindFirstArgs>(args?: SelectSubset<T, MotorcycleImageFindFirstArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MotorcycleImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageFindFirstOrThrowArgs} args - Arguments to find a MotorcycleImage
     * @example
     * // Get one MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorcycleImageFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorcycleImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MotorcycleImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MotorcycleImages
     * const motorcycleImages = await prisma.motorcycleImage.findMany()
     * 
     * // Get first 10 MotorcycleImages
     * const motorcycleImages = await prisma.motorcycleImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motorcycleImageWithIdOnly = await prisma.motorcycleImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotorcycleImageFindManyArgs>(args?: SelectSubset<T, MotorcycleImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MotorcycleImage.
     * @param {MotorcycleImageCreateArgs} args - Arguments to create a MotorcycleImage.
     * @example
     * // Create one MotorcycleImage
     * const MotorcycleImage = await prisma.motorcycleImage.create({
     *   data: {
     *     // ... data to create a MotorcycleImage
     *   }
     * })
     * 
     */
    create<T extends MotorcycleImageCreateArgs>(args: SelectSubset<T, MotorcycleImageCreateArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MotorcycleImages.
     * @param {MotorcycleImageCreateManyArgs} args - Arguments to create many MotorcycleImages.
     * @example
     * // Create many MotorcycleImages
     * const motorcycleImage = await prisma.motorcycleImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorcycleImageCreateManyArgs>(args?: SelectSubset<T, MotorcycleImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MotorcycleImages and returns the data saved in the database.
     * @param {MotorcycleImageCreateManyAndReturnArgs} args - Arguments to create many MotorcycleImages.
     * @example
     * // Create many MotorcycleImages
     * const motorcycleImage = await prisma.motorcycleImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MotorcycleImages and only return the `id`
     * const motorcycleImageWithIdOnly = await prisma.motorcycleImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorcycleImageCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorcycleImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MotorcycleImage.
     * @param {MotorcycleImageDeleteArgs} args - Arguments to delete one MotorcycleImage.
     * @example
     * // Delete one MotorcycleImage
     * const MotorcycleImage = await prisma.motorcycleImage.delete({
     *   where: {
     *     // ... filter to delete one MotorcycleImage
     *   }
     * })
     * 
     */
    delete<T extends MotorcycleImageDeleteArgs>(args: SelectSubset<T, MotorcycleImageDeleteArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MotorcycleImage.
     * @param {MotorcycleImageUpdateArgs} args - Arguments to update one MotorcycleImage.
     * @example
     * // Update one MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorcycleImageUpdateArgs>(args: SelectSubset<T, MotorcycleImageUpdateArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MotorcycleImages.
     * @param {MotorcycleImageDeleteManyArgs} args - Arguments to filter MotorcycleImages to delete.
     * @example
     * // Delete a few MotorcycleImages
     * const { count } = await prisma.motorcycleImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorcycleImageDeleteManyArgs>(args?: SelectSubset<T, MotorcycleImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MotorcycleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MotorcycleImages
     * const motorcycleImage = await prisma.motorcycleImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorcycleImageUpdateManyArgs>(args: SelectSubset<T, MotorcycleImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MotorcycleImages and returns the data updated in the database.
     * @param {MotorcycleImageUpdateManyAndReturnArgs} args - Arguments to update many MotorcycleImages.
     * @example
     * // Update many MotorcycleImages
     * const motorcycleImage = await prisma.motorcycleImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MotorcycleImages and only return the `id`
     * const motorcycleImageWithIdOnly = await prisma.motorcycleImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotorcycleImageUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorcycleImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MotorcycleImage.
     * @param {MotorcycleImageUpsertArgs} args - Arguments to update or create a MotorcycleImage.
     * @example
     * // Update or create a MotorcycleImage
     * const motorcycleImage = await prisma.motorcycleImage.upsert({
     *   create: {
     *     // ... data to create a MotorcycleImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MotorcycleImage we want to update
     *   }
     * })
     */
    upsert<T extends MotorcycleImageUpsertArgs>(args: SelectSubset<T, MotorcycleImageUpsertArgs<ExtArgs>>): Prisma__MotorcycleImageClient<$Result.GetResult<Prisma.$MotorcycleImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MotorcycleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageCountArgs} args - Arguments to filter MotorcycleImages to count.
     * @example
     * // Count the number of MotorcycleImages
     * const count = await prisma.motorcycleImage.count({
     *   where: {
     *     // ... the filter for the MotorcycleImages we want to count
     *   }
     * })
    **/
    count<T extends MotorcycleImageCountArgs>(
      args?: Subset<T, MotorcycleImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorcycleImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MotorcycleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotorcycleImageAggregateArgs>(args: Subset<T, MotorcycleImageAggregateArgs>): Prisma.PrismaPromise<GetMotorcycleImageAggregateType<T>>

    /**
     * Group by MotorcycleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorcycleImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotorcycleImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorcycleImageGroupByArgs['orderBy'] }
        : { orderBy?: MotorcycleImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotorcycleImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorcycleImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MotorcycleImage model
   */
  readonly fields: MotorcycleImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MotorcycleImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorcycleImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motorcycle<T extends MotorcycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MotorcycleDefaultArgs<ExtArgs>>): Prisma__MotorcycleClient<$Result.GetResult<Prisma.$MotorcyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MotorcycleImage model
   */
  interface MotorcycleImageFieldRefs {
    readonly id: FieldRef<"MotorcycleImage", 'String'>
    readonly url: FieldRef<"MotorcycleImage", 'String'>
    readonly displayOrder: FieldRef<"MotorcycleImage", 'Int'>
    readonly motorcycleId: FieldRef<"MotorcycleImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MotorcycleImage findUnique
   */
  export type MotorcycleImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter, which MotorcycleImage to fetch.
     */
    where: MotorcycleImageWhereUniqueInput
  }

  /**
   * MotorcycleImage findUniqueOrThrow
   */
  export type MotorcycleImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter, which MotorcycleImage to fetch.
     */
    where: MotorcycleImageWhereUniqueInput
  }

  /**
   * MotorcycleImage findFirst
   */
  export type MotorcycleImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter, which MotorcycleImage to fetch.
     */
    where?: MotorcycleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MotorcycleImages to fetch.
     */
    orderBy?: MotorcycleImageOrderByWithRelationInput | MotorcycleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MotorcycleImages.
     */
    cursor?: MotorcycleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MotorcycleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MotorcycleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MotorcycleImages.
     */
    distinct?: MotorcycleImageScalarFieldEnum | MotorcycleImageScalarFieldEnum[]
  }

  /**
   * MotorcycleImage findFirstOrThrow
   */
  export type MotorcycleImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter, which MotorcycleImage to fetch.
     */
    where?: MotorcycleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MotorcycleImages to fetch.
     */
    orderBy?: MotorcycleImageOrderByWithRelationInput | MotorcycleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MotorcycleImages.
     */
    cursor?: MotorcycleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MotorcycleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MotorcycleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MotorcycleImages.
     */
    distinct?: MotorcycleImageScalarFieldEnum | MotorcycleImageScalarFieldEnum[]
  }

  /**
   * MotorcycleImage findMany
   */
  export type MotorcycleImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter, which MotorcycleImages to fetch.
     */
    where?: MotorcycleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MotorcycleImages to fetch.
     */
    orderBy?: MotorcycleImageOrderByWithRelationInput | MotorcycleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MotorcycleImages.
     */
    cursor?: MotorcycleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MotorcycleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MotorcycleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MotorcycleImages.
     */
    distinct?: MotorcycleImageScalarFieldEnum | MotorcycleImageScalarFieldEnum[]
  }

  /**
   * MotorcycleImage create
   */
  export type MotorcycleImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * The data needed to create a MotorcycleImage.
     */
    data: XOR<MotorcycleImageCreateInput, MotorcycleImageUncheckedCreateInput>
  }

  /**
   * MotorcycleImage createMany
   */
  export type MotorcycleImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MotorcycleImages.
     */
    data: MotorcycleImageCreateManyInput | MotorcycleImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MotorcycleImage createManyAndReturn
   */
  export type MotorcycleImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * The data used to create many MotorcycleImages.
     */
    data: MotorcycleImageCreateManyInput | MotorcycleImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MotorcycleImage update
   */
  export type MotorcycleImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * The data needed to update a MotorcycleImage.
     */
    data: XOR<MotorcycleImageUpdateInput, MotorcycleImageUncheckedUpdateInput>
    /**
     * Choose, which MotorcycleImage to update.
     */
    where: MotorcycleImageWhereUniqueInput
  }

  /**
   * MotorcycleImage updateMany
   */
  export type MotorcycleImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MotorcycleImages.
     */
    data: XOR<MotorcycleImageUpdateManyMutationInput, MotorcycleImageUncheckedUpdateManyInput>
    /**
     * Filter which MotorcycleImages to update
     */
    where?: MotorcycleImageWhereInput
    /**
     * Limit how many MotorcycleImages to update.
     */
    limit?: number
  }

  /**
   * MotorcycleImage updateManyAndReturn
   */
  export type MotorcycleImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * The data used to update MotorcycleImages.
     */
    data: XOR<MotorcycleImageUpdateManyMutationInput, MotorcycleImageUncheckedUpdateManyInput>
    /**
     * Filter which MotorcycleImages to update
     */
    where?: MotorcycleImageWhereInput
    /**
     * Limit how many MotorcycleImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MotorcycleImage upsert
   */
  export type MotorcycleImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * The filter to search for the MotorcycleImage to update in case it exists.
     */
    where: MotorcycleImageWhereUniqueInput
    /**
     * In case the MotorcycleImage found by the `where` argument doesn't exist, create a new MotorcycleImage with this data.
     */
    create: XOR<MotorcycleImageCreateInput, MotorcycleImageUncheckedCreateInput>
    /**
     * In case the MotorcycleImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorcycleImageUpdateInput, MotorcycleImageUncheckedUpdateInput>
  }

  /**
   * MotorcycleImage delete
   */
  export type MotorcycleImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
    /**
     * Filter which MotorcycleImage to delete.
     */
    where: MotorcycleImageWhereUniqueInput
  }

  /**
   * MotorcycleImage deleteMany
   */
  export type MotorcycleImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MotorcycleImages to delete
     */
    where?: MotorcycleImageWhereInput
    /**
     * Limit how many MotorcycleImages to delete.
     */
    limit?: number
  }

  /**
   * MotorcycleImage without action
   */
  export type MotorcycleImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorcycleImage
     */
    select?: MotorcycleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MotorcycleImage
     */
    omit?: MotorcycleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorcycleImageInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    category: string | null
    tags: string | null
    coverImageUrl: string | null
    status: $Enums.BlogPostStatus | null
    sourceLocale: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    category: string | null
    tags: string | null
    coverImageUrl: string | null
    status: $Enums.BlogPostStatus | null
    sourceLocale: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    category: number
    tags: number
    coverImageUrl: number
    status: number
    sourceLocale: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    category?: true
    tags?: true
    coverImageUrl?: true
    status?: true
    sourceLocale?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    category?: true
    tags?: true
    coverImageUrl?: true
    status?: true
    sourceLocale?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    category?: true
    tags?: true
    coverImageUrl?: true
    status?: true
    sourceLocale?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    category: string
    tags: string | null
    coverImageUrl: string | null
    status: $Enums.BlogPostStatus
    sourceLocale: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverImageUrl?: boolean
    status?: boolean
    sourceLocale?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translations?: boolean | BlogPost$translationsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverImageUrl?: boolean
    status?: boolean
    sourceLocale?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverImageUrl?: boolean
    status?: boolean
    sourceLocale?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverImageUrl?: boolean
    status?: boolean
    sourceLocale?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "category" | "tags" | "coverImageUrl" | "status" | "sourceLocale" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | BlogPost$translationsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      translations: Prisma.$BlogPostTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      category: string
      tags: string | null
      coverImageUrl: string | null
      status: $Enums.BlogPostStatus
      sourceLocale: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translations<T extends BlogPost$translationsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly category: FieldRef<"BlogPost", 'String'>
    readonly tags: FieldRef<"BlogPost", 'String'>
    readonly coverImageUrl: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'BlogPostStatus'>
    readonly sourceLocale: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.translations
   */
  export type BlogPost$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    where?: BlogPostTranslationWhereInput
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    cursor?: BlogPostTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostTranslation
   */

  export type AggregateBlogPostTranslation = {
    _count: BlogPostTranslationCountAggregateOutputType | null
    _min: BlogPostTranslationMinAggregateOutputType | null
    _max: BlogPostTranslationMaxAggregateOutputType | null
  }

  export type BlogPostTranslationMinAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    excerpt: string | null
    plainText: string | null
    metaTitle: string | null
    metaDescription: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostTranslationMaxAggregateOutputType = {
    id: string | null
    locale: string | null
    title: string | null
    excerpt: string | null
    plainText: string | null
    metaTitle: string | null
    metaDescription: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostTranslationCountAggregateOutputType = {
    id: number
    locale: number
    title: number
    excerpt: number
    body: number
    plainText: number
    metaTitle: number
    metaDescription: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostTranslationMinAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    excerpt?: true
    plainText?: true
    metaTitle?: true
    metaDescription?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostTranslationMaxAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    excerpt?: true
    plainText?: true
    metaTitle?: true
    metaDescription?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostTranslationCountAggregateInputType = {
    id?: true
    locale?: true
    title?: true
    excerpt?: true
    body?: true
    plainText?: true
    metaTitle?: true
    metaDescription?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTranslation to aggregate.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostTranslations
    **/
    _count?: true | BlogPostTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostTranslationMaxAggregateInputType
  }

  export type GetBlogPostTranslationAggregateType<T extends BlogPostTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostTranslation[P]>
      : GetScalarType<T[P], AggregateBlogPostTranslation[P]>
  }




  export type BlogPostTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTranslationWhereInput
    orderBy?: BlogPostTranslationOrderByWithAggregationInput | BlogPostTranslationOrderByWithAggregationInput[]
    by: BlogPostTranslationScalarFieldEnum[] | BlogPostTranslationScalarFieldEnum
    having?: BlogPostTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostTranslationCountAggregateInputType | true
    _min?: BlogPostTranslationMinAggregateInputType
    _max?: BlogPostTranslationMaxAggregateInputType
  }

  export type BlogPostTranslationGroupByOutputType = {
    id: string
    locale: string
    title: string
    excerpt: string
    body: JsonValue
    plainText: string
    metaTitle: string | null
    metaDescription: string | null
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: BlogPostTranslationCountAggregateOutputType | null
    _min: BlogPostTranslationMinAggregateOutputType | null
    _max: BlogPostTranslationMaxAggregateOutputType | null
  }

  type GetBlogPostTranslationGroupByPayload<T extends BlogPostTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostTranslationGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    plainText?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    plainText?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    plainText?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectScalar = {
    id?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    plainText?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locale" | "title" | "excerpt" | "body" | "plainText" | "metaTitle" | "metaDescription" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPostTranslation"]>
  export type BlogPostTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogPostTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type BlogPostTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $BlogPostTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostTranslation"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locale: string
      title: string
      excerpt: string
      body: Prisma.JsonValue
      plainText: string
      metaTitle: string | null
      metaDescription: string | null
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPostTranslation"]>
    composites: {}
  }

  type BlogPostTranslationGetPayload<S extends boolean | null | undefined | BlogPostTranslationDefaultArgs> = $Result.GetResult<Prisma.$BlogPostTranslationPayload, S>

  type BlogPostTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostTranslationCountAggregateInputType | true
    }

  export interface BlogPostTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostTranslation'], meta: { name: 'BlogPostTranslation' } }
    /**
     * Find zero or one BlogPostTranslation that matches the filter.
     * @param {BlogPostTranslationFindUniqueArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostTranslationFindUniqueArgs>(args: SelectSubset<T, BlogPostTranslationFindUniqueArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostTranslationFindUniqueOrThrowArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindFirstArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostTranslationFindFirstArgs>(args?: SelectSubset<T, BlogPostTranslationFindFirstArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindFirstOrThrowArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostTranslations
     * const blogPostTranslations = await prisma.blogPostTranslation.findMany()
     * 
     * // Get first 10 BlogPostTranslations
     * const blogPostTranslations = await prisma.blogPostTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostTranslationFindManyArgs>(args?: SelectSubset<T, BlogPostTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostTranslation.
     * @param {BlogPostTranslationCreateArgs} args - Arguments to create a BlogPostTranslation.
     * @example
     * // Create one BlogPostTranslation
     * const BlogPostTranslation = await prisma.blogPostTranslation.create({
     *   data: {
     *     // ... data to create a BlogPostTranslation
     *   }
     * })
     * 
     */
    create<T extends BlogPostTranslationCreateArgs>(args: SelectSubset<T, BlogPostTranslationCreateArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostTranslations.
     * @param {BlogPostTranslationCreateManyArgs} args - Arguments to create many BlogPostTranslations.
     * @example
     * // Create many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostTranslationCreateManyArgs>(args?: SelectSubset<T, BlogPostTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostTranslations and returns the data saved in the database.
     * @param {BlogPostTranslationCreateManyAndReturnArgs} args - Arguments to create many BlogPostTranslations.
     * @example
     * // Create many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostTranslations and only return the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostTranslation.
     * @param {BlogPostTranslationDeleteArgs} args - Arguments to delete one BlogPostTranslation.
     * @example
     * // Delete one BlogPostTranslation
     * const BlogPostTranslation = await prisma.blogPostTranslation.delete({
     *   where: {
     *     // ... filter to delete one BlogPostTranslation
     *   }
     * })
     * 
     */
    delete<T extends BlogPostTranslationDeleteArgs>(args: SelectSubset<T, BlogPostTranslationDeleteArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostTranslation.
     * @param {BlogPostTranslationUpdateArgs} args - Arguments to update one BlogPostTranslation.
     * @example
     * // Update one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostTranslationUpdateArgs>(args: SelectSubset<T, BlogPostTranslationUpdateArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostTranslations.
     * @param {BlogPostTranslationDeleteManyArgs} args - Arguments to filter BlogPostTranslations to delete.
     * @example
     * // Delete a few BlogPostTranslations
     * const { count } = await prisma.blogPostTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostTranslationDeleteManyArgs>(args?: SelectSubset<T, BlogPostTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostTranslationUpdateManyArgs>(args: SelectSubset<T, BlogPostTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTranslations and returns the data updated in the database.
     * @param {BlogPostTranslationUpdateManyAndReturnArgs} args - Arguments to update many BlogPostTranslations.
     * @example
     * // Update many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostTranslations and only return the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostTranslation.
     * @param {BlogPostTranslationUpsertArgs} args - Arguments to update or create a BlogPostTranslation.
     * @example
     * // Update or create a BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.upsert({
     *   create: {
     *     // ... data to create a BlogPostTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostTranslation we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostTranslationUpsertArgs>(args: SelectSubset<T, BlogPostTranslationUpsertArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationCountArgs} args - Arguments to filter BlogPostTranslations to count.
     * @example
     * // Count the number of BlogPostTranslations
     * const count = await prisma.blogPostTranslation.count({
     *   where: {
     *     // ... the filter for the BlogPostTranslations we want to count
     *   }
     * })
    **/
    count<T extends BlogPostTranslationCountArgs>(
      args?: Subset<T, BlogPostTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostTranslationAggregateArgs>(args: Subset<T, BlogPostTranslationAggregateArgs>): Prisma.PrismaPromise<GetBlogPostTranslationAggregateType<T>>

    /**
     * Group by BlogPostTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostTranslationGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostTranslation model
   */
  readonly fields: BlogPostTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostTranslation model
   */
  interface BlogPostTranslationFieldRefs {
    readonly id: FieldRef<"BlogPostTranslation", 'String'>
    readonly locale: FieldRef<"BlogPostTranslation", 'String'>
    readonly title: FieldRef<"BlogPostTranslation", 'String'>
    readonly excerpt: FieldRef<"BlogPostTranslation", 'String'>
    readonly body: FieldRef<"BlogPostTranslation", 'Json'>
    readonly plainText: FieldRef<"BlogPostTranslation", 'String'>
    readonly metaTitle: FieldRef<"BlogPostTranslation", 'String'>
    readonly metaDescription: FieldRef<"BlogPostTranslation", 'String'>
    readonly postId: FieldRef<"BlogPostTranslation", 'String'>
    readonly createdAt: FieldRef<"BlogPostTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPostTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostTranslation findUnique
   */
  export type BlogPostTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation findUniqueOrThrow
   */
  export type BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation findFirst
   */
  export type BlogPostTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTranslations.
     */
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation findFirstOrThrow
   */
  export type BlogPostTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTranslations.
     */
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation findMany
   */
  export type BlogPostTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslations to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTranslations.
     */
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation create
   */
  export type BlogPostTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostTranslation.
     */
    data: XOR<BlogPostTranslationCreateInput, BlogPostTranslationUncheckedCreateInput>
  }

  /**
   * BlogPostTranslation createMany
   */
  export type BlogPostTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostTranslations.
     */
    data: BlogPostTranslationCreateManyInput | BlogPostTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostTranslation createManyAndReturn
   */
  export type BlogPostTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostTranslations.
     */
    data: BlogPostTranslationCreateManyInput | BlogPostTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTranslation update
   */
  export type BlogPostTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostTranslation.
     */
    data: XOR<BlogPostTranslationUpdateInput, BlogPostTranslationUncheckedUpdateInput>
    /**
     * Choose, which BlogPostTranslation to update.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation updateMany
   */
  export type BlogPostTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostTranslations.
     */
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTranslations to update
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to update.
     */
    limit?: number
  }

  /**
   * BlogPostTranslation updateManyAndReturn
   */
  export type BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostTranslations.
     */
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTranslations to update
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTranslation upsert
   */
  export type BlogPostTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostTranslation to update in case it exists.
     */
    where: BlogPostTranslationWhereUniqueInput
    /**
     * In case the BlogPostTranslation found by the `where` argument doesn't exist, create a new BlogPostTranslation with this data.
     */
    create: XOR<BlogPostTranslationCreateInput, BlogPostTranslationUncheckedCreateInput>
    /**
     * In case the BlogPostTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostTranslationUpdateInput, BlogPostTranslationUncheckedUpdateInput>
  }

  /**
   * BlogPostTranslation delete
   */
  export type BlogPostTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter which BlogPostTranslation to delete.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation deleteMany
   */
  export type BlogPostTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTranslations to delete
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to delete.
     */
    limit?: number
  }

  /**
   * BlogPostTranslation without action
   */
  export type BlogPostTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorizedReceiptEmailScalarFieldEnum: {
    email: 'email'
  };

  export type AuthorizedReceiptEmailScalarFieldEnum = (typeof AuthorizedReceiptEmailScalarFieldEnum)[keyof typeof AuthorizedReceiptEmailScalarFieldEnum]


  export const MotorcycleScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    name: 'name',
    model: 'model',
    year: 'year',
    price: 'price',
    engine: 'engine',
    engineCapacity: 'engineCapacity',
    gear: 'gear',
    color: 'color',
    tags: 'tags',
    description: 'description',
    specification: 'specification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MotorcycleScalarFieldEnum = (typeof MotorcycleScalarFieldEnum)[keyof typeof MotorcycleScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    imageUrl: 'imageUrl',
    ctaText: 'ctaText',
    whatsappMessage: 'whatsappMessage',
    isFeatured: 'isFeatured',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    displayOrder: 'displayOrder',
    discountType: 'discountType',
    discountValue: 'discountValue',
    motorcycleId: 'motorcycleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PromotionTargetScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    value: 'value',
    isExclusion: 'isExclusion',
    promotionId: 'promotionId'
  };

  export type PromotionTargetScalarFieldEnum = (typeof PromotionTargetScalarFieldEnum)[keyof typeof PromotionTargetScalarFieldEnum]


  export const ProductSyncFileScalarFieldEnum: {
    id: 'id',
    filePath: 'filePath',
    isProcessed: 'isProcessed',
    createdAt: 'createdAt'
  };

  export type ProductSyncFileScalarFieldEnum = (typeof ProductSyncFileScalarFieldEnum)[keyof typeof ProductSyncFileScalarFieldEnum]


  export const MotorcycleImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    displayOrder: 'displayOrder',
    motorcycleId: 'motorcycleId'
  };

  export type MotorcycleImageScalarFieldEnum = (typeof MotorcycleImageScalarFieldEnum)[keyof typeof MotorcycleImageScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    category: 'category',
    tags: 'tags',
    coverImageUrl: 'coverImageUrl',
    status: 'status',
    sourceLocale: 'sourceLocale',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogPostTranslationScalarFieldEnum: {
    id: 'id',
    locale: 'locale',
    title: 'title',
    excerpt: 'excerpt',
    body: 'body',
    plainText: 'plainText',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostTranslationScalarFieldEnum = (typeof BlogPostTranslationScalarFieldEnum)[keyof typeof BlogPostTranslationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'DiscountType[]'
   */
  export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>
    


  /**
   * Reference to a field of type 'PromotionScope'
   */
  export type EnumPromotionScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionScope'>
    


  /**
   * Reference to a field of type 'PromotionScope[]'
   */
  export type ListEnumPromotionScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionScope[]'>
    


  /**
   * Reference to a field of type 'BlogPostStatus'
   */
  export type EnumBlogPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogPostStatus'>
    


  /**
   * Reference to a field of type 'BlogPostStatus[]'
   */
  export type ListEnumBlogPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogPostStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthorizedReceiptEmailWhereInput = {
    AND?: AuthorizedReceiptEmailWhereInput | AuthorizedReceiptEmailWhereInput[]
    OR?: AuthorizedReceiptEmailWhereInput[]
    NOT?: AuthorizedReceiptEmailWhereInput | AuthorizedReceiptEmailWhereInput[]
    email?: StringFilter<"AuthorizedReceiptEmail"> | string
  }

  export type AuthorizedReceiptEmailOrderByWithRelationInput = {
    email?: SortOrder
  }

  export type AuthorizedReceiptEmailWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: AuthorizedReceiptEmailWhereInput | AuthorizedReceiptEmailWhereInput[]
    OR?: AuthorizedReceiptEmailWhereInput[]
    NOT?: AuthorizedReceiptEmailWhereInput | AuthorizedReceiptEmailWhereInput[]
  }, "email">

  export type AuthorizedReceiptEmailOrderByWithAggregationInput = {
    email?: SortOrder
    _count?: AuthorizedReceiptEmailCountOrderByAggregateInput
    _max?: AuthorizedReceiptEmailMaxOrderByAggregateInput
    _min?: AuthorizedReceiptEmailMinOrderByAggregateInput
  }

  export type AuthorizedReceiptEmailScalarWhereWithAggregatesInput = {
    AND?: AuthorizedReceiptEmailScalarWhereWithAggregatesInput | AuthorizedReceiptEmailScalarWhereWithAggregatesInput[]
    OR?: AuthorizedReceiptEmailScalarWhereWithAggregatesInput[]
    NOT?: AuthorizedReceiptEmailScalarWhereWithAggregatesInput | AuthorizedReceiptEmailScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"AuthorizedReceiptEmail"> | string
  }

  export type MotorcycleWhereInput = {
    AND?: MotorcycleWhereInput | MotorcycleWhereInput[]
    OR?: MotorcycleWhereInput[]
    NOT?: MotorcycleWhereInput | MotorcycleWhereInput[]
    id?: StringFilter<"Motorcycle"> | string
    brand?: StringFilter<"Motorcycle"> | string
    name?: StringFilter<"Motorcycle"> | string
    model?: StringFilter<"Motorcycle"> | string
    year?: StringFilter<"Motorcycle"> | string
    price?: DecimalFilter<"Motorcycle"> | Decimal | DecimalJsLike | number | string
    engine?: StringFilter<"Motorcycle"> | string
    engineCapacity?: IntFilter<"Motorcycle"> | number
    gear?: StringFilter<"Motorcycle"> | string
    color?: StringFilter<"Motorcycle"> | string
    tags?: StringNullableFilter<"Motorcycle"> | string | null
    description?: StringNullableFilter<"Motorcycle"> | string | null
    specification?: JsonNullableFilter<"Motorcycle">
    createdAt?: DateTimeFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeFilter<"Motorcycle"> | Date | string
    images?: MotorcycleImageListRelationFilter
    promotions?: PromotionListRelationFilter
  }

  export type MotorcycleOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    name?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    engine?: SortOrder
    engineCapacity?: SortOrder
    gear?: SortOrder
    color?: SortOrder
    tags?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    specification?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: MotorcycleImageOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
  }

  export type MotorcycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brand_name_year?: MotorcycleBrandNameYearCompoundUniqueInput
    AND?: MotorcycleWhereInput | MotorcycleWhereInput[]
    OR?: MotorcycleWhereInput[]
    NOT?: MotorcycleWhereInput | MotorcycleWhereInput[]
    brand?: StringFilter<"Motorcycle"> | string
    name?: StringFilter<"Motorcycle"> | string
    model?: StringFilter<"Motorcycle"> | string
    year?: StringFilter<"Motorcycle"> | string
    price?: DecimalFilter<"Motorcycle"> | Decimal | DecimalJsLike | number | string
    engine?: StringFilter<"Motorcycle"> | string
    engineCapacity?: IntFilter<"Motorcycle"> | number
    gear?: StringFilter<"Motorcycle"> | string
    color?: StringFilter<"Motorcycle"> | string
    tags?: StringNullableFilter<"Motorcycle"> | string | null
    description?: StringNullableFilter<"Motorcycle"> | string | null
    specification?: JsonNullableFilter<"Motorcycle">
    createdAt?: DateTimeFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeFilter<"Motorcycle"> | Date | string
    images?: MotorcycleImageListRelationFilter
    promotions?: PromotionListRelationFilter
  }, "id" | "brand_name_year">

  export type MotorcycleOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    name?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    engine?: SortOrder
    engineCapacity?: SortOrder
    gear?: SortOrder
    color?: SortOrder
    tags?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    specification?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MotorcycleCountOrderByAggregateInput
    _avg?: MotorcycleAvgOrderByAggregateInput
    _max?: MotorcycleMaxOrderByAggregateInput
    _min?: MotorcycleMinOrderByAggregateInput
    _sum?: MotorcycleSumOrderByAggregateInput
  }

  export type MotorcycleScalarWhereWithAggregatesInput = {
    AND?: MotorcycleScalarWhereWithAggregatesInput | MotorcycleScalarWhereWithAggregatesInput[]
    OR?: MotorcycleScalarWhereWithAggregatesInput[]
    NOT?: MotorcycleScalarWhereWithAggregatesInput | MotorcycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Motorcycle"> | string
    brand?: StringWithAggregatesFilter<"Motorcycle"> | string
    name?: StringWithAggregatesFilter<"Motorcycle"> | string
    model?: StringWithAggregatesFilter<"Motorcycle"> | string
    year?: StringWithAggregatesFilter<"Motorcycle"> | string
    price?: DecimalWithAggregatesFilter<"Motorcycle"> | Decimal | DecimalJsLike | number | string
    engine?: StringWithAggregatesFilter<"Motorcycle"> | string
    engineCapacity?: IntWithAggregatesFilter<"Motorcycle"> | number
    gear?: StringWithAggregatesFilter<"Motorcycle"> | string
    color?: StringWithAggregatesFilter<"Motorcycle"> | string
    tags?: StringNullableWithAggregatesFilter<"Motorcycle"> | string | null
    description?: StringNullableWithAggregatesFilter<"Motorcycle"> | string | null
    specification?: JsonNullableWithAggregatesFilter<"Motorcycle">
    createdAt?: DateTimeWithAggregatesFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Motorcycle"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    title?: StringFilter<"Promotion"> | string
    subtitle?: StringNullableFilter<"Promotion"> | string | null
    description?: StringNullableFilter<"Promotion"> | string | null
    imageUrl?: StringNullableFilter<"Promotion"> | string | null
    ctaText?: StringFilter<"Promotion"> | string
    whatsappMessage?: StringNullableFilter<"Promotion"> | string | null
    isFeatured?: BoolFilter<"Promotion"> | boolean
    isActive?: BoolFilter<"Promotion"> | boolean
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    displayOrder?: IntFilter<"Promotion"> | number
    discountType?: EnumDiscountTypeFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: StringNullableFilter<"Promotion"> | string | null
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
    motorcycle?: XOR<MotorcycleNullableScalarRelationFilter, MotorcycleWhereInput> | null
    targets?: PromotionTargetListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ctaText?: SortOrder
    whatsappMessage?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    displayOrder?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrderInput | SortOrder
    motorcycleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    motorcycle?: MotorcycleOrderByWithRelationInput
    targets?: PromotionTargetOrderByRelationAggregateInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    title?: StringFilter<"Promotion"> | string
    subtitle?: StringNullableFilter<"Promotion"> | string | null
    description?: StringNullableFilter<"Promotion"> | string | null
    imageUrl?: StringNullableFilter<"Promotion"> | string | null
    ctaText?: StringFilter<"Promotion"> | string
    whatsappMessage?: StringNullableFilter<"Promotion"> | string | null
    isFeatured?: BoolFilter<"Promotion"> | boolean
    isActive?: BoolFilter<"Promotion"> | boolean
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    displayOrder?: IntFilter<"Promotion"> | number
    discountType?: EnumDiscountTypeFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: StringNullableFilter<"Promotion"> | string | null
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
    motorcycle?: XOR<MotorcycleNullableScalarRelationFilter, MotorcycleWhereInput> | null
    targets?: PromotionTargetListRelationFilter
  }, "id">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ctaText?: SortOrder
    whatsappMessage?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    displayOrder?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrderInput | SortOrder
    motorcycleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    title?: StringWithAggregatesFilter<"Promotion"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    description?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    ctaText?: StringWithAggregatesFilter<"Promotion"> | string
    whatsappMessage?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Promotion"> | boolean
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    displayOrder?: IntWithAggregatesFilter<"Promotion"> | number
    discountType?: EnumDiscountTypeWithAggregatesFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalNullableWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type PromotionTargetWhereInput = {
    AND?: PromotionTargetWhereInput | PromotionTargetWhereInput[]
    OR?: PromotionTargetWhereInput[]
    NOT?: PromotionTargetWhereInput | PromotionTargetWhereInput[]
    id?: StringFilter<"PromotionTarget"> | string
    scope?: EnumPromotionScopeFilter<"PromotionTarget"> | $Enums.PromotionScope
    value?: StringNullableFilter<"PromotionTarget"> | string | null
    isExclusion?: BoolFilter<"PromotionTarget"> | boolean
    promotionId?: StringFilter<"PromotionTarget"> | string
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }

  export type PromotionTargetOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    value?: SortOrderInput | SortOrder
    isExclusion?: SortOrder
    promotionId?: SortOrder
    promotion?: PromotionOrderByWithRelationInput
  }

  export type PromotionTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    promotionId_scope_value?: PromotionTargetPromotionIdScopeValueCompoundUniqueInput
    AND?: PromotionTargetWhereInput | PromotionTargetWhereInput[]
    OR?: PromotionTargetWhereInput[]
    NOT?: PromotionTargetWhereInput | PromotionTargetWhereInput[]
    scope?: EnumPromotionScopeFilter<"PromotionTarget"> | $Enums.PromotionScope
    value?: StringNullableFilter<"PromotionTarget"> | string | null
    isExclusion?: BoolFilter<"PromotionTarget"> | boolean
    promotionId?: StringFilter<"PromotionTarget"> | string
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }, "id" | "promotionId_scope_value">

  export type PromotionTargetOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    value?: SortOrderInput | SortOrder
    isExclusion?: SortOrder
    promotionId?: SortOrder
    _count?: PromotionTargetCountOrderByAggregateInput
    _max?: PromotionTargetMaxOrderByAggregateInput
    _min?: PromotionTargetMinOrderByAggregateInput
  }

  export type PromotionTargetScalarWhereWithAggregatesInput = {
    AND?: PromotionTargetScalarWhereWithAggregatesInput | PromotionTargetScalarWhereWithAggregatesInput[]
    OR?: PromotionTargetScalarWhereWithAggregatesInput[]
    NOT?: PromotionTargetScalarWhereWithAggregatesInput | PromotionTargetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromotionTarget"> | string
    scope?: EnumPromotionScopeWithAggregatesFilter<"PromotionTarget"> | $Enums.PromotionScope
    value?: StringNullableWithAggregatesFilter<"PromotionTarget"> | string | null
    isExclusion?: BoolWithAggregatesFilter<"PromotionTarget"> | boolean
    promotionId?: StringWithAggregatesFilter<"PromotionTarget"> | string
  }

  export type ProductSyncFileWhereInput = {
    AND?: ProductSyncFileWhereInput | ProductSyncFileWhereInput[]
    OR?: ProductSyncFileWhereInput[]
    NOT?: ProductSyncFileWhereInput | ProductSyncFileWhereInput[]
    id?: StringFilter<"ProductSyncFile"> | string
    filePath?: StringFilter<"ProductSyncFile"> | string
    isProcessed?: BoolFilter<"ProductSyncFile"> | boolean
    createdAt?: DateTimeFilter<"ProductSyncFile"> | Date | string
  }

  export type ProductSyncFileOrderByWithRelationInput = {
    id?: SortOrder
    filePath?: SortOrder
    isProcessed?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSyncFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filePath?: string
    AND?: ProductSyncFileWhereInput | ProductSyncFileWhereInput[]
    OR?: ProductSyncFileWhereInput[]
    NOT?: ProductSyncFileWhereInput | ProductSyncFileWhereInput[]
    isProcessed?: BoolFilter<"ProductSyncFile"> | boolean
    createdAt?: DateTimeFilter<"ProductSyncFile"> | Date | string
  }, "id" | "filePath">

  export type ProductSyncFileOrderByWithAggregationInput = {
    id?: SortOrder
    filePath?: SortOrder
    isProcessed?: SortOrder
    createdAt?: SortOrder
    _count?: ProductSyncFileCountOrderByAggregateInput
    _max?: ProductSyncFileMaxOrderByAggregateInput
    _min?: ProductSyncFileMinOrderByAggregateInput
  }

  export type ProductSyncFileScalarWhereWithAggregatesInput = {
    AND?: ProductSyncFileScalarWhereWithAggregatesInput | ProductSyncFileScalarWhereWithAggregatesInput[]
    OR?: ProductSyncFileScalarWhereWithAggregatesInput[]
    NOT?: ProductSyncFileScalarWhereWithAggregatesInput | ProductSyncFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSyncFile"> | string
    filePath?: StringWithAggregatesFilter<"ProductSyncFile"> | string
    isProcessed?: BoolWithAggregatesFilter<"ProductSyncFile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductSyncFile"> | Date | string
  }

  export type MotorcycleImageWhereInput = {
    AND?: MotorcycleImageWhereInput | MotorcycleImageWhereInput[]
    OR?: MotorcycleImageWhereInput[]
    NOT?: MotorcycleImageWhereInput | MotorcycleImageWhereInput[]
    id?: StringFilter<"MotorcycleImage"> | string
    url?: StringFilter<"MotorcycleImage"> | string
    displayOrder?: IntFilter<"MotorcycleImage"> | number
    motorcycleId?: StringFilter<"MotorcycleImage"> | string
    motorcycle?: XOR<MotorcycleScalarRelationFilter, MotorcycleWhereInput>
  }

  export type MotorcycleImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    motorcycleId?: SortOrder
    motorcycle?: MotorcycleOrderByWithRelationInput
  }

  export type MotorcycleImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MotorcycleImageWhereInput | MotorcycleImageWhereInput[]
    OR?: MotorcycleImageWhereInput[]
    NOT?: MotorcycleImageWhereInput | MotorcycleImageWhereInput[]
    url?: StringFilter<"MotorcycleImage"> | string
    displayOrder?: IntFilter<"MotorcycleImage"> | number
    motorcycleId?: StringFilter<"MotorcycleImage"> | string
    motorcycle?: XOR<MotorcycleScalarRelationFilter, MotorcycleWhereInput>
  }, "id">

  export type MotorcycleImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    motorcycleId?: SortOrder
    _count?: MotorcycleImageCountOrderByAggregateInput
    _avg?: MotorcycleImageAvgOrderByAggregateInput
    _max?: MotorcycleImageMaxOrderByAggregateInput
    _min?: MotorcycleImageMinOrderByAggregateInput
    _sum?: MotorcycleImageSumOrderByAggregateInput
  }

  export type MotorcycleImageScalarWhereWithAggregatesInput = {
    AND?: MotorcycleImageScalarWhereWithAggregatesInput | MotorcycleImageScalarWhereWithAggregatesInput[]
    OR?: MotorcycleImageScalarWhereWithAggregatesInput[]
    NOT?: MotorcycleImageScalarWhereWithAggregatesInput | MotorcycleImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MotorcycleImage"> | string
    url?: StringWithAggregatesFilter<"MotorcycleImage"> | string
    displayOrder?: IntWithAggregatesFilter<"MotorcycleImage"> | number
    motorcycleId?: StringWithAggregatesFilter<"MotorcycleImage"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableFilter<"BlogPost"> | string | null
    coverImageUrl?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumBlogPostStatusFilter<"BlogPost"> | $Enums.BlogPostStatus
    sourceLocale?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    translations?: BlogPostTranslationListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    sourceLocale?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    translations?: BlogPostTranslationOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableFilter<"BlogPost"> | string | null
    coverImageUrl?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumBlogPostStatusFilter<"BlogPost"> | $Enums.BlogPostStatus
    sourceLocale?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    translations?: BlogPostTranslationListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    sourceLocale?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    category?: StringWithAggregatesFilter<"BlogPost"> | string
    tags?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: EnumBlogPostStatusWithAggregatesFilter<"BlogPost"> | $Enums.BlogPostStatus
    sourceLocale?: StringWithAggregatesFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type BlogPostTranslationWhereInput = {
    AND?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    OR?: BlogPostTranslationWhereInput[]
    NOT?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    id?: StringFilter<"BlogPostTranslation"> | string
    locale?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    excerpt?: StringFilter<"BlogPostTranslation"> | string
    body?: JsonFilter<"BlogPostTranslation">
    plainText?: StringFilter<"BlogPostTranslation"> | string
    metaTitle?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    postId?: StringFilter<"BlogPostTranslation"> | string
    createdAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }

  export type BlogPostTranslationOrderByWithRelationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    plainText?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: BlogPostOrderByWithRelationInput
  }

  export type BlogPostTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_locale?: BlogPostTranslationPostIdLocaleCompoundUniqueInput
    AND?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    OR?: BlogPostTranslationWhereInput[]
    NOT?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    locale?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    excerpt?: StringFilter<"BlogPostTranslation"> | string
    body?: JsonFilter<"BlogPostTranslation">
    plainText?: StringFilter<"BlogPostTranslation"> | string
    metaTitle?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    postId?: StringFilter<"BlogPostTranslation"> | string
    createdAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }, "id" | "postId_locale">

  export type BlogPostTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    plainText?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostTranslationCountOrderByAggregateInput
    _max?: BlogPostTranslationMaxOrderByAggregateInput
    _min?: BlogPostTranslationMinOrderByAggregateInput
  }

  export type BlogPostTranslationScalarWhereWithAggregatesInput = {
    AND?: BlogPostTranslationScalarWhereWithAggregatesInput | BlogPostTranslationScalarWhereWithAggregatesInput[]
    OR?: BlogPostTranslationScalarWhereWithAggregatesInput[]
    NOT?: BlogPostTranslationScalarWhereWithAggregatesInput | BlogPostTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    locale?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    title?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    excerpt?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    body?: JsonWithAggregatesFilter<"BlogPostTranslation">
    plainText?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"BlogPostTranslation"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"BlogPostTranslation"> | string | null
    postId?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogPostTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPostTranslation"> | Date | string
  }

  export type AuthorizedReceiptEmailCreateInput = {
    email: string
  }

  export type AuthorizedReceiptEmailUncheckedCreateInput = {
    email: string
  }

  export type AuthorizedReceiptEmailUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorizedReceiptEmailUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorizedReceiptEmailCreateManyInput = {
    email: string
  }

  export type AuthorizedReceiptEmailUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorizedReceiptEmailUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MotorcycleCreateInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageCreateNestedManyWithoutMotorcycleInput
    promotions?: PromotionCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleUncheckedCreateInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageUncheckedCreateNestedManyWithoutMotorcycleInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUpdateManyWithoutMotorcycleNestedInput
    promotions?: PromotionUpdateManyWithoutMotorcycleNestedInput
  }

  export type MotorcycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUncheckedUpdateManyWithoutMotorcycleNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutMotorcycleNestedInput
  }

  export type MotorcycleCreateManyInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorcycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorcycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    motorcycle?: MotorcycleCreateNestedOneWithoutPromotionsInput
    targets?: PromotionTargetCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    motorcycleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targets?: PromotionTargetUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorcycle?: MotorcycleUpdateOneWithoutPromotionsNestedInput
    targets?: PromotionTargetUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targets?: PromotionTargetUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionCreateManyInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    motorcycleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionTargetCreateInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
    promotion: PromotionCreateNestedOneWithoutTargetsInput
  }

  export type PromotionTargetUncheckedCreateInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
    promotionId: string
  }

  export type PromotionTargetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
    promotion?: PromotionUpdateOneRequiredWithoutTargetsNestedInput
  }

  export type PromotionTargetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type PromotionTargetCreateManyInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
    promotionId: string
  }

  export type PromotionTargetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionTargetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSyncFileCreateInput = {
    id?: string
    filePath: string
    isProcessed?: boolean
    createdAt?: Date | string
  }

  export type ProductSyncFileUncheckedCreateInput = {
    id?: string
    filePath: string
    isProcessed?: boolean
    createdAt?: Date | string
  }

  export type ProductSyncFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSyncFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSyncFileCreateManyInput = {
    id?: string
    filePath: string
    isProcessed?: boolean
    createdAt?: Date | string
  }

  export type ProductSyncFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSyncFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorcycleImageCreateInput = {
    id?: string
    url: string
    displayOrder?: number
    motorcycle: MotorcycleCreateNestedOneWithoutImagesInput
  }

  export type MotorcycleImageUncheckedCreateInput = {
    id?: string
    url: string
    displayOrder?: number
    motorcycleId: string
  }

  export type MotorcycleImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    motorcycle?: MotorcycleUpdateOneRequiredWithoutImagesNestedInput
  }

  export type MotorcycleImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    motorcycleId?: StringFieldUpdateOperationsInput | string
  }

  export type MotorcycleImageCreateManyInput = {
    id?: string
    url: string
    displayOrder?: number
    motorcycleId: string
  }

  export type MotorcycleImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type MotorcycleImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    motorcycleId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    category: string
    tags?: string | null
    coverImageUrl?: string | null
    status?: $Enums.BlogPostStatus
    sourceLocale?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: BlogPostTranslationCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    category: string
    tags?: string | null
    coverImageUrl?: string | null
    status?: $Enums.BlogPostStatus
    sourceLocale?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: BlogPostTranslationUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: BlogPostTranslationUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: BlogPostTranslationUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    category: string
    tags?: string | null
    coverImageUrl?: string | null
    status?: $Enums.BlogPostStatus
    sourceLocale?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationCreateInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post: BlogPostCreateNestedOneWithoutTranslationsInput
  }

  export type BlogPostTranslationUncheckedCreateInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: BlogPostUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type BlogPostTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationCreateManyInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthorizedReceiptEmailCountOrderByAggregateInput = {
    email?: SortOrder
  }

  export type AuthorizedReceiptEmailMaxOrderByAggregateInput = {
    email?: SortOrder
  }

  export type AuthorizedReceiptEmailMinOrderByAggregateInput = {
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MotorcycleImageListRelationFilter = {
    every?: MotorcycleImageWhereInput
    some?: MotorcycleImageWhereInput
    none?: MotorcycleImageWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MotorcycleImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MotorcycleBrandNameYearCompoundUniqueInput = {
    brand: string
    name: string
    year: string
  }

  export type MotorcycleCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    name?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    engine?: SortOrder
    engineCapacity?: SortOrder
    gear?: SortOrder
    color?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorcycleAvgOrderByAggregateInput = {
    price?: SortOrder
    engineCapacity?: SortOrder
  }

  export type MotorcycleMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    name?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    engine?: SortOrder
    engineCapacity?: SortOrder
    gear?: SortOrder
    color?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorcycleMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    name?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    engine?: SortOrder
    engineCapacity?: SortOrder
    gear?: SortOrder
    color?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorcycleSumOrderByAggregateInput = {
    price?: SortOrder
    engineCapacity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MotorcycleNullableScalarRelationFilter = {
    is?: MotorcycleWhereInput | null
    isNot?: MotorcycleWhereInput | null
  }

  export type PromotionTargetListRelationFilter = {
    every?: PromotionTargetWhereInput
    some?: PromotionTargetWhereInput
    none?: PromotionTargetWhereInput
  }

  export type PromotionTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ctaText?: SortOrder
    whatsappMessage?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    displayOrder?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    motorcycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
    discountValue?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ctaText?: SortOrder
    whatsappMessage?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    displayOrder?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    motorcycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ctaText?: SortOrder
    whatsappMessage?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    displayOrder?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    motorcycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    displayOrder?: SortOrder
    discountValue?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPromotionScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionScope | EnumPromotionScopeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionScopeFilter<$PrismaModel> | $Enums.PromotionScope
  }

  export type PromotionScalarRelationFilter = {
    is?: PromotionWhereInput
    isNot?: PromotionWhereInput
  }

  export type PromotionTargetPromotionIdScopeValueCompoundUniqueInput = {
    promotionId: string
    scope: $Enums.PromotionScope
    value: string
  }

  export type PromotionTargetCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    value?: SortOrder
    isExclusion?: SortOrder
    promotionId?: SortOrder
  }

  export type PromotionTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    value?: SortOrder
    isExclusion?: SortOrder
    promotionId?: SortOrder
  }

  export type PromotionTargetMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    value?: SortOrder
    isExclusion?: SortOrder
    promotionId?: SortOrder
  }

  export type EnumPromotionScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionScope | EnumPromotionScopeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionScopeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionScopeFilter<$PrismaModel>
    _max?: NestedEnumPromotionScopeFilter<$PrismaModel>
  }

  export type ProductSyncFileCountOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
    isProcessed?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSyncFileMaxOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
    isProcessed?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSyncFileMinOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
    isProcessed?: SortOrder
    createdAt?: SortOrder
  }

  export type MotorcycleScalarRelationFilter = {
    is?: MotorcycleWhereInput
    isNot?: MotorcycleWhereInput
  }

  export type MotorcycleImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    motorcycleId?: SortOrder
  }

  export type MotorcycleImageAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type MotorcycleImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    motorcycleId?: SortOrder
  }

  export type MotorcycleImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    displayOrder?: SortOrder
    motorcycleId?: SortOrder
  }

  export type MotorcycleImageSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type EnumBlogPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogPostStatus | EnumBlogPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogPostStatusFilter<$PrismaModel> | $Enums.BlogPostStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogPostTranslationListRelationFilter = {
    every?: BlogPostTranslationWhereInput
    some?: BlogPostTranslationWhereInput
    none?: BlogPostTranslationWhereInput
  }

  export type BlogPostTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    sourceLocale?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    sourceLocale?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    sourceLocale?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBlogPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogPostStatus | EnumBlogPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogPostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogPostStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogPostStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type BlogPostTranslationPostIdLocaleCompoundUniqueInput = {
    postId: string
    locale: string
  }

  export type BlogPostTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    plainText?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    plainText?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    plainText?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MotorcycleImageCreateNestedManyWithoutMotorcycleInput = {
    create?: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput> | MotorcycleImageCreateWithoutMotorcycleInput[] | MotorcycleImageUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: MotorcycleImageCreateOrConnectWithoutMotorcycleInput | MotorcycleImageCreateOrConnectWithoutMotorcycleInput[]
    createMany?: MotorcycleImageCreateManyMotorcycleInputEnvelope
    connect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
  }

  export type PromotionCreateNestedManyWithoutMotorcycleInput = {
    create?: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput> | PromotionCreateWithoutMotorcycleInput[] | PromotionUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutMotorcycleInput | PromotionCreateOrConnectWithoutMotorcycleInput[]
    createMany?: PromotionCreateManyMotorcycleInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type MotorcycleImageUncheckedCreateNestedManyWithoutMotorcycleInput = {
    create?: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput> | MotorcycleImageCreateWithoutMotorcycleInput[] | MotorcycleImageUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: MotorcycleImageCreateOrConnectWithoutMotorcycleInput | MotorcycleImageCreateOrConnectWithoutMotorcycleInput[]
    createMany?: MotorcycleImageCreateManyMotorcycleInputEnvelope
    connect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutMotorcycleInput = {
    create?: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput> | PromotionCreateWithoutMotorcycleInput[] | PromotionUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutMotorcycleInput | PromotionCreateOrConnectWithoutMotorcycleInput[]
    createMany?: PromotionCreateManyMotorcycleInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MotorcycleImageUpdateManyWithoutMotorcycleNestedInput = {
    create?: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput> | MotorcycleImageCreateWithoutMotorcycleInput[] | MotorcycleImageUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: MotorcycleImageCreateOrConnectWithoutMotorcycleInput | MotorcycleImageCreateOrConnectWithoutMotorcycleInput[]
    upsert?: MotorcycleImageUpsertWithWhereUniqueWithoutMotorcycleInput | MotorcycleImageUpsertWithWhereUniqueWithoutMotorcycleInput[]
    createMany?: MotorcycleImageCreateManyMotorcycleInputEnvelope
    set?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    disconnect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    delete?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    connect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    update?: MotorcycleImageUpdateWithWhereUniqueWithoutMotorcycleInput | MotorcycleImageUpdateWithWhereUniqueWithoutMotorcycleInput[]
    updateMany?: MotorcycleImageUpdateManyWithWhereWithoutMotorcycleInput | MotorcycleImageUpdateManyWithWhereWithoutMotorcycleInput[]
    deleteMany?: MotorcycleImageScalarWhereInput | MotorcycleImageScalarWhereInput[]
  }

  export type PromotionUpdateManyWithoutMotorcycleNestedInput = {
    create?: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput> | PromotionCreateWithoutMotorcycleInput[] | PromotionUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutMotorcycleInput | PromotionCreateOrConnectWithoutMotorcycleInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutMotorcycleInput | PromotionUpsertWithWhereUniqueWithoutMotorcycleInput[]
    createMany?: PromotionCreateManyMotorcycleInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutMotorcycleInput | PromotionUpdateWithWhereUniqueWithoutMotorcycleInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutMotorcycleInput | PromotionUpdateManyWithWhereWithoutMotorcycleInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type MotorcycleImageUncheckedUpdateManyWithoutMotorcycleNestedInput = {
    create?: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput> | MotorcycleImageCreateWithoutMotorcycleInput[] | MotorcycleImageUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: MotorcycleImageCreateOrConnectWithoutMotorcycleInput | MotorcycleImageCreateOrConnectWithoutMotorcycleInput[]
    upsert?: MotorcycleImageUpsertWithWhereUniqueWithoutMotorcycleInput | MotorcycleImageUpsertWithWhereUniqueWithoutMotorcycleInput[]
    createMany?: MotorcycleImageCreateManyMotorcycleInputEnvelope
    set?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    disconnect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    delete?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    connect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
    update?: MotorcycleImageUpdateWithWhereUniqueWithoutMotorcycleInput | MotorcycleImageUpdateWithWhereUniqueWithoutMotorcycleInput[]
    updateMany?: MotorcycleImageUpdateManyWithWhereWithoutMotorcycleInput | MotorcycleImageUpdateManyWithWhereWithoutMotorcycleInput[]
    deleteMany?: MotorcycleImageScalarWhereInput | MotorcycleImageScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutMotorcycleNestedInput = {
    create?: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput> | PromotionCreateWithoutMotorcycleInput[] | PromotionUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutMotorcycleInput | PromotionCreateOrConnectWithoutMotorcycleInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutMotorcycleInput | PromotionUpsertWithWhereUniqueWithoutMotorcycleInput[]
    createMany?: PromotionCreateManyMotorcycleInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutMotorcycleInput | PromotionUpdateWithWhereUniqueWithoutMotorcycleInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutMotorcycleInput | PromotionUpdateManyWithWhereWithoutMotorcycleInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type MotorcycleCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<MotorcycleCreateWithoutPromotionsInput, MotorcycleUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: MotorcycleCreateOrConnectWithoutPromotionsInput
    connect?: MotorcycleWhereUniqueInput
  }

  export type PromotionTargetCreateNestedManyWithoutPromotionInput = {
    create?: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput> | PromotionTargetCreateWithoutPromotionInput[] | PromotionTargetUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionTargetCreateOrConnectWithoutPromotionInput | PromotionTargetCreateOrConnectWithoutPromotionInput[]
    createMany?: PromotionTargetCreateManyPromotionInputEnvelope
    connect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
  }

  export type PromotionTargetUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput> | PromotionTargetCreateWithoutPromotionInput[] | PromotionTargetUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionTargetCreateOrConnectWithoutPromotionInput | PromotionTargetCreateOrConnectWithoutPromotionInput[]
    createMany?: PromotionTargetCreateManyPromotionInputEnvelope
    connect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MotorcycleUpdateOneWithoutPromotionsNestedInput = {
    create?: XOR<MotorcycleCreateWithoutPromotionsInput, MotorcycleUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: MotorcycleCreateOrConnectWithoutPromotionsInput
    upsert?: MotorcycleUpsertWithoutPromotionsInput
    disconnect?: MotorcycleWhereInput | boolean
    delete?: MotorcycleWhereInput | boolean
    connect?: MotorcycleWhereUniqueInput
    update?: XOR<XOR<MotorcycleUpdateToOneWithWhereWithoutPromotionsInput, MotorcycleUpdateWithoutPromotionsInput>, MotorcycleUncheckedUpdateWithoutPromotionsInput>
  }

  export type PromotionTargetUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput> | PromotionTargetCreateWithoutPromotionInput[] | PromotionTargetUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionTargetCreateOrConnectWithoutPromotionInput | PromotionTargetCreateOrConnectWithoutPromotionInput[]
    upsert?: PromotionTargetUpsertWithWhereUniqueWithoutPromotionInput | PromotionTargetUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: PromotionTargetCreateManyPromotionInputEnvelope
    set?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    disconnect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    delete?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    connect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    update?: PromotionTargetUpdateWithWhereUniqueWithoutPromotionInput | PromotionTargetUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: PromotionTargetUpdateManyWithWhereWithoutPromotionInput | PromotionTargetUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: PromotionTargetScalarWhereInput | PromotionTargetScalarWhereInput[]
  }

  export type PromotionTargetUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput> | PromotionTargetCreateWithoutPromotionInput[] | PromotionTargetUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionTargetCreateOrConnectWithoutPromotionInput | PromotionTargetCreateOrConnectWithoutPromotionInput[]
    upsert?: PromotionTargetUpsertWithWhereUniqueWithoutPromotionInput | PromotionTargetUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: PromotionTargetCreateManyPromotionInputEnvelope
    set?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    disconnect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    delete?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    connect?: PromotionTargetWhereUniqueInput | PromotionTargetWhereUniqueInput[]
    update?: PromotionTargetUpdateWithWhereUniqueWithoutPromotionInput | PromotionTargetUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: PromotionTargetUpdateManyWithWhereWithoutPromotionInput | PromotionTargetUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: PromotionTargetScalarWhereInput | PromotionTargetScalarWhereInput[]
  }

  export type PromotionCreateNestedOneWithoutTargetsInput = {
    create?: XOR<PromotionCreateWithoutTargetsInput, PromotionUncheckedCreateWithoutTargetsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutTargetsInput
    connect?: PromotionWhereUniqueInput
  }

  export type EnumPromotionScopeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionScope
  }

  export type PromotionUpdateOneRequiredWithoutTargetsNestedInput = {
    create?: XOR<PromotionCreateWithoutTargetsInput, PromotionUncheckedCreateWithoutTargetsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutTargetsInput
    upsert?: PromotionUpsertWithoutTargetsInput
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutTargetsInput, PromotionUpdateWithoutTargetsInput>, PromotionUncheckedUpdateWithoutTargetsInput>
  }

  export type MotorcycleCreateNestedOneWithoutImagesInput = {
    create?: XOR<MotorcycleCreateWithoutImagesInput, MotorcycleUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MotorcycleCreateOrConnectWithoutImagesInput
    connect?: MotorcycleWhereUniqueInput
  }

  export type MotorcycleUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MotorcycleCreateWithoutImagesInput, MotorcycleUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MotorcycleCreateOrConnectWithoutImagesInput
    upsert?: MotorcycleUpsertWithoutImagesInput
    connect?: MotorcycleWhereUniqueInput
    update?: XOR<XOR<MotorcycleUpdateToOneWithWhereWithoutImagesInput, MotorcycleUpdateWithoutImagesInput>, MotorcycleUncheckedUpdateWithoutImagesInput>
  }

  export type BlogPostTranslationCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput> | BlogPostTranslationCreateWithoutPostInput[] | BlogPostTranslationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutPostInput | BlogPostTranslationCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostTranslationCreateManyPostInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type BlogPostTranslationUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput> | BlogPostTranslationCreateWithoutPostInput[] | BlogPostTranslationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutPostInput | BlogPostTranslationCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostTranslationCreateManyPostInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type EnumBlogPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogPostStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlogPostTranslationUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput> | BlogPostTranslationCreateWithoutPostInput[] | BlogPostTranslationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutPostInput | BlogPostTranslationCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutPostInput | BlogPostTranslationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostTranslationCreateManyPostInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutPostInput | BlogPostTranslationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutPostInput | BlogPostTranslationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput> | BlogPostTranslationCreateWithoutPostInput[] | BlogPostTranslationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutPostInput | BlogPostTranslationCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutPostInput | BlogPostTranslationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostTranslationCreateManyPostInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutPostInput | BlogPostTranslationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutPostInput | BlogPostTranslationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTranslationsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTranslationsInput
    upsert?: BlogPostUpsertWithoutTranslationsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutTranslationsInput, BlogPostUpdateWithoutTranslationsInput>, BlogPostUncheckedUpdateWithoutTranslationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPromotionScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionScope | EnumPromotionScopeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionScopeFilter<$PrismaModel> | $Enums.PromotionScope
  }

  export type NestedEnumPromotionScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionScope | EnumPromotionScopeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionScope[] | ListEnumPromotionScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionScopeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionScopeFilter<$PrismaModel>
    _max?: NestedEnumPromotionScopeFilter<$PrismaModel>
  }

  export type NestedEnumBlogPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogPostStatus | EnumBlogPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogPostStatusFilter<$PrismaModel> | $Enums.BlogPostStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBlogPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogPostStatus | EnumBlogPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogPostStatus[] | ListEnumBlogPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogPostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogPostStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogPostStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MotorcycleImageCreateWithoutMotorcycleInput = {
    id?: string
    url: string
    displayOrder?: number
  }

  export type MotorcycleImageUncheckedCreateWithoutMotorcycleInput = {
    id?: string
    url: string
    displayOrder?: number
  }

  export type MotorcycleImageCreateOrConnectWithoutMotorcycleInput = {
    where: MotorcycleImageWhereUniqueInput
    create: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput>
  }

  export type MotorcycleImageCreateManyMotorcycleInputEnvelope = {
    data: MotorcycleImageCreateManyMotorcycleInput | MotorcycleImageCreateManyMotorcycleInput[]
    skipDuplicates?: boolean
  }

  export type PromotionCreateWithoutMotorcycleInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targets?: PromotionTargetCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateWithoutMotorcycleInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targets?: PromotionTargetUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionCreateOrConnectWithoutMotorcycleInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput>
  }

  export type PromotionCreateManyMotorcycleInputEnvelope = {
    data: PromotionCreateManyMotorcycleInput | PromotionCreateManyMotorcycleInput[]
    skipDuplicates?: boolean
  }

  export type MotorcycleImageUpsertWithWhereUniqueWithoutMotorcycleInput = {
    where: MotorcycleImageWhereUniqueInput
    update: XOR<MotorcycleImageUpdateWithoutMotorcycleInput, MotorcycleImageUncheckedUpdateWithoutMotorcycleInput>
    create: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput>
  }

  export type MotorcycleImageUpdateWithWhereUniqueWithoutMotorcycleInput = {
    where: MotorcycleImageWhereUniqueInput
    data: XOR<MotorcycleImageUpdateWithoutMotorcycleInput, MotorcycleImageUncheckedUpdateWithoutMotorcycleInput>
  }

  export type MotorcycleImageUpdateManyWithWhereWithoutMotorcycleInput = {
    where: MotorcycleImageScalarWhereInput
    data: XOR<MotorcycleImageUpdateManyMutationInput, MotorcycleImageUncheckedUpdateManyWithoutMotorcycleInput>
  }

  export type MotorcycleImageScalarWhereInput = {
    AND?: MotorcycleImageScalarWhereInput | MotorcycleImageScalarWhereInput[]
    OR?: MotorcycleImageScalarWhereInput[]
    NOT?: MotorcycleImageScalarWhereInput | MotorcycleImageScalarWhereInput[]
    id?: StringFilter<"MotorcycleImage"> | string
    url?: StringFilter<"MotorcycleImage"> | string
    displayOrder?: IntFilter<"MotorcycleImage"> | number
    motorcycleId?: StringFilter<"MotorcycleImage"> | string
  }

  export type PromotionUpsertWithWhereUniqueWithoutMotorcycleInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutMotorcycleInput, PromotionUncheckedUpdateWithoutMotorcycleInput>
    create: XOR<PromotionCreateWithoutMotorcycleInput, PromotionUncheckedCreateWithoutMotorcycleInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutMotorcycleInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutMotorcycleInput, PromotionUncheckedUpdateWithoutMotorcycleInput>
  }

  export type PromotionUpdateManyWithWhereWithoutMotorcycleInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutMotorcycleInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    id?: StringFilter<"Promotion"> | string
    title?: StringFilter<"Promotion"> | string
    subtitle?: StringNullableFilter<"Promotion"> | string | null
    description?: StringNullableFilter<"Promotion"> | string | null
    imageUrl?: StringNullableFilter<"Promotion"> | string | null
    ctaText?: StringFilter<"Promotion"> | string
    whatsappMessage?: StringNullableFilter<"Promotion"> | string | null
    isFeatured?: BoolFilter<"Promotion"> | boolean
    isActive?: BoolFilter<"Promotion"> | boolean
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    displayOrder?: IntFilter<"Promotion"> | number
    discountType?: EnumDiscountTypeFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: StringNullableFilter<"Promotion"> | string | null
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type MotorcycleCreateWithoutPromotionsInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleUncheckedCreateWithoutPromotionsInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageUncheckedCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleCreateOrConnectWithoutPromotionsInput = {
    where: MotorcycleWhereUniqueInput
    create: XOR<MotorcycleCreateWithoutPromotionsInput, MotorcycleUncheckedCreateWithoutPromotionsInput>
  }

  export type PromotionTargetCreateWithoutPromotionInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
  }

  export type PromotionTargetUncheckedCreateWithoutPromotionInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
  }

  export type PromotionTargetCreateOrConnectWithoutPromotionInput = {
    where: PromotionTargetWhereUniqueInput
    create: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput>
  }

  export type PromotionTargetCreateManyPromotionInputEnvelope = {
    data: PromotionTargetCreateManyPromotionInput | PromotionTargetCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type MotorcycleUpsertWithoutPromotionsInput = {
    update: XOR<MotorcycleUpdateWithoutPromotionsInput, MotorcycleUncheckedUpdateWithoutPromotionsInput>
    create: XOR<MotorcycleCreateWithoutPromotionsInput, MotorcycleUncheckedCreateWithoutPromotionsInput>
    where?: MotorcycleWhereInput
  }

  export type MotorcycleUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: MotorcycleWhereInput
    data: XOR<MotorcycleUpdateWithoutPromotionsInput, MotorcycleUncheckedUpdateWithoutPromotionsInput>
  }

  export type MotorcycleUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUpdateManyWithoutMotorcycleNestedInput
  }

  export type MotorcycleUncheckedUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUncheckedUpdateManyWithoutMotorcycleNestedInput
  }

  export type PromotionTargetUpsertWithWhereUniqueWithoutPromotionInput = {
    where: PromotionTargetWhereUniqueInput
    update: XOR<PromotionTargetUpdateWithoutPromotionInput, PromotionTargetUncheckedUpdateWithoutPromotionInput>
    create: XOR<PromotionTargetCreateWithoutPromotionInput, PromotionTargetUncheckedCreateWithoutPromotionInput>
  }

  export type PromotionTargetUpdateWithWhereUniqueWithoutPromotionInput = {
    where: PromotionTargetWhereUniqueInput
    data: XOR<PromotionTargetUpdateWithoutPromotionInput, PromotionTargetUncheckedUpdateWithoutPromotionInput>
  }

  export type PromotionTargetUpdateManyWithWhereWithoutPromotionInput = {
    where: PromotionTargetScalarWhereInput
    data: XOR<PromotionTargetUpdateManyMutationInput, PromotionTargetUncheckedUpdateManyWithoutPromotionInput>
  }

  export type PromotionTargetScalarWhereInput = {
    AND?: PromotionTargetScalarWhereInput | PromotionTargetScalarWhereInput[]
    OR?: PromotionTargetScalarWhereInput[]
    NOT?: PromotionTargetScalarWhereInput | PromotionTargetScalarWhereInput[]
    id?: StringFilter<"PromotionTarget"> | string
    scope?: EnumPromotionScopeFilter<"PromotionTarget"> | $Enums.PromotionScope
    value?: StringNullableFilter<"PromotionTarget"> | string | null
    isExclusion?: BoolFilter<"PromotionTarget"> | boolean
    promotionId?: StringFilter<"PromotionTarget"> | string
  }

  export type PromotionCreateWithoutTargetsInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    motorcycle?: MotorcycleCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateWithoutTargetsInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    motorcycleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionCreateOrConnectWithoutTargetsInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutTargetsInput, PromotionUncheckedCreateWithoutTargetsInput>
  }

  export type PromotionUpsertWithoutTargetsInput = {
    update: XOR<PromotionUpdateWithoutTargetsInput, PromotionUncheckedUpdateWithoutTargetsInput>
    create: XOR<PromotionCreateWithoutTargetsInput, PromotionUncheckedCreateWithoutTargetsInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutTargetsInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutTargetsInput, PromotionUncheckedUpdateWithoutTargetsInput>
  }

  export type PromotionUpdateWithoutTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorcycle?: MotorcycleUpdateOneWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateWithoutTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    motorcycleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorcycleCreateWithoutImagesInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    promotions?: PromotionCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleUncheckedCreateWithoutImagesInput = {
    id?: string
    brand: string
    name: string
    model: string
    year: string
    price: Decimal | DecimalJsLike | number | string
    engine: string
    engineCapacity: number
    gear: string
    color: string
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutMotorcycleInput
  }

  export type MotorcycleCreateOrConnectWithoutImagesInput = {
    where: MotorcycleWhereUniqueInput
    create: XOR<MotorcycleCreateWithoutImagesInput, MotorcycleUncheckedCreateWithoutImagesInput>
  }

  export type MotorcycleUpsertWithoutImagesInput = {
    update: XOR<MotorcycleUpdateWithoutImagesInput, MotorcycleUncheckedUpdateWithoutImagesInput>
    create: XOR<MotorcycleCreateWithoutImagesInput, MotorcycleUncheckedCreateWithoutImagesInput>
    where?: MotorcycleWhereInput
  }

  export type MotorcycleUpdateToOneWithWhereWithoutImagesInput = {
    where?: MotorcycleWhereInput
    data: XOR<MotorcycleUpdateWithoutImagesInput, MotorcycleUncheckedUpdateWithoutImagesInput>
  }

  export type MotorcycleUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUpdateManyWithoutMotorcycleNestedInput
  }

  export type MotorcycleUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    engine?: StringFieldUpdateOperationsInput | string
    engineCapacity?: IntFieldUpdateOperationsInput | number
    gear?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutMotorcycleNestedInput
  }

  export type BlogPostTranslationCreateWithoutPostInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostTranslationUncheckedCreateWithoutPostInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostTranslationCreateOrConnectWithoutPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    create: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput>
  }

  export type BlogPostTranslationCreateManyPostInputEnvelope = {
    data: BlogPostTranslationCreateManyPostInput | BlogPostTranslationCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostTranslationUpsertWithWhereUniqueWithoutPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    update: XOR<BlogPostTranslationUpdateWithoutPostInput, BlogPostTranslationUncheckedUpdateWithoutPostInput>
    create: XOR<BlogPostTranslationCreateWithoutPostInput, BlogPostTranslationUncheckedCreateWithoutPostInput>
  }

  export type BlogPostTranslationUpdateWithWhereUniqueWithoutPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    data: XOR<BlogPostTranslationUpdateWithoutPostInput, BlogPostTranslationUncheckedUpdateWithoutPostInput>
  }

  export type BlogPostTranslationUpdateManyWithWhereWithoutPostInput = {
    where: BlogPostTranslationScalarWhereInput
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyWithoutPostInput>
  }

  export type BlogPostTranslationScalarWhereInput = {
    AND?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
    OR?: BlogPostTranslationScalarWhereInput[]
    NOT?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
    id?: StringFilter<"BlogPostTranslation"> | string
    locale?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    excerpt?: StringFilter<"BlogPostTranslation"> | string
    body?: JsonFilter<"BlogPostTranslation">
    plainText?: StringFilter<"BlogPostTranslation"> | string
    metaTitle?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    postId?: StringFilter<"BlogPostTranslation"> | string
    createdAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPostTranslation"> | Date | string
  }

  export type BlogPostCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    category: string
    tags?: string | null
    coverImageUrl?: string | null
    status?: $Enums.BlogPostStatus
    sourceLocale?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    category: string
    tags?: string | null
    coverImageUrl?: string | null
    status?: $Enums.BlogPostStatus
    sourceLocale?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutTranslationsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
  }

  export type BlogPostUpsertWithoutTranslationsInput = {
    update: XOR<BlogPostUpdateWithoutTranslationsInput, BlogPostUncheckedUpdateWithoutTranslationsInput>
    create: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutTranslationsInput, BlogPostUncheckedUpdateWithoutTranslationsInput>
  }

  export type BlogPostUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogPostStatusFieldUpdateOperationsInput | $Enums.BlogPostStatus
    sourceLocale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorcycleImageCreateManyMotorcycleInput = {
    id?: string
    url: string
    displayOrder?: number
  }

  export type PromotionCreateManyMotorcycleInput = {
    id?: string
    title: string
    subtitle?: string | null
    description?: string | null
    imageUrl?: string | null
    ctaText?: string
    whatsappMessage?: string | null
    isFeatured?: boolean
    isActive?: boolean
    startDate: Date | string
    endDate: Date | string
    displayOrder?: number
    discountType?: $Enums.DiscountType
    discountValue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorcycleImageUpdateWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type MotorcycleImageUncheckedUpdateWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type MotorcycleImageUncheckedUpdateManyWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PromotionUpdateWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targets?: PromotionTargetUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targets?: PromotionTargetUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateManyWithoutMotorcycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ctaText?: StringFieldUpdateOperationsInput | string
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionTargetCreateManyPromotionInput = {
    id?: string
    scope: $Enums.PromotionScope
    value?: string | null
    isExclusion?: boolean
  }

  export type PromotionTargetUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionTargetUncheckedUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionTargetUncheckedUpdateManyWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    scope?: EnumPromotionScopeFieldUpdateOperationsInput | $Enums.PromotionScope
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isExclusion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostTranslationCreateManyPostInput = {
    id?: string
    locale: string
    title: string
    excerpt: string
    body: JsonNullValueInput | InputJsonValue
    plainText: string
    metaTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostTranslationUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    plainText?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}