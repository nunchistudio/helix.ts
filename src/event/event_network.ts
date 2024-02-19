/**
 * Network holds the details about the user's network.
 */
export interface Network {
  bluetooth?: boolean
  cellular?: boolean
  wifi?: boolean
  carrier?: string
}
