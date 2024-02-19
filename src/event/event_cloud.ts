/**
 * Cloud holds the details about the cloud provider from which the client is
 * executing the event.
 */
export interface Cloud {
  provider?: string
  service?: string
  region?: string
  project_id?: string
  account_id?: string
}
