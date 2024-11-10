On the front-end, the `temporal` package exposes a `TemporalMetadata` object type.
This allows to type Temporal-related metadata scoped in the Temporal integration
and that can be exposed in a REST API.

Given a HTTP endpoint returning a HTTP reponse like this:
```go
type CustomResponseMetadata struct {
  Temporal *temporalrest.Metadata `json:"temporal,omitempty"`
}

metadata := CustomResponseMetadata{
  Temporal: temporalrest.GetMetadata(wr),
}

rest.WriteAccepted[CustomResponse](rw, req,
  rest.WithMetadataOnSuccess[CustomResponseMetadata](metadata),
)
```

The response can then be consumed on the front-end using:
```ts
import axios from 'axios'

import { Event } from '@nunchistudio/helix/event'
import { Response } from '@nunchistudio/helix/integration/rest'
import { TemporalMetadata } from '@nunchistudio/helix/integration/temporal'

type Metadata = {
  temporal: TemporalMetadata
}

await axios.put<Response<Metadata, null>>('/anything')
```
