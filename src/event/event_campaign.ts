/**
 * Campaign holds the details about the marketing campaign from which a client is
 * executing the event from.
 */
export interface Campaign {
  name?: string
  source?: string
  medium?: string
  term?: string
  content?: string
}
