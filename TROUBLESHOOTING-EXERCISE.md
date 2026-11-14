# Day 55 – Troubleshooting Exercise Log

The reading sheet asks you to deliberately break the nine situations one at a time,
record the exact error text, and then restore the working code.

Do this only on your exercise branch. Do not leave a deliberate fault in the final
submission. Exact messages vary by operating system, Node version, NestJS version,
and terminal, so record the message produced by your own machine.

| # | Deliberate fault | Expected symptom / investigation | Exact error text from my machine |
|---:|---|---|---|
| 1 | Remove `RestaurantsModule` from `AppModule` imports | `Cannot GET /api/restaurants`; inspect Nest startup route log | |
| 2 | Remove a required provider or module export | Nest dependency-resolution error at startup | |
| 3 | Return a Map or its iterator instead of `[...map.values()]` | Response is not a JSON array; a Map may serialize as `{}` | |
| 4 | Remove `ParseIntPipe` and compare a string ID to numeric IDs | Existing record may incorrectly appear missing | |
| 5 | Remove whitelist / forbid unknown-field validation | Unknown properties may be accepted or retained | |
| 6 | Remove global `ValidationPipe` registration | DTO decorators do not run for incoming requests | |
| 7 | Allow a domain error to escape without a translating filter | A missing resource may become a 500 response | |
| 8 | Start another server on port 3000 | `EADDRINUSE` port-in-use error | |
| 9 | Run a non-watch build/start workflow and expect live recompilation | Changes do not appear until rebuilding/restarting | |

## Safe procedure

1. Make one change only.
2. Save the file or restart the server as appropriate.
3. Reproduce the symptom.
4. Copy the exact terminal or HTTP response text into the last column.
5. Restore the original code before testing the next fault.
6. Run `npm run build` at the end.
