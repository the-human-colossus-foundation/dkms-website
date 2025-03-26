# Infrastructure

DKMS infrastructure is composed of two main components: Witnesses and Watchers. Both are available as Docker images:

- [ Witness ](https://ghcr.io/thclab/keriox-witness)
- [ Watcher ](https://ghcr.io/thclab/keriox-watcher)

For sample setup, see [this](https://github.com/THCLab/dkms-demo/blob/main/infrastructure/docker-compose.yml).
and for more information see [setup](#setup) section.

## Argo

Argo is a sandbox which allows you to test right away the DKMS infrastructure without need to setup anything.
Checkout our public [dashboard](http://dashboard.argo.colossi.network/public-dashboards/2bdeda88c701459e8ec25802f79b7da2) to see the current state of the network.

<iframe src="http://dashboard.argo.colossi.network/public-dashboards/2bdeda88c701459e8ec25802f79b7da2" width="100%" height="600" frameborder="0"></iframe>


## Setup

If you would like to run your own DKMS network, follow the instructions below.

### Design your network

Decide how many nodes you want to have in the network. The number of nodes in
the network is use-case dependent, but it is vital to analyze the system's
tolerance to Byzantine failures. In the presence of Byzantine failures, the
network must tolerate up to 1/3 of the malicious nodes. For this to be
achievable, the total number of nodes `N` must be at least three times the
number of malicious nodes plus one. In other words, `N = 3f +1`, where `f` is
the amount of malicious nodes. This applies both to the desimination
infrastructure (witnesses) and duplicity detection (watchers).

::: tip
Pay attention to the governance model of the network. Witnesses and watchers
should never be controlled by the same entity. The governance model should be
designed in a way that no single entity can control the network.

Assuming entity `A` provides witnesses to `Contollers` same entity `A` should
never provide watcher functionality to observe those controllers.
:::

### Deploy witnesses

Witnesses play a crucial role in the DKMS infrastructure. They are responsible
for disseminating information across the network. In addition witnesses produce
reciepts for the controllers as a form of confirmation that he has seen the
latest KEL.

Witness is available as a Docker image. Which can be eailsy deploy, below example using docker compose:

```yaml
services:
  witness: &witness
    container_name: keriox-witness
    image: "ghcr.io/thclab/keriox-witness:latest"
    restart: always
    networks:
      - dkms-network


  witness1:
    container_name: keriox-witness1
    <<: *witness
    ports:
      - "3232:3232"
    volumes:
      - type: bind
        source: ./config/witness1.yml
        target: /app/witness.yml
      - witness1_db_data:/app/db
```

::: warning

Never use latest tag for docker image for production systems. Always use specific version. See [Release page](https://github.com/THCLab/keriox/releases)

:::

#### Configuration

To run witness you need to provide a configuration file. Below is an example of it with explanation of each field:

```yaml
db_path: "db/" # path to the database where witness would store KEL's
http_port: 3232 # port on which witness will listen for incoming connections
public_url: "http://172.17.0.1:3232/" # public URL of the witness
seed: "<YOUR_SEED_GOES_HERE" # seed of the witness to generate private key, keep this secret!
escrow_config: # Configuration for the escrow system, which acts as a buffer for processing events from KELs
  default_timeout: 60 # Time (in seconds) before an event is discarded after the last processing attempt. Event is processed only when new event comes.

```

##### Generate seed

The seed is necessary to generate the private key for the witness. By definition
witness operate with empheral keys means they cannot be rotated. If the key is
compromised, the witness should be replaced with a new one. To generate the seed
you can use [dkms-cli](https://github.com/THCLab/dkms-bin/releases) tool:

<Asciinema castId="xM1MiAzgCsYAWoeHxhEEm3bt8" />

The seed should be set in the configuration file. Keep it secret!

#### Run witness

Simply run docker contaienrs with `docker-compose up -d` command.

After the witness is running you can check the logs with `docker logs keriox-witness` command. And you should see something like this:

```shell
keriox-witness1  | Witness BJq7UABlttINuWJh1Xl2lkqZG4NTdUdqnbFJDa6ZyxCC is listening on port 3232
keriox-witness1  | Witness's oobi: {"eid":"BJq7UABlttINuWJh1Xl2lkqZG4NTdUdqnbFJDa6ZyxCC","scheme":"http","url":"http://localhost:3232/"}
```

### Deploy watchers

Watchers are responsible for detecting duplicity in the network. They are also available as a Docker image. Below is an example of how to deploy them:

```yaml
watcher:
  container_name: keriox-watcher
  image: "ghcr.io/thclab/keriox-watcher:latest"
  restart: always
  depends_on:
    - witness
  ports:
    - "3235:3235"
  volumes:
    - type: bind
      source: ./config/watcher.yml
      target: /app/watcher.yml
    - watcher_db_data:/app/db/
  networks:
    - dkms-network
```

#### Configuration

To run watcher you need to provide a configuration file. Below is an example of it with explanation of each field:

```yaml
db_path: "db/" # path to the database where watcher would store KEL's
tel_storage_path: "db/tel_storage" # path to the database where watcher would store TEL's
public_url: "http://172.17.0.1:3235" # public url of the watcher
seed: "<HERE_GOES_SEEF_OF_THE_WATCHER" # seed of the watcher to generate private key, keep this secret!
http_port: 3235 # port on which watcher will listen for incoming connections
escrow_config: # Configuration for the escrow system, which acts as a buffer for processing events from KELs
  default_timeout: 60 # Time (in seconds) before an event is discarded after the last processing attempt. Event is processed only when new event comes.
```

#### Generate seed

To generate seed see the [Generate seed](#generate-seed) section in the witness configuration.

#### Run watcher

Simply run docker contaienrs with `docker-compose up -d` command.

After the watcher is running you can check the logs with `docker logs keriox-watcher` command. And you should see something like this:

```shell
keriox-watcher  | Using config file: "./watcher.yml"
keriox-watcher  | Using environment prefix: "WATCHER_"
keriox-watcher  | Watcher BF2t2NPc1bwptY1hYV0YCib1JjQ11k9jtuaZemecPF5b is listening on port 3236
keriox-watcher  | Watcher's oobi: {"eid":"BF2t2NPc1bwptY1hYV0YCib1JjQ11k9jtuaZemecPF5b","scheme":"http","url":"http://localhost:3236/"}

```

## Next Steps

After you have deployed witnesses and watchers, you can start using the [DKMS-CLI](https://github.com/THCLab/dkms-bin/releases) to start interacting with them. See the [CLI documentation](/developer-guide/client) for more information.
