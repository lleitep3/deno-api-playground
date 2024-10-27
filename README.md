# DENO API PLAYGROUND

Just exploring some technologies

---

## Requirements to run locally

- Need to have [deno installed](https://docs.deno.com/runtime/getting_started/installation/).
- Need to have [docker installed](https://docs.docker.com/engine/install/)

---

## Stack

- [Deno](https://deno.land/)
- [pinojs](https://github.com/pinojs/pino)
- [express](https://expressjs.com/)
- [Docker](https://www.docker.com/)

---

## Running

Running dev local

```shell
deno run dev
```

Building and running docker

```shell
# building
docker build -f dockerfiles/api.dockerfile -t api-deno-image .

# running
docker run --rm -p 8000:8000 api-deno-image
```
