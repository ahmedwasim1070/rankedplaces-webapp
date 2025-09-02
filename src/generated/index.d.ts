
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model places
 * 
 */
export type places = $Result.DefaultSelection<Prisma.$placesPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model place_tags
 * 
 */
export type place_tags = $Result.DefaultSelection<Prisma.$place_tagsPayload>
/**
 * Model votes
 * 
 */
export type votes = $Result.DefaultSelection<Prisma.$votesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const vote_type: {
  UP: 'UP',
  DOWN: 'DOWN'
};

export type vote_type = (typeof vote_type)[keyof typeof vote_type]

}

export type vote_type = $Enums.vote_type

export const vote_type: typeof $Enums.vote_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.places`: Exposes CRUD operations for the **places** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.places.findMany()
    * ```
    */
  get places(): Prisma.placesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place_tags`: Exposes CRUD operations for the **place_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Place_tags
    * const place_tags = await prisma.place_tags.findMany()
    * ```
    */
  get place_tags(): Prisma.place_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.votesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    users: 'users',
    places: 'places',
    tags: 'tags',
    place_tags: 'place_tags',
    votes: 'votes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "places" | "tags" | "place_tags" | "votes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      places: {
        payload: Prisma.$placesPayload<ExtArgs>
        fields: Prisma.placesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.placesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.placesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          findFirst: {
            args: Prisma.placesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.placesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          findMany: {
            args: Prisma.placesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>[]
          }
          create: {
            args: Prisma.placesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          createMany: {
            args: Prisma.placesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.placesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>[]
          }
          delete: {
            args: Prisma.placesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          update: {
            args: Prisma.placesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          deleteMany: {
            args: Prisma.placesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.placesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.placesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>[]
          }
          upsert: {
            args: Prisma.placesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$placesPayload>
          }
          aggregate: {
            args: Prisma.PlacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaces>
          }
          groupBy: {
            args: Prisma.placesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.placesCountArgs<ExtArgs>
            result: $Utils.Optional<PlacesCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      place_tags: {
        payload: Prisma.$place_tagsPayload<ExtArgs>
        fields: Prisma.place_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.place_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.place_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          findFirst: {
            args: Prisma.place_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.place_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          findMany: {
            args: Prisma.place_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>[]
          }
          create: {
            args: Prisma.place_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          createMany: {
            args: Prisma.place_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.place_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>[]
          }
          delete: {
            args: Prisma.place_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          update: {
            args: Prisma.place_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          deleteMany: {
            args: Prisma.place_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.place_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.place_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>[]
          }
          upsert: {
            args: Prisma.place_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$place_tagsPayload>
          }
          aggregate: {
            args: Prisma.Place_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace_tags>
          }
          groupBy: {
            args: Prisma.place_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Place_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.place_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Place_tagsCountAggregateOutputType> | number
          }
        }
      }
      votes: {
        payload: Prisma.$votesPayload<ExtArgs>
        fields: Prisma.votesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.votesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.votesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findFirst: {
            args: Prisma.votesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.votesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findMany: {
            args: Prisma.votesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          create: {
            args: Prisma.votesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          createMany: {
            args: Prisma.votesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.votesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          delete: {
            args: Prisma.votesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          update: {
            args: Prisma.votesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          deleteMany: {
            args: Prisma.votesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.votesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.votesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          upsert: {
            args: Prisma.votesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          aggregate: {
            args: Prisma.VotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotes>
          }
          groupBy: {
            args: Prisma.votesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.votesCountArgs<ExtArgs>
            result: $Utils.Optional<VotesCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    places?: placesOmit
    tags?: tagsOmit
    place_tags?: place_tagsOmit
    votes?: votesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    places: number
    tags: number
    votes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | UsersCountOutputTypeCountPlacesArgs
    tags?: boolean | UsersCountOutputTypeCountTagsArgs
    votes?: boolean | UsersCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
  }


  /**
   * Count Type PlacesCountOutputType
   */

  export type PlacesCountOutputType = {
    place_tags: number
  }

  export type PlacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place_tags?: boolean | PlacesCountOutputTypeCountPlace_tagsArgs
  }

  // Custom InputTypes
  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacesCountOutputType
     */
    select?: PlacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeCountPlace_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: place_tagsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    place_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place_tags?: boolean | TagsCountOutputTypeCountPlace_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountPlace_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: place_tagsWhereInput
  }


  /**
   * Count Type Place_tagsCountOutputType
   */

  export type Place_tagsCountOutputType = {
    votes: number
  }

  export type Place_tagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | Place_tagsCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * Place_tagsCountOutputType without action
   */
  export type Place_tagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place_tagsCountOutputType
     */
    select?: Place_tagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Place_tagsCountOutputType without action
   */
  export type Place_tagsCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    unique_id: string | null
    email: string | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    unique_id: string | null
    email: string | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    unique_id: number
    email: number
    name: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    unique_id?: true
    email?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    unique_id?: true
    email?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    unique_id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    unique_id: string
    email: string
    name: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    email?: boolean
    name?: boolean
    places?: boolean | users$placesArgs<ExtArgs>
    tags?: boolean | users$tagsArgs<ExtArgs>
    votes?: boolean | users$votesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    unique_id?: boolean
    email?: boolean
    name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unique_id" | "email" | "name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | users$placesArgs<ExtArgs>
    tags?: boolean | users$tagsArgs<ExtArgs>
    votes?: boolean | users$votesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      places: Prisma.$placesPayload<ExtArgs>[]
      tags: Prisma.$tagsPayload<ExtArgs>[]
      votes: Prisma.$votesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      unique_id: string
      email: string
      name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    places<T extends users$placesArgs<ExtArgs> = {}>(args?: Subset<T, users$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends users$tagsArgs<ExtArgs> = {}>(args?: Subset<T, users$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends users$votesArgs<ExtArgs> = {}>(args?: Subset<T, users$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly unique_id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.places
   */
  export type users$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    where?: placesWhereInput
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    cursor?: placesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * users.tags
   */
  export type users$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    cursor?: tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * users.votes
   */
  export type users$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    where?: votesWhereInput
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    cursor?: votesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model places
   */

  export type AggregatePlaces = {
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  export type PlacesAvgAggregateOutputType = {
    id: number | null
    review_value: number | null
    review_amount: number | null
    total_up_votes: number | null
    total_down_votes: number | null
    added_by_id: number | null
  }

  export type PlacesSumAggregateOutputType = {
    id: number | null
    review_value: number | null
    review_amount: number | null
    total_up_votes: number | null
    total_down_votes: number | null
    added_by_id: number | null
  }

  export type PlacesMinAggregateOutputType = {
    id: number | null
    profile_id: string | null
    name: string | null
    pfp: string | null
    category: string | null
    address: string | null
    city: string | null
    country: string | null
    phone: string | null
    website: string | null
    maps_url: string | null
    review_value: number | null
    review_amount: number | null
    total_up_votes: number | null
    total_down_votes: number | null
    added_by_id: number | null
  }

  export type PlacesMaxAggregateOutputType = {
    id: number | null
    profile_id: string | null
    name: string | null
    pfp: string | null
    category: string | null
    address: string | null
    city: string | null
    country: string | null
    phone: string | null
    website: string | null
    maps_url: string | null
    review_value: number | null
    review_amount: number | null
    total_up_votes: number | null
    total_down_votes: number | null
    added_by_id: number | null
  }

  export type PlacesCountAggregateOutputType = {
    id: number
    profile_id: number
    name: number
    pfp: number
    category: number
    address: number
    city: number
    country: number
    phone: number
    website: number
    maps_url: number
    review_value: number
    review_amount: number
    total_up_votes: number
    total_down_votes: number
    added_by_id: number
    _all: number
  }


  export type PlacesAvgAggregateInputType = {
    id?: true
    review_value?: true
    review_amount?: true
    total_up_votes?: true
    total_down_votes?: true
    added_by_id?: true
  }

  export type PlacesSumAggregateInputType = {
    id?: true
    review_value?: true
    review_amount?: true
    total_up_votes?: true
    total_down_votes?: true
    added_by_id?: true
  }

  export type PlacesMinAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    pfp?: true
    category?: true
    address?: true
    city?: true
    country?: true
    phone?: true
    website?: true
    maps_url?: true
    review_value?: true
    review_amount?: true
    total_up_votes?: true
    total_down_votes?: true
    added_by_id?: true
  }

  export type PlacesMaxAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    pfp?: true
    category?: true
    address?: true
    city?: true
    country?: true
    phone?: true
    website?: true
    maps_url?: true
    review_value?: true
    review_amount?: true
    total_up_votes?: true
    total_down_votes?: true
    added_by_id?: true
  }

  export type PlacesCountAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    pfp?: true
    category?: true
    address?: true
    city?: true
    country?: true
    phone?: true
    website?: true
    maps_url?: true
    review_value?: true
    review_amount?: true
    total_up_votes?: true
    total_down_votes?: true
    added_by_id?: true
    _all?: true
  }

  export type PlacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which places to aggregate.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned places
    **/
    _count?: true | PlacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacesMaxAggregateInputType
  }

  export type GetPlacesAggregateType<T extends PlacesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaces[P]>
      : GetScalarType<T[P], AggregatePlaces[P]>
  }




  export type placesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: placesWhereInput
    orderBy?: placesOrderByWithAggregationInput | placesOrderByWithAggregationInput[]
    by: PlacesScalarFieldEnum[] | PlacesScalarFieldEnum
    having?: placesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacesCountAggregateInputType | true
    _avg?: PlacesAvgAggregateInputType
    _sum?: PlacesSumAggregateInputType
    _min?: PlacesMinAggregateInputType
    _max?: PlacesMaxAggregateInputType
  }

  export type PlacesGroupByOutputType = {
    id: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes: number
    total_down_votes: number
    added_by_id: number
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  type GetPlacesGroupByPayload<T extends placesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacesGroupByOutputType[P]>
            : GetScalarType<T[P], PlacesGroupByOutputType[P]>
        }
      >
    >


  export type placesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    pfp?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    website?: boolean
    maps_url?: boolean
    review_value?: boolean
    review_amount?: boolean
    total_up_votes?: boolean
    total_down_votes?: boolean
    added_by_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | places$place_tagsArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type placesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    pfp?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    website?: boolean
    maps_url?: boolean
    review_value?: boolean
    review_amount?: boolean
    total_up_votes?: boolean
    total_down_votes?: boolean
    added_by_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type placesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    pfp?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    website?: boolean
    maps_url?: boolean
    review_value?: boolean
    review_amount?: boolean
    total_up_votes?: boolean
    total_down_votes?: boolean
    added_by_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type placesSelectScalar = {
    id?: boolean
    profile_id?: boolean
    name?: boolean
    pfp?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    website?: boolean
    maps_url?: boolean
    review_value?: boolean
    review_amount?: boolean
    total_up_votes?: boolean
    total_down_votes?: boolean
    added_by_id?: boolean
  }

  export type placesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "name" | "pfp" | "category" | "address" | "city" | "country" | "phone" | "website" | "maps_url" | "review_value" | "review_amount" | "total_up_votes" | "total_down_votes" | "added_by_id", ExtArgs["result"]["places"]>
  export type placesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | places$place_tagsArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type placesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type placesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $placesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "places"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      place_tags: Prisma.$place_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profile_id: string
      name: string
      pfp: string
      category: string
      address: string
      city: string
      country: string
      phone: string
      website: string
      maps_url: string
      review_value: number
      review_amount: number
      total_up_votes: number
      total_down_votes: number
      added_by_id: number
    }, ExtArgs["result"]["places"]>
    composites: {}
  }

  type placesGetPayload<S extends boolean | null | undefined | placesDefaultArgs> = $Result.GetResult<Prisma.$placesPayload, S>

  type placesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<placesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacesCountAggregateInputType | true
    }

  export interface placesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['places'], meta: { name: 'places' } }
    /**
     * Find zero or one Places that matches the filter.
     * @param {placesFindUniqueArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends placesFindUniqueArgs>(args: SelectSubset<T, placesFindUniqueArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Places that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {placesFindUniqueOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends placesFindUniqueOrThrowArgs>(args: SelectSubset<T, placesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindFirstArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends placesFindFirstArgs>(args?: SelectSubset<T, placesFindFirstArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindFirstOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends placesFindFirstOrThrowArgs>(args?: SelectSubset<T, placesFindFirstOrThrowArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.places.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.places.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placesWithIdOnly = await prisma.places.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends placesFindManyArgs>(args?: SelectSubset<T, placesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Places.
     * @param {placesCreateArgs} args - Arguments to create a Places.
     * @example
     * // Create one Places
     * const Places = await prisma.places.create({
     *   data: {
     *     // ... data to create a Places
     *   }
     * })
     * 
     */
    create<T extends placesCreateArgs>(args: SelectSubset<T, placesCreateArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {placesCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends placesCreateManyArgs>(args?: SelectSubset<T, placesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {placesCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placesWithIdOnly = await prisma.places.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends placesCreateManyAndReturnArgs>(args?: SelectSubset<T, placesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Places.
     * @param {placesDeleteArgs} args - Arguments to delete one Places.
     * @example
     * // Delete one Places
     * const Places = await prisma.places.delete({
     *   where: {
     *     // ... filter to delete one Places
     *   }
     * })
     * 
     */
    delete<T extends placesDeleteArgs>(args: SelectSubset<T, placesDeleteArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Places.
     * @param {placesUpdateArgs} args - Arguments to update one Places.
     * @example
     * // Update one Places
     * const places = await prisma.places.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends placesUpdateArgs>(args: SelectSubset<T, placesUpdateArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {placesDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.places.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends placesDeleteManyArgs>(args?: SelectSubset<T, placesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends placesUpdateManyArgs>(args: SelectSubset<T, placesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {placesUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placesWithIdOnly = await prisma.places.updateManyAndReturn({
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
    updateManyAndReturn<T extends placesUpdateManyAndReturnArgs>(args: SelectSubset<T, placesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Places.
     * @param {placesUpsertArgs} args - Arguments to update or create a Places.
     * @example
     * // Update or create a Places
     * const places = await prisma.places.upsert({
     *   create: {
     *     // ... data to create a Places
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Places we want to update
     *   }
     * })
     */
    upsert<T extends placesUpsertArgs>(args: SelectSubset<T, placesUpsertArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.places.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends placesCountArgs>(
      args?: Subset<T, placesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacesAggregateArgs>(args: Subset<T, PlacesAggregateArgs>): Prisma.PrismaPromise<GetPlacesAggregateType<T>>

    /**
     * Group by Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {placesGroupByArgs} args - Group by arguments.
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
      T extends placesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: placesGroupByArgs['orderBy'] }
        : { orderBy?: placesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, placesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the places model
   */
  readonly fields: placesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for places.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__placesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place_tags<T extends places$place_tagsArgs<ExtArgs> = {}>(args?: Subset<T, places$place_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the places model
   */
  interface placesFieldRefs {
    readonly id: FieldRef<"places", 'Int'>
    readonly profile_id: FieldRef<"places", 'String'>
    readonly name: FieldRef<"places", 'String'>
    readonly pfp: FieldRef<"places", 'String'>
    readonly category: FieldRef<"places", 'String'>
    readonly address: FieldRef<"places", 'String'>
    readonly city: FieldRef<"places", 'String'>
    readonly country: FieldRef<"places", 'String'>
    readonly phone: FieldRef<"places", 'String'>
    readonly website: FieldRef<"places", 'String'>
    readonly maps_url: FieldRef<"places", 'String'>
    readonly review_value: FieldRef<"places", 'Float'>
    readonly review_amount: FieldRef<"places", 'Int'>
    readonly total_up_votes: FieldRef<"places", 'Int'>
    readonly total_down_votes: FieldRef<"places", 'Int'>
    readonly added_by_id: FieldRef<"places", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * places findUnique
   */
  export type placesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places findUniqueOrThrow
   */
  export type placesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places findFirst
   */
  export type placesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places findFirstOrThrow
   */
  export type placesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places findMany
   */
  export type placesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter, which places to fetch.
     */
    where?: placesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of places to fetch.
     */
    orderBy?: placesOrderByWithRelationInput | placesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing places.
     */
    cursor?: placesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` places.
     */
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * places create
   */
  export type placesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The data needed to create a places.
     */
    data: XOR<placesCreateInput, placesUncheckedCreateInput>
  }

  /**
   * places createMany
   */
  export type placesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many places.
     */
    data: placesCreateManyInput | placesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * places createManyAndReturn
   */
  export type placesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * The data used to create many places.
     */
    data: placesCreateManyInput | placesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * places update
   */
  export type placesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The data needed to update a places.
     */
    data: XOR<placesUpdateInput, placesUncheckedUpdateInput>
    /**
     * Choose, which places to update.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places updateMany
   */
  export type placesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update places.
     */
    data: XOR<placesUpdateManyMutationInput, placesUncheckedUpdateManyInput>
    /**
     * Filter which places to update
     */
    where?: placesWhereInput
    /**
     * Limit how many places to update.
     */
    limit?: number
  }

  /**
   * places updateManyAndReturn
   */
  export type placesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * The data used to update places.
     */
    data: XOR<placesUpdateManyMutationInput, placesUncheckedUpdateManyInput>
    /**
     * Filter which places to update
     */
    where?: placesWhereInput
    /**
     * Limit how many places to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * places upsert
   */
  export type placesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * The filter to search for the places to update in case it exists.
     */
    where: placesWhereUniqueInput
    /**
     * In case the places found by the `where` argument doesn't exist, create a new places with this data.
     */
    create: XOR<placesCreateInput, placesUncheckedCreateInput>
    /**
     * In case the places was found with the provided `where` argument, update it with this data.
     */
    update: XOR<placesUpdateInput, placesUncheckedUpdateInput>
  }

  /**
   * places delete
   */
  export type placesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
    /**
     * Filter which places to delete.
     */
    where: placesWhereUniqueInput
  }

  /**
   * places deleteMany
   */
  export type placesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which places to delete
     */
    where?: placesWhereInput
    /**
     * Limit how many places to delete.
     */
    limit?: number
  }

  /**
   * places.place_tags
   */
  export type places$place_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    where?: place_tagsWhereInput
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    cursor?: place_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Place_tagsScalarFieldEnum | Place_tagsScalarFieldEnum[]
  }

  /**
   * places without action
   */
  export type placesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the places
     */
    select?: placesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the places
     */
    omit?: placesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: placesInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
    author_id: number | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    author_id: number | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    author_id: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    author_id?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    author_id?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    author_id?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    author_id: number
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | tags$place_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    name?: boolean
    author_id?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "author_id", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | tags$place_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
      place_tags: Prisma.$place_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      author_id: number
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place_tags<T extends tags$place_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$place_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'Int'>
    readonly name: FieldRef<"tags", 'String'>
    readonly author_id: FieldRef<"tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.place_tags
   */
  export type tags$place_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    where?: place_tagsWhereInput
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    cursor?: place_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Place_tagsScalarFieldEnum | Place_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model place_tags
   */

  export type AggregatePlace_tags = {
    _count: Place_tagsCountAggregateOutputType | null
    _avg: Place_tagsAvgAggregateOutputType | null
    _sum: Place_tagsSumAggregateOutputType | null
    _min: Place_tagsMinAggregateOutputType | null
    _max: Place_tagsMaxAggregateOutputType | null
  }

  export type Place_tagsAvgAggregateOutputType = {
    id: number | null
    place_id: number | null
    tag_id: number | null
    up_votes: number | null
    down_votes: number | null
  }

  export type Place_tagsSumAggregateOutputType = {
    id: number | null
    place_id: number | null
    tag_id: number | null
    up_votes: number | null
    down_votes: number | null
  }

  export type Place_tagsMinAggregateOutputType = {
    id: number | null
    place_id: number | null
    tag_id: number | null
    up_votes: number | null
    down_votes: number | null
  }

  export type Place_tagsMaxAggregateOutputType = {
    id: number | null
    place_id: number | null
    tag_id: number | null
    up_votes: number | null
    down_votes: number | null
  }

  export type Place_tagsCountAggregateOutputType = {
    id: number
    place_id: number
    tag_id: number
    up_votes: number
    down_votes: number
    _all: number
  }


  export type Place_tagsAvgAggregateInputType = {
    id?: true
    place_id?: true
    tag_id?: true
    up_votes?: true
    down_votes?: true
  }

  export type Place_tagsSumAggregateInputType = {
    id?: true
    place_id?: true
    tag_id?: true
    up_votes?: true
    down_votes?: true
  }

  export type Place_tagsMinAggregateInputType = {
    id?: true
    place_id?: true
    tag_id?: true
    up_votes?: true
    down_votes?: true
  }

  export type Place_tagsMaxAggregateInputType = {
    id?: true
    place_id?: true
    tag_id?: true
    up_votes?: true
    down_votes?: true
  }

  export type Place_tagsCountAggregateInputType = {
    id?: true
    place_id?: true
    tag_id?: true
    up_votes?: true
    down_votes?: true
    _all?: true
  }

  export type Place_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which place_tags to aggregate.
     */
    where?: place_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of place_tags to fetch.
     */
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: place_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` place_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` place_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned place_tags
    **/
    _count?: true | Place_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Place_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Place_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Place_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Place_tagsMaxAggregateInputType
  }

  export type GetPlace_tagsAggregateType<T extends Place_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace_tags[P]>
      : GetScalarType<T[P], AggregatePlace_tags[P]>
  }




  export type place_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: place_tagsWhereInput
    orderBy?: place_tagsOrderByWithAggregationInput | place_tagsOrderByWithAggregationInput[]
    by: Place_tagsScalarFieldEnum[] | Place_tagsScalarFieldEnum
    having?: place_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Place_tagsCountAggregateInputType | true
    _avg?: Place_tagsAvgAggregateInputType
    _sum?: Place_tagsSumAggregateInputType
    _min?: Place_tagsMinAggregateInputType
    _max?: Place_tagsMaxAggregateInputType
  }

  export type Place_tagsGroupByOutputType = {
    id: number
    place_id: number
    tag_id: number
    up_votes: number
    down_votes: number
    _count: Place_tagsCountAggregateOutputType | null
    _avg: Place_tagsAvgAggregateOutputType | null
    _sum: Place_tagsSumAggregateOutputType | null
    _min: Place_tagsMinAggregateOutputType | null
    _max: Place_tagsMaxAggregateOutputType | null
  }

  type GetPlace_tagsGroupByPayload<T extends place_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Place_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Place_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Place_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Place_tagsGroupByOutputType[P]>
        }
      >
    >


  export type place_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    place_id?: boolean
    tag_id?: boolean
    up_votes?: boolean
    down_votes?: boolean
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
    votes?: boolean | place_tags$votesArgs<ExtArgs>
    _count?: boolean | Place_tagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place_tags"]>

  export type place_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    place_id?: boolean
    tag_id?: boolean
    up_votes?: boolean
    down_votes?: boolean
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place_tags"]>

  export type place_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    place_id?: boolean
    tag_id?: boolean
    up_votes?: boolean
    down_votes?: boolean
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place_tags"]>

  export type place_tagsSelectScalar = {
    id?: boolean
    place_id?: boolean
    tag_id?: boolean
    up_votes?: boolean
    down_votes?: boolean
  }

  export type place_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "place_id" | "tag_id" | "up_votes" | "down_votes", ExtArgs["result"]["place_tags"]>
  export type place_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
    votes?: boolean | place_tags$votesArgs<ExtArgs>
    _count?: boolean | Place_tagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type place_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type place_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | placesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $place_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "place_tags"
    objects: {
      place: Prisma.$placesPayload<ExtArgs>
      tag: Prisma.$tagsPayload<ExtArgs>
      votes: Prisma.$votesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      place_id: number
      tag_id: number
      up_votes: number
      down_votes: number
    }, ExtArgs["result"]["place_tags"]>
    composites: {}
  }

  type place_tagsGetPayload<S extends boolean | null | undefined | place_tagsDefaultArgs> = $Result.GetResult<Prisma.$place_tagsPayload, S>

  type place_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<place_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Place_tagsCountAggregateInputType | true
    }

  export interface place_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['place_tags'], meta: { name: 'place_tags' } }
    /**
     * Find zero or one Place_tags that matches the filter.
     * @param {place_tagsFindUniqueArgs} args - Arguments to find a Place_tags
     * @example
     * // Get one Place_tags
     * const place_tags = await prisma.place_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends place_tagsFindUniqueArgs>(args: SelectSubset<T, place_tagsFindUniqueArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {place_tagsFindUniqueOrThrowArgs} args - Arguments to find a Place_tags
     * @example
     * // Get one Place_tags
     * const place_tags = await prisma.place_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends place_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, place_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsFindFirstArgs} args - Arguments to find a Place_tags
     * @example
     * // Get one Place_tags
     * const place_tags = await prisma.place_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends place_tagsFindFirstArgs>(args?: SelectSubset<T, place_tagsFindFirstArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsFindFirstOrThrowArgs} args - Arguments to find a Place_tags
     * @example
     * // Get one Place_tags
     * const place_tags = await prisma.place_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends place_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, place_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Place_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Place_tags
     * const place_tags = await prisma.place_tags.findMany()
     * 
     * // Get first 10 Place_tags
     * const place_tags = await prisma.place_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const place_tagsWithIdOnly = await prisma.place_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends place_tagsFindManyArgs>(args?: SelectSubset<T, place_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place_tags.
     * @param {place_tagsCreateArgs} args - Arguments to create a Place_tags.
     * @example
     * // Create one Place_tags
     * const Place_tags = await prisma.place_tags.create({
     *   data: {
     *     // ... data to create a Place_tags
     *   }
     * })
     * 
     */
    create<T extends place_tagsCreateArgs>(args: SelectSubset<T, place_tagsCreateArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Place_tags.
     * @param {place_tagsCreateManyArgs} args - Arguments to create many Place_tags.
     * @example
     * // Create many Place_tags
     * const place_tags = await prisma.place_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends place_tagsCreateManyArgs>(args?: SelectSubset<T, place_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Place_tags and returns the data saved in the database.
     * @param {place_tagsCreateManyAndReturnArgs} args - Arguments to create many Place_tags.
     * @example
     * // Create many Place_tags
     * const place_tags = await prisma.place_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Place_tags and only return the `id`
     * const place_tagsWithIdOnly = await prisma.place_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends place_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, place_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Place_tags.
     * @param {place_tagsDeleteArgs} args - Arguments to delete one Place_tags.
     * @example
     * // Delete one Place_tags
     * const Place_tags = await prisma.place_tags.delete({
     *   where: {
     *     // ... filter to delete one Place_tags
     *   }
     * })
     * 
     */
    delete<T extends place_tagsDeleteArgs>(args: SelectSubset<T, place_tagsDeleteArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place_tags.
     * @param {place_tagsUpdateArgs} args - Arguments to update one Place_tags.
     * @example
     * // Update one Place_tags
     * const place_tags = await prisma.place_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends place_tagsUpdateArgs>(args: SelectSubset<T, place_tagsUpdateArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Place_tags.
     * @param {place_tagsDeleteManyArgs} args - Arguments to filter Place_tags to delete.
     * @example
     * // Delete a few Place_tags
     * const { count } = await prisma.place_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends place_tagsDeleteManyArgs>(args?: SelectSubset<T, place_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Place_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Place_tags
     * const place_tags = await prisma.place_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends place_tagsUpdateManyArgs>(args: SelectSubset<T, place_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Place_tags and returns the data updated in the database.
     * @param {place_tagsUpdateManyAndReturnArgs} args - Arguments to update many Place_tags.
     * @example
     * // Update many Place_tags
     * const place_tags = await prisma.place_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Place_tags and only return the `id`
     * const place_tagsWithIdOnly = await prisma.place_tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends place_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, place_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Place_tags.
     * @param {place_tagsUpsertArgs} args - Arguments to update or create a Place_tags.
     * @example
     * // Update or create a Place_tags
     * const place_tags = await prisma.place_tags.upsert({
     *   create: {
     *     // ... data to create a Place_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place_tags we want to update
     *   }
     * })
     */
    upsert<T extends place_tagsUpsertArgs>(args: SelectSubset<T, place_tagsUpsertArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Place_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsCountArgs} args - Arguments to filter Place_tags to count.
     * @example
     * // Count the number of Place_tags
     * const count = await prisma.place_tags.count({
     *   where: {
     *     // ... the filter for the Place_tags we want to count
     *   }
     * })
    **/
    count<T extends place_tagsCountArgs>(
      args?: Subset<T, place_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Place_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Place_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Place_tagsAggregateArgs>(args: Subset<T, Place_tagsAggregateArgs>): Prisma.PrismaPromise<GetPlace_tagsAggregateType<T>>

    /**
     * Group by Place_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {place_tagsGroupByArgs} args - Group by arguments.
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
      T extends place_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: place_tagsGroupByArgs['orderBy'] }
        : { orderBy?: place_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, place_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlace_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the place_tags model
   */
  readonly fields: place_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for place_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__place_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    place<T extends placesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, placesDefaultArgs<ExtArgs>>): Prisma__placesClient<$Result.GetResult<Prisma.$placesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends place_tags$votesArgs<ExtArgs> = {}>(args?: Subset<T, place_tags$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the place_tags model
   */
  interface place_tagsFieldRefs {
    readonly id: FieldRef<"place_tags", 'Int'>
    readonly place_id: FieldRef<"place_tags", 'Int'>
    readonly tag_id: FieldRef<"place_tags", 'Int'>
    readonly up_votes: FieldRef<"place_tags", 'Int'>
    readonly down_votes: FieldRef<"place_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * place_tags findUnique
   */
  export type place_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter, which place_tags to fetch.
     */
    where: place_tagsWhereUniqueInput
  }

  /**
   * place_tags findUniqueOrThrow
   */
  export type place_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter, which place_tags to fetch.
     */
    where: place_tagsWhereUniqueInput
  }

  /**
   * place_tags findFirst
   */
  export type place_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter, which place_tags to fetch.
     */
    where?: place_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of place_tags to fetch.
     */
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for place_tags.
     */
    cursor?: place_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` place_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` place_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of place_tags.
     */
    distinct?: Place_tagsScalarFieldEnum | Place_tagsScalarFieldEnum[]
  }

  /**
   * place_tags findFirstOrThrow
   */
  export type place_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter, which place_tags to fetch.
     */
    where?: place_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of place_tags to fetch.
     */
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for place_tags.
     */
    cursor?: place_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` place_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` place_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of place_tags.
     */
    distinct?: Place_tagsScalarFieldEnum | Place_tagsScalarFieldEnum[]
  }

  /**
   * place_tags findMany
   */
  export type place_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter, which place_tags to fetch.
     */
    where?: place_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of place_tags to fetch.
     */
    orderBy?: place_tagsOrderByWithRelationInput | place_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing place_tags.
     */
    cursor?: place_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` place_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` place_tags.
     */
    skip?: number
    distinct?: Place_tagsScalarFieldEnum | Place_tagsScalarFieldEnum[]
  }

  /**
   * place_tags create
   */
  export type place_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a place_tags.
     */
    data: XOR<place_tagsCreateInput, place_tagsUncheckedCreateInput>
  }

  /**
   * place_tags createMany
   */
  export type place_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many place_tags.
     */
    data: place_tagsCreateManyInput | place_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * place_tags createManyAndReturn
   */
  export type place_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many place_tags.
     */
    data: place_tagsCreateManyInput | place_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * place_tags update
   */
  export type place_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a place_tags.
     */
    data: XOR<place_tagsUpdateInput, place_tagsUncheckedUpdateInput>
    /**
     * Choose, which place_tags to update.
     */
    where: place_tagsWhereUniqueInput
  }

  /**
   * place_tags updateMany
   */
  export type place_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update place_tags.
     */
    data: XOR<place_tagsUpdateManyMutationInput, place_tagsUncheckedUpdateManyInput>
    /**
     * Filter which place_tags to update
     */
    where?: place_tagsWhereInput
    /**
     * Limit how many place_tags to update.
     */
    limit?: number
  }

  /**
   * place_tags updateManyAndReturn
   */
  export type place_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * The data used to update place_tags.
     */
    data: XOR<place_tagsUpdateManyMutationInput, place_tagsUncheckedUpdateManyInput>
    /**
     * Filter which place_tags to update
     */
    where?: place_tagsWhereInput
    /**
     * Limit how many place_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * place_tags upsert
   */
  export type place_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the place_tags to update in case it exists.
     */
    where: place_tagsWhereUniqueInput
    /**
     * In case the place_tags found by the `where` argument doesn't exist, create a new place_tags with this data.
     */
    create: XOR<place_tagsCreateInput, place_tagsUncheckedCreateInput>
    /**
     * In case the place_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<place_tagsUpdateInput, place_tagsUncheckedUpdateInput>
  }

  /**
   * place_tags delete
   */
  export type place_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
    /**
     * Filter which place_tags to delete.
     */
    where: place_tagsWhereUniqueInput
  }

  /**
   * place_tags deleteMany
   */
  export type place_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which place_tags to delete
     */
    where?: place_tagsWhereInput
    /**
     * Limit how many place_tags to delete.
     */
    limit?: number
  }

  /**
   * place_tags.votes
   */
  export type place_tags$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    where?: votesWhereInput
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    cursor?: votesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * place_tags without action
   */
  export type place_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the place_tags
     */
    select?: place_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the place_tags
     */
    omit?: place_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: place_tagsInclude<ExtArgs> | null
  }


  /**
   * Model votes
   */

  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesAvgAggregateOutputType = {
    id: number | null
    voted_by_id: number | null
    place_tag_id: number | null
  }

  export type VotesSumAggregateOutputType = {
    id: number | null
    voted_by_id: number | null
    place_tag_id: number | null
  }

  export type VotesMinAggregateOutputType = {
    id: number | null
    vote_type: $Enums.vote_type | null
    voted_by_id: number | null
    place_tag_id: number | null
  }

  export type VotesMaxAggregateOutputType = {
    id: number | null
    vote_type: $Enums.vote_type | null
    voted_by_id: number | null
    place_tag_id: number | null
  }

  export type VotesCountAggregateOutputType = {
    id: number
    vote_type: number
    voted_by_id: number
    place_tag_id: number
    _all: number
  }


  export type VotesAvgAggregateInputType = {
    id?: true
    voted_by_id?: true
    place_tag_id?: true
  }

  export type VotesSumAggregateInputType = {
    id?: true
    voted_by_id?: true
    place_tag_id?: true
  }

  export type VotesMinAggregateInputType = {
    id?: true
    vote_type?: true
    voted_by_id?: true
    place_tag_id?: true
  }

  export type VotesMaxAggregateInputType = {
    id?: true
    vote_type?: true
    voted_by_id?: true
    place_tag_id?: true
  }

  export type VotesCountAggregateInputType = {
    id?: true
    vote_type?: true
    voted_by_id?: true
    place_tag_id?: true
    _all?: true
  }

  export type VotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to aggregate.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type votesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
    orderBy?: votesOrderByWithAggregationInput | votesOrderByWithAggregationInput[]
    by: VotesScalarFieldEnum[] | VotesScalarFieldEnum
    having?: votesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _avg?: VotesAvgAggregateInputType
    _sum?: VotesSumAggregateInputType
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }

  export type VotesGroupByOutputType = {
    id: number
    vote_type: $Enums.vote_type
    voted_by_id: number
    place_tag_id: number
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends votesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type votesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_type?: boolean
    voted_by_id?: boolean
    place_tag_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_type?: boolean
    voted_by_id?: boolean
    place_tag_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_type?: boolean
    voted_by_id?: boolean
    place_tag_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectScalar = {
    id?: boolean
    vote_type?: boolean
    voted_by_id?: boolean
    place_tag_id?: boolean
  }

  export type votesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vote_type" | "voted_by_id" | "place_tag_id", ExtArgs["result"]["votes"]>
  export type votesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }
  export type votesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }
  export type votesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    place_tags?: boolean | place_tagsDefaultArgs<ExtArgs>
  }

  export type $votesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "votes"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      place_tags: Prisma.$place_tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vote_type: $Enums.vote_type
      voted_by_id: number
      place_tag_id: number
    }, ExtArgs["result"]["votes"]>
    composites: {}
  }

  type votesGetPayload<S extends boolean | null | undefined | votesDefaultArgs> = $Result.GetResult<Prisma.$votesPayload, S>

  type votesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<votesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotesCountAggregateInputType | true
    }

  export interface votesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['votes'], meta: { name: 'votes' } }
    /**
     * Find zero or one Votes that matches the filter.
     * @param {votesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends votesFindUniqueArgs>(args: SelectSubset<T, votesFindUniqueArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Votes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {votesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends votesFindUniqueOrThrowArgs>(args: SelectSubset<T, votesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends votesFindFirstArgs>(args?: SelectSubset<T, votesFindFirstArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends votesFindFirstOrThrowArgs>(args?: SelectSubset<T, votesFindFirstOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votesWithIdOnly = await prisma.votes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends votesFindManyArgs>(args?: SelectSubset<T, votesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Votes.
     * @param {votesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
     */
    create<T extends votesCreateArgs>(args: SelectSubset<T, votesCreateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {votesCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends votesCreateManyArgs>(args?: SelectSubset<T, votesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {votesCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const votesWithIdOnly = await prisma.votes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends votesCreateManyAndReturnArgs>(args?: SelectSubset<T, votesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Votes.
     * @param {votesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
     */
    delete<T extends votesDeleteArgs>(args: SelectSubset<T, votesDeleteArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Votes.
     * @param {votesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends votesUpdateArgs>(args: SelectSubset<T, votesUpdateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {votesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends votesDeleteManyArgs>(args?: SelectSubset<T, votesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends votesUpdateManyArgs>(args: SelectSubset<T, votesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {votesUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const votesWithIdOnly = await prisma.votes.updateManyAndReturn({
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
    updateManyAndReturn<T extends votesUpdateManyAndReturnArgs>(args: SelectSubset<T, votesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Votes.
     * @param {votesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
     */
    upsert<T extends votesUpsertArgs>(args: SelectSubset<T, votesUpsertArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends votesCountArgs>(
      args?: Subset<T, votesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): Prisma.PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesGroupByArgs} args - Group by arguments.
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
      T extends votesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: votesGroupByArgs['orderBy'] }
        : { orderBy?: votesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, votesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the votes model
   */
  readonly fields: votesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__votesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place_tags<T extends place_tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, place_tagsDefaultArgs<ExtArgs>>): Prisma__place_tagsClient<$Result.GetResult<Prisma.$place_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the votes model
   */
  interface votesFieldRefs {
    readonly id: FieldRef<"votes", 'Int'>
    readonly vote_type: FieldRef<"votes", 'vote_type'>
    readonly voted_by_id: FieldRef<"votes", 'Int'>
    readonly place_tag_id: FieldRef<"votes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * votes findUnique
   */
  export type votesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findUniqueOrThrow
   */
  export type votesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findFirst
   */
  export type votesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findFirstOrThrow
   */
  export type votesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findMany
   */
  export type votesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes create
   */
  export type votesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The data needed to create a votes.
     */
    data: XOR<votesCreateInput, votesUncheckedCreateInput>
  }

  /**
   * votes createMany
   */
  export type votesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: votesCreateManyInput | votesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * votes createManyAndReturn
   */
  export type votesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data used to create many votes.
     */
    data: votesCreateManyInput | votesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * votes update
   */
  export type votesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The data needed to update a votes.
     */
    data: XOR<votesUpdateInput, votesUncheckedUpdateInput>
    /**
     * Choose, which votes to update.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes updateMany
   */
  export type votesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
  }

  /**
   * votes updateManyAndReturn
   */
  export type votesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data used to update votes.
     */
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * votes upsert
   */
  export type votesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The filter to search for the votes to update in case it exists.
     */
    where: votesWhereUniqueInput
    /**
     * In case the votes found by the `where` argument doesn't exist, create a new votes with this data.
     */
    create: XOR<votesCreateInput, votesUncheckedCreateInput>
    /**
     * In case the votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<votesUpdateInput, votesUncheckedUpdateInput>
  }

  /**
   * votes delete
   */
  export type votesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter which votes to delete.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes deleteMany
   */
  export type votesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to delete.
     */
    limit?: number
  }

  /**
   * votes without action
   */
  export type votesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    unique_id: 'unique_id',
    email: 'email',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PlacesScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    name: 'name',
    pfp: 'pfp',
    category: 'category',
    address: 'address',
    city: 'city',
    country: 'country',
    phone: 'phone',
    website: 'website',
    maps_url: 'maps_url',
    review_value: 'review_value',
    review_amount: 'review_amount',
    total_up_votes: 'total_up_votes',
    total_down_votes: 'total_down_votes',
    added_by_id: 'added_by_id'
  };

  export type PlacesScalarFieldEnum = (typeof PlacesScalarFieldEnum)[keyof typeof PlacesScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    author_id: 'author_id'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Place_tagsScalarFieldEnum: {
    id: 'id',
    place_id: 'place_id',
    tag_id: 'tag_id',
    up_votes: 'up_votes',
    down_votes: 'down_votes'
  };

  export type Place_tagsScalarFieldEnum = (typeof Place_tagsScalarFieldEnum)[keyof typeof Place_tagsScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id: 'id',
    vote_type: 'vote_type',
    voted_by_id: 'voted_by_id',
    place_tag_id: 'place_tag_id'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'vote_type'
   */
  export type Enumvote_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vote_type'>
    


  /**
   * Reference to a field of type 'vote_type[]'
   */
  export type ListEnumvote_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vote_type[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    unique_id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    places?: PlacesListRelationFilter
    tags?: TagsListRelationFilter
    votes?: VotesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    unique_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    places?: placesOrderByRelationAggregateInput
    tags?: tagsOrderByRelationAggregateInput
    votes?: votesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    places?: PlacesListRelationFilter
    tags?: TagsListRelationFilter
    votes?: VotesListRelationFilter
  }, "id" | "unique_id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    unique_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    unique_id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
  }

  export type placesWhereInput = {
    AND?: placesWhereInput | placesWhereInput[]
    OR?: placesWhereInput[]
    NOT?: placesWhereInput | placesWhereInput[]
    id?: IntFilter<"places"> | number
    profile_id?: StringFilter<"places"> | string
    name?: StringFilter<"places"> | string
    pfp?: StringFilter<"places"> | string
    category?: StringFilter<"places"> | string
    address?: StringFilter<"places"> | string
    city?: StringFilter<"places"> | string
    country?: StringFilter<"places"> | string
    phone?: StringFilter<"places"> | string
    website?: StringFilter<"places"> | string
    maps_url?: StringFilter<"places"> | string
    review_value?: FloatFilter<"places"> | number
    review_amount?: IntFilter<"places"> | number
    total_up_votes?: IntFilter<"places"> | number
    total_down_votes?: IntFilter<"places"> | number
    added_by_id?: IntFilter<"places"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: Place_tagsListRelationFilter
  }

  export type placesOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    maps_url?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
    user?: usersOrderByWithRelationInput
    place_tags?: place_tagsOrderByRelationAggregateInput
  }

  export type placesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    profile_id?: string
    name?: string
    pfp?: string
    maps_url?: string
    AND?: placesWhereInput | placesWhereInput[]
    OR?: placesWhereInput[]
    NOT?: placesWhereInput | placesWhereInput[]
    category?: StringFilter<"places"> | string
    address?: StringFilter<"places"> | string
    city?: StringFilter<"places"> | string
    country?: StringFilter<"places"> | string
    phone?: StringFilter<"places"> | string
    website?: StringFilter<"places"> | string
    review_value?: FloatFilter<"places"> | number
    review_amount?: IntFilter<"places"> | number
    total_up_votes?: IntFilter<"places"> | number
    total_down_votes?: IntFilter<"places"> | number
    added_by_id?: IntFilter<"places"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: Place_tagsListRelationFilter
  }, "id" | "profile_id" | "name" | "pfp" | "maps_url">

  export type placesOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    maps_url?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
    _count?: placesCountOrderByAggregateInput
    _avg?: placesAvgOrderByAggregateInput
    _max?: placesMaxOrderByAggregateInput
    _min?: placesMinOrderByAggregateInput
    _sum?: placesSumOrderByAggregateInput
  }

  export type placesScalarWhereWithAggregatesInput = {
    AND?: placesScalarWhereWithAggregatesInput | placesScalarWhereWithAggregatesInput[]
    OR?: placesScalarWhereWithAggregatesInput[]
    NOT?: placesScalarWhereWithAggregatesInput | placesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"places"> | number
    profile_id?: StringWithAggregatesFilter<"places"> | string
    name?: StringWithAggregatesFilter<"places"> | string
    pfp?: StringWithAggregatesFilter<"places"> | string
    category?: StringWithAggregatesFilter<"places"> | string
    address?: StringWithAggregatesFilter<"places"> | string
    city?: StringWithAggregatesFilter<"places"> | string
    country?: StringWithAggregatesFilter<"places"> | string
    phone?: StringWithAggregatesFilter<"places"> | string
    website?: StringWithAggregatesFilter<"places"> | string
    maps_url?: StringWithAggregatesFilter<"places"> | string
    review_value?: FloatWithAggregatesFilter<"places"> | number
    review_amount?: IntWithAggregatesFilter<"places"> | number
    total_up_votes?: IntWithAggregatesFilter<"places"> | number
    total_down_votes?: IntWithAggregatesFilter<"places"> | number
    added_by_id?: IntWithAggregatesFilter<"places"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: IntFilter<"tags"> | number
    name?: StringFilter<"tags"> | string
    author_id?: IntFilter<"tags"> | number
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: Place_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    author_id?: SortOrder
    author?: usersOrderByWithRelationInput
    place_tags?: place_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    author_id?: IntFilter<"tags"> | number
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: Place_tagsListRelationFilter
  }, "id" | "name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    author_id?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tags"> | number
    name?: StringWithAggregatesFilter<"tags"> | string
    author_id?: IntWithAggregatesFilter<"tags"> | number
  }

  export type place_tagsWhereInput = {
    AND?: place_tagsWhereInput | place_tagsWhereInput[]
    OR?: place_tagsWhereInput[]
    NOT?: place_tagsWhereInput | place_tagsWhereInput[]
    id?: IntFilter<"place_tags"> | number
    place_id?: IntFilter<"place_tags"> | number
    tag_id?: IntFilter<"place_tags"> | number
    up_votes?: IntFilter<"place_tags"> | number
    down_votes?: IntFilter<"place_tags"> | number
    place?: XOR<PlacesScalarRelationFilter, placesWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
    votes?: VotesListRelationFilter
  }

  export type place_tagsOrderByWithRelationInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
    place?: placesOrderByWithRelationInput
    tag?: tagsOrderByWithRelationInput
    votes?: votesOrderByRelationAggregateInput
  }

  export type place_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    place_id_tag_id?: place_tagsPlace_idTag_idCompoundUniqueInput
    AND?: place_tagsWhereInput | place_tagsWhereInput[]
    OR?: place_tagsWhereInput[]
    NOT?: place_tagsWhereInput | place_tagsWhereInput[]
    place_id?: IntFilter<"place_tags"> | number
    tag_id?: IntFilter<"place_tags"> | number
    up_votes?: IntFilter<"place_tags"> | number
    down_votes?: IntFilter<"place_tags"> | number
    place?: XOR<PlacesScalarRelationFilter, placesWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
    votes?: VotesListRelationFilter
  }, "id" | "place_id_tag_id">

  export type place_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
    _count?: place_tagsCountOrderByAggregateInput
    _avg?: place_tagsAvgOrderByAggregateInput
    _max?: place_tagsMaxOrderByAggregateInput
    _min?: place_tagsMinOrderByAggregateInput
    _sum?: place_tagsSumOrderByAggregateInput
  }

  export type place_tagsScalarWhereWithAggregatesInput = {
    AND?: place_tagsScalarWhereWithAggregatesInput | place_tagsScalarWhereWithAggregatesInput[]
    OR?: place_tagsScalarWhereWithAggregatesInput[]
    NOT?: place_tagsScalarWhereWithAggregatesInput | place_tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"place_tags"> | number
    place_id?: IntWithAggregatesFilter<"place_tags"> | number
    tag_id?: IntWithAggregatesFilter<"place_tags"> | number
    up_votes?: IntWithAggregatesFilter<"place_tags"> | number
    down_votes?: IntWithAggregatesFilter<"place_tags"> | number
  }

  export type votesWhereInput = {
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    id?: IntFilter<"votes"> | number
    vote_type?: Enumvote_typeFilter<"votes"> | $Enums.vote_type
    voted_by_id?: IntFilter<"votes"> | number
    place_tag_id?: IntFilter<"votes"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: XOR<Place_tagsScalarRelationFilter, place_tagsWhereInput>
  }

  export type votesOrderByWithRelationInput = {
    id?: SortOrder
    vote_type?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
    user?: usersOrderByWithRelationInput
    place_tags?: place_tagsOrderByWithRelationInput
  }

  export type votesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    voted_by_id_place_tag_id?: votesVoted_by_idPlace_tag_idCompoundUniqueInput
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    vote_type?: Enumvote_typeFilter<"votes"> | $Enums.vote_type
    voted_by_id?: IntFilter<"votes"> | number
    place_tag_id?: IntFilter<"votes"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    place_tags?: XOR<Place_tagsScalarRelationFilter, place_tagsWhereInput>
  }, "id" | "voted_by_id_place_tag_id">

  export type votesOrderByWithAggregationInput = {
    id?: SortOrder
    vote_type?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
    _count?: votesCountOrderByAggregateInput
    _avg?: votesAvgOrderByAggregateInput
    _max?: votesMaxOrderByAggregateInput
    _min?: votesMinOrderByAggregateInput
    _sum?: votesSumOrderByAggregateInput
  }

  export type votesScalarWhereWithAggregatesInput = {
    AND?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    OR?: votesScalarWhereWithAggregatesInput[]
    NOT?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"votes"> | number
    vote_type?: Enumvote_typeWithAggregatesFilter<"votes"> | $Enums.vote_type
    voted_by_id?: IntWithAggregatesFilter<"votes"> | number
    place_tag_id?: IntWithAggregatesFilter<"votes"> | number
  }

  export type usersCreateInput = {
    unique_id: string
    email: string
    name: string
    places?: placesCreateNestedManyWithoutUserInput
    tags?: tagsCreateNestedManyWithoutAuthorInput
    votes?: votesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    unique_id: string
    email: string
    name: string
    places?: placesUncheckedCreateNestedManyWithoutUserInput
    tags?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    votes?: votesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUpdateManyWithoutUserNestedInput
    tags?: tagsUpdateManyWithoutAuthorNestedInput
    votes?: votesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUncheckedUpdateManyWithoutUserNestedInput
    tags?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: votesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    unique_id: string
    email: string
    name: string
  }

  export type usersUpdateManyMutationInput = {
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type placesCreateInput = {
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    user: usersCreateNestedOneWithoutPlacesInput
    place_tags?: place_tagsCreateNestedManyWithoutPlaceInput
  }

  export type placesUncheckedCreateInput = {
    id?: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    added_by_id: number
    place_tags?: place_tagsUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type placesUpdateInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutPlacesNestedInput
    place_tags?: place_tagsUpdateManyWithoutPlaceNestedInput
  }

  export type placesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    added_by_id?: IntFieldUpdateOperationsInput | number
    place_tags?: place_tagsUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type placesCreateManyInput = {
    id?: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    added_by_id: number
  }

  export type placesUpdateManyMutationInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type placesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    added_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    name: string
    author: usersCreateNestedOneWithoutTagsInput
    place_tags?: place_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateInput = {
    id?: number
    name: string
    author_id: number
    place_tags?: place_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: usersUpdateOneRequiredWithoutTagsNestedInput
    place_tags?: place_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    place_tags?: place_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsCreateManyInput = {
    id?: number
    name: string
    author_id: number
  }

  export type tagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type place_tagsCreateInput = {
    up_votes?: number
    down_votes?: number
    place: placesCreateNestedOneWithoutPlace_tagsInput
    tag: tagsCreateNestedOneWithoutPlace_tagsInput
    votes?: votesCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsUncheckedCreateInput = {
    id?: number
    place_id: number
    tag_id: number
    up_votes?: number
    down_votes?: number
    votes?: votesUncheckedCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsUpdateInput = {
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    place?: placesUpdateOneRequiredWithoutPlace_tagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutPlace_tagsNestedInput
    votes?: votesUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    votes?: votesUncheckedUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsCreateManyInput = {
    id?: number
    place_id: number
    tag_id: number
    up_votes?: number
    down_votes?: number
  }

  export type place_tagsUpdateManyMutationInput = {
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type place_tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type votesCreateInput = {
    vote_type: $Enums.vote_type
    user: usersCreateNestedOneWithoutVotesInput
    place_tags: place_tagsCreateNestedOneWithoutVotesInput
  }

  export type votesUncheckedCreateInput = {
    id?: number
    vote_type: $Enums.vote_type
    voted_by_id: number
    place_tag_id: number
  }

  export type votesUpdateInput = {
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    user?: usersUpdateOneRequiredWithoutVotesNestedInput
    place_tags?: place_tagsUpdateOneRequiredWithoutVotesNestedInput
  }

  export type votesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    voted_by_id?: IntFieldUpdateOperationsInput | number
    place_tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type votesCreateManyInput = {
    id?: number
    vote_type: $Enums.vote_type
    voted_by_id: number
    place_tag_id: number
  }

  export type votesUpdateManyMutationInput = {
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
  }

  export type votesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    voted_by_id?: IntFieldUpdateOperationsInput | number
    place_tag_id?: IntFieldUpdateOperationsInput | number
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

  export type PlacesListRelationFilter = {
    every?: placesWhereInput
    some?: placesWhereInput
    none?: placesWhereInput
  }

  export type TagsListRelationFilter = {
    every?: tagsWhereInput
    some?: tagsWhereInput
    none?: tagsWhereInput
  }

  export type VotesListRelationFilter = {
    every?: votesWhereInput
    some?: votesWhereInput
    none?: votesWhereInput
  }

  export type placesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type votesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Place_tagsListRelationFilter = {
    every?: place_tagsWhereInput
    some?: place_tagsWhereInput
    none?: place_tagsWhereInput
  }

  export type place_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type placesCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    maps_url?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
  }

  export type placesAvgOrderByAggregateInput = {
    id?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
  }

  export type placesMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    maps_url?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
  }

  export type placesMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    maps_url?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
  }

  export type placesSumOrderByAggregateInput = {
    id?: SortOrder
    review_value?: SortOrder
    review_amount?: SortOrder
    total_up_votes?: SortOrder
    total_down_votes?: SortOrder
    added_by_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author_id?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author_id?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author_id?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type PlacesScalarRelationFilter = {
    is?: placesWhereInput
    isNot?: placesWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type place_tagsPlace_idTag_idCompoundUniqueInput = {
    place_id: number
    tag_id: number
  }

  export type place_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
  }

  export type place_tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
  }

  export type place_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
  }

  export type place_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
  }

  export type place_tagsSumOrderByAggregateInput = {
    id?: SortOrder
    place_id?: SortOrder
    tag_id?: SortOrder
    up_votes?: SortOrder
    down_votes?: SortOrder
  }

  export type Enumvote_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.vote_type | Enumvote_typeFieldRefInput<$PrismaModel>
    in?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvote_typeFilter<$PrismaModel> | $Enums.vote_type
  }

  export type Place_tagsScalarRelationFilter = {
    is?: place_tagsWhereInput
    isNot?: place_tagsWhereInput
  }

  export type votesVoted_by_idPlace_tag_idCompoundUniqueInput = {
    voted_by_id: number
    place_tag_id: number
  }

  export type votesCountOrderByAggregateInput = {
    id?: SortOrder
    vote_type?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
  }

  export type votesAvgOrderByAggregateInput = {
    id?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
  }

  export type votesMaxOrderByAggregateInput = {
    id?: SortOrder
    vote_type?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
  }

  export type votesMinOrderByAggregateInput = {
    id?: SortOrder
    vote_type?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
  }

  export type votesSumOrderByAggregateInput = {
    id?: SortOrder
    voted_by_id?: SortOrder
    place_tag_id?: SortOrder
  }

  export type Enumvote_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vote_type | Enumvote_typeFieldRefInput<$PrismaModel>
    in?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvote_typeWithAggregatesFilter<$PrismaModel> | $Enums.vote_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvote_typeFilter<$PrismaModel>
    _max?: NestedEnumvote_typeFilter<$PrismaModel>
  }

  export type placesCreateNestedManyWithoutUserInput = {
    create?: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput> | placesCreateWithoutUserInput[] | placesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: placesCreateOrConnectWithoutUserInput | placesCreateOrConnectWithoutUserInput[]
    createMany?: placesCreateManyUserInputEnvelope
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
  }

  export type tagsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type votesCreateNestedManyWithoutUserInput = {
    create?: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput> | votesCreateWithoutUserInput[] | votesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUserInput | votesCreateOrConnectWithoutUserInput[]
    createMany?: votesCreateManyUserInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type placesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput> | placesCreateWithoutUserInput[] | placesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: placesCreateOrConnectWithoutUserInput | placesCreateOrConnectWithoutUserInput[]
    createMany?: placesCreateManyUserInputEnvelope
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
  }

  export type tagsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type votesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput> | votesCreateWithoutUserInput[] | votesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUserInput | votesCreateOrConnectWithoutUserInput[]
    createMany?: votesCreateManyUserInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type placesUpdateManyWithoutUserNestedInput = {
    create?: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput> | placesCreateWithoutUserInput[] | placesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: placesCreateOrConnectWithoutUserInput | placesCreateOrConnectWithoutUserInput[]
    upsert?: placesUpsertWithWhereUniqueWithoutUserInput | placesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: placesCreateManyUserInputEnvelope
    set?: placesWhereUniqueInput | placesWhereUniqueInput[]
    disconnect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    delete?: placesWhereUniqueInput | placesWhereUniqueInput[]
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    update?: placesUpdateWithWhereUniqueWithoutUserInput | placesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: placesUpdateManyWithWhereWithoutUserInput | placesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: placesScalarWhereInput | placesScalarWhereInput[]
  }

  export type tagsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutAuthorInput | tagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutAuthorInput | tagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutAuthorInput | tagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type votesUpdateManyWithoutUserNestedInput = {
    create?: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput> | votesCreateWithoutUserInput[] | votesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUserInput | votesCreateOrConnectWithoutUserInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutUserInput | votesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: votesCreateManyUserInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutUserInput | votesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: votesUpdateManyWithWhereWithoutUserInput | votesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type placesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput> | placesCreateWithoutUserInput[] | placesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: placesCreateOrConnectWithoutUserInput | placesCreateOrConnectWithoutUserInput[]
    upsert?: placesUpsertWithWhereUniqueWithoutUserInput | placesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: placesCreateManyUserInputEnvelope
    set?: placesWhereUniqueInput | placesWhereUniqueInput[]
    disconnect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    delete?: placesWhereUniqueInput | placesWhereUniqueInput[]
    connect?: placesWhereUniqueInput | placesWhereUniqueInput[]
    update?: placesUpdateWithWhereUniqueWithoutUserInput | placesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: placesUpdateManyWithWhereWithoutUserInput | placesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: placesScalarWhereInput | placesScalarWhereInput[]
  }

  export type tagsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutAuthorInput | tagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutAuthorInput | tagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutAuthorInput | tagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type votesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput> | votesCreateWithoutUserInput[] | votesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUserInput | votesCreateOrConnectWithoutUserInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutUserInput | votesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: votesCreateManyUserInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutUserInput | votesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: votesUpdateManyWithWhereWithoutUserInput | votesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPlacesInput = {
    create?: XOR<usersCreateWithoutPlacesInput, usersUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlacesInput
    connect?: usersWhereUniqueInput
  }

  export type place_tagsCreateNestedManyWithoutPlaceInput = {
    create?: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput> | place_tagsCreateWithoutPlaceInput[] | place_tagsUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutPlaceInput | place_tagsCreateOrConnectWithoutPlaceInput[]
    createMany?: place_tagsCreateManyPlaceInputEnvelope
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
  }

  export type place_tagsUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput> | place_tagsCreateWithoutPlaceInput[] | place_tagsUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutPlaceInput | place_tagsCreateOrConnectWithoutPlaceInput[]
    createMany?: place_tagsCreateManyPlaceInputEnvelope
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<usersCreateWithoutPlacesInput, usersUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlacesInput
    upsert?: usersUpsertWithoutPlacesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPlacesInput, usersUpdateWithoutPlacesInput>, usersUncheckedUpdateWithoutPlacesInput>
  }

  export type place_tagsUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput> | place_tagsCreateWithoutPlaceInput[] | place_tagsUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutPlaceInput | place_tagsCreateOrConnectWithoutPlaceInput[]
    upsert?: place_tagsUpsertWithWhereUniqueWithoutPlaceInput | place_tagsUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: place_tagsCreateManyPlaceInputEnvelope
    set?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    disconnect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    delete?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    update?: place_tagsUpdateWithWhereUniqueWithoutPlaceInput | place_tagsUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: place_tagsUpdateManyWithWhereWithoutPlaceInput | place_tagsUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
  }

  export type place_tagsUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput> | place_tagsCreateWithoutPlaceInput[] | place_tagsUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutPlaceInput | place_tagsCreateOrConnectWithoutPlaceInput[]
    upsert?: place_tagsUpsertWithWhereUniqueWithoutPlaceInput | place_tagsUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: place_tagsCreateManyPlaceInputEnvelope
    set?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    disconnect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    delete?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    update?: place_tagsUpdateWithWhereUniqueWithoutPlaceInput | place_tagsUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: place_tagsUpdateManyWithWhereWithoutPlaceInput | place_tagsUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTagsInput = {
    create?: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagsInput
    connect?: usersWhereUniqueInput
  }

  export type place_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput> | place_tagsCreateWithoutTagInput[] | place_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutTagInput | place_tagsCreateOrConnectWithoutTagInput[]
    createMany?: place_tagsCreateManyTagInputEnvelope
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
  }

  export type place_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput> | place_tagsCreateWithoutTagInput[] | place_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutTagInput | place_tagsCreateOrConnectWithoutTagInput[]
    createMany?: place_tagsCreateManyTagInputEnvelope
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagsInput
    upsert?: usersUpsertWithoutTagsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTagsInput, usersUpdateWithoutTagsInput>, usersUncheckedUpdateWithoutTagsInput>
  }

  export type place_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput> | place_tagsCreateWithoutTagInput[] | place_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutTagInput | place_tagsCreateOrConnectWithoutTagInput[]
    upsert?: place_tagsUpsertWithWhereUniqueWithoutTagInput | place_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: place_tagsCreateManyTagInputEnvelope
    set?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    disconnect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    delete?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    update?: place_tagsUpdateWithWhereUniqueWithoutTagInput | place_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: place_tagsUpdateManyWithWhereWithoutTagInput | place_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
  }

  export type place_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput> | place_tagsCreateWithoutTagInput[] | place_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: place_tagsCreateOrConnectWithoutTagInput | place_tagsCreateOrConnectWithoutTagInput[]
    upsert?: place_tagsUpsertWithWhereUniqueWithoutTagInput | place_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: place_tagsCreateManyTagInputEnvelope
    set?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    disconnect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    delete?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    connect?: place_tagsWhereUniqueInput | place_tagsWhereUniqueInput[]
    update?: place_tagsUpdateWithWhereUniqueWithoutTagInput | place_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: place_tagsUpdateManyWithWhereWithoutTagInput | place_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
  }

  export type placesCreateNestedOneWithoutPlace_tagsInput = {
    create?: XOR<placesCreateWithoutPlace_tagsInput, placesUncheckedCreateWithoutPlace_tagsInput>
    connectOrCreate?: placesCreateOrConnectWithoutPlace_tagsInput
    connect?: placesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutPlace_tagsInput = {
    create?: XOR<tagsCreateWithoutPlace_tagsInput, tagsUncheckedCreateWithoutPlace_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPlace_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type votesCreateNestedManyWithoutPlace_tagsInput = {
    create?: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput> | votesCreateWithoutPlace_tagsInput[] | votesUncheckedCreateWithoutPlace_tagsInput[]
    connectOrCreate?: votesCreateOrConnectWithoutPlace_tagsInput | votesCreateOrConnectWithoutPlace_tagsInput[]
    createMany?: votesCreateManyPlace_tagsInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type votesUncheckedCreateNestedManyWithoutPlace_tagsInput = {
    create?: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput> | votesCreateWithoutPlace_tagsInput[] | votesUncheckedCreateWithoutPlace_tagsInput[]
    connectOrCreate?: votesCreateOrConnectWithoutPlace_tagsInput | votesCreateOrConnectWithoutPlace_tagsInput[]
    createMany?: votesCreateManyPlace_tagsInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type placesUpdateOneRequiredWithoutPlace_tagsNestedInput = {
    create?: XOR<placesCreateWithoutPlace_tagsInput, placesUncheckedCreateWithoutPlace_tagsInput>
    connectOrCreate?: placesCreateOrConnectWithoutPlace_tagsInput
    upsert?: placesUpsertWithoutPlace_tagsInput
    connect?: placesWhereUniqueInput
    update?: XOR<XOR<placesUpdateToOneWithWhereWithoutPlace_tagsInput, placesUpdateWithoutPlace_tagsInput>, placesUncheckedUpdateWithoutPlace_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutPlace_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutPlace_tagsInput, tagsUncheckedCreateWithoutPlace_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPlace_tagsInput
    upsert?: tagsUpsertWithoutPlace_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutPlace_tagsInput, tagsUpdateWithoutPlace_tagsInput>, tagsUncheckedUpdateWithoutPlace_tagsInput>
  }

  export type votesUpdateManyWithoutPlace_tagsNestedInput = {
    create?: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput> | votesCreateWithoutPlace_tagsInput[] | votesUncheckedCreateWithoutPlace_tagsInput[]
    connectOrCreate?: votesCreateOrConnectWithoutPlace_tagsInput | votesCreateOrConnectWithoutPlace_tagsInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutPlace_tagsInput | votesUpsertWithWhereUniqueWithoutPlace_tagsInput[]
    createMany?: votesCreateManyPlace_tagsInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutPlace_tagsInput | votesUpdateWithWhereUniqueWithoutPlace_tagsInput[]
    updateMany?: votesUpdateManyWithWhereWithoutPlace_tagsInput | votesUpdateManyWithWhereWithoutPlace_tagsInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type votesUncheckedUpdateManyWithoutPlace_tagsNestedInput = {
    create?: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput> | votesCreateWithoutPlace_tagsInput[] | votesUncheckedCreateWithoutPlace_tagsInput[]
    connectOrCreate?: votesCreateOrConnectWithoutPlace_tagsInput | votesCreateOrConnectWithoutPlace_tagsInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutPlace_tagsInput | votesUpsertWithWhereUniqueWithoutPlace_tagsInput[]
    createMany?: votesCreateManyPlace_tagsInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutPlace_tagsInput | votesUpdateWithWhereUniqueWithoutPlace_tagsInput[]
    updateMany?: votesUpdateManyWithWhereWithoutPlace_tagsInput | votesUpdateManyWithWhereWithoutPlace_tagsInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutVotesInput = {
    create?: XOR<usersCreateWithoutVotesInput, usersUncheckedCreateWithoutVotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutVotesInput
    connect?: usersWhereUniqueInput
  }

  export type place_tagsCreateNestedOneWithoutVotesInput = {
    create?: XOR<place_tagsCreateWithoutVotesInput, place_tagsUncheckedCreateWithoutVotesInput>
    connectOrCreate?: place_tagsCreateOrConnectWithoutVotesInput
    connect?: place_tagsWhereUniqueInput
  }

  export type Enumvote_typeFieldUpdateOperationsInput = {
    set?: $Enums.vote_type
  }

  export type usersUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<usersCreateWithoutVotesInput, usersUncheckedCreateWithoutVotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutVotesInput
    upsert?: usersUpsertWithoutVotesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutVotesInput, usersUpdateWithoutVotesInput>, usersUncheckedUpdateWithoutVotesInput>
  }

  export type place_tagsUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<place_tagsCreateWithoutVotesInput, place_tagsUncheckedCreateWithoutVotesInput>
    connectOrCreate?: place_tagsCreateOrConnectWithoutVotesInput
    upsert?: place_tagsUpsertWithoutVotesInput
    connect?: place_tagsWhereUniqueInput
    update?: XOR<XOR<place_tagsUpdateToOneWithWhereWithoutVotesInput, place_tagsUpdateWithoutVotesInput>, place_tagsUncheckedUpdateWithoutVotesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumvote_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.vote_type | Enumvote_typeFieldRefInput<$PrismaModel>
    in?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvote_typeFilter<$PrismaModel> | $Enums.vote_type
  }

  export type NestedEnumvote_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vote_type | Enumvote_typeFieldRefInput<$PrismaModel>
    in?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.vote_type[] | ListEnumvote_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvote_typeWithAggregatesFilter<$PrismaModel> | $Enums.vote_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvote_typeFilter<$PrismaModel>
    _max?: NestedEnumvote_typeFilter<$PrismaModel>
  }

  export type placesCreateWithoutUserInput = {
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    place_tags?: place_tagsCreateNestedManyWithoutPlaceInput
  }

  export type placesUncheckedCreateWithoutUserInput = {
    id?: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    place_tags?: place_tagsUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type placesCreateOrConnectWithoutUserInput = {
    where: placesWhereUniqueInput
    create: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput>
  }

  export type placesCreateManyUserInputEnvelope = {
    data: placesCreateManyUserInput | placesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tagsCreateWithoutAuthorInput = {
    name: string
    place_tags?: place_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    place_tags?: place_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsCreateOrConnectWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput>
  }

  export type tagsCreateManyAuthorInputEnvelope = {
    data: tagsCreateManyAuthorInput | tagsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type votesCreateWithoutUserInput = {
    vote_type: $Enums.vote_type
    place_tags: place_tagsCreateNestedOneWithoutVotesInput
  }

  export type votesUncheckedCreateWithoutUserInput = {
    id?: number
    vote_type: $Enums.vote_type
    place_tag_id: number
  }

  export type votesCreateOrConnectWithoutUserInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput>
  }

  export type votesCreateManyUserInputEnvelope = {
    data: votesCreateManyUserInput | votesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type placesUpsertWithWhereUniqueWithoutUserInput = {
    where: placesWhereUniqueInput
    update: XOR<placesUpdateWithoutUserInput, placesUncheckedUpdateWithoutUserInput>
    create: XOR<placesCreateWithoutUserInput, placesUncheckedCreateWithoutUserInput>
  }

  export type placesUpdateWithWhereUniqueWithoutUserInput = {
    where: placesWhereUniqueInput
    data: XOR<placesUpdateWithoutUserInput, placesUncheckedUpdateWithoutUserInput>
  }

  export type placesUpdateManyWithWhereWithoutUserInput = {
    where: placesScalarWhereInput
    data: XOR<placesUpdateManyMutationInput, placesUncheckedUpdateManyWithoutUserInput>
  }

  export type placesScalarWhereInput = {
    AND?: placesScalarWhereInput | placesScalarWhereInput[]
    OR?: placesScalarWhereInput[]
    NOT?: placesScalarWhereInput | placesScalarWhereInput[]
    id?: IntFilter<"places"> | number
    profile_id?: StringFilter<"places"> | string
    name?: StringFilter<"places"> | string
    pfp?: StringFilter<"places"> | string
    category?: StringFilter<"places"> | string
    address?: StringFilter<"places"> | string
    city?: StringFilter<"places"> | string
    country?: StringFilter<"places"> | string
    phone?: StringFilter<"places"> | string
    website?: StringFilter<"places"> | string
    maps_url?: StringFilter<"places"> | string
    review_value?: FloatFilter<"places"> | number
    review_amount?: IntFilter<"places"> | number
    total_up_votes?: IntFilter<"places"> | number
    total_down_votes?: IntFilter<"places"> | number
    added_by_id?: IntFilter<"places"> | number
  }

  export type tagsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    update: XOR<tagsUpdateWithoutAuthorInput, tagsUncheckedUpdateWithoutAuthorInput>
    create: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput>
  }

  export type tagsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    data: XOR<tagsUpdateWithoutAuthorInput, tagsUncheckedUpdateWithoutAuthorInput>
  }

  export type tagsUpdateManyWithWhereWithoutAuthorInput = {
    where: tagsScalarWhereInput
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type tagsScalarWhereInput = {
    AND?: tagsScalarWhereInput | tagsScalarWhereInput[]
    OR?: tagsScalarWhereInput[]
    NOT?: tagsScalarWhereInput | tagsScalarWhereInput[]
    id?: IntFilter<"tags"> | number
    name?: StringFilter<"tags"> | string
    author_id?: IntFilter<"tags"> | number
  }

  export type votesUpsertWithWhereUniqueWithoutUserInput = {
    where: votesWhereUniqueInput
    update: XOR<votesUpdateWithoutUserInput, votesUncheckedUpdateWithoutUserInput>
    create: XOR<votesCreateWithoutUserInput, votesUncheckedCreateWithoutUserInput>
  }

  export type votesUpdateWithWhereUniqueWithoutUserInput = {
    where: votesWhereUniqueInput
    data: XOR<votesUpdateWithoutUserInput, votesUncheckedUpdateWithoutUserInput>
  }

  export type votesUpdateManyWithWhereWithoutUserInput = {
    where: votesScalarWhereInput
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyWithoutUserInput>
  }

  export type votesScalarWhereInput = {
    AND?: votesScalarWhereInput | votesScalarWhereInput[]
    OR?: votesScalarWhereInput[]
    NOT?: votesScalarWhereInput | votesScalarWhereInput[]
    id?: IntFilter<"votes"> | number
    vote_type?: Enumvote_typeFilter<"votes"> | $Enums.vote_type
    voted_by_id?: IntFilter<"votes"> | number
    place_tag_id?: IntFilter<"votes"> | number
  }

  export type usersCreateWithoutPlacesInput = {
    unique_id: string
    email: string
    name: string
    tags?: tagsCreateNestedManyWithoutAuthorInput
    votes?: votesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPlacesInput = {
    id?: number
    unique_id: string
    email: string
    name: string
    tags?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    votes?: votesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPlacesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlacesInput, usersUncheckedCreateWithoutPlacesInput>
  }

  export type place_tagsCreateWithoutPlaceInput = {
    up_votes?: number
    down_votes?: number
    tag: tagsCreateNestedOneWithoutPlace_tagsInput
    votes?: votesCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsUncheckedCreateWithoutPlaceInput = {
    id?: number
    tag_id: number
    up_votes?: number
    down_votes?: number
    votes?: votesUncheckedCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsCreateOrConnectWithoutPlaceInput = {
    where: place_tagsWhereUniqueInput
    create: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput>
  }

  export type place_tagsCreateManyPlaceInputEnvelope = {
    data: place_tagsCreateManyPlaceInput | place_tagsCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPlacesInput = {
    update: XOR<usersUpdateWithoutPlacesInput, usersUncheckedUpdateWithoutPlacesInput>
    create: XOR<usersCreateWithoutPlacesInput, usersUncheckedCreateWithoutPlacesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPlacesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPlacesInput, usersUncheckedUpdateWithoutPlacesInput>
  }

  export type usersUpdateWithoutPlacesInput = {
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tags?: tagsUpdateManyWithoutAuthorNestedInput
    votes?: votesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tags?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: votesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type place_tagsUpsertWithWhereUniqueWithoutPlaceInput = {
    where: place_tagsWhereUniqueInput
    update: XOR<place_tagsUpdateWithoutPlaceInput, place_tagsUncheckedUpdateWithoutPlaceInput>
    create: XOR<place_tagsCreateWithoutPlaceInput, place_tagsUncheckedCreateWithoutPlaceInput>
  }

  export type place_tagsUpdateWithWhereUniqueWithoutPlaceInput = {
    where: place_tagsWhereUniqueInput
    data: XOR<place_tagsUpdateWithoutPlaceInput, place_tagsUncheckedUpdateWithoutPlaceInput>
  }

  export type place_tagsUpdateManyWithWhereWithoutPlaceInput = {
    where: place_tagsScalarWhereInput
    data: XOR<place_tagsUpdateManyMutationInput, place_tagsUncheckedUpdateManyWithoutPlaceInput>
  }

  export type place_tagsScalarWhereInput = {
    AND?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
    OR?: place_tagsScalarWhereInput[]
    NOT?: place_tagsScalarWhereInput | place_tagsScalarWhereInput[]
    id?: IntFilter<"place_tags"> | number
    place_id?: IntFilter<"place_tags"> | number
    tag_id?: IntFilter<"place_tags"> | number
    up_votes?: IntFilter<"place_tags"> | number
    down_votes?: IntFilter<"place_tags"> | number
  }

  export type usersCreateWithoutTagsInput = {
    unique_id: string
    email: string
    name: string
    places?: placesCreateNestedManyWithoutUserInput
    votes?: votesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTagsInput = {
    id?: number
    unique_id: string
    email: string
    name: string
    places?: placesUncheckedCreateNestedManyWithoutUserInput
    votes?: votesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTagsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
  }

  export type place_tagsCreateWithoutTagInput = {
    up_votes?: number
    down_votes?: number
    place: placesCreateNestedOneWithoutPlace_tagsInput
    votes?: votesCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsUncheckedCreateWithoutTagInput = {
    id?: number
    place_id: number
    up_votes?: number
    down_votes?: number
    votes?: votesUncheckedCreateNestedManyWithoutPlace_tagsInput
  }

  export type place_tagsCreateOrConnectWithoutTagInput = {
    where: place_tagsWhereUniqueInput
    create: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput>
  }

  export type place_tagsCreateManyTagInputEnvelope = {
    data: place_tagsCreateManyTagInput | place_tagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTagsInput = {
    update: XOR<usersUpdateWithoutTagsInput, usersUncheckedUpdateWithoutTagsInput>
    create: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTagsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTagsInput, usersUncheckedUpdateWithoutTagsInput>
  }

  export type usersUpdateWithoutTagsInput = {
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUpdateManyWithoutUserNestedInput
    votes?: votesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUncheckedUpdateManyWithoutUserNestedInput
    votes?: votesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type place_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: place_tagsWhereUniqueInput
    update: XOR<place_tagsUpdateWithoutTagInput, place_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<place_tagsCreateWithoutTagInput, place_tagsUncheckedCreateWithoutTagInput>
  }

  export type place_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: place_tagsWhereUniqueInput
    data: XOR<place_tagsUpdateWithoutTagInput, place_tagsUncheckedUpdateWithoutTagInput>
  }

  export type place_tagsUpdateManyWithWhereWithoutTagInput = {
    where: place_tagsScalarWhereInput
    data: XOR<place_tagsUpdateManyMutationInput, place_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type placesCreateWithoutPlace_tagsInput = {
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    user: usersCreateNestedOneWithoutPlacesInput
  }

  export type placesUncheckedCreateWithoutPlace_tagsInput = {
    id?: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
    added_by_id: number
  }

  export type placesCreateOrConnectWithoutPlace_tagsInput = {
    where: placesWhereUniqueInput
    create: XOR<placesCreateWithoutPlace_tagsInput, placesUncheckedCreateWithoutPlace_tagsInput>
  }

  export type tagsCreateWithoutPlace_tagsInput = {
    name: string
    author: usersCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutPlace_tagsInput = {
    id?: number
    name: string
    author_id: number
  }

  export type tagsCreateOrConnectWithoutPlace_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutPlace_tagsInput, tagsUncheckedCreateWithoutPlace_tagsInput>
  }

  export type votesCreateWithoutPlace_tagsInput = {
    vote_type: $Enums.vote_type
    user: usersCreateNestedOneWithoutVotesInput
  }

  export type votesUncheckedCreateWithoutPlace_tagsInput = {
    id?: number
    vote_type: $Enums.vote_type
    voted_by_id: number
  }

  export type votesCreateOrConnectWithoutPlace_tagsInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput>
  }

  export type votesCreateManyPlace_tagsInputEnvelope = {
    data: votesCreateManyPlace_tagsInput | votesCreateManyPlace_tagsInput[]
    skipDuplicates?: boolean
  }

  export type placesUpsertWithoutPlace_tagsInput = {
    update: XOR<placesUpdateWithoutPlace_tagsInput, placesUncheckedUpdateWithoutPlace_tagsInput>
    create: XOR<placesCreateWithoutPlace_tagsInput, placesUncheckedCreateWithoutPlace_tagsInput>
    where?: placesWhereInput
  }

  export type placesUpdateToOneWithWhereWithoutPlace_tagsInput = {
    where?: placesWhereInput
    data: XOR<placesUpdateWithoutPlace_tagsInput, placesUncheckedUpdateWithoutPlace_tagsInput>
  }

  export type placesUpdateWithoutPlace_tagsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type placesUncheckedUpdateWithoutPlace_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    added_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type tagsUpsertWithoutPlace_tagsInput = {
    update: XOR<tagsUpdateWithoutPlace_tagsInput, tagsUncheckedUpdateWithoutPlace_tagsInput>
    create: XOR<tagsCreateWithoutPlace_tagsInput, tagsUncheckedCreateWithoutPlace_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutPlace_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutPlace_tagsInput, tagsUncheckedUpdateWithoutPlace_tagsInput>
  }

  export type tagsUpdateWithoutPlace_tagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: usersUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutPlace_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type votesUpsertWithWhereUniqueWithoutPlace_tagsInput = {
    where: votesWhereUniqueInput
    update: XOR<votesUpdateWithoutPlace_tagsInput, votesUncheckedUpdateWithoutPlace_tagsInput>
    create: XOR<votesCreateWithoutPlace_tagsInput, votesUncheckedCreateWithoutPlace_tagsInput>
  }

  export type votesUpdateWithWhereUniqueWithoutPlace_tagsInput = {
    where: votesWhereUniqueInput
    data: XOR<votesUpdateWithoutPlace_tagsInput, votesUncheckedUpdateWithoutPlace_tagsInput>
  }

  export type votesUpdateManyWithWhereWithoutPlace_tagsInput = {
    where: votesScalarWhereInput
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyWithoutPlace_tagsInput>
  }

  export type usersCreateWithoutVotesInput = {
    unique_id: string
    email: string
    name: string
    places?: placesCreateNestedManyWithoutUserInput
    tags?: tagsCreateNestedManyWithoutAuthorInput
  }

  export type usersUncheckedCreateWithoutVotesInput = {
    id?: number
    unique_id: string
    email: string
    name: string
    places?: placesUncheckedCreateNestedManyWithoutUserInput
    tags?: tagsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type usersCreateOrConnectWithoutVotesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutVotesInput, usersUncheckedCreateWithoutVotesInput>
  }

  export type place_tagsCreateWithoutVotesInput = {
    up_votes?: number
    down_votes?: number
    place: placesCreateNestedOneWithoutPlace_tagsInput
    tag: tagsCreateNestedOneWithoutPlace_tagsInput
  }

  export type place_tagsUncheckedCreateWithoutVotesInput = {
    id?: number
    place_id: number
    tag_id: number
    up_votes?: number
    down_votes?: number
  }

  export type place_tagsCreateOrConnectWithoutVotesInput = {
    where: place_tagsWhereUniqueInput
    create: XOR<place_tagsCreateWithoutVotesInput, place_tagsUncheckedCreateWithoutVotesInput>
  }

  export type usersUpsertWithoutVotesInput = {
    update: XOR<usersUpdateWithoutVotesInput, usersUncheckedUpdateWithoutVotesInput>
    create: XOR<usersCreateWithoutVotesInput, usersUncheckedCreateWithoutVotesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutVotesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutVotesInput, usersUncheckedUpdateWithoutVotesInput>
  }

  export type usersUpdateWithoutVotesInput = {
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUpdateManyWithoutUserNestedInput
    tags?: tagsUpdateManyWithoutAuthorNestedInput
  }

  export type usersUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    unique_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    places?: placesUncheckedUpdateManyWithoutUserNestedInput
    tags?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type place_tagsUpsertWithoutVotesInput = {
    update: XOR<place_tagsUpdateWithoutVotesInput, place_tagsUncheckedUpdateWithoutVotesInput>
    create: XOR<place_tagsCreateWithoutVotesInput, place_tagsUncheckedCreateWithoutVotesInput>
    where?: place_tagsWhereInput
  }

  export type place_tagsUpdateToOneWithWhereWithoutVotesInput = {
    where?: place_tagsWhereInput
    data: XOR<place_tagsUpdateWithoutVotesInput, place_tagsUncheckedUpdateWithoutVotesInput>
  }

  export type place_tagsUpdateWithoutVotesInput = {
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    place?: placesUpdateOneRequiredWithoutPlace_tagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type placesCreateManyUserInput = {
    id?: number
    profile_id: string
    name: string
    pfp: string
    category: string
    address: string
    city: string
    country: string
    phone: string
    website: string
    maps_url: string
    review_value: number
    review_amount: number
    total_up_votes?: number
    total_down_votes?: number
  }

  export type tagsCreateManyAuthorInput = {
    id?: number
    name: string
  }

  export type votesCreateManyUserInput = {
    id?: number
    vote_type: $Enums.vote_type
    place_tag_id: number
  }

  export type placesUpdateWithoutUserInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    place_tags?: place_tagsUpdateManyWithoutPlaceNestedInput
  }

  export type placesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
    place_tags?: place_tagsUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type placesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    maps_url?: StringFieldUpdateOperationsInput | string
    review_value?: FloatFieldUpdateOperationsInput | number
    review_amount?: IntFieldUpdateOperationsInput | number
    total_up_votes?: IntFieldUpdateOperationsInput | number
    total_down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type tagsUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    place_tags?: place_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    place_tags?: place_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type votesUpdateWithoutUserInput = {
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    place_tags?: place_tagsUpdateOneRequiredWithoutVotesNestedInput
  }

  export type votesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    place_tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type votesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    place_tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type place_tagsCreateManyPlaceInput = {
    id?: number
    tag_id: number
    up_votes?: number
    down_votes?: number
  }

  export type place_tagsUpdateWithoutPlaceInput = {
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    tag?: tagsUpdateOneRequiredWithoutPlace_tagsNestedInput
    votes?: votesUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    votes?: votesUncheckedUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type place_tagsCreateManyTagInput = {
    id?: number
    place_id: number
    up_votes?: number
    down_votes?: number
  }

  export type place_tagsUpdateWithoutTagInput = {
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    place?: placesUpdateOneRequiredWithoutPlace_tagsNestedInput
    votes?: votesUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
    votes?: votesUncheckedUpdateManyWithoutPlace_tagsNestedInput
  }

  export type place_tagsUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    place_id?: IntFieldUpdateOperationsInput | number
    up_votes?: IntFieldUpdateOperationsInput | number
    down_votes?: IntFieldUpdateOperationsInput | number
  }

  export type votesCreateManyPlace_tagsInput = {
    id?: number
    vote_type: $Enums.vote_type
    voted_by_id: number
  }

  export type votesUpdateWithoutPlace_tagsInput = {
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    user?: usersUpdateOneRequiredWithoutVotesNestedInput
  }

  export type votesUncheckedUpdateWithoutPlace_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    voted_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type votesUncheckedUpdateManyWithoutPlace_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vote_type?: Enumvote_typeFieldUpdateOperationsInput | $Enums.vote_type
    voted_by_id?: IntFieldUpdateOperationsInput | number
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