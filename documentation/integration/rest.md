On the front-end, the `rest` package exposes a `Response` object allowing to type
the whole response, including `metadata` and `data` objects:
```ts
import axios from 'axios'

import { Event } from '@nunchistudio/helix/event'
import { Response } from '@nunchistudio/helix/integration/rest'

type Metadata = {
  event: Event
}

type Data = {
  // ...
}

await axios.get<Response<Metadata, Data>>('/anything')
```
