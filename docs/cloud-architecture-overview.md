# Cloud Architecture Overview

The TODO app runs as a React frontend and an Express API in this monorepo. The API reads and writes task data in an in-memory SQLite database; task data is lost when the backend process stops.

```mermaid
flowchart LR
    user([User])

    subgraph app[TODO App Monorepo]
        frontend[React Frontend<br/>packages/frontend]
        api[Express API<br/>packages/backend<br/>Port 3030]
        store[(In-memory SQLite<br/>Task data)]

        frontend <-->|HTTP JSON<br/>/api/tasks| api
        api <-->|SQL queries| store
    end

    user <-->|Uses the app| frontend
```

## Sequence: Creating a TODO

```mermaid
sequenceDiagram
    actor User
    participant Form as React TaskForm
    participant App as React App
    participant List as React TaskList
    participant API as Express API
    participant DB as In-memory SQLite

    User->>Form: Enter task details and submit
    Form->>Form: Validate required title
    Form->>App: onSave(task)
    App->>API: POST /api/tasks (JSON)
    API->>API: Validate title
    API->>DB: Insert task
    DB-->>API: New task row
    API-->>App: 201 Created (task JSON)
    App->>App: Increment refresh key
    App->>List: Remount task list
    List->>API: GET /api/tasks
    API->>DB: Select tasks
    DB-->>API: Task rows
    API-->>List: 200 OK (tasks JSON)
    List-->>User: Display new TODO
```