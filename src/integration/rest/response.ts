import { Error } from '../../errorstack'

/**
 * Response is the JSON object every HTTP responses of an helix service shall
 * return.
 */
export interface Response<Metadata, Data> {

  /**
   * status is the official text of the HTTP status code, in English.
   *
   * Example:
   *
   * ```
   * "Accepted"
   * ```
   */
  status: string

  /**
   * error represents an error and its related failure validations. It will always
   * be null when the returned status code is a 2xx.
   */
  error?: Error

  /**
   * metadata represents metadata associated to the request/response.
   */
  metadata?: Metadata

  /**
   * data represents the data returned in the response. It will always be null
   * when the returned status code is a 4xx or 5xx.
   */
  data?: Data
}
