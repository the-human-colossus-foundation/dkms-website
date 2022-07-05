---
home: true
title: Overlays Capture Architecture
description: Official OCA website
heroImage: /logo.png
heroImageDark: /logo-col-rev.png
heroText: Decentralised Key Management System
tagline: 
actions:
  - text: Get Started
    link: /guide/getting-started.md
    type: primary
features:
  - title: Self-certifying identifiers
    details: Identifiers emerge as a result of creating a derivation of the key pair public key. They are then cryptographically bound to the public key.
  - title: Decentralised control
    details: Identifiers are under the sole control of an individual Controller, derived from their public-private key pair.
  - title: Post Quantum resistance
    details: Even though modern public-private key pair generation functions are not resistant to Shor's algorithm, this is not a concern for an Identifier event log. Each declared rotation key in the event log passes through a one-way hash function. Since one-way hash functions are not easily reversible, even when using Quantum computers, reversing the private key from its public key digest is, in essence, no different from similar mechanisms used in non-quantum computers.
  - title: Truly interoperable solution
    details: Identifiers of an individual are not bound to any particular system, platform, network, or technology. Instead, each individual decides where to anchor their event log.
  - title: Pre-rotation mechanism
    details: 
  - title: Delegation mechanism
    details: Support for flexible credential presentation, in secure and controled way
  - title: Multi signature mechanism
    details: 
footer: EUPL 1.2 Licensed | Copyright © 2018-present Human Colossus Foundation
---
