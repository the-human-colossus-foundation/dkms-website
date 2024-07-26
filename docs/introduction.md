---
title: DKMS Introduction
description: Decentralized Key Management Syste
---

# Decentralised Key Management System

Key management is crucial in safeguarding digital information and dealing with
how cryptographic keys—essentials for securing data—are created, exchanged,
stored, and eventually retired. It's about setting up and managing the systems
that handle these keys, from their technical design to how users interact with
them.

Our Decentralized Key Management System (DKMS) offers all the necessary
components to build any authentication system tailored to meet diverse security
needs. At the heart of DKMS is our commitment to decentralized authentication.
This means our system provides unique, self-certifying identifiers generated
through secure, one-way cryptographic processes that ensure each piece of data
is distinct and secure. Designed to work across different platforms and
networks, DKMS ensures that identifiers are universal, making it easier and
more secure for users everywhere.

## What is “Decentralised authentication”?

Data provenance refers to tracing and recording the origin of data and its
movement between locations. If digital data is tamper-proof (i.e. provable to
have not been corrupted after its creation), it can be assumed authentic. Data
authentication focuses on timestamping data inputs at index time, determining
each event as factual. That definition also underpins the concept of
decentralised authentication, the only difference being that the decentralised
version is specific to distributed data ecosystems.

## Comparing with ...

In the landscape of digital security, key management systems can broadly be
categorized into three types: centralized, federated, and decentralized like
our DKMS. Each type offers unique advantages and caters to different security
needs.

- Centralized Key Management Systems operate under a single authority that
  manages all cryptographic keys. This central control simplifies management
  but also creates a single point of failure. If the central system is
  compromised, so too are all the keys it manages. This model often struggles
  with scalability and can become a bottleneck as the system grows.

- Federated Key Management Systems spread control among multiple, cooperating
  entities. While this reduces the risk of a single point of failure compared
  to centralized systems, it still relies on the trust and cooperation between
  these entities. The federated approach can be more flexible and scalable than
  centralized systems but often involves complex trust relationships and
  coordination challenges.

- Decentralized Key Management Systems (DKMS), such as ours, distribute the
  management of keys directly to the owners, eliminating single points of
  failure and reducing reliance on any one entity. This enhances security and
  resilience, as the compromise of one part does not jeopardize the entire
  system. DKMS offers the basis to build truly interoperable solutions, with
  mechanisms that ensure data integrity and authentication across various
  platforms/networks without needing centralized oversight.

By leveraging a decentralized approach, DKMS enables a more secure, scalable,
and resilient authentication system, making it an ideal choice for environments
demanding stringent data security and privacy without compromising on
accessibility and interoperability.

## How DKMS works?

DKMS utilizes decentralized authentication, a key management approach that
cryptographically binds an identifier to an associated log. This log records
the history of all uses or changes to the public/private key pair, ensuring the
verifiable provenance of the identifier throughout any ambient infrastructure.
The immutable ordering of entries guarantees the factual authenticity of each
recorded event, underpinning the integrity of systematic data inputs.
Additionally, all system identifiers are designed to be network-agnostic,
facilitating seamless interoperability within and across various distributed
data ecosystems.

Moreover, DKMS is built on the principle of end-verifiability, meaning that
every element can be independently verified by the user to confirm its
authenticity and integrity. This characteristic often manifests through the
philosophy of "never trust, always verify," which is the foundational ideology
of the zero-trust architecture.

Decentralised authentication provides a powerful solution for identifier
interoperability, data provenance, data-intensive event streaming, and
event-sourcing applications.

## What technology is behind DKMS?

At the heart of DKMS is the Key Event Receipt Infrastructure
([KERI](https://keri.one/)), a protocol designed for decentralized key
management without reliance on any network. KERI provides a highly secure
framework by maintaining a self-certifying history of all cryptographic
operations related to key events, such as creation, rotation, and revocation.
This history is immutable and can be independently verified, ensuring the
integrity and provenance of the cryptographic keys throughout their lifecycle.

KERI operates by generating event logs that are uniquely tied to each
identifier, creating a verifiable trail of all actions taken with the
associated keys. This system ensures that even if a key is compromised, the
history and the specific compromised state can be identified and addressed
without undermining the entire infrastructure. Thanks to KERI, DKMS supports
robust, network-agnostic identifier interoperability across diverse data
ecosystems.
