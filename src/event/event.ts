import { App } from './event_app'
import { Campaign } from './event_campaign'
import { Cloud } from './event_cloud'
import { Device } from './event_device'
import { Library } from './event_library'
import { Location } from './event_location'
import { Network } from './event_network'
import { OS } from './event_os'
import { Page } from './event_page'
import { Referrer } from './event_referrer'
import { Screen } from './event_screen'
import { Subscription } from './event_subscription'

/**
 * Event is a dictionary of information that provides useful context about an
 * event. An Event shall be present as much as possible when passing data across
 * services, allowing to better understand the origin of an event.
 *
 * helix integrations and services rely on Event to manage logs and traces across
 * services. It's up to the client on the front-end side to send an Event, when
 * applicable. This is mostly done in the Metadata of the Response object of the
 * REST router integration.
 *
 * Example:
 *
 * ```
 * interface MetadataWithEvent {
 *   event: Event
 * }
 *
 * Response<MetadataWithEvent, SomeData>
 * ```
 *
 * Event should be used for data that you’re okay with potentially exposing to
 * anyone who inspects your network traffic. This is because it’s stored in HTTP
 * headers for distributed tracing. If your relevant network traffic is entirely
 * within your own network, then this caveat may not apply.
 *
 * This is heavily inspired by the following references, and was adapted to better
 * fit this ecosystem:
 *
 * - The Segment's Context described at:
 *   https://segment.com/docs/connections/spec/common/#context
 * - The Elastic Common Schema described at:
 *   https://www.elastic.co/guide/en/ecs/current/ecs-field-reference.html
 */
export interface Event {
  id?: string
  name?: string
  meta?: Record<string, string>
  params?: Record<string, string[]>
  is_anonymous?: boolean
  user_id?: string
  group_id?: string
  tenant_id?: string
  ip?: string
  user_agent?: string
  locale?: string
  timezone?: string
  timestamp?: Date
  app?: App
  campaign?: Campaign
  cloud?: Cloud
  device?: Device
  library?: Library
  location?: Location
  network?: Network
  os?: OS
  page?: Page
  referrer?: Referrer
  screen?: Screen
  subscriptions?: Subscription[]
}
