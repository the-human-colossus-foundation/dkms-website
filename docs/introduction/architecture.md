---
title: DKMS Architecture
description: Architecture of DKMS and it's components
---

# Architecture

DKMS is designed to streamline complex technological processes, functioning as
a seamless "magic box" for all users. By abstracting the difficulty of key
management, DKMS allows entities to concentrate on their specific applications
and use cases rather than the underlying security mechanisms. It effectively
tackles the challenging issues of discoverability and information propagation
about the key state of the identifier, transactions, and more within any given
ecosystem. This architecture not only simplifies integration but also enhances
the efficiency and reliability of digital interactions across diverse platforms
and networks. With DKMS, users gain access to a robust framework that supports
secure communications and data management without the need for deep technical
knowledge.

On a very high level DKMS consists of two major components:

- **Propagation Infrastructure**: allows entities to propagate
  their key state into the network and is designated by the controller himself.
- **Duplicity Infrastructure**: provides a mechanism for duplicity detection which
  is designated by the governance of the ecosystem.

::: tip IMPORTANT
Governance of duplicity infrastructure and propagation infrastructure should be
split as it is crucial for the security of the whole ecosystem!
:::

![DKMS Architecture](/dkms-arch-1.svg)

Looking deeper into the components we can see internal responsibility of each
component and how they propagate through ecosystem.

![DKMS Architecture](/dkms-arch-2.svg)

DKMS simplifies the integration process by providing a user-friendly interface
that can be effortlessly incorporated into specific use cases.

Leveraging **Propagation infrastructure** application can use its API to
propagate key states to the network, at the same time witnessing the intention of
the controller and protecting him from external exploitation of its identifier.

Using an **Duplicity Infrastructure** application can monitor other identifiers to
ensure uniqueness and prevent duplicity within the system. These capabilities
ensure that even the smallest ecosystem can seamlessly integrate and operate
within larger frameworks, reflecting a fractal architecture. This design allows
DKMS to efficiently span across different governance and jurisdictional
boundaries, facilitating broad scalability and adaptability. By abstracting
complex key management tasks, DKMS enables entities to focus on leveraging its
robust features for enhanced security and operational efficiency in their
digital environments.
