---
home: true
title: DKMS
description:
heroImage: /logo.png
heroImageDark: /logo-col-rev.png
heroText: Decentralised Key Management System
tagline: 
actions:
  - text: Introduction
    link: /introduction.md
    type: primary
features:
  - title: Self-certifying identifiers
    details: Identifiers emerge as a result of conducting a derivation of the key pair public key, that is then injected into one way hash function.
  - title: Manageable identifiers
    details: Identifier digest is bound to the provenance log that establishes append only evidence of changes.
  - title: Pre-rotation mechanism
    details: Provenance log characteristics that cryptographically guarantees the ability to change the key pair to next one, declared on identifier inception.
  - title: Delegation mechanism
    details: Ability to create identifiers that are in parent-child relationship.
  - title: Multi signature mechanism
    details: Ability to expect minimum amount of digital signatures defined by treshold.
  - title: NIST compliance
    details: Only fundamental cryptographic primitives are used for one way hash functions and public key cryptography. No next-generation-crypto primitives are present, although it is perfectly fine to employ them.
  - title: Post Quantum resistance
    details: Even though modern public-private key pair generation functions are not resistant to Shor's algorithm, this is not a concern for an Identifier event log. Each declared rotation key in the event log passes through a one-way hash function. Since one-way hash functions are not easily reversible, even when using Quantum computers, reversing the private key from its public key digest is, in essence, no different from similar mechanisms used in non-quantum computers.
  - title: Cryptographic agility
    details: A safety measure to act prematurely, when given cryptographic algorithm becomes compromised.
  - title: Truly interoperable solution
    details: Identifiers of an individual are not bound to any particular system, platform, network, or technology. Instead, each individual decides where to anchor their event log.
footer: EUPL 1.2 Licensed | Copyright © 2018-present Human Colossus Foundation
---
