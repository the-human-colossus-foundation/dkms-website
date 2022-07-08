# Fundamental concepts

## CESR protocol

Use cases built upon DKMS infrastructure may require mass scale information dissemination. To achieve maximum performance and throughput, new type of protocol was designed to fulfill these goals. The underlying assumptions to consider are as following:
- compactness -- DKMS specific additions for information exchange, ie. attach event signature.
- streaming -- ability to exchange information continuously between participants
- framing -- ability to extract defined-size frames from stream for further processing.
- `text2binary` and `binary2text` concatenation composability -- there are many text or binary protocols, but actually none that is able to operate in both approaches. Text is more readable to humans and binary is cheaper to stream. Protocol switches from one approach to another on demand.

Therefore CESR protocol emerged that is capable to operate with existing and well established protocols like JSON, MessagePack or CBOR.

Any information exchanged over the network between any actors in DKMS is sent in the CESR format.

## Discoverability mechanism through OOBI's

Two independent participants of the DKMS infrastructure must have a way to be able to resolve their Identifeir KEL's. Thus we make an underlying assumption that within the network *"everyone knows something, and no one knows everything"*. In other words there is no central point, where any participant would go and query for any other participant KEL. Instead it is enough for given participant to either be in a direct relationship with another one or have a "business card" of the other one. These two approaches, albeit not sufficient at first glance, are exhaustive discovery mechanism for any member of the network. The latter approach is interesting in particular as it enables the *Out-of-Band-Introduction protocol* (OOBI). The Out-of-Band means any approach that is suitable for transfer information can be considered. The simplest form of an OOBI might look like the following:
```
("http://8.8.5.6:8080/oobi", "EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM")
```

Note this tuple (OOBI) describes where and how to find introduction for given network member, but at the same time does not contain any public key signature. OOBI's by definition are not trusted and it is up to the network participant to verify it, so to:
1. resolve what's inside OOBI and eventually repeat if there are nested OOBI's;
2. cryptographically verify any new member that has been discovere through OOBI;
3. verify the veracity of any new discovered member.

Thus OOBI's are merely semantics for Identifiers discoverability rather than full fledged verifiable information container.

Given network participant may become the holder of an OOBI in various ways, ie. by:
- resolving a well known URL,
- scanning QR code.

Recall the Out-Of-Band term. It can be anything that is resolvable by another network participant.

Network participants using OOBI's are always capable to discover another peer in the network. Thus the underlying assumptions for network members playing with OOBI's are as follow:

1. A network participant does not need to know an arbitrary DKMS identifier. In other words if participant **A** desires an information about participant **B**, **A** must have something that involves **B**. Then either **A** and **B** are already in relationship or **C** also exists that know both **A** and **B**. Therefore they are both able to resolve the other through shared connection **C**. **C** then provides information about **A** or **B** to **B** or **A**. Any centralised endpoint for discoverability is not needed as peers through their relationships are able to find required information.

2. A network participant **A** demanding an attestation of some claims from network participant **B**, must first establish a bidirectional relationship with **B**. A good practice is to apply OOBI's mechanism that provides sufficient information about **B**.

## Byzantine Fault Tolerance (BFT)
Byzantine Fault Tolerance is a key property in any distributed system. It determines how to design a system constituted of N nodes, where F nodes are faulty or dishonest. The problem initially introduced in this[B1] reference, is essential for the DKMS infrastructure.

A DKMS network essentially requires at least `N=2F+1` Witnesses, where `F` are faulty or dishonest. In addtion to Witnesses that may be exploited, the Controller itself can be faulty or dishonest. This case must be considerd evenso it is much more difficult to achieve this exploit. As a result, it can be demonstrated that the network requires `N=3F+1` Witnesses, where `F` are dishonest.
