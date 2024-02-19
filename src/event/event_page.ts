/**
 * Page holds the details about the webpage from which the event is triggered from.
 */
export interface Page {
  path?: string
  referrer?: string
  search?: string
  title?: string
  url?: string
}
