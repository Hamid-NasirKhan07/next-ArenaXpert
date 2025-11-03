
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model Arena
 * 
 */
export type Arena = $Result.DefaultSelection<Prisma.$ArenaPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model OwnerProfile
 * 
 */
export type OwnerProfile = $Result.DefaultSelection<Prisma.$OwnerProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arena`: Exposes CRUD operations for the **Arena** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arenas
    * const arenas = await prisma.arena.findMany()
    * ```
    */
  get arena(): Prisma.ArenaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownerProfile`: Exposes CRUD operations for the **OwnerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnerProfiles
    * const ownerProfiles = await prisma.ownerProfile.findMany()
    * ```
    */
  get ownerProfile(): Prisma.OwnerProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    User: 'User',
    Players: 'Players',
    Arena: 'Arena',
    Contact: 'Contact',
    OwnerProfile: 'OwnerProfile'
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
      modelProps: "user" | "players" | "arena" | "contact" | "ownerProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      Arena: {
        payload: Prisma.$ArenaPayload<ExtArgs>
        fields: Prisma.ArenaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArenaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArenaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          findFirst: {
            args: Prisma.ArenaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArenaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          findMany: {
            args: Prisma.ArenaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          create: {
            args: Prisma.ArenaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          createMany: {
            args: Prisma.ArenaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArenaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          delete: {
            args: Prisma.ArenaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          update: {
            args: Prisma.ArenaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          deleteMany: {
            args: Prisma.ArenaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArenaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArenaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          upsert: {
            args: Prisma.ArenaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          aggregate: {
            args: Prisma.ArenaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArena>
          }
          groupBy: {
            args: Prisma.ArenaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArenaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArenaCountArgs<ExtArgs>
            result: $Utils.Optional<ArenaCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      OwnerProfile: {
        payload: Prisma.$OwnerProfilePayload<ExtArgs>
        fields: Prisma.OwnerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          findFirst: {
            args: Prisma.OwnerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          findMany: {
            args: Prisma.OwnerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          create: {
            args: Prisma.OwnerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          createMany: {
            args: Prisma.OwnerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          delete: {
            args: Prisma.OwnerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          update: {
            args: Prisma.OwnerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          deleteMany: {
            args: Prisma.OwnerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          upsert: {
            args: Prisma.OwnerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          aggregate: {
            args: Prisma.OwnerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnerProfile>
          }
          groupBy: {
            args: Prisma.OwnerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerProfileCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    players?: PlayersOmit
    arena?: ArenaOmit
    contact?: ContactOmit
    ownerProfile?: OwnerProfileOmit
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
   * Count Type OwnerProfileCountOutputType
   */

  export type OwnerProfileCountOutputType = {
    arenas: number
  }

  export type OwnerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arenas?: boolean | OwnerProfileCountOutputTypeCountArenasArgs
  }

  // Custom InputTypes
  /**
   * OwnerProfileCountOutputType without action
   */
  export type OwnerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfileCountOutputType
     */
    select?: OwnerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerProfileCountOutputType without action
   */
  export type OwnerProfileCountOutputTypeCountArenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    phone: string | null
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phone: string | null
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersMinAggregateOutputType = {
    id: string | null
    email: string | null
    sport: string | null
    displayName: string | null
    speciality: string | null
    description: string | null
    contactNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    sport: string | null
    displayName: string | null
    speciality: string | null
    description: string | null
    contactNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    email: number
    sport: number
    displayName: number
    speciality: number
    description: number
    contactNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayersMinAggregateInputType = {
    id?: true
    email?: true
    sport?: true
    displayName?: true
    speciality?: true
    description?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    email?: true
    sport?: true
    displayName?: true
    speciality?: true
    description?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    email?: true
    sport?: true
    displayName?: true
    speciality?: true
    description?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: string
    email: string
    sport: string | null
    displayName: string | null
    speciality: string | null
    description: string | null
    contactNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sport?: boolean
    displayName?: boolean
    speciality?: boolean
    description?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sport?: boolean
    displayName?: boolean
    speciality?: boolean
    description?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sport?: boolean
    displayName?: boolean
    speciality?: boolean
    description?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    id?: boolean
    email?: boolean
    sport?: boolean
    displayName?: boolean
    speciality?: boolean
    description?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "sport" | "displayName" | "speciality" | "description" | "contactNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["players"]>

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      sport: string | null
      displayName: string | null
      speciality: string | null
      description: string | null
      contactNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
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
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Players model
   */
  interface PlayersFieldRefs {
    readonly id: FieldRef<"Players", 'String'>
    readonly email: FieldRef<"Players", 'String'>
    readonly sport: FieldRef<"Players", 'String'>
    readonly displayName: FieldRef<"Players", 'String'>
    readonly speciality: FieldRef<"Players", 'String'>
    readonly description: FieldRef<"Players", 'String'>
    readonly contactNumber: FieldRef<"Players", 'String'>
    readonly createdAt: FieldRef<"Players", 'DateTime'>
    readonly updatedAt: FieldRef<"Players", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players createManyAndReturn
   */
  export type PlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players updateManyAndReturn
   */
  export type PlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
  }


  /**
   * Model Arena
   */

  export type AggregateArena = {
    _count: ArenaCountAggregateOutputType | null
    _min: ArenaMinAggregateOutputType | null
    _max: ArenaMaxAggregateOutputType | null
  }

  export type ArenaMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    sport: string | null
    ownerProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArenaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    sport: string | null
    ownerProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArenaCountAggregateOutputType = {
    id: number
    name: number
    location: number
    sport: number
    arenaDetails: number
    ownerProfileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArenaMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    sport?: true
    ownerProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArenaMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    sport?: true
    ownerProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArenaCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    sport?: true
    arenaDetails?: true
    ownerProfileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArenaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arena to aggregate.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arenas
    **/
    _count?: true | ArenaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArenaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArenaMaxAggregateInputType
  }

  export type GetArenaAggregateType<T extends ArenaAggregateArgs> = {
        [P in keyof T & keyof AggregateArena]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArena[P]>
      : GetScalarType<T[P], AggregateArena[P]>
  }




  export type ArenaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaWhereInput
    orderBy?: ArenaOrderByWithAggregationInput | ArenaOrderByWithAggregationInput[]
    by: ArenaScalarFieldEnum[] | ArenaScalarFieldEnum
    having?: ArenaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArenaCountAggregateInputType | true
    _min?: ArenaMinAggregateInputType
    _max?: ArenaMaxAggregateInputType
  }

  export type ArenaGroupByOutputType = {
    id: string
    name: string | null
    location: string | null
    sport: string | null
    arenaDetails: JsonValue | null
    ownerProfileId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArenaCountAggregateOutputType | null
    _min: ArenaMinAggregateOutputType | null
    _max: ArenaMaxAggregateOutputType | null
  }

  type GetArenaGroupByPayload<T extends ArenaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArenaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArenaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArenaGroupByOutputType[P]>
            : GetScalarType<T[P], ArenaGroupByOutputType[P]>
        }
      >
    >


  export type ArenaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    sport?: boolean
    arenaDetails?: boolean
    ownerProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    sport?: boolean
    arenaDetails?: boolean
    ownerProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    sport?: boolean
    arenaDetails?: boolean
    ownerProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    sport?: boolean
    arenaDetails?: boolean
    ownerProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArenaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "sport" | "arenaDetails" | "ownerProfileId" | "createdAt" | "updatedAt", ExtArgs["result"]["arena"]>
  export type ArenaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }
  export type ArenaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }
  export type ArenaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Arena$ownerProfileArgs<ExtArgs>
  }

  export type $ArenaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arena"
    objects: {
      ownerProfile: Prisma.$OwnerProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      location: string | null
      sport: string | null
      arenaDetails: Prisma.JsonValue | null
      ownerProfileId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["arena"]>
    composites: {}
  }

  type ArenaGetPayload<S extends boolean | null | undefined | ArenaDefaultArgs> = $Result.GetResult<Prisma.$ArenaPayload, S>

  type ArenaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArenaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArenaCountAggregateInputType | true
    }

  export interface ArenaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arena'], meta: { name: 'Arena' } }
    /**
     * Find zero or one Arena that matches the filter.
     * @param {ArenaFindUniqueArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArenaFindUniqueArgs>(args: SelectSubset<T, ArenaFindUniqueArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arena that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArenaFindUniqueOrThrowArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArenaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArenaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arena that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindFirstArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArenaFindFirstArgs>(args?: SelectSubset<T, ArenaFindFirstArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arena that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindFirstOrThrowArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArenaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArenaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arenas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arenas
     * const arenas = await prisma.arena.findMany()
     * 
     * // Get first 10 Arenas
     * const arenas = await prisma.arena.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arenaWithIdOnly = await prisma.arena.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArenaFindManyArgs>(args?: SelectSubset<T, ArenaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arena.
     * @param {ArenaCreateArgs} args - Arguments to create a Arena.
     * @example
     * // Create one Arena
     * const Arena = await prisma.arena.create({
     *   data: {
     *     // ... data to create a Arena
     *   }
     * })
     * 
     */
    create<T extends ArenaCreateArgs>(args: SelectSubset<T, ArenaCreateArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arenas.
     * @param {ArenaCreateManyArgs} args - Arguments to create many Arenas.
     * @example
     * // Create many Arenas
     * const arena = await prisma.arena.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArenaCreateManyArgs>(args?: SelectSubset<T, ArenaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arenas and returns the data saved in the database.
     * @param {ArenaCreateManyAndReturnArgs} args - Arguments to create many Arenas.
     * @example
     * // Create many Arenas
     * const arena = await prisma.arena.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arenas and only return the `id`
     * const arenaWithIdOnly = await prisma.arena.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArenaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArenaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arena.
     * @param {ArenaDeleteArgs} args - Arguments to delete one Arena.
     * @example
     * // Delete one Arena
     * const Arena = await prisma.arena.delete({
     *   where: {
     *     // ... filter to delete one Arena
     *   }
     * })
     * 
     */
    delete<T extends ArenaDeleteArgs>(args: SelectSubset<T, ArenaDeleteArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arena.
     * @param {ArenaUpdateArgs} args - Arguments to update one Arena.
     * @example
     * // Update one Arena
     * const arena = await prisma.arena.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArenaUpdateArgs>(args: SelectSubset<T, ArenaUpdateArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arenas.
     * @param {ArenaDeleteManyArgs} args - Arguments to filter Arenas to delete.
     * @example
     * // Delete a few Arenas
     * const { count } = await prisma.arena.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArenaDeleteManyArgs>(args?: SelectSubset<T, ArenaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arenas
     * const arena = await prisma.arena.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArenaUpdateManyArgs>(args: SelectSubset<T, ArenaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arenas and returns the data updated in the database.
     * @param {ArenaUpdateManyAndReturnArgs} args - Arguments to update many Arenas.
     * @example
     * // Update many Arenas
     * const arena = await prisma.arena.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arenas and only return the `id`
     * const arenaWithIdOnly = await prisma.arena.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArenaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArenaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arena.
     * @param {ArenaUpsertArgs} args - Arguments to update or create a Arena.
     * @example
     * // Update or create a Arena
     * const arena = await prisma.arena.upsert({
     *   create: {
     *     // ... data to create a Arena
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arena we want to update
     *   }
     * })
     */
    upsert<T extends ArenaUpsertArgs>(args: SelectSubset<T, ArenaUpsertArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaCountArgs} args - Arguments to filter Arenas to count.
     * @example
     * // Count the number of Arenas
     * const count = await prisma.arena.count({
     *   where: {
     *     // ... the filter for the Arenas we want to count
     *   }
     * })
    **/
    count<T extends ArenaCountArgs>(
      args?: Subset<T, ArenaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArenaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArenaAggregateArgs>(args: Subset<T, ArenaAggregateArgs>): Prisma.PrismaPromise<GetArenaAggregateType<T>>

    /**
     * Group by Arena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaGroupByArgs} args - Group by arguments.
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
      T extends ArenaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArenaGroupByArgs['orderBy'] }
        : { orderBy?: ArenaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArenaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArenaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arena model
   */
  readonly fields: ArenaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arena.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArenaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownerProfile<T extends Arena$ownerProfileArgs<ExtArgs> = {}>(args?: Subset<T, Arena$ownerProfileArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Arena model
   */
  interface ArenaFieldRefs {
    readonly id: FieldRef<"Arena", 'String'>
    readonly name: FieldRef<"Arena", 'String'>
    readonly location: FieldRef<"Arena", 'String'>
    readonly sport: FieldRef<"Arena", 'String'>
    readonly arenaDetails: FieldRef<"Arena", 'Json'>
    readonly ownerProfileId: FieldRef<"Arena", 'String'>
    readonly createdAt: FieldRef<"Arena", 'DateTime'>
    readonly updatedAt: FieldRef<"Arena", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Arena findUnique
   */
  export type ArenaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena findUniqueOrThrow
   */
  export type ArenaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena findFirst
   */
  export type ArenaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arenas.
     */
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena findFirstOrThrow
   */
  export type ArenaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arenas.
     */
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena findMany
   */
  export type ArenaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arenas to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena create
   */
  export type ArenaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The data needed to create a Arena.
     */
    data: XOR<ArenaCreateInput, ArenaUncheckedCreateInput>
  }

  /**
   * Arena createMany
   */
  export type ArenaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arenas.
     */
    data: ArenaCreateManyInput | ArenaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arena createManyAndReturn
   */
  export type ArenaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * The data used to create many Arenas.
     */
    data: ArenaCreateManyInput | ArenaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arena update
   */
  export type ArenaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The data needed to update a Arena.
     */
    data: XOR<ArenaUpdateInput, ArenaUncheckedUpdateInput>
    /**
     * Choose, which Arena to update.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena updateMany
   */
  export type ArenaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arenas.
     */
    data: XOR<ArenaUpdateManyMutationInput, ArenaUncheckedUpdateManyInput>
    /**
     * Filter which Arenas to update
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to update.
     */
    limit?: number
  }

  /**
   * Arena updateManyAndReturn
   */
  export type ArenaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * The data used to update Arenas.
     */
    data: XOR<ArenaUpdateManyMutationInput, ArenaUncheckedUpdateManyInput>
    /**
     * Filter which Arenas to update
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arena upsert
   */
  export type ArenaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The filter to search for the Arena to update in case it exists.
     */
    where: ArenaWhereUniqueInput
    /**
     * In case the Arena found by the `where` argument doesn't exist, create a new Arena with this data.
     */
    create: XOR<ArenaCreateInput, ArenaUncheckedCreateInput>
    /**
     * In case the Arena was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArenaUpdateInput, ArenaUncheckedUpdateInput>
  }

  /**
   * Arena delete
   */
  export type ArenaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter which Arena to delete.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena deleteMany
   */
  export type ArenaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arenas to delete
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to delete.
     */
    limit?: number
  }

  /**
   * Arena.ownerProfile
   */
  export type Arena$ownerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    where?: OwnerProfileWhereInput
  }

  /**
   * Arena without action
   */
  export type ArenaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    message: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      message: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly status: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model OwnerProfile
   */

  export type AggregateOwnerProfile = {
    _count: OwnerProfileCountAggregateOutputType | null
    _min: OwnerProfileMinAggregateOutputType | null
    _max: OwnerProfileMaxAggregateOutputType | null
  }

  export type OwnerProfileMinAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    phone: string | null
    province: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerProfileMaxAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    phone: string | null
    province: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerProfileCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    firstName: number
    lastName: number
    username: number
    phone: number
    province: number
    city: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OwnerProfileMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    province?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerProfileMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    province?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerProfileCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    province?: true
    city?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OwnerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerProfile to aggregate.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnerProfiles
    **/
    _count?: true | OwnerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerProfileMaxAggregateInputType
  }

  export type GetOwnerProfileAggregateType<T extends OwnerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnerProfile[P]>
      : GetScalarType<T[P], AggregateOwnerProfile[P]>
  }




  export type OwnerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerProfileWhereInput
    orderBy?: OwnerProfileOrderByWithAggregationInput | OwnerProfileOrderByWithAggregationInput[]
    by: OwnerProfileScalarFieldEnum[] | OwnerProfileScalarFieldEnum
    having?: OwnerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerProfileCountAggregateInputType | true
    _min?: OwnerProfileMinAggregateInputType
    _max?: OwnerProfileMaxAggregateInputType
  }

  export type OwnerProfileGroupByOutputType = {
    id: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt: Date
    updatedAt: Date
    _count: OwnerProfileCountAggregateOutputType | null
    _min: OwnerProfileMinAggregateOutputType | null
    _max: OwnerProfileMaxAggregateOutputType | null
  }

  type GetOwnerProfileGroupByPayload<T extends OwnerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerProfileGroupByOutputType[P]>
        }
      >
    >


  export type OwnerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    arenas?: boolean | OwnerProfile$arenasArgs<ExtArgs>
    _count?: boolean | OwnerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    province?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OwnerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "firstName" | "lastName" | "username" | "phone" | "province" | "city" | "createdAt" | "updatedAt", ExtArgs["result"]["ownerProfile"]>
  export type OwnerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arenas?: boolean | OwnerProfile$arenasArgs<ExtArgs>
    _count?: boolean | OwnerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnerProfile"
    objects: {
      arenas: Prisma.$ArenaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseUserId: string
      firstName: string
      lastName: string
      username: string
      phone: string
      province: string
      city: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ownerProfile"]>
    composites: {}
  }

  type OwnerProfileGetPayload<S extends boolean | null | undefined | OwnerProfileDefaultArgs> = $Result.GetResult<Prisma.$OwnerProfilePayload, S>

  type OwnerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerProfileCountAggregateInputType | true
    }

  export interface OwnerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnerProfile'], meta: { name: 'OwnerProfile' } }
    /**
     * Find zero or one OwnerProfile that matches the filter.
     * @param {OwnerProfileFindUniqueArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerProfileFindUniqueArgs>(args: SelectSubset<T, OwnerProfileFindUniqueArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerProfileFindUniqueOrThrowArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindFirstArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerProfileFindFirstArgs>(args?: SelectSubset<T, OwnerProfileFindFirstArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindFirstOrThrowArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnerProfiles
     * const ownerProfiles = await prisma.ownerProfile.findMany()
     * 
     * // Get first 10 OwnerProfiles
     * const ownerProfiles = await prisma.ownerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerProfileFindManyArgs>(args?: SelectSubset<T, OwnerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnerProfile.
     * @param {OwnerProfileCreateArgs} args - Arguments to create a OwnerProfile.
     * @example
     * // Create one OwnerProfile
     * const OwnerProfile = await prisma.ownerProfile.create({
     *   data: {
     *     // ... data to create a OwnerProfile
     *   }
     * })
     * 
     */
    create<T extends OwnerProfileCreateArgs>(args: SelectSubset<T, OwnerProfileCreateArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnerProfiles.
     * @param {OwnerProfileCreateManyArgs} args - Arguments to create many OwnerProfiles.
     * @example
     * // Create many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerProfileCreateManyArgs>(args?: SelectSubset<T, OwnerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnerProfiles and returns the data saved in the database.
     * @param {OwnerProfileCreateManyAndReturnArgs} args - Arguments to create many OwnerProfiles.
     * @example
     * // Create many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnerProfiles and only return the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnerProfile.
     * @param {OwnerProfileDeleteArgs} args - Arguments to delete one OwnerProfile.
     * @example
     * // Delete one OwnerProfile
     * const OwnerProfile = await prisma.ownerProfile.delete({
     *   where: {
     *     // ... filter to delete one OwnerProfile
     *   }
     * })
     * 
     */
    delete<T extends OwnerProfileDeleteArgs>(args: SelectSubset<T, OwnerProfileDeleteArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnerProfile.
     * @param {OwnerProfileUpdateArgs} args - Arguments to update one OwnerProfile.
     * @example
     * // Update one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerProfileUpdateArgs>(args: SelectSubset<T, OwnerProfileUpdateArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnerProfiles.
     * @param {OwnerProfileDeleteManyArgs} args - Arguments to filter OwnerProfiles to delete.
     * @example
     * // Delete a few OwnerProfiles
     * const { count } = await prisma.ownerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerProfileDeleteManyArgs>(args?: SelectSubset<T, OwnerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerProfileUpdateManyArgs>(args: SelectSubset<T, OwnerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerProfiles and returns the data updated in the database.
     * @param {OwnerProfileUpdateManyAndReturnArgs} args - Arguments to update many OwnerProfiles.
     * @example
     * // Update many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnerProfiles and only return the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnerProfile.
     * @param {OwnerProfileUpsertArgs} args - Arguments to update or create a OwnerProfile.
     * @example
     * // Update or create a OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.upsert({
     *   create: {
     *     // ... data to create a OwnerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnerProfile we want to update
     *   }
     * })
     */
    upsert<T extends OwnerProfileUpsertArgs>(args: SelectSubset<T, OwnerProfileUpsertArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileCountArgs} args - Arguments to filter OwnerProfiles to count.
     * @example
     * // Count the number of OwnerProfiles
     * const count = await prisma.ownerProfile.count({
     *   where: {
     *     // ... the filter for the OwnerProfiles we want to count
     *   }
     * })
    **/
    count<T extends OwnerProfileCountArgs>(
      args?: Subset<T, OwnerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerProfileAggregateArgs>(args: Subset<T, OwnerProfileAggregateArgs>): Prisma.PrismaPromise<GetOwnerProfileAggregateType<T>>

    /**
     * Group by OwnerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileGroupByArgs} args - Group by arguments.
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
      T extends OwnerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerProfileGroupByArgs['orderBy'] }
        : { orderBy?: OwnerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnerProfile model
   */
  readonly fields: OwnerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arenas<T extends OwnerProfile$arenasArgs<ExtArgs> = {}>(args?: Subset<T, OwnerProfile$arenasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OwnerProfile model
   */
  interface OwnerProfileFieldRefs {
    readonly id: FieldRef<"OwnerProfile", 'String'>
    readonly supabaseUserId: FieldRef<"OwnerProfile", 'String'>
    readonly firstName: FieldRef<"OwnerProfile", 'String'>
    readonly lastName: FieldRef<"OwnerProfile", 'String'>
    readonly username: FieldRef<"OwnerProfile", 'String'>
    readonly phone: FieldRef<"OwnerProfile", 'String'>
    readonly province: FieldRef<"OwnerProfile", 'String'>
    readonly city: FieldRef<"OwnerProfile", 'String'>
    readonly createdAt: FieldRef<"OwnerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"OwnerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OwnerProfile findUnique
   */
  export type OwnerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile findUniqueOrThrow
   */
  export type OwnerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile findFirst
   */
  export type OwnerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerProfiles.
     */
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile findFirstOrThrow
   */
  export type OwnerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerProfiles.
     */
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile findMany
   */
  export type OwnerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfiles to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile create
   */
  export type OwnerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnerProfile.
     */
    data: XOR<OwnerProfileCreateInput, OwnerProfileUncheckedCreateInput>
  }

  /**
   * OwnerProfile createMany
   */
  export type OwnerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnerProfiles.
     */
    data: OwnerProfileCreateManyInput | OwnerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerProfile createManyAndReturn
   */
  export type OwnerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many OwnerProfiles.
     */
    data: OwnerProfileCreateManyInput | OwnerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerProfile update
   */
  export type OwnerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnerProfile.
     */
    data: XOR<OwnerProfileUpdateInput, OwnerProfileUncheckedUpdateInput>
    /**
     * Choose, which OwnerProfile to update.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile updateMany
   */
  export type OwnerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnerProfiles.
     */
    data: XOR<OwnerProfileUpdateManyMutationInput, OwnerProfileUncheckedUpdateManyInput>
    /**
     * Filter which OwnerProfiles to update
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to update.
     */
    limit?: number
  }

  /**
   * OwnerProfile updateManyAndReturn
   */
  export type OwnerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * The data used to update OwnerProfiles.
     */
    data: XOR<OwnerProfileUpdateManyMutationInput, OwnerProfileUncheckedUpdateManyInput>
    /**
     * Filter which OwnerProfiles to update
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to update.
     */
    limit?: number
  }

  /**
   * OwnerProfile upsert
   */
  export type OwnerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnerProfile to update in case it exists.
     */
    where: OwnerProfileWhereUniqueInput
    /**
     * In case the OwnerProfile found by the `where` argument doesn't exist, create a new OwnerProfile with this data.
     */
    create: XOR<OwnerProfileCreateInput, OwnerProfileUncheckedCreateInput>
    /**
     * In case the OwnerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerProfileUpdateInput, OwnerProfileUncheckedUpdateInput>
  }

  /**
   * OwnerProfile delete
   */
  export type OwnerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter which OwnerProfile to delete.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile deleteMany
   */
  export type OwnerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerProfiles to delete
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to delete.
     */
    limit?: number
  }

  /**
   * OwnerProfile.arenas
   */
  export type OwnerProfile$arenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    where?: ArenaWhereInput
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    cursor?: ArenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * OwnerProfile without action
   */
  export type OwnerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    sport: 'sport',
    displayName: 'displayName',
    speciality: 'speciality',
    description: 'description',
    contactNumber: 'contactNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const ArenaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    sport: 'sport',
    arenaDetails: 'arenaDetails',
    ownerProfileId: 'ownerProfileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArenaScalarFieldEnum = (typeof ArenaScalarFieldEnum)[keyof typeof ArenaScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const OwnerProfileScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    phone: 'phone',
    province: 'province',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OwnerProfileScalarFieldEnum = (typeof OwnerProfileScalarFieldEnum)[keyof typeof OwnerProfileScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    id?: StringFilter<"Players"> | string
    email?: StringFilter<"Players"> | string
    sport?: StringNullableFilter<"Players"> | string | null
    displayName?: StringNullableFilter<"Players"> | string | null
    speciality?: StringNullableFilter<"Players"> | string | null
    description?: StringNullableFilter<"Players"> | string | null
    contactNumber?: StringNullableFilter<"Players"> | string | null
    createdAt?: DateTimeFilter<"Players"> | Date | string
    updatedAt?: DateTimeFilter<"Players"> | Date | string
  }

  export type PlayersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    sport?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    speciality?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    sport?: StringNullableFilter<"Players"> | string | null
    displayName?: StringNullableFilter<"Players"> | string | null
    speciality?: StringNullableFilter<"Players"> | string | null
    description?: StringNullableFilter<"Players"> | string | null
    contactNumber?: StringNullableFilter<"Players"> | string | null
    createdAt?: DateTimeFilter<"Players"> | Date | string
    updatedAt?: DateTimeFilter<"Players"> | Date | string
  }, "id" | "email">

  export type PlayersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    sport?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    speciality?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Players"> | string
    email?: StringWithAggregatesFilter<"Players"> | string
    sport?: StringNullableWithAggregatesFilter<"Players"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"Players"> | string | null
    speciality?: StringNullableWithAggregatesFilter<"Players"> | string | null
    description?: StringNullableWithAggregatesFilter<"Players"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Players"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Players"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Players"> | Date | string
  }

  export type ArenaWhereInput = {
    AND?: ArenaWhereInput | ArenaWhereInput[]
    OR?: ArenaWhereInput[]
    NOT?: ArenaWhereInput | ArenaWhereInput[]
    id?: StringFilter<"Arena"> | string
    name?: StringNullableFilter<"Arena"> | string | null
    location?: StringNullableFilter<"Arena"> | string | null
    sport?: StringNullableFilter<"Arena"> | string | null
    arenaDetails?: JsonNullableFilter<"Arena">
    ownerProfileId?: StringNullableFilter<"Arena"> | string | null
    createdAt?: DateTimeFilter<"Arena"> | Date | string
    updatedAt?: DateTimeFilter<"Arena"> | Date | string
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
  }

  export type ArenaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    sport?: SortOrderInput | SortOrder
    arenaDetails?: SortOrderInput | SortOrder
    ownerProfileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerProfile?: OwnerProfileOrderByWithRelationInput
  }

  export type ArenaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArenaWhereInput | ArenaWhereInput[]
    OR?: ArenaWhereInput[]
    NOT?: ArenaWhereInput | ArenaWhereInput[]
    name?: StringNullableFilter<"Arena"> | string | null
    location?: StringNullableFilter<"Arena"> | string | null
    sport?: StringNullableFilter<"Arena"> | string | null
    arenaDetails?: JsonNullableFilter<"Arena">
    ownerProfileId?: StringNullableFilter<"Arena"> | string | null
    createdAt?: DateTimeFilter<"Arena"> | Date | string
    updatedAt?: DateTimeFilter<"Arena"> | Date | string
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
  }, "id">

  export type ArenaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    sport?: SortOrderInput | SortOrder
    arenaDetails?: SortOrderInput | SortOrder
    ownerProfileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArenaCountOrderByAggregateInput
    _max?: ArenaMaxOrderByAggregateInput
    _min?: ArenaMinOrderByAggregateInput
  }

  export type ArenaScalarWhereWithAggregatesInput = {
    AND?: ArenaScalarWhereWithAggregatesInput | ArenaScalarWhereWithAggregatesInput[]
    OR?: ArenaScalarWhereWithAggregatesInput[]
    NOT?: ArenaScalarWhereWithAggregatesInput | ArenaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arena"> | string
    name?: StringNullableWithAggregatesFilter<"Arena"> | string | null
    location?: StringNullableWithAggregatesFilter<"Arena"> | string | null
    sport?: StringNullableWithAggregatesFilter<"Arena"> | string | null
    arenaDetails?: JsonNullableWithAggregatesFilter<"Arena">
    ownerProfileId?: StringNullableWithAggregatesFilter<"Arena"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Arena"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Arena"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    status?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type OwnerProfileWhereInput = {
    AND?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    OR?: OwnerProfileWhereInput[]
    NOT?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    id?: StringFilter<"OwnerProfile"> | string
    supabaseUserId?: StringFilter<"OwnerProfile"> | string
    firstName?: StringFilter<"OwnerProfile"> | string
    lastName?: StringFilter<"OwnerProfile"> | string
    username?: StringFilter<"OwnerProfile"> | string
    phone?: StringFilter<"OwnerProfile"> | string
    province?: StringFilter<"OwnerProfile"> | string
    city?: StringFilter<"OwnerProfile"> | string
    createdAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    arenas?: ArenaListRelationFilter
  }

  export type OwnerProfileOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    arenas?: ArenaOrderByRelationAggregateInput
  }

  export type OwnerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseUserId?: string
    username?: string
    AND?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    OR?: OwnerProfileWhereInput[]
    NOT?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    firstName?: StringFilter<"OwnerProfile"> | string
    lastName?: StringFilter<"OwnerProfile"> | string
    phone?: StringFilter<"OwnerProfile"> | string
    province?: StringFilter<"OwnerProfile"> | string
    city?: StringFilter<"OwnerProfile"> | string
    createdAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    arenas?: ArenaListRelationFilter
  }, "id" | "supabaseUserId" | "username">

  export type OwnerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OwnerProfileCountOrderByAggregateInput
    _max?: OwnerProfileMaxOrderByAggregateInput
    _min?: OwnerProfileMinOrderByAggregateInput
  }

  export type OwnerProfileScalarWhereWithAggregatesInput = {
    AND?: OwnerProfileScalarWhereWithAggregatesInput | OwnerProfileScalarWhereWithAggregatesInput[]
    OR?: OwnerProfileScalarWhereWithAggregatesInput[]
    NOT?: OwnerProfileScalarWhereWithAggregatesInput | OwnerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OwnerProfile"> | string
    supabaseUserId?: StringWithAggregatesFilter<"OwnerProfile"> | string
    firstName?: StringWithAggregatesFilter<"OwnerProfile"> | string
    lastName?: StringWithAggregatesFilter<"OwnerProfile"> | string
    username?: StringWithAggregatesFilter<"OwnerProfile"> | string
    phone?: StringWithAggregatesFilter<"OwnerProfile"> | string
    province?: StringWithAggregatesFilter<"OwnerProfile"> | string
    city?: StringWithAggregatesFilter<"OwnerProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OwnerProfile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersCreateInput = {
    id?: string
    email: string
    sport?: string | null
    displayName?: string | null
    speciality?: string | null
    description?: string | null
    contactNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUncheckedCreateInput = {
    id?: string
    email: string
    sport?: string | null
    displayName?: string | null
    speciality?: string | null
    description?: string | null
    contactNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersCreateManyInput = {
    id?: string
    email: string
    sport?: string | null
    displayName?: string | null
    speciality?: string | null
    description?: string | null
    contactNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutArenasInput
  }

  export type ArenaUncheckedCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    ownerProfileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArenaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutArenasNestedInput
  }

  export type ArenaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    ownerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaCreateManyInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    ownerProfileId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArenaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    ownerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerProfileCreateInput = {
    id?: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
    arenas?: ArenaCreateNestedManyWithoutOwnerProfileInput
  }

  export type OwnerProfileUncheckedCreateInput = {
    id?: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
    arenas?: ArenaUncheckedCreateNestedManyWithoutOwnerProfileInput
  }

  export type OwnerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arenas?: ArenaUpdateManyWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arenas?: ArenaUncheckedUpdateManyWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileCreateManyInput = {
    id?: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PlayersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sport?: SortOrder
    displayName?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sport?: SortOrder
    displayName?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sport?: SortOrder
    displayName?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type OwnerProfileNullableScalarRelationFilter = {
    is?: OwnerProfileWhereInput | null
    isNot?: OwnerProfileWhereInput | null
  }

  export type ArenaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    sport?: SortOrder
    arenaDetails?: SortOrder
    ownerProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArenaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    sport?: SortOrder
    ownerProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArenaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    sport?: SortOrder
    ownerProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArenaListRelationFilter = {
    every?: ArenaWhereInput
    some?: ArenaWhereInput
    none?: ArenaWhereInput
  }

  export type ArenaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OwnerProfileCreateNestedOneWithoutArenasInput = {
    create?: XOR<OwnerProfileCreateWithoutArenasInput, OwnerProfileUncheckedCreateWithoutArenasInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutArenasInput
    connect?: OwnerProfileWhereUniqueInput
  }

  export type OwnerProfileUpdateOneWithoutArenasNestedInput = {
    create?: XOR<OwnerProfileCreateWithoutArenasInput, OwnerProfileUncheckedCreateWithoutArenasInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutArenasInput
    upsert?: OwnerProfileUpsertWithoutArenasInput
    disconnect?: OwnerProfileWhereInput | boolean
    delete?: OwnerProfileWhereInput | boolean
    connect?: OwnerProfileWhereUniqueInput
    update?: XOR<XOR<OwnerProfileUpdateToOneWithWhereWithoutArenasInput, OwnerProfileUpdateWithoutArenasInput>, OwnerProfileUncheckedUpdateWithoutArenasInput>
  }

  export type ArenaCreateNestedManyWithoutOwnerProfileInput = {
    create?: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput> | ArenaCreateWithoutOwnerProfileInput[] | ArenaUncheckedCreateWithoutOwnerProfileInput[]
    connectOrCreate?: ArenaCreateOrConnectWithoutOwnerProfileInput | ArenaCreateOrConnectWithoutOwnerProfileInput[]
    createMany?: ArenaCreateManyOwnerProfileInputEnvelope
    connect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
  }

  export type ArenaUncheckedCreateNestedManyWithoutOwnerProfileInput = {
    create?: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput> | ArenaCreateWithoutOwnerProfileInput[] | ArenaUncheckedCreateWithoutOwnerProfileInput[]
    connectOrCreate?: ArenaCreateOrConnectWithoutOwnerProfileInput | ArenaCreateOrConnectWithoutOwnerProfileInput[]
    createMany?: ArenaCreateManyOwnerProfileInputEnvelope
    connect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
  }

  export type ArenaUpdateManyWithoutOwnerProfileNestedInput = {
    create?: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput> | ArenaCreateWithoutOwnerProfileInput[] | ArenaUncheckedCreateWithoutOwnerProfileInput[]
    connectOrCreate?: ArenaCreateOrConnectWithoutOwnerProfileInput | ArenaCreateOrConnectWithoutOwnerProfileInput[]
    upsert?: ArenaUpsertWithWhereUniqueWithoutOwnerProfileInput | ArenaUpsertWithWhereUniqueWithoutOwnerProfileInput[]
    createMany?: ArenaCreateManyOwnerProfileInputEnvelope
    set?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    disconnect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    delete?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    connect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    update?: ArenaUpdateWithWhereUniqueWithoutOwnerProfileInput | ArenaUpdateWithWhereUniqueWithoutOwnerProfileInput[]
    updateMany?: ArenaUpdateManyWithWhereWithoutOwnerProfileInput | ArenaUpdateManyWithWhereWithoutOwnerProfileInput[]
    deleteMany?: ArenaScalarWhereInput | ArenaScalarWhereInput[]
  }

  export type ArenaUncheckedUpdateManyWithoutOwnerProfileNestedInput = {
    create?: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput> | ArenaCreateWithoutOwnerProfileInput[] | ArenaUncheckedCreateWithoutOwnerProfileInput[]
    connectOrCreate?: ArenaCreateOrConnectWithoutOwnerProfileInput | ArenaCreateOrConnectWithoutOwnerProfileInput[]
    upsert?: ArenaUpsertWithWhereUniqueWithoutOwnerProfileInput | ArenaUpsertWithWhereUniqueWithoutOwnerProfileInput[]
    createMany?: ArenaCreateManyOwnerProfileInputEnvelope
    set?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    disconnect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    delete?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    connect?: ArenaWhereUniqueInput | ArenaWhereUniqueInput[]
    update?: ArenaUpdateWithWhereUniqueWithoutOwnerProfileInput | ArenaUpdateWithWhereUniqueWithoutOwnerProfileInput[]
    updateMany?: ArenaUpdateManyWithWhereWithoutOwnerProfileInput | ArenaUpdateManyWithWhereWithoutOwnerProfileInput[]
    deleteMany?: ArenaScalarWhereInput | ArenaScalarWhereInput[]
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

  export type OwnerProfileCreateWithoutArenasInput = {
    id?: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerProfileUncheckedCreateWithoutArenasInput = {
    id?: string
    supabaseUserId: string
    firstName: string
    lastName: string
    username: string
    phone: string
    province: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerProfileCreateOrConnectWithoutArenasInput = {
    where: OwnerProfileWhereUniqueInput
    create: XOR<OwnerProfileCreateWithoutArenasInput, OwnerProfileUncheckedCreateWithoutArenasInput>
  }

  export type OwnerProfileUpsertWithoutArenasInput = {
    update: XOR<OwnerProfileUpdateWithoutArenasInput, OwnerProfileUncheckedUpdateWithoutArenasInput>
    create: XOR<OwnerProfileCreateWithoutArenasInput, OwnerProfileUncheckedCreateWithoutArenasInput>
    where?: OwnerProfileWhereInput
  }

  export type OwnerProfileUpdateToOneWithWhereWithoutArenasInput = {
    where?: OwnerProfileWhereInput
    data: XOR<OwnerProfileUpdateWithoutArenasInput, OwnerProfileUncheckedUpdateWithoutArenasInput>
  }

  export type OwnerProfileUpdateWithoutArenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerProfileUncheckedUpdateWithoutArenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaCreateWithoutOwnerProfileInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArenaUncheckedCreateWithoutOwnerProfileInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArenaCreateOrConnectWithoutOwnerProfileInput = {
    where: ArenaWhereUniqueInput
    create: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput>
  }

  export type ArenaCreateManyOwnerProfileInputEnvelope = {
    data: ArenaCreateManyOwnerProfileInput | ArenaCreateManyOwnerProfileInput[]
    skipDuplicates?: boolean
  }

  export type ArenaUpsertWithWhereUniqueWithoutOwnerProfileInput = {
    where: ArenaWhereUniqueInput
    update: XOR<ArenaUpdateWithoutOwnerProfileInput, ArenaUncheckedUpdateWithoutOwnerProfileInput>
    create: XOR<ArenaCreateWithoutOwnerProfileInput, ArenaUncheckedCreateWithoutOwnerProfileInput>
  }

  export type ArenaUpdateWithWhereUniqueWithoutOwnerProfileInput = {
    where: ArenaWhereUniqueInput
    data: XOR<ArenaUpdateWithoutOwnerProfileInput, ArenaUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type ArenaUpdateManyWithWhereWithoutOwnerProfileInput = {
    where: ArenaScalarWhereInput
    data: XOR<ArenaUpdateManyMutationInput, ArenaUncheckedUpdateManyWithoutOwnerProfileInput>
  }

  export type ArenaScalarWhereInput = {
    AND?: ArenaScalarWhereInput | ArenaScalarWhereInput[]
    OR?: ArenaScalarWhereInput[]
    NOT?: ArenaScalarWhereInput | ArenaScalarWhereInput[]
    id?: StringFilter<"Arena"> | string
    name?: StringNullableFilter<"Arena"> | string | null
    location?: StringNullableFilter<"Arena"> | string | null
    sport?: StringNullableFilter<"Arena"> | string | null
    arenaDetails?: JsonNullableFilter<"Arena">
    ownerProfileId?: StringNullableFilter<"Arena"> | string | null
    createdAt?: DateTimeFilter<"Arena"> | Date | string
    updatedAt?: DateTimeFilter<"Arena"> | Date | string
  }

  export type ArenaCreateManyOwnerProfileInput = {
    id?: string
    name?: string | null
    location?: string | null
    sport?: string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArenaUpdateWithoutOwnerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaUncheckedUpdateWithoutOwnerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaUncheckedUpdateManyWithoutOwnerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: NullableStringFieldUpdateOperationsInput | string | null
    arenaDetails?: NullableJsonNullValueInput | InputJsonValue
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