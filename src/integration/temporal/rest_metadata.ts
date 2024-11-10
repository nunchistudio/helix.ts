/**
 * TemporalMetadata holds public details about Temporal that shall be used in the
 * "metadata" object of the HTTP response of a REST API.
 */
export type TemporalMetadata = {
  workflow: {
    id: string
    run: {
      id: string
    }
  }
}
