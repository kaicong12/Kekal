
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
 * Model GeneratedReceipt
 * 
 */
export type GeneratedReceipt = $Result.DefaultSelection<Prisma.$GeneratedReceiptPayload>
/**
 * Model ReceiptCustomer
 * 
 */
export type ReceiptCustomer = $Result.DefaultSelection<Prisma.$ReceiptCustomerPayload>
/**
 * Model ReceiptItem
 * 
 */
export type ReceiptItem = $Result.DefaultSelection<Prisma.$ReceiptItemPayload>

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
   * `prisma.generatedReceipt`: Exposes CRUD operations for the **GeneratedReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedReceipts
    * const generatedReceipts = await prisma.generatedReceipt.findMany()
    * ```
    */
  get generatedReceipt(): Prisma.GeneratedReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptCustomer`: Exposes CRUD operations for the **ReceiptCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptCustomers
    * const receiptCustomers = await prisma.receiptCustomer.findMany()
    * ```
    */
  get receiptCustomer(): Prisma.ReceiptCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptItem`: Exposes CRUD operations for the **ReceiptItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiptItems
    * const receiptItems = await prisma.receiptItem.findMany()
    * ```
    */
  get receiptItem(): Prisma.ReceiptItemDelegate<ExtArgs, ClientOptions>;
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
    ProductSyncFile: 'ProductSyncFile',
    MotorcycleImage: 'MotorcycleImage',
    GeneratedReceipt: 'GeneratedReceipt',
    ReceiptCustomer: 'ReceiptCustomer',
    ReceiptItem: 'ReceiptItem'
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
      modelProps: "authorizedReceiptEmail" | "motorcycle" | "productSyncFile" | "motorcycleImage" | "generatedReceipt" | "receiptCustomer" | "receiptItem"
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
      GeneratedReceipt: {
        payload: Prisma.$GeneratedReceiptPayload<ExtArgs>
        fields: Prisma.GeneratedReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          findFirst: {
            args: Prisma.GeneratedReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          findMany: {
            args: Prisma.GeneratedReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>[]
          }
          create: {
            args: Prisma.GeneratedReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          createMany: {
            args: Prisma.GeneratedReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>[]
          }
          delete: {
            args: Prisma.GeneratedReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          update: {
            args: Prisma.GeneratedReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedReceiptPayload>
          }
          aggregate: {
            args: Prisma.GeneratedReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedReceipt>
          }
          groupBy: {
            args: Prisma.GeneratedReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedReceiptCountAggregateOutputType> | number
          }
        }
      }
      ReceiptCustomer: {
        payload: Prisma.$ReceiptCustomerPayload<ExtArgs>
        fields: Prisma.ReceiptCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiptCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiptCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          findFirst: {
            args: Prisma.ReceiptCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiptCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          findMany: {
            args: Prisma.ReceiptCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>[]
          }
          create: {
            args: Prisma.ReceiptCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          createMany: {
            args: Prisma.ReceiptCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiptCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>[]
          }
          delete: {
            args: Prisma.ReceiptCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          update: {
            args: Prisma.ReceiptCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          deleteMany: {
            args: Prisma.ReceiptCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiptCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiptCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>[]
          }
          upsert: {
            args: Prisma.ReceiptCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptCustomerPayload>
          }
          aggregate: {
            args: Prisma.ReceiptCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptCustomer>
          }
          groupBy: {
            args: Prisma.ReceiptCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiptCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCustomerCountAggregateOutputType> | number
          }
        }
      }
      ReceiptItem: {
        payload: Prisma.$ReceiptItemPayload<ExtArgs>
        fields: Prisma.ReceiptItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiptItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiptItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          findFirst: {
            args: Prisma.ReceiptItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiptItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          findMany: {
            args: Prisma.ReceiptItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          create: {
            args: Prisma.ReceiptItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          createMany: {
            args: Prisma.ReceiptItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiptItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          delete: {
            args: Prisma.ReceiptItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          update: {
            args: Prisma.ReceiptItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          deleteMany: {
            args: Prisma.ReceiptItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiptItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiptItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>[]
          }
          upsert: {
            args: Prisma.ReceiptItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptItemPayload>
          }
          aggregate: {
            args: Prisma.ReceiptItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptItem>
          }
          groupBy: {
            args: Prisma.ReceiptItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiptItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptItemCountAggregateOutputType> | number
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
    productSyncFile?: ProductSyncFileOmit
    motorcycleImage?: MotorcycleImageOmit
    generatedReceipt?: GeneratedReceiptOmit
    receiptCustomer?: ReceiptCustomerOmit
    receiptItem?: ReceiptItemOmit
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
  }

  export type MotorcycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | MotorcycleCountOutputTypeCountImagesArgs
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
   * Count Type GeneratedReceiptCountOutputType
   */

  export type GeneratedReceiptCountOutputType = {
    items: number
  }

  export type GeneratedReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | GeneratedReceiptCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * GeneratedReceiptCountOutputType without action
   */
  export type GeneratedReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceiptCountOutputType
     */
    select?: GeneratedReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneratedReceiptCountOutputType without action
   */
  export type GeneratedReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptItemWhereInput
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
    featured: boolean | null
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
    featured: boolean | null
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
    featured: number
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
    featured?: true
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
    featured?: true
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
    featured?: true
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
    featured: boolean
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
    featured?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Motorcycle$imagesArgs<ExtArgs>
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
    featured?: boolean
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
    featured?: boolean
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
    featured?: boolean
    tags?: boolean
    description?: boolean
    specification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MotorcycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "name" | "model" | "year" | "price" | "engine" | "engineCapacity" | "gear" | "color" | "featured" | "tags" | "description" | "specification" | "createdAt" | "updatedAt", ExtArgs["result"]["motorcycle"]>
  export type MotorcycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Motorcycle$imagesArgs<ExtArgs>
    _count?: boolean | MotorcycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotorcycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MotorcycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MotorcyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motorcycle"
    objects: {
      images: Prisma.$MotorcycleImagePayload<ExtArgs>[]
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
      featured: boolean
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
    readonly featured: FieldRef<"Motorcycle", 'Boolean'>
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
   * Model GeneratedReceipt
   */

  export type AggregateGeneratedReceipt = {
    _count: GeneratedReceiptCountAggregateOutputType | null
    _avg: GeneratedReceiptAvgAggregateOutputType | null
    _sum: GeneratedReceiptSumAggregateOutputType | null
    _min: GeneratedReceiptMinAggregateOutputType | null
    _max: GeneratedReceiptMaxAggregateOutputType | null
  }

  export type GeneratedReceiptAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type GeneratedReceiptSumAggregateOutputType = {
    total: Decimal | null
  }

  export type GeneratedReceiptMinAggregateOutputType = {
    id: string | null
    receiptNumber: string | null
    purchaseDate: Date | null
    paymentMethod: string | null
    additionalNotes: string | null
    total: Decimal | null
    pdfUrl: string | null
    createdAt: Date | null
  }

  export type GeneratedReceiptMaxAggregateOutputType = {
    id: string | null
    receiptNumber: string | null
    purchaseDate: Date | null
    paymentMethod: string | null
    additionalNotes: string | null
    total: Decimal | null
    pdfUrl: string | null
    createdAt: Date | null
  }

  export type GeneratedReceiptCountAggregateOutputType = {
    id: number
    receiptNumber: number
    purchaseDate: number
    paymentMethod: number
    additionalNotes: number
    total: number
    pdfUrl: number
    createdAt: number
    _all: number
  }


  export type GeneratedReceiptAvgAggregateInputType = {
    total?: true
  }

  export type GeneratedReceiptSumAggregateInputType = {
    total?: true
  }

  export type GeneratedReceiptMinAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseDate?: true
    paymentMethod?: true
    additionalNotes?: true
    total?: true
    pdfUrl?: true
    createdAt?: true
  }

  export type GeneratedReceiptMaxAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseDate?: true
    paymentMethod?: true
    additionalNotes?: true
    total?: true
    pdfUrl?: true
    createdAt?: true
  }

  export type GeneratedReceiptCountAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseDate?: true
    paymentMethod?: true
    additionalNotes?: true
    total?: true
    pdfUrl?: true
    createdAt?: true
    _all?: true
  }

  export type GeneratedReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedReceipt to aggregate.
     */
    where?: GeneratedReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedReceipts to fetch.
     */
    orderBy?: GeneratedReceiptOrderByWithRelationInput | GeneratedReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedReceipts
    **/
    _count?: true | GeneratedReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedReceiptMaxAggregateInputType
  }

  export type GetGeneratedReceiptAggregateType<T extends GeneratedReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedReceipt[P]>
      : GetScalarType<T[P], AggregateGeneratedReceipt[P]>
  }




  export type GeneratedReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedReceiptWhereInput
    orderBy?: GeneratedReceiptOrderByWithAggregationInput | GeneratedReceiptOrderByWithAggregationInput[]
    by: GeneratedReceiptScalarFieldEnum[] | GeneratedReceiptScalarFieldEnum
    having?: GeneratedReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedReceiptCountAggregateInputType | true
    _avg?: GeneratedReceiptAvgAggregateInputType
    _sum?: GeneratedReceiptSumAggregateInputType
    _min?: GeneratedReceiptMinAggregateInputType
    _max?: GeneratedReceiptMaxAggregateInputType
  }

  export type GeneratedReceiptGroupByOutputType = {
    id: string
    receiptNumber: string
    purchaseDate: Date
    paymentMethod: string
    additionalNotes: string | null
    total: Decimal
    pdfUrl: string
    createdAt: Date
    _count: GeneratedReceiptCountAggregateOutputType | null
    _avg: GeneratedReceiptAvgAggregateOutputType | null
    _sum: GeneratedReceiptSumAggregateOutputType | null
    _min: GeneratedReceiptMinAggregateOutputType | null
    _max: GeneratedReceiptMaxAggregateOutputType | null
  }

  type GetGeneratedReceiptGroupByPayload<T extends GeneratedReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedReceiptGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseDate?: boolean
    paymentMethod?: boolean
    additionalNotes?: boolean
    total?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
    customer?: boolean | GeneratedReceipt$customerArgs<ExtArgs>
    items?: boolean | GeneratedReceipt$itemsArgs<ExtArgs>
    _count?: boolean | GeneratedReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedReceipt"]>

  export type GeneratedReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseDate?: boolean
    paymentMethod?: boolean
    additionalNotes?: boolean
    total?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["generatedReceipt"]>

  export type GeneratedReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseDate?: boolean
    paymentMethod?: boolean
    additionalNotes?: boolean
    total?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["generatedReceipt"]>

  export type GeneratedReceiptSelectScalar = {
    id?: boolean
    receiptNumber?: boolean
    purchaseDate?: boolean
    paymentMethod?: boolean
    additionalNotes?: boolean
    total?: boolean
    pdfUrl?: boolean
    createdAt?: boolean
  }

  export type GeneratedReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiptNumber" | "purchaseDate" | "paymentMethod" | "additionalNotes" | "total" | "pdfUrl" | "createdAt", ExtArgs["result"]["generatedReceipt"]>
  export type GeneratedReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | GeneratedReceipt$customerArgs<ExtArgs>
    items?: boolean | GeneratedReceipt$itemsArgs<ExtArgs>
    _count?: boolean | GeneratedReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneratedReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GeneratedReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneratedReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedReceipt"
    objects: {
      customer: Prisma.$ReceiptCustomerPayload<ExtArgs> | null
      items: Prisma.$ReceiptItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receiptNumber: string
      purchaseDate: Date
      paymentMethod: string
      additionalNotes: string | null
      total: Prisma.Decimal
      pdfUrl: string
      createdAt: Date
    }, ExtArgs["result"]["generatedReceipt"]>
    composites: {}
  }

  type GeneratedReceiptGetPayload<S extends boolean | null | undefined | GeneratedReceiptDefaultArgs> = $Result.GetResult<Prisma.$GeneratedReceiptPayload, S>

  type GeneratedReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedReceiptCountAggregateInputType | true
    }

  export interface GeneratedReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedReceipt'], meta: { name: 'GeneratedReceipt' } }
    /**
     * Find zero or one GeneratedReceipt that matches the filter.
     * @param {GeneratedReceiptFindUniqueArgs} args - Arguments to find a GeneratedReceipt
     * @example
     * // Get one GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedReceiptFindUniqueArgs>(args: SelectSubset<T, GeneratedReceiptFindUniqueArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedReceiptFindUniqueOrThrowArgs} args - Arguments to find a GeneratedReceipt
     * @example
     * // Get one GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptFindFirstArgs} args - Arguments to find a GeneratedReceipt
     * @example
     * // Get one GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedReceiptFindFirstArgs>(args?: SelectSubset<T, GeneratedReceiptFindFirstArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptFindFirstOrThrowArgs} args - Arguments to find a GeneratedReceipt
     * @example
     * // Get one GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedReceipts
     * const generatedReceipts = await prisma.generatedReceipt.findMany()
     * 
     * // Get first 10 GeneratedReceipts
     * const generatedReceipts = await prisma.generatedReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedReceiptWithIdOnly = await prisma.generatedReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedReceiptFindManyArgs>(args?: SelectSubset<T, GeneratedReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedReceipt.
     * @param {GeneratedReceiptCreateArgs} args - Arguments to create a GeneratedReceipt.
     * @example
     * // Create one GeneratedReceipt
     * const GeneratedReceipt = await prisma.generatedReceipt.create({
     *   data: {
     *     // ... data to create a GeneratedReceipt
     *   }
     * })
     * 
     */
    create<T extends GeneratedReceiptCreateArgs>(args: SelectSubset<T, GeneratedReceiptCreateArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedReceipts.
     * @param {GeneratedReceiptCreateManyArgs} args - Arguments to create many GeneratedReceipts.
     * @example
     * // Create many GeneratedReceipts
     * const generatedReceipt = await prisma.generatedReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedReceiptCreateManyArgs>(args?: SelectSubset<T, GeneratedReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedReceipts and returns the data saved in the database.
     * @param {GeneratedReceiptCreateManyAndReturnArgs} args - Arguments to create many GeneratedReceipts.
     * @example
     * // Create many GeneratedReceipts
     * const generatedReceipt = await prisma.generatedReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedReceipts and only return the `id`
     * const generatedReceiptWithIdOnly = await prisma.generatedReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedReceipt.
     * @param {GeneratedReceiptDeleteArgs} args - Arguments to delete one GeneratedReceipt.
     * @example
     * // Delete one GeneratedReceipt
     * const GeneratedReceipt = await prisma.generatedReceipt.delete({
     *   where: {
     *     // ... filter to delete one GeneratedReceipt
     *   }
     * })
     * 
     */
    delete<T extends GeneratedReceiptDeleteArgs>(args: SelectSubset<T, GeneratedReceiptDeleteArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedReceipt.
     * @param {GeneratedReceiptUpdateArgs} args - Arguments to update one GeneratedReceipt.
     * @example
     * // Update one GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedReceiptUpdateArgs>(args: SelectSubset<T, GeneratedReceiptUpdateArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedReceipts.
     * @param {GeneratedReceiptDeleteManyArgs} args - Arguments to filter GeneratedReceipts to delete.
     * @example
     * // Delete a few GeneratedReceipts
     * const { count } = await prisma.generatedReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedReceiptDeleteManyArgs>(args?: SelectSubset<T, GeneratedReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedReceipts
     * const generatedReceipt = await prisma.generatedReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedReceiptUpdateManyArgs>(args: SelectSubset<T, GeneratedReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedReceipts and returns the data updated in the database.
     * @param {GeneratedReceiptUpdateManyAndReturnArgs} args - Arguments to update many GeneratedReceipts.
     * @example
     * // Update many GeneratedReceipts
     * const generatedReceipt = await prisma.generatedReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedReceipts and only return the `id`
     * const generatedReceiptWithIdOnly = await prisma.generatedReceipt.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneratedReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedReceipt.
     * @param {GeneratedReceiptUpsertArgs} args - Arguments to update or create a GeneratedReceipt.
     * @example
     * // Update or create a GeneratedReceipt
     * const generatedReceipt = await prisma.generatedReceipt.upsert({
     *   create: {
     *     // ... data to create a GeneratedReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedReceipt we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedReceiptUpsertArgs>(args: SelectSubset<T, GeneratedReceiptUpsertArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptCountArgs} args - Arguments to filter GeneratedReceipts to count.
     * @example
     * // Count the number of GeneratedReceipts
     * const count = await prisma.generatedReceipt.count({
     *   where: {
     *     // ... the filter for the GeneratedReceipts we want to count
     *   }
     * })
    **/
    count<T extends GeneratedReceiptCountArgs>(
      args?: Subset<T, GeneratedReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedReceiptAggregateArgs>(args: Subset<T, GeneratedReceiptAggregateArgs>): Prisma.PrismaPromise<GetGeneratedReceiptAggregateType<T>>

    /**
     * Group by GeneratedReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedReceiptGroupByArgs} args - Group by arguments.
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
      T extends GeneratedReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedReceiptGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedReceipt model
   */
  readonly fields: GeneratedReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends GeneratedReceipt$customerArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedReceipt$customerArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends GeneratedReceipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedReceipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeneratedReceipt model
   */
  interface GeneratedReceiptFieldRefs {
    readonly id: FieldRef<"GeneratedReceipt", 'String'>
    readonly receiptNumber: FieldRef<"GeneratedReceipt", 'String'>
    readonly purchaseDate: FieldRef<"GeneratedReceipt", 'DateTime'>
    readonly paymentMethod: FieldRef<"GeneratedReceipt", 'String'>
    readonly additionalNotes: FieldRef<"GeneratedReceipt", 'String'>
    readonly total: FieldRef<"GeneratedReceipt", 'Decimal'>
    readonly pdfUrl: FieldRef<"GeneratedReceipt", 'String'>
    readonly createdAt: FieldRef<"GeneratedReceipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedReceipt findUnique
   */
  export type GeneratedReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedReceipt to fetch.
     */
    where: GeneratedReceiptWhereUniqueInput
  }

  /**
   * GeneratedReceipt findUniqueOrThrow
   */
  export type GeneratedReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedReceipt to fetch.
     */
    where: GeneratedReceiptWhereUniqueInput
  }

  /**
   * GeneratedReceipt findFirst
   */
  export type GeneratedReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedReceipt to fetch.
     */
    where?: GeneratedReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedReceipts to fetch.
     */
    orderBy?: GeneratedReceiptOrderByWithRelationInput | GeneratedReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedReceipts.
     */
    cursor?: GeneratedReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedReceipts.
     */
    distinct?: GeneratedReceiptScalarFieldEnum | GeneratedReceiptScalarFieldEnum[]
  }

  /**
   * GeneratedReceipt findFirstOrThrow
   */
  export type GeneratedReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedReceipt to fetch.
     */
    where?: GeneratedReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedReceipts to fetch.
     */
    orderBy?: GeneratedReceiptOrderByWithRelationInput | GeneratedReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedReceipts.
     */
    cursor?: GeneratedReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedReceipts.
     */
    distinct?: GeneratedReceiptScalarFieldEnum | GeneratedReceiptScalarFieldEnum[]
  }

  /**
   * GeneratedReceipt findMany
   */
  export type GeneratedReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedReceipts to fetch.
     */
    where?: GeneratedReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedReceipts to fetch.
     */
    orderBy?: GeneratedReceiptOrderByWithRelationInput | GeneratedReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedReceipts.
     */
    cursor?: GeneratedReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedReceipts.
     */
    distinct?: GeneratedReceiptScalarFieldEnum | GeneratedReceiptScalarFieldEnum[]
  }

  /**
   * GeneratedReceipt create
   */
  export type GeneratedReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedReceipt.
     */
    data: XOR<GeneratedReceiptCreateInput, GeneratedReceiptUncheckedCreateInput>
  }

  /**
   * GeneratedReceipt createMany
   */
  export type GeneratedReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedReceipts.
     */
    data: GeneratedReceiptCreateManyInput | GeneratedReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedReceipt createManyAndReturn
   */
  export type GeneratedReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedReceipts.
     */
    data: GeneratedReceiptCreateManyInput | GeneratedReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedReceipt update
   */
  export type GeneratedReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedReceipt.
     */
    data: XOR<GeneratedReceiptUpdateInput, GeneratedReceiptUncheckedUpdateInput>
    /**
     * Choose, which GeneratedReceipt to update.
     */
    where: GeneratedReceiptWhereUniqueInput
  }

  /**
   * GeneratedReceipt updateMany
   */
  export type GeneratedReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedReceipts.
     */
    data: XOR<GeneratedReceiptUpdateManyMutationInput, GeneratedReceiptUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedReceipts to update
     */
    where?: GeneratedReceiptWhereInput
    /**
     * Limit how many GeneratedReceipts to update.
     */
    limit?: number
  }

  /**
   * GeneratedReceipt updateManyAndReturn
   */
  export type GeneratedReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedReceipts.
     */
    data: XOR<GeneratedReceiptUpdateManyMutationInput, GeneratedReceiptUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedReceipts to update
     */
    where?: GeneratedReceiptWhereInput
    /**
     * Limit how many GeneratedReceipts to update.
     */
    limit?: number
  }

  /**
   * GeneratedReceipt upsert
   */
  export type GeneratedReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedReceipt to update in case it exists.
     */
    where: GeneratedReceiptWhereUniqueInput
    /**
     * In case the GeneratedReceipt found by the `where` argument doesn't exist, create a new GeneratedReceipt with this data.
     */
    create: XOR<GeneratedReceiptCreateInput, GeneratedReceiptUncheckedCreateInput>
    /**
     * In case the GeneratedReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedReceiptUpdateInput, GeneratedReceiptUncheckedUpdateInput>
  }

  /**
   * GeneratedReceipt delete
   */
  export type GeneratedReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
    /**
     * Filter which GeneratedReceipt to delete.
     */
    where: GeneratedReceiptWhereUniqueInput
  }

  /**
   * GeneratedReceipt deleteMany
   */
  export type GeneratedReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedReceipts to delete
     */
    where?: GeneratedReceiptWhereInput
    /**
     * Limit how many GeneratedReceipts to delete.
     */
    limit?: number
  }

  /**
   * GeneratedReceipt.customer
   */
  export type GeneratedReceipt$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    where?: ReceiptCustomerWhereInput
  }

  /**
   * GeneratedReceipt.items
   */
  export type GeneratedReceipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    where?: ReceiptItemWhereInput
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    cursor?: ReceiptItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * GeneratedReceipt without action
   */
  export type GeneratedReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedReceipt
     */
    select?: GeneratedReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedReceipt
     */
    omit?: GeneratedReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedReceiptInclude<ExtArgs> | null
  }


  /**
   * Model ReceiptCustomer
   */

  export type AggregateReceiptCustomer = {
    _count: ReceiptCustomerCountAggregateOutputType | null
    _min: ReceiptCustomerMinAggregateOutputType | null
    _max: ReceiptCustomerMaxAggregateOutputType | null
  }

  export type ReceiptCustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    cityPostal: string | null
    phone: string | null
    receiptId: string | null
  }

  export type ReceiptCustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    cityPostal: string | null
    phone: string | null
    receiptId: string | null
  }

  export type ReceiptCustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    cityPostal: number
    phone: number
    receiptId: number
    _all: number
  }


  export type ReceiptCustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    cityPostal?: true
    phone?: true
    receiptId?: true
  }

  export type ReceiptCustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    cityPostal?: true
    phone?: true
    receiptId?: true
  }

  export type ReceiptCustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    cityPostal?: true
    phone?: true
    receiptId?: true
    _all?: true
  }

  export type ReceiptCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptCustomer to aggregate.
     */
    where?: ReceiptCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptCustomers to fetch.
     */
    orderBy?: ReceiptCustomerOrderByWithRelationInput | ReceiptCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiptCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceiptCustomers
    **/
    _count?: true | ReceiptCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptCustomerMaxAggregateInputType
  }

  export type GetReceiptCustomerAggregateType<T extends ReceiptCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptCustomer[P]>
      : GetScalarType<T[P], AggregateReceiptCustomer[P]>
  }




  export type ReceiptCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptCustomerWhereInput
    orderBy?: ReceiptCustomerOrderByWithAggregationInput | ReceiptCustomerOrderByWithAggregationInput[]
    by: ReceiptCustomerScalarFieldEnum[] | ReceiptCustomerScalarFieldEnum
    having?: ReceiptCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCustomerCountAggregateInputType | true
    _min?: ReceiptCustomerMinAggregateInputType
    _max?: ReceiptCustomerMaxAggregateInputType
  }

  export type ReceiptCustomerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    address: string | null
    cityPostal: string | null
    phone: string | null
    receiptId: string
    _count: ReceiptCustomerCountAggregateOutputType | null
    _min: ReceiptCustomerMinAggregateOutputType | null
    _max: ReceiptCustomerMaxAggregateOutputType | null
  }

  type GetReceiptCustomerGroupByPayload<T extends ReceiptCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptCustomerGroupByOutputType[P]>
        }
      >
    >


  export type ReceiptCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    cityPostal?: boolean
    phone?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptCustomer"]>

  export type ReceiptCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    cityPostal?: boolean
    phone?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptCustomer"]>

  export type ReceiptCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    cityPostal?: boolean
    phone?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptCustomer"]>

  export type ReceiptCustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    cityPostal?: boolean
    phone?: boolean
    receiptId?: boolean
  }

  export type ReceiptCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "cityPostal" | "phone" | "receiptId", ExtArgs["result"]["receiptCustomer"]>
  export type ReceiptCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }

  export type $ReceiptCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceiptCustomer"
    objects: {
      receipt: Prisma.$GeneratedReceiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      address: string | null
      cityPostal: string | null
      phone: string | null
      receiptId: string
    }, ExtArgs["result"]["receiptCustomer"]>
    composites: {}
  }

  type ReceiptCustomerGetPayload<S extends boolean | null | undefined | ReceiptCustomerDefaultArgs> = $Result.GetResult<Prisma.$ReceiptCustomerPayload, S>

  type ReceiptCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiptCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCustomerCountAggregateInputType | true
    }

  export interface ReceiptCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceiptCustomer'], meta: { name: 'ReceiptCustomer' } }
    /**
     * Find zero or one ReceiptCustomer that matches the filter.
     * @param {ReceiptCustomerFindUniqueArgs} args - Arguments to find a ReceiptCustomer
     * @example
     * // Get one ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiptCustomerFindUniqueArgs>(args: SelectSubset<T, ReceiptCustomerFindUniqueArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiptCustomerFindUniqueOrThrowArgs} args - Arguments to find a ReceiptCustomer
     * @example
     * // Get one ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiptCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiptCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerFindFirstArgs} args - Arguments to find a ReceiptCustomer
     * @example
     * // Get one ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiptCustomerFindFirstArgs>(args?: SelectSubset<T, ReceiptCustomerFindFirstArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerFindFirstOrThrowArgs} args - Arguments to find a ReceiptCustomer
     * @example
     * // Get one ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiptCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiptCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptCustomers
     * const receiptCustomers = await prisma.receiptCustomer.findMany()
     * 
     * // Get first 10 ReceiptCustomers
     * const receiptCustomers = await prisma.receiptCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptCustomerWithIdOnly = await prisma.receiptCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiptCustomerFindManyArgs>(args?: SelectSubset<T, ReceiptCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptCustomer.
     * @param {ReceiptCustomerCreateArgs} args - Arguments to create a ReceiptCustomer.
     * @example
     * // Create one ReceiptCustomer
     * const ReceiptCustomer = await prisma.receiptCustomer.create({
     *   data: {
     *     // ... data to create a ReceiptCustomer
     *   }
     * })
     * 
     */
    create<T extends ReceiptCustomerCreateArgs>(args: SelectSubset<T, ReceiptCustomerCreateArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptCustomers.
     * @param {ReceiptCustomerCreateManyArgs} args - Arguments to create many ReceiptCustomers.
     * @example
     * // Create many ReceiptCustomers
     * const receiptCustomer = await prisma.receiptCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiptCustomerCreateManyArgs>(args?: SelectSubset<T, ReceiptCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceiptCustomers and returns the data saved in the database.
     * @param {ReceiptCustomerCreateManyAndReturnArgs} args - Arguments to create many ReceiptCustomers.
     * @example
     * // Create many ReceiptCustomers
     * const receiptCustomer = await prisma.receiptCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceiptCustomers and only return the `id`
     * const receiptCustomerWithIdOnly = await prisma.receiptCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiptCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiptCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceiptCustomer.
     * @param {ReceiptCustomerDeleteArgs} args - Arguments to delete one ReceiptCustomer.
     * @example
     * // Delete one ReceiptCustomer
     * const ReceiptCustomer = await prisma.receiptCustomer.delete({
     *   where: {
     *     // ... filter to delete one ReceiptCustomer
     *   }
     * })
     * 
     */
    delete<T extends ReceiptCustomerDeleteArgs>(args: SelectSubset<T, ReceiptCustomerDeleteArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptCustomer.
     * @param {ReceiptCustomerUpdateArgs} args - Arguments to update one ReceiptCustomer.
     * @example
     * // Update one ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiptCustomerUpdateArgs>(args: SelectSubset<T, ReceiptCustomerUpdateArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptCustomers.
     * @param {ReceiptCustomerDeleteManyArgs} args - Arguments to filter ReceiptCustomers to delete.
     * @example
     * // Delete a few ReceiptCustomers
     * const { count } = await prisma.receiptCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiptCustomerDeleteManyArgs>(args?: SelectSubset<T, ReceiptCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptCustomers
     * const receiptCustomer = await prisma.receiptCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiptCustomerUpdateManyArgs>(args: SelectSubset<T, ReceiptCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptCustomers and returns the data updated in the database.
     * @param {ReceiptCustomerUpdateManyAndReturnArgs} args - Arguments to update many ReceiptCustomers.
     * @example
     * // Update many ReceiptCustomers
     * const receiptCustomer = await prisma.receiptCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceiptCustomers and only return the `id`
     * const receiptCustomerWithIdOnly = await prisma.receiptCustomer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceiptCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiptCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceiptCustomer.
     * @param {ReceiptCustomerUpsertArgs} args - Arguments to update or create a ReceiptCustomer.
     * @example
     * // Update or create a ReceiptCustomer
     * const receiptCustomer = await prisma.receiptCustomer.upsert({
     *   create: {
     *     // ... data to create a ReceiptCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptCustomer we want to update
     *   }
     * })
     */
    upsert<T extends ReceiptCustomerUpsertArgs>(args: SelectSubset<T, ReceiptCustomerUpsertArgs<ExtArgs>>): Prisma__ReceiptCustomerClient<$Result.GetResult<Prisma.$ReceiptCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerCountArgs} args - Arguments to filter ReceiptCustomers to count.
     * @example
     * // Count the number of ReceiptCustomers
     * const count = await prisma.receiptCustomer.count({
     *   where: {
     *     // ... the filter for the ReceiptCustomers we want to count
     *   }
     * })
    **/
    count<T extends ReceiptCustomerCountArgs>(
      args?: Subset<T, ReceiptCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceiptCustomerAggregateArgs>(args: Subset<T, ReceiptCustomerAggregateArgs>): Prisma.PrismaPromise<GetReceiptCustomerAggregateType<T>>

    /**
     * Group by ReceiptCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCustomerGroupByArgs} args - Group by arguments.
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
      T extends ReceiptCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiptCustomerGroupByArgs['orderBy'] }
        : { orderBy?: ReceiptCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceiptCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceiptCustomer model
   */
  readonly fields: ReceiptCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceiptCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiptCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends GeneratedReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedReceiptDefaultArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReceiptCustomer model
   */
  interface ReceiptCustomerFieldRefs {
    readonly id: FieldRef<"ReceiptCustomer", 'String'>
    readonly name: FieldRef<"ReceiptCustomer", 'String'>
    readonly email: FieldRef<"ReceiptCustomer", 'String'>
    readonly address: FieldRef<"ReceiptCustomer", 'String'>
    readonly cityPostal: FieldRef<"ReceiptCustomer", 'String'>
    readonly phone: FieldRef<"ReceiptCustomer", 'String'>
    readonly receiptId: FieldRef<"ReceiptCustomer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReceiptCustomer findUnique
   */
  export type ReceiptCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptCustomer to fetch.
     */
    where: ReceiptCustomerWhereUniqueInput
  }

  /**
   * ReceiptCustomer findUniqueOrThrow
   */
  export type ReceiptCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptCustomer to fetch.
     */
    where: ReceiptCustomerWhereUniqueInput
  }

  /**
   * ReceiptCustomer findFirst
   */
  export type ReceiptCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptCustomer to fetch.
     */
    where?: ReceiptCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptCustomers to fetch.
     */
    orderBy?: ReceiptCustomerOrderByWithRelationInput | ReceiptCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptCustomers.
     */
    cursor?: ReceiptCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptCustomers.
     */
    distinct?: ReceiptCustomerScalarFieldEnum | ReceiptCustomerScalarFieldEnum[]
  }

  /**
   * ReceiptCustomer findFirstOrThrow
   */
  export type ReceiptCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptCustomer to fetch.
     */
    where?: ReceiptCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptCustomers to fetch.
     */
    orderBy?: ReceiptCustomerOrderByWithRelationInput | ReceiptCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptCustomers.
     */
    cursor?: ReceiptCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptCustomers.
     */
    distinct?: ReceiptCustomerScalarFieldEnum | ReceiptCustomerScalarFieldEnum[]
  }

  /**
   * ReceiptCustomer findMany
   */
  export type ReceiptCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptCustomers to fetch.
     */
    where?: ReceiptCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptCustomers to fetch.
     */
    orderBy?: ReceiptCustomerOrderByWithRelationInput | ReceiptCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceiptCustomers.
     */
    cursor?: ReceiptCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptCustomers.
     */
    distinct?: ReceiptCustomerScalarFieldEnum | ReceiptCustomerScalarFieldEnum[]
  }

  /**
   * ReceiptCustomer create
   */
  export type ReceiptCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceiptCustomer.
     */
    data: XOR<ReceiptCustomerCreateInput, ReceiptCustomerUncheckedCreateInput>
  }

  /**
   * ReceiptCustomer createMany
   */
  export type ReceiptCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceiptCustomers.
     */
    data: ReceiptCustomerCreateManyInput | ReceiptCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceiptCustomer createManyAndReturn
   */
  export type ReceiptCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many ReceiptCustomers.
     */
    data: ReceiptCustomerCreateManyInput | ReceiptCustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptCustomer update
   */
  export type ReceiptCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceiptCustomer.
     */
    data: XOR<ReceiptCustomerUpdateInput, ReceiptCustomerUncheckedUpdateInput>
    /**
     * Choose, which ReceiptCustomer to update.
     */
    where: ReceiptCustomerWhereUniqueInput
  }

  /**
   * ReceiptCustomer updateMany
   */
  export type ReceiptCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceiptCustomers.
     */
    data: XOR<ReceiptCustomerUpdateManyMutationInput, ReceiptCustomerUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptCustomers to update
     */
    where?: ReceiptCustomerWhereInput
    /**
     * Limit how many ReceiptCustomers to update.
     */
    limit?: number
  }

  /**
   * ReceiptCustomer updateManyAndReturn
   */
  export type ReceiptCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * The data used to update ReceiptCustomers.
     */
    data: XOR<ReceiptCustomerUpdateManyMutationInput, ReceiptCustomerUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptCustomers to update
     */
    where?: ReceiptCustomerWhereInput
    /**
     * Limit how many ReceiptCustomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptCustomer upsert
   */
  export type ReceiptCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceiptCustomer to update in case it exists.
     */
    where: ReceiptCustomerWhereUniqueInput
    /**
     * In case the ReceiptCustomer found by the `where` argument doesn't exist, create a new ReceiptCustomer with this data.
     */
    create: XOR<ReceiptCustomerCreateInput, ReceiptCustomerUncheckedCreateInput>
    /**
     * In case the ReceiptCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiptCustomerUpdateInput, ReceiptCustomerUncheckedUpdateInput>
  }

  /**
   * ReceiptCustomer delete
   */
  export type ReceiptCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
    /**
     * Filter which ReceiptCustomer to delete.
     */
    where: ReceiptCustomerWhereUniqueInput
  }

  /**
   * ReceiptCustomer deleteMany
   */
  export type ReceiptCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptCustomers to delete
     */
    where?: ReceiptCustomerWhereInput
    /**
     * Limit how many ReceiptCustomers to delete.
     */
    limit?: number
  }

  /**
   * ReceiptCustomer without action
   */
  export type ReceiptCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCustomer
     */
    select?: ReceiptCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptCustomer
     */
    omit?: ReceiptCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptCustomerInclude<ExtArgs> | null
  }


  /**
   * Model ReceiptItem
   */

  export type AggregateReceiptItem = {
    _count: ReceiptItemCountAggregateOutputType | null
    _avg: ReceiptItemAvgAggregateOutputType | null
    _sum: ReceiptItemSumAggregateOutputType | null
    _min: ReceiptItemMinAggregateOutputType | null
    _max: ReceiptItemMaxAggregateOutputType | null
  }

  export type ReceiptItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    amount: Decimal | null
  }

  export type ReceiptItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    amount: Decimal | null
  }

  export type ReceiptItemMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: string | null
  }

  export type ReceiptItemMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    amount: Decimal | null
    receiptId: string | null
  }

  export type ReceiptItemCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    unitPrice: number
    amount: number
    receiptId: number
    _all: number
  }


  export type ReceiptItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    amount?: true
  }

  export type ReceiptItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    amount?: true
  }

  export type ReceiptItemMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ReceiptItemMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
  }

  export type ReceiptItemCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    unitPrice?: true
    amount?: true
    receiptId?: true
    _all?: true
  }

  export type ReceiptItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptItem to aggregate.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceiptItems
    **/
    _count?: true | ReceiptItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptItemMaxAggregateInputType
  }

  export type GetReceiptItemAggregateType<T extends ReceiptItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptItem[P]>
      : GetScalarType<T[P], AggregateReceiptItem[P]>
  }




  export type ReceiptItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptItemWhereInput
    orderBy?: ReceiptItemOrderByWithAggregationInput | ReceiptItemOrderByWithAggregationInput[]
    by: ReceiptItemScalarFieldEnum[] | ReceiptItemScalarFieldEnum
    having?: ReceiptItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptItemCountAggregateInputType | true
    _avg?: ReceiptItemAvgAggregateInputType
    _sum?: ReceiptItemSumAggregateInputType
    _min?: ReceiptItemMinAggregateInputType
    _max?: ReceiptItemMaxAggregateInputType
  }

  export type ReceiptItemGroupByOutputType = {
    id: string
    description: string
    quantity: number
    unitPrice: Decimal
    amount: Decimal
    receiptId: string
    _count: ReceiptItemCountAggregateOutputType | null
    _avg: ReceiptItemAvgAggregateOutputType | null
    _sum: ReceiptItemSumAggregateOutputType | null
    _min: ReceiptItemMinAggregateOutputType | null
    _max: ReceiptItemMaxAggregateOutputType | null
  }

  type GetReceiptItemGroupByPayload<T extends ReceiptItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptItemGroupByOutputType[P]>
        }
      >
    >


  export type ReceiptItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptItem"]>

  export type ReceiptItemSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    amount?: boolean
    receiptId?: boolean
  }

  export type ReceiptItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "unitPrice" | "amount" | "receiptId", ExtArgs["result"]["receiptItem"]>
  export type ReceiptItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }
  export type ReceiptItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | GeneratedReceiptDefaultArgs<ExtArgs>
  }

  export type $ReceiptItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceiptItem"
    objects: {
      receipt: Prisma.$GeneratedReceiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      unitPrice: Prisma.Decimal
      amount: Prisma.Decimal
      receiptId: string
    }, ExtArgs["result"]["receiptItem"]>
    composites: {}
  }

  type ReceiptItemGetPayload<S extends boolean | null | undefined | ReceiptItemDefaultArgs> = $Result.GetResult<Prisma.$ReceiptItemPayload, S>

  type ReceiptItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiptItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptItemCountAggregateInputType | true
    }

  export interface ReceiptItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceiptItem'], meta: { name: 'ReceiptItem' } }
    /**
     * Find zero or one ReceiptItem that matches the filter.
     * @param {ReceiptItemFindUniqueArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiptItemFindUniqueArgs>(args: SelectSubset<T, ReceiptItemFindUniqueArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceiptItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiptItemFindUniqueOrThrowArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiptItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiptItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindFirstArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiptItemFindFirstArgs>(args?: SelectSubset<T, ReceiptItemFindFirstArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceiptItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindFirstOrThrowArgs} args - Arguments to find a ReceiptItem
     * @example
     * // Get one ReceiptItem
     * const receiptItem = await prisma.receiptItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiptItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiptItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiptItems
     * const receiptItems = await prisma.receiptItem.findMany()
     * 
     * // Get first 10 ReceiptItems
     * const receiptItems = await prisma.receiptItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiptItemFindManyArgs>(args?: SelectSubset<T, ReceiptItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceiptItem.
     * @param {ReceiptItemCreateArgs} args - Arguments to create a ReceiptItem.
     * @example
     * // Create one ReceiptItem
     * const ReceiptItem = await prisma.receiptItem.create({
     *   data: {
     *     // ... data to create a ReceiptItem
     *   }
     * })
     * 
     */
    create<T extends ReceiptItemCreateArgs>(args: SelectSubset<T, ReceiptItemCreateArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceiptItems.
     * @param {ReceiptItemCreateManyArgs} args - Arguments to create many ReceiptItems.
     * @example
     * // Create many ReceiptItems
     * const receiptItem = await prisma.receiptItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiptItemCreateManyArgs>(args?: SelectSubset<T, ReceiptItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceiptItems and returns the data saved in the database.
     * @param {ReceiptItemCreateManyAndReturnArgs} args - Arguments to create many ReceiptItems.
     * @example
     * // Create many ReceiptItems
     * const receiptItem = await prisma.receiptItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceiptItems and only return the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiptItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiptItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceiptItem.
     * @param {ReceiptItemDeleteArgs} args - Arguments to delete one ReceiptItem.
     * @example
     * // Delete one ReceiptItem
     * const ReceiptItem = await prisma.receiptItem.delete({
     *   where: {
     *     // ... filter to delete one ReceiptItem
     *   }
     * })
     * 
     */
    delete<T extends ReceiptItemDeleteArgs>(args: SelectSubset<T, ReceiptItemDeleteArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceiptItem.
     * @param {ReceiptItemUpdateArgs} args - Arguments to update one ReceiptItem.
     * @example
     * // Update one ReceiptItem
     * const receiptItem = await prisma.receiptItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiptItemUpdateArgs>(args: SelectSubset<T, ReceiptItemUpdateArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceiptItems.
     * @param {ReceiptItemDeleteManyArgs} args - Arguments to filter ReceiptItems to delete.
     * @example
     * // Delete a few ReceiptItems
     * const { count } = await prisma.receiptItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiptItemDeleteManyArgs>(args?: SelectSubset<T, ReceiptItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiptItems
     * const receiptItem = await prisma.receiptItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiptItemUpdateManyArgs>(args: SelectSubset<T, ReceiptItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiptItems and returns the data updated in the database.
     * @param {ReceiptItemUpdateManyAndReturnArgs} args - Arguments to update many ReceiptItems.
     * @example
     * // Update many ReceiptItems
     * const receiptItem = await prisma.receiptItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceiptItems and only return the `id`
     * const receiptItemWithIdOnly = await prisma.receiptItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceiptItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiptItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceiptItem.
     * @param {ReceiptItemUpsertArgs} args - Arguments to update or create a ReceiptItem.
     * @example
     * // Update or create a ReceiptItem
     * const receiptItem = await prisma.receiptItem.upsert({
     *   create: {
     *     // ... data to create a ReceiptItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiptItem we want to update
     *   }
     * })
     */
    upsert<T extends ReceiptItemUpsertArgs>(args: SelectSubset<T, ReceiptItemUpsertArgs<ExtArgs>>): Prisma__ReceiptItemClient<$Result.GetResult<Prisma.$ReceiptItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemCountArgs} args - Arguments to filter ReceiptItems to count.
     * @example
     * // Count the number of ReceiptItems
     * const count = await prisma.receiptItem.count({
     *   where: {
     *     // ... the filter for the ReceiptItems we want to count
     *   }
     * })
    **/
    count<T extends ReceiptItemCountArgs>(
      args?: Subset<T, ReceiptItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceiptItemAggregateArgs>(args: Subset<T, ReceiptItemAggregateArgs>): Prisma.PrismaPromise<GetReceiptItemAggregateType<T>>

    /**
     * Group by ReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptItemGroupByArgs} args - Group by arguments.
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
      T extends ReceiptItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiptItemGroupByArgs['orderBy'] }
        : { orderBy?: ReceiptItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceiptItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceiptItem model
   */
  readonly fields: ReceiptItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceiptItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiptItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends GeneratedReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedReceiptDefaultArgs<ExtArgs>>): Prisma__GeneratedReceiptClient<$Result.GetResult<Prisma.$GeneratedReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReceiptItem model
   */
  interface ReceiptItemFieldRefs {
    readonly id: FieldRef<"ReceiptItem", 'String'>
    readonly description: FieldRef<"ReceiptItem", 'String'>
    readonly quantity: FieldRef<"ReceiptItem", 'Int'>
    readonly unitPrice: FieldRef<"ReceiptItem", 'Decimal'>
    readonly amount: FieldRef<"ReceiptItem", 'Decimal'>
    readonly receiptId: FieldRef<"ReceiptItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReceiptItem findUnique
   */
  export type ReceiptItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem findUniqueOrThrow
   */
  export type ReceiptItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem findFirst
   */
  export type ReceiptItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptItems.
     */
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem findFirstOrThrow
   */
  export type ReceiptItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItem to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptItems.
     */
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem findMany
   */
  export type ReceiptItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceiptItems to fetch.
     */
    where?: ReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiptItems to fetch.
     */
    orderBy?: ReceiptItemOrderByWithRelationInput | ReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceiptItems.
     */
    cursor?: ReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiptItems.
     */
    distinct?: ReceiptItemScalarFieldEnum | ReceiptItemScalarFieldEnum[]
  }

  /**
   * ReceiptItem create
   */
  export type ReceiptItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceiptItem.
     */
    data: XOR<ReceiptItemCreateInput, ReceiptItemUncheckedCreateInput>
  }

  /**
   * ReceiptItem createMany
   */
  export type ReceiptItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceiptItems.
     */
    data: ReceiptItemCreateManyInput | ReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceiptItem createManyAndReturn
   */
  export type ReceiptItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to create many ReceiptItems.
     */
    data: ReceiptItemCreateManyInput | ReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptItem update
   */
  export type ReceiptItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceiptItem.
     */
    data: XOR<ReceiptItemUpdateInput, ReceiptItemUncheckedUpdateInput>
    /**
     * Choose, which ReceiptItem to update.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem updateMany
   */
  export type ReceiptItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceiptItems.
     */
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptItems to update
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to update.
     */
    limit?: number
  }

  /**
   * ReceiptItem updateManyAndReturn
   */
  export type ReceiptItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * The data used to update ReceiptItems.
     */
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceiptItems to update
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiptItem upsert
   */
  export type ReceiptItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceiptItem to update in case it exists.
     */
    where: ReceiptItemWhereUniqueInput
    /**
     * In case the ReceiptItem found by the `where` argument doesn't exist, create a new ReceiptItem with this data.
     */
    create: XOR<ReceiptItemCreateInput, ReceiptItemUncheckedCreateInput>
    /**
     * In case the ReceiptItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiptItemUpdateInput, ReceiptItemUncheckedUpdateInput>
  }

  /**
   * ReceiptItem delete
   */
  export type ReceiptItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
    /**
     * Filter which ReceiptItem to delete.
     */
    where: ReceiptItemWhereUniqueInput
  }

  /**
   * ReceiptItem deleteMany
   */
  export type ReceiptItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiptItems to delete
     */
    where?: ReceiptItemWhereInput
    /**
     * Limit how many ReceiptItems to delete.
     */
    limit?: number
  }

  /**
   * ReceiptItem without action
   */
  export type ReceiptItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptItem
     */
    select?: ReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceiptItem
     */
    omit?: ReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptItemInclude<ExtArgs> | null
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
    featured: 'featured',
    tags: 'tags',
    description: 'description',
    specification: 'specification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MotorcycleScalarFieldEnum = (typeof MotorcycleScalarFieldEnum)[keyof typeof MotorcycleScalarFieldEnum]


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


  export const GeneratedReceiptScalarFieldEnum: {
    id: 'id',
    receiptNumber: 'receiptNumber',
    purchaseDate: 'purchaseDate',
    paymentMethod: 'paymentMethod',
    additionalNotes: 'additionalNotes',
    total: 'total',
    pdfUrl: 'pdfUrl',
    createdAt: 'createdAt'
  };

  export type GeneratedReceiptScalarFieldEnum = (typeof GeneratedReceiptScalarFieldEnum)[keyof typeof GeneratedReceiptScalarFieldEnum]


  export const ReceiptCustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    cityPostal: 'cityPostal',
    phone: 'phone',
    receiptId: 'receiptId'
  };

  export type ReceiptCustomerScalarFieldEnum = (typeof ReceiptCustomerScalarFieldEnum)[keyof typeof ReceiptCustomerScalarFieldEnum]


  export const ReceiptItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    amount: 'amount',
    receiptId: 'receiptId'
  };

  export type ReceiptItemScalarFieldEnum = (typeof ReceiptItemScalarFieldEnum)[keyof typeof ReceiptItemScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    featured?: BoolFilter<"Motorcycle"> | boolean
    tags?: StringNullableFilter<"Motorcycle"> | string | null
    description?: StringNullableFilter<"Motorcycle"> | string | null
    specification?: JsonNullableFilter<"Motorcycle">
    createdAt?: DateTimeFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeFilter<"Motorcycle"> | Date | string
    images?: MotorcycleImageListRelationFilter
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
    featured?: SortOrder
    tags?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    specification?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: MotorcycleImageOrderByRelationAggregateInput
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
    featured?: BoolFilter<"Motorcycle"> | boolean
    tags?: StringNullableFilter<"Motorcycle"> | string | null
    description?: StringNullableFilter<"Motorcycle"> | string | null
    specification?: JsonNullableFilter<"Motorcycle">
    createdAt?: DateTimeFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeFilter<"Motorcycle"> | Date | string
    images?: MotorcycleImageListRelationFilter
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
    featured?: SortOrder
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
    featured?: BoolWithAggregatesFilter<"Motorcycle"> | boolean
    tags?: StringNullableWithAggregatesFilter<"Motorcycle"> | string | null
    description?: StringNullableWithAggregatesFilter<"Motorcycle"> | string | null
    specification?: JsonNullableWithAggregatesFilter<"Motorcycle">
    createdAt?: DateTimeWithAggregatesFilter<"Motorcycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Motorcycle"> | Date | string
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

  export type GeneratedReceiptWhereInput = {
    AND?: GeneratedReceiptWhereInput | GeneratedReceiptWhereInput[]
    OR?: GeneratedReceiptWhereInput[]
    NOT?: GeneratedReceiptWhereInput | GeneratedReceiptWhereInput[]
    id?: StringFilter<"GeneratedReceipt"> | string
    receiptNumber?: StringFilter<"GeneratedReceipt"> | string
    purchaseDate?: DateTimeFilter<"GeneratedReceipt"> | Date | string
    paymentMethod?: StringFilter<"GeneratedReceipt"> | string
    additionalNotes?: StringNullableFilter<"GeneratedReceipt"> | string | null
    total?: DecimalFilter<"GeneratedReceipt"> | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFilter<"GeneratedReceipt"> | string
    createdAt?: DateTimeFilter<"GeneratedReceipt"> | Date | string
    customer?: XOR<ReceiptCustomerNullableScalarRelationFilter, ReceiptCustomerWhereInput> | null
    items?: ReceiptItemListRelationFilter
  }

  export type GeneratedReceiptOrderByWithRelationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseDate?: SortOrder
    paymentMethod?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    total?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
    customer?: ReceiptCustomerOrderByWithRelationInput
    items?: ReceiptItemOrderByRelationAggregateInput
  }

  export type GeneratedReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptNumber?: string
    AND?: GeneratedReceiptWhereInput | GeneratedReceiptWhereInput[]
    OR?: GeneratedReceiptWhereInput[]
    NOT?: GeneratedReceiptWhereInput | GeneratedReceiptWhereInput[]
    purchaseDate?: DateTimeFilter<"GeneratedReceipt"> | Date | string
    paymentMethod?: StringFilter<"GeneratedReceipt"> | string
    additionalNotes?: StringNullableFilter<"GeneratedReceipt"> | string | null
    total?: DecimalFilter<"GeneratedReceipt"> | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFilter<"GeneratedReceipt"> | string
    createdAt?: DateTimeFilter<"GeneratedReceipt"> | Date | string
    customer?: XOR<ReceiptCustomerNullableScalarRelationFilter, ReceiptCustomerWhereInput> | null
    items?: ReceiptItemListRelationFilter
  }, "id" | "receiptNumber">

  export type GeneratedReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseDate?: SortOrder
    paymentMethod?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    total?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
    _count?: GeneratedReceiptCountOrderByAggregateInput
    _avg?: GeneratedReceiptAvgOrderByAggregateInput
    _max?: GeneratedReceiptMaxOrderByAggregateInput
    _min?: GeneratedReceiptMinOrderByAggregateInput
    _sum?: GeneratedReceiptSumOrderByAggregateInput
  }

  export type GeneratedReceiptScalarWhereWithAggregatesInput = {
    AND?: GeneratedReceiptScalarWhereWithAggregatesInput | GeneratedReceiptScalarWhereWithAggregatesInput[]
    OR?: GeneratedReceiptScalarWhereWithAggregatesInput[]
    NOT?: GeneratedReceiptScalarWhereWithAggregatesInput | GeneratedReceiptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedReceipt"> | string
    receiptNumber?: StringWithAggregatesFilter<"GeneratedReceipt"> | string
    purchaseDate?: DateTimeWithAggregatesFilter<"GeneratedReceipt"> | Date | string
    paymentMethod?: StringWithAggregatesFilter<"GeneratedReceipt"> | string
    additionalNotes?: StringNullableWithAggregatesFilter<"GeneratedReceipt"> | string | null
    total?: DecimalWithAggregatesFilter<"GeneratedReceipt"> | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringWithAggregatesFilter<"GeneratedReceipt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedReceipt"> | Date | string
  }

  export type ReceiptCustomerWhereInput = {
    AND?: ReceiptCustomerWhereInput | ReceiptCustomerWhereInput[]
    OR?: ReceiptCustomerWhereInput[]
    NOT?: ReceiptCustomerWhereInput | ReceiptCustomerWhereInput[]
    id?: StringFilter<"ReceiptCustomer"> | string
    name?: StringFilter<"ReceiptCustomer"> | string
    email?: StringNullableFilter<"ReceiptCustomer"> | string | null
    address?: StringNullableFilter<"ReceiptCustomer"> | string | null
    cityPostal?: StringNullableFilter<"ReceiptCustomer"> | string | null
    phone?: StringNullableFilter<"ReceiptCustomer"> | string | null
    receiptId?: StringFilter<"ReceiptCustomer"> | string
    receipt?: XOR<GeneratedReceiptScalarRelationFilter, GeneratedReceiptWhereInput>
  }

  export type ReceiptCustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityPostal?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    receiptId?: SortOrder
    receipt?: GeneratedReceiptOrderByWithRelationInput
  }

  export type ReceiptCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptId?: string
    AND?: ReceiptCustomerWhereInput | ReceiptCustomerWhereInput[]
    OR?: ReceiptCustomerWhereInput[]
    NOT?: ReceiptCustomerWhereInput | ReceiptCustomerWhereInput[]
    name?: StringFilter<"ReceiptCustomer"> | string
    email?: StringNullableFilter<"ReceiptCustomer"> | string | null
    address?: StringNullableFilter<"ReceiptCustomer"> | string | null
    cityPostal?: StringNullableFilter<"ReceiptCustomer"> | string | null
    phone?: StringNullableFilter<"ReceiptCustomer"> | string | null
    receipt?: XOR<GeneratedReceiptScalarRelationFilter, GeneratedReceiptWhereInput>
  }, "id" | "receiptId">

  export type ReceiptCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityPostal?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    receiptId?: SortOrder
    _count?: ReceiptCustomerCountOrderByAggregateInput
    _max?: ReceiptCustomerMaxOrderByAggregateInput
    _min?: ReceiptCustomerMinOrderByAggregateInput
  }

  export type ReceiptCustomerScalarWhereWithAggregatesInput = {
    AND?: ReceiptCustomerScalarWhereWithAggregatesInput | ReceiptCustomerScalarWhereWithAggregatesInput[]
    OR?: ReceiptCustomerScalarWhereWithAggregatesInput[]
    NOT?: ReceiptCustomerScalarWhereWithAggregatesInput | ReceiptCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceiptCustomer"> | string
    name?: StringWithAggregatesFilter<"ReceiptCustomer"> | string
    email?: StringNullableWithAggregatesFilter<"ReceiptCustomer"> | string | null
    address?: StringNullableWithAggregatesFilter<"ReceiptCustomer"> | string | null
    cityPostal?: StringNullableWithAggregatesFilter<"ReceiptCustomer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ReceiptCustomer"> | string | null
    receiptId?: StringWithAggregatesFilter<"ReceiptCustomer"> | string
  }

  export type ReceiptItemWhereInput = {
    AND?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    OR?: ReceiptItemWhereInput[]
    NOT?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    id?: StringFilter<"ReceiptItem"> | string
    description?: StringFilter<"ReceiptItem"> | string
    quantity?: IntFilter<"ReceiptItem"> | number
    unitPrice?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: StringFilter<"ReceiptItem"> | string
    receipt?: XOR<GeneratedReceiptScalarRelationFilter, GeneratedReceiptWhereInput>
  }

  export type ReceiptItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
    receipt?: GeneratedReceiptOrderByWithRelationInput
  }

  export type ReceiptItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    OR?: ReceiptItemWhereInput[]
    NOT?: ReceiptItemWhereInput | ReceiptItemWhereInput[]
    description?: StringFilter<"ReceiptItem"> | string
    quantity?: IntFilter<"ReceiptItem"> | number
    unitPrice?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: StringFilter<"ReceiptItem"> | string
    receipt?: XOR<GeneratedReceiptScalarRelationFilter, GeneratedReceiptWhereInput>
  }, "id">

  export type ReceiptItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
    _count?: ReceiptItemCountOrderByAggregateInput
    _avg?: ReceiptItemAvgOrderByAggregateInput
    _max?: ReceiptItemMaxOrderByAggregateInput
    _min?: ReceiptItemMinOrderByAggregateInput
    _sum?: ReceiptItemSumOrderByAggregateInput
  }

  export type ReceiptItemScalarWhereWithAggregatesInput = {
    AND?: ReceiptItemScalarWhereWithAggregatesInput | ReceiptItemScalarWhereWithAggregatesInput[]
    OR?: ReceiptItemScalarWhereWithAggregatesInput[]
    NOT?: ReceiptItemScalarWhereWithAggregatesInput | ReceiptItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceiptItem"> | string
    description?: StringWithAggregatesFilter<"ReceiptItem"> | string
    quantity?: IntWithAggregatesFilter<"ReceiptItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: StringWithAggregatesFilter<"ReceiptItem"> | string
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
    featured?: boolean
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageCreateNestedManyWithoutMotorcycleInput
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
    featured?: boolean
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: MotorcycleImageUncheckedCreateNestedManyWithoutMotorcycleInput
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
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUpdateManyWithoutMotorcycleNestedInput
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
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: MotorcycleImageUncheckedUpdateManyWithoutMotorcycleNestedInput
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
    featured?: boolean
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
    featured?: BoolFieldUpdateOperationsInput | boolean
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
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GeneratedReceiptCreateInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    customer?: ReceiptCustomerCreateNestedOneWithoutReceiptInput
    items?: ReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type GeneratedReceiptUncheckedCreateInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    customer?: ReceiptCustomerUncheckedCreateNestedOneWithoutReceiptInput
    items?: ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type GeneratedReceiptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ReceiptCustomerUpdateOneWithoutReceiptNestedInput
    items?: ReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type GeneratedReceiptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ReceiptCustomerUncheckedUpdateOneWithoutReceiptNestedInput
    items?: ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type GeneratedReceiptCreateManyInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
  }

  export type GeneratedReceiptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedReceiptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptCustomerCreateInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    cityPostal?: string | null
    phone?: string | null
    receipt: GeneratedReceiptCreateNestedOneWithoutCustomerInput
  }

  export type ReceiptCustomerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    cityPostal?: string | null
    phone?: string | null
    receiptId: string
  }

  export type ReceiptCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: GeneratedReceiptUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type ReceiptCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiptId?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiptCustomerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    cityPostal?: string | null
    phone?: string | null
    receiptId: string
  }

  export type ReceiptCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceiptCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    receiptId?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiptItemCreateInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receipt: GeneratedReceiptCreateNestedOneWithoutItemsInput
  }

  export type ReceiptItemUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receiptId: string
  }

  export type ReceiptItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receipt?: GeneratedReceiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReceiptItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiptId?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiptItemCreateManyInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    receiptId: string
  }

  export type ReceiptItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiptId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MotorcycleImageOrderByRelationAggregateInput = {
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
    featured?: SortOrder
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
    featured?: SortOrder
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
    featured?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ReceiptCustomerNullableScalarRelationFilter = {
    is?: ReceiptCustomerWhereInput | null
    isNot?: ReceiptCustomerWhereInput | null
  }

  export type ReceiptItemListRelationFilter = {
    every?: ReceiptItemWhereInput
    some?: ReceiptItemWhereInput
    none?: ReceiptItemWhereInput
  }

  export type ReceiptItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseDate?: SortOrder
    paymentMethod?: SortOrder
    additionalNotes?: SortOrder
    total?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedReceiptAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type GeneratedReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseDate?: SortOrder
    paymentMethod?: SortOrder
    additionalNotes?: SortOrder
    total?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseDate?: SortOrder
    paymentMethod?: SortOrder
    additionalNotes?: SortOrder
    total?: SortOrder
    pdfUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedReceiptSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type GeneratedReceiptScalarRelationFilter = {
    is?: GeneratedReceiptWhereInput
    isNot?: GeneratedReceiptWhereInput
  }

  export type ReceiptCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityPostal?: SortOrder
    phone?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityPostal?: SortOrder
    phone?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityPostal?: SortOrder
    phone?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
  }

  export type ReceiptItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    receiptId?: SortOrder
  }

  export type ReceiptItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
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

  export type MotorcycleImageUncheckedCreateNestedManyWithoutMotorcycleInput = {
    create?: XOR<MotorcycleImageCreateWithoutMotorcycleInput, MotorcycleImageUncheckedCreateWithoutMotorcycleInput> | MotorcycleImageCreateWithoutMotorcycleInput[] | MotorcycleImageUncheckedCreateWithoutMotorcycleInput[]
    connectOrCreate?: MotorcycleImageCreateOrConnectWithoutMotorcycleInput | MotorcycleImageCreateOrConnectWithoutMotorcycleInput[]
    createMany?: MotorcycleImageCreateManyMotorcycleInputEnvelope
    connect?: MotorcycleImageWhereUniqueInput | MotorcycleImageWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type ReceiptCustomerCreateNestedOneWithoutReceiptInput = {
    create?: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: ReceiptCustomerCreateOrConnectWithoutReceiptInput
    connect?: ReceiptCustomerWhereUniqueInput
  }

  export type ReceiptItemCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
  }

  export type ReceiptCustomerUncheckedCreateNestedOneWithoutReceiptInput = {
    create?: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: ReceiptCustomerCreateOrConnectWithoutReceiptInput
    connect?: ReceiptCustomerWhereUniqueInput
  }

  export type ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
  }

  export type ReceiptCustomerUpdateOneWithoutReceiptNestedInput = {
    create?: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: ReceiptCustomerCreateOrConnectWithoutReceiptInput
    upsert?: ReceiptCustomerUpsertWithoutReceiptInput
    disconnect?: ReceiptCustomerWhereInput | boolean
    delete?: ReceiptCustomerWhereInput | boolean
    connect?: ReceiptCustomerWhereUniqueInput
    update?: XOR<XOR<ReceiptCustomerUpdateToOneWithWhereWithoutReceiptInput, ReceiptCustomerUpdateWithoutReceiptInput>, ReceiptCustomerUncheckedUpdateWithoutReceiptInput>
  }

  export type ReceiptItemUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    set?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    disconnect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    delete?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    update?: ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ReceiptItemUpdateManyWithWhereWithoutReceiptInput | ReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
  }

  export type ReceiptCustomerUncheckedUpdateOneWithoutReceiptNestedInput = {
    create?: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: ReceiptCustomerCreateOrConnectWithoutReceiptInput
    upsert?: ReceiptCustomerUpsertWithoutReceiptInput
    disconnect?: ReceiptCustomerWhereInput | boolean
    delete?: ReceiptCustomerWhereInput | boolean
    connect?: ReceiptCustomerWhereUniqueInput
    update?: XOR<XOR<ReceiptCustomerUpdateToOneWithWhereWithoutReceiptInput, ReceiptCustomerUpdateWithoutReceiptInput>, ReceiptCustomerUncheckedUpdateWithoutReceiptInput>
  }

  export type ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput> | ReceiptItemCreateWithoutReceiptInput[] | ReceiptItemUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: ReceiptItemCreateOrConnectWithoutReceiptInput | ReceiptItemCreateOrConnectWithoutReceiptInput[]
    upsert?: ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput | ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: ReceiptItemCreateManyReceiptInputEnvelope
    set?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    disconnect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    delete?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    connect?: ReceiptItemWhereUniqueInput | ReceiptItemWhereUniqueInput[]
    update?: ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput | ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: ReceiptItemUpdateManyWithWhereWithoutReceiptInput | ReceiptItemUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
  }

  export type GeneratedReceiptCreateNestedOneWithoutCustomerInput = {
    create?: XOR<GeneratedReceiptCreateWithoutCustomerInput, GeneratedReceiptUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: GeneratedReceiptCreateOrConnectWithoutCustomerInput
    connect?: GeneratedReceiptWhereUniqueInput
  }

  export type GeneratedReceiptUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<GeneratedReceiptCreateWithoutCustomerInput, GeneratedReceiptUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: GeneratedReceiptCreateOrConnectWithoutCustomerInput
    upsert?: GeneratedReceiptUpsertWithoutCustomerInput
    connect?: GeneratedReceiptWhereUniqueInput
    update?: XOR<XOR<GeneratedReceiptUpdateToOneWithWhereWithoutCustomerInput, GeneratedReceiptUpdateWithoutCustomerInput>, GeneratedReceiptUncheckedUpdateWithoutCustomerInput>
  }

  export type GeneratedReceiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<GeneratedReceiptCreateWithoutItemsInput, GeneratedReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GeneratedReceiptCreateOrConnectWithoutItemsInput
    connect?: GeneratedReceiptWhereUniqueInput
  }

  export type GeneratedReceiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<GeneratedReceiptCreateWithoutItemsInput, GeneratedReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GeneratedReceiptCreateOrConnectWithoutItemsInput
    upsert?: GeneratedReceiptUpsertWithoutItemsInput
    connect?: GeneratedReceiptWhereUniqueInput
    update?: XOR<XOR<GeneratedReceiptUpdateToOneWithWhereWithoutItemsInput, GeneratedReceiptUpdateWithoutItemsInput>, GeneratedReceiptUncheckedUpdateWithoutItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    featured?: boolean
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
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
    featured?: boolean
    tags?: string | null
    description?: string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
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
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptCustomerCreateWithoutReceiptInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    cityPostal?: string | null
    phone?: string | null
  }

  export type ReceiptCustomerUncheckedCreateWithoutReceiptInput = {
    id?: string
    name: string
    email?: string | null
    address?: string | null
    cityPostal?: string | null
    phone?: string | null
  }

  export type ReceiptCustomerCreateOrConnectWithoutReceiptInput = {
    where: ReceiptCustomerWhereUniqueInput
    create: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
  }

  export type ReceiptItemCreateWithoutReceiptInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemUncheckedCreateWithoutReceiptInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemCreateOrConnectWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    create: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ReceiptItemCreateManyReceiptInputEnvelope = {
    data: ReceiptItemCreateManyReceiptInput | ReceiptItemCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptCustomerUpsertWithoutReceiptInput = {
    update: XOR<ReceiptCustomerUpdateWithoutReceiptInput, ReceiptCustomerUncheckedUpdateWithoutReceiptInput>
    create: XOR<ReceiptCustomerCreateWithoutReceiptInput, ReceiptCustomerUncheckedCreateWithoutReceiptInput>
    where?: ReceiptCustomerWhereInput
  }

  export type ReceiptCustomerUpdateToOneWithWhereWithoutReceiptInput = {
    where?: ReceiptCustomerWhereInput
    data: XOR<ReceiptCustomerUpdateWithoutReceiptInput, ReceiptCustomerUncheckedUpdateWithoutReceiptInput>
  }

  export type ReceiptCustomerUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceiptCustomerUncheckedUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityPostal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceiptItemUpsertWithWhereUniqueWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    update: XOR<ReceiptItemUpdateWithoutReceiptInput, ReceiptItemUncheckedUpdateWithoutReceiptInput>
    create: XOR<ReceiptItemCreateWithoutReceiptInput, ReceiptItemUncheckedCreateWithoutReceiptInput>
  }

  export type ReceiptItemUpdateWithWhereUniqueWithoutReceiptInput = {
    where: ReceiptItemWhereUniqueInput
    data: XOR<ReceiptItemUpdateWithoutReceiptInput, ReceiptItemUncheckedUpdateWithoutReceiptInput>
  }

  export type ReceiptItemUpdateManyWithWhereWithoutReceiptInput = {
    where: ReceiptItemScalarWhereInput
    data: XOR<ReceiptItemUpdateManyMutationInput, ReceiptItemUncheckedUpdateManyWithoutReceiptInput>
  }

  export type ReceiptItemScalarWhereInput = {
    AND?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
    OR?: ReceiptItemScalarWhereInput[]
    NOT?: ReceiptItemScalarWhereInput | ReceiptItemScalarWhereInput[]
    id?: StringFilter<"ReceiptItem"> | string
    description?: StringFilter<"ReceiptItem"> | string
    quantity?: IntFilter<"ReceiptItem"> | number
    unitPrice?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"ReceiptItem"> | Decimal | DecimalJsLike | number | string
    receiptId?: StringFilter<"ReceiptItem"> | string
  }

  export type GeneratedReceiptCreateWithoutCustomerInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    items?: ReceiptItemCreateNestedManyWithoutReceiptInput
  }

  export type GeneratedReceiptUncheckedCreateWithoutCustomerInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    items?: ReceiptItemUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type GeneratedReceiptCreateOrConnectWithoutCustomerInput = {
    where: GeneratedReceiptWhereUniqueInput
    create: XOR<GeneratedReceiptCreateWithoutCustomerInput, GeneratedReceiptUncheckedCreateWithoutCustomerInput>
  }

  export type GeneratedReceiptUpsertWithoutCustomerInput = {
    update: XOR<GeneratedReceiptUpdateWithoutCustomerInput, GeneratedReceiptUncheckedUpdateWithoutCustomerInput>
    create: XOR<GeneratedReceiptCreateWithoutCustomerInput, GeneratedReceiptUncheckedCreateWithoutCustomerInput>
    where?: GeneratedReceiptWhereInput
  }

  export type GeneratedReceiptUpdateToOneWithWhereWithoutCustomerInput = {
    where?: GeneratedReceiptWhereInput
    data: XOR<GeneratedReceiptUpdateWithoutCustomerInput, GeneratedReceiptUncheckedUpdateWithoutCustomerInput>
  }

  export type GeneratedReceiptUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReceiptItemUpdateManyWithoutReceiptNestedInput
  }

  export type GeneratedReceiptUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReceiptItemUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type GeneratedReceiptCreateWithoutItemsInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    customer?: ReceiptCustomerCreateNestedOneWithoutReceiptInput
  }

  export type GeneratedReceiptUncheckedCreateWithoutItemsInput = {
    id?: string
    receiptNumber: string
    purchaseDate: Date | string
    paymentMethod: string
    additionalNotes?: string | null
    total: Decimal | DecimalJsLike | number | string
    pdfUrl: string
    createdAt?: Date | string
    customer?: ReceiptCustomerUncheckedCreateNestedOneWithoutReceiptInput
  }

  export type GeneratedReceiptCreateOrConnectWithoutItemsInput = {
    where: GeneratedReceiptWhereUniqueInput
    create: XOR<GeneratedReceiptCreateWithoutItemsInput, GeneratedReceiptUncheckedCreateWithoutItemsInput>
  }

  export type GeneratedReceiptUpsertWithoutItemsInput = {
    update: XOR<GeneratedReceiptUpdateWithoutItemsInput, GeneratedReceiptUncheckedUpdateWithoutItemsInput>
    create: XOR<GeneratedReceiptCreateWithoutItemsInput, GeneratedReceiptUncheckedCreateWithoutItemsInput>
    where?: GeneratedReceiptWhereInput
  }

  export type GeneratedReceiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: GeneratedReceiptWhereInput
    data: XOR<GeneratedReceiptUpdateWithoutItemsInput, GeneratedReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type GeneratedReceiptUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ReceiptCustomerUpdateOneWithoutReceiptNestedInput
  }

  export type GeneratedReceiptUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ReceiptCustomerUncheckedUpdateOneWithoutReceiptNestedInput
  }

  export type MotorcycleImageCreateManyMotorcycleInput = {
    id?: string
    url: string
    displayOrder?: number
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

  export type ReceiptItemCreateManyReceiptInput = {
    id?: string
    description: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemUncheckedUpdateWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReceiptItemUncheckedUpdateManyWithoutReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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