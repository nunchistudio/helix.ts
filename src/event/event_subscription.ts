/**
 * Subscription holds the details about the account/customer from which the event
 * has been triggered. It's useful for tracking customer usages.
 */
export interface Subscription {
  id?: string
  tenant_id?: string
  customer_id?: string
  plan_id?: string
  usage?: string
  increment_by?: number
  flags?: Record<string, string>
}
