# Infrastructure

DKMS infrastructure is composed of two main components: Witnesses and Watchers. Both are available as Docker images:

- [ Witness ](https://ghcr.io/thclab/keriox-witness)
- [ Watcher ](https://ghcr.io/thclab/keriox-watcher)

For sample setup, see [this](https://github.com/THCLab/ambient-infrastructure/blob/main/docker-compose.yml).

The number of nodes in the network is use-case dependent, but it is vital to analyze the system's tolerance to Byzantine failures. In the presence of Byzantine failures, the network must tolerate up to 1/3 of the malicious nodes. For this to be achievable, the total number of nodes `N` must be at least three times the number of malicious nodes plus one. In other words, `N = 3f +1`, where `f` is the amount of malicious nodes.
