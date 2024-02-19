/**
 * Error follows the helix errorstack package convention for handling errors in
 * the ecosystem. In addition, it implements a readonly "name" key to respect
 * the TypeScript Error type.
 *
 * Every errors in helix follow this format.
 */
export interface Error {
  readonly name: string

  /**
   * message is the top-level message of the error.
   */
  readonly message: string

  /**
   * validations represents a list of failure validations related to the error
   * itself. This allows to pass/retrieve additional details, such as validation
   * failures encountered in the request payload.
   */
  validations?: Validation[]
}

/**
 * Validation holds some details about a validation failure.
 */
export interface Validation {

  /**
   * message is the cause of the validation failure.
   */
  message: string

  /**
   * path represents the path to the key where the validation failure occurred.
   *
   * Example:
   *
   * ```
   * ["request", "body", "user", "email"]
   * ```
   */
  path?: string[]
}
