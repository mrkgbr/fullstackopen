```mermaid

sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note right of browser: Status: 201 Created
activate server
server-->>browser: expands the list with the new item
deactivate server

```
